#### import_and_process ---------------------------------------------------------
## Purpose: Read one participant’s raw CSV, extract questionnaire and task data,
##          compute behavioral metrics (means, accuracy, D score) and the 
##          questionnaire score, and return a one-row cleaned summary.
##
## Inputs:
##   - file_name: A single CSV filename from data/raw (e.g., "sub-001_P1P2.csv")
## Output:
##   - A one-row data frame with participant-level summary variables.
##
## Example call:
##   import_and_process("sub-001_P2P1_CONGfirst.csv")

import_and_process <- function(file_name) {
  #### Read participant CSV ----------------------------------------------------
  # subject_id <- sub("\\.csv$", "", basename(file_name))
  # 
   df <- read.csv(
    file_name, 
    check.names = FALSE, 
    stringsAsFactors = FALSE
  )
   
   # df <- read.csv(
   #   here::here(file_name), 
   #   check.names = FALSE, 
   #   stringsAsFactors = FALSE
   # )

  ## If you see an error "cannot open the connection", it usually means that R cannot find something where it's looking. Check your paths, files, and file_name. Remember where file_name comes from.
  
  #### Check expected columns ----------------------------
  ## If this fails, write code using if(), %in%, and names() to rename any 
  ## mismatched column names reproducibly every time you render from the raw data
  
  required_cols <- c("trialType", "block", "rt", "response", "trial_index",
  "time_elapsed", "word", "expectedCategory",
  "expectedCategoryAsDisplayed", "leftCategory", "rightCategory",
  "correct", "question_order")
  
  if ("trial_type" %in% names(df) && !"trialType" %in% names(df)) {
    names(df)[names(df) == "trial_type"] <- "trialType"
  }

  if ("expectedCategoryDisplayed" %in% names(df)) {
    names(df)[names(df) == "expectedCategoryDisplayed"] <- "expectedCategoryAsDisplayed"
  }
  
  # Don't refactor to ifelse() - later when doing the AI comparison, you can ask why
  if (!all(required_cols %in% names(df))) {
    stop(
      paste(
        "Input data frame missing required columns in",
        sub("\\.csv$", "", basename(file_name)),
        "\nExpected:",
        paste(required_cols, collapse = ", "),
        "\nFound:",
        paste(names(df), collapse = ", ")
      )
    )
  }

  
  #### Extract subject_id from file name ---------------------------------------
  id <- regmatches(file_name, regexpr("sub-[0-9]{3}", file_name))
  subject_id <- ifelse(length(id) == 1, id, NA_character_)
  rm(id)
  if (is.na(subject_id)) {
    warning("Filename does not contain a valid 'sub-###' pattern: ", file_name)
  }
  
  #### Subset questionnaire vs. task -------------------------------------------
  task_df <- df[df$trialType == "iat", , drop = FALSE]
  ##data <- task_df
  questionnaire_df <- df[df$trialType == "Questionnaire", , drop = FALSE]
  if (nrow(questionnaire_df) != 1) {
    warning("Empty 'questionnaire_df' where data expected. In future steps, 'score_questionnaire' will not run correctly.")
  }
  
  #### Calculate Behavior & Questionnaire Scores -------------------------------
  behavior <- summarize_behavior(task_df)
  anxiety_score <- score_questionnaire(questionnaire_df$response)
  # 
  
  # json_string <- participant_data$response[participant_data$trialType == "es_questionnaire"]
  # json_string <- json_string[1] ##Why do I need this
  # esq_sum <- score_questionnaire(json_string)
  # length(questionnaire_df$response)
  # score_questionnaire
  # str(questionnaire_df)
  
  #### Save participant summary ------------------------------------------------
  ## Ensure output directory is created
  dir.create(
    here::here("data", "cleaned", "participants"),
    recursive = TRUE,
    showWarnings = FALSE
  )
  
  ## Combine into a single-row participant summary
  df_clean <- data.frame(
    subject_id = subject_id,
    anxiety_score = anxiety_score,
    congruent_mean = behavior["congruent_mean"],
    incongruent_mean = behavior["incongruent_mean"],
    congruent_accuracy = behavior["congruent_accuracy"],
    incongruent_accuracy = behavior["incongruent_accuracy"],
    d_score = behavior["d_score"],
    row.names = NULL
  )
  
  
  ## Save summary CSV to cleaned/participants
  write.csv(
    df_clean,
    here::here("data", "cleaned", "participants", paste0(subject_id, "_cleaned.csv")),
    row.names = FALSE
  )
  
  #### Return output -----------------------------------------------------------
  stopifnot(nrow(df_clean) == 1)  # one row per participant
  return(df_clean)
}

