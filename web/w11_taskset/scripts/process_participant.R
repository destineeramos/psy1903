process_participant <- function(file_path) {
  subject_id <- sub("\\.csv$", "", basename(file_path))
  ## Read the raw CSV
  participant_data <- read.csv(
    here::here(file_path),
    stringsAsFactors = FALSE
  )

  ## RTs
  participant_data <- compute_rt_if_missing(participant_data)

  ## 4. Behavior summaries
  behavior <- summarize_behavior(participant_data, rt_min = 300, rt_max = 900)

  ## 5. Score questionnaire
  json_string <- participant_data$response[participant_data$trialType == "es_questionnaire"]
  json_string <- json_string[1] ##Why do I need this
  esq_sum <- score_questionnaire(json_string)

  ## Single-row participant summary
  df_clean <- data.frame(
    subject_id = subject_id,
    mean_accuracy = behavior$mean_accuracy,
    mean_rt_correct = behavior$mean_rt_correct,
    esq_sum = esq_sum
  )
  ##Inspect
  str(df_clean)
  head(df_clean)
  names(df_clean)

  #### Save participant summary ------------------------------------------------
  ## Ensure output directory is created
  dir.create(
    here::here("data", "cleaned" ),
    recursive = TRUE,
    showWarnings = FALSE
  )

  ## Save summary CSV to cleaned
  write.csv(
    df_clean,
    here::here("data", "cleaned", paste0(subject_id, "_processed.csv")),
    row.names = FALSE
  )

  #### Return output -----------------------------------------------------------
  stopifnot(nrow(df_clean) == 1)  # one row per participant
  return(df_clean)
}

# df_clean <- process_participant("data/raw/est-experiment-2025-11-05-09-04-45.csv")

read.csv(here::here("data", "cleaned", "est-experiment-2025-11-05-09-04-45_processed.csv"))
