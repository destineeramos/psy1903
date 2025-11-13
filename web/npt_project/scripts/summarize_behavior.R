### Score Behavioral Data ------------------------------------

summarize_behavior <- function(df, rt_min = 250, rt_max = 900) {
  
  if (!all(c("block", "trialType", "trial_type", "rt", "correct") %in% names(df))) {
    warning("Some expected columns are missing. Check your CSV.")
  }
    ##Change correct column to logical 
  df$correct <- as.logical(df$correct)
  
  if (!is.numeric(df$rt)) df$rt <- as.numeric(df$rt)	
  
  ## Separate data into block and trial types
  practice_filtered  <- df[df$block == "practice", ]
  magnitude_filtered <- df[df$block == "experiment" & df$trial_type == "magnitude", ]
  parity_filtered    <- df[df$block == "experiment" & df$trial_type == "parity", ]
  
  ## Filter out unreasonable reaction times (keep 250–900 ms)
  practice_filtered  <- practice_filtered[practice_filtered$rt  >= rt_min & 
                                            practice_filtered$rt  <= rt_max, ]
  magnitude_filtered <- magnitude_filtered[magnitude_filtered$rt >= rt_min & 
                                             magnitude_filtered$rt <= rt_max, ]
  parity_filtered    <- parity_filtered[parity_filtered$rt    >= rt_min & 
                                          parity_filtered$rt    <= rt_max, ]
  
  ## Calculate mean reaction time and accuracy for each trial type
  practice_mean_rt  <- mean(practice_filtered$rt, na.rm = TRUE)
  practice_acc      <- mean(practice_filtered$correct, na.rm = TRUE)
  magnitude_mean_rt <- mean(magnitude_filtered$rt, na.rm = TRUE)
  magnitude_acc     <- mean(magnitude_filtered$correct, na.rm = TRUE)
  parity_mean_rt    <- mean(parity_filtered$rt, na.rm = TRUE)
  parity_acc        <- mean(parity_filtered$correct, na.rm = TRUE)
  
  ## Calculate standard deviation of reaction times for each trial type
  practice_sd_rt  <- sd(practice_filtered$rt, na.rm = TRUE)
  magnitude_sd_rt <- sd(magnitude_filtered$rt, na.rm = TRUE)
  parity_sd_rt    <- sd(parity_filtered$rt, na.rm = TRUE)
  
  ## Participant Summary  
  
  participant_summary <- data.frame(
    practice_mean_rt   = practice_mean_rt,
    practice_acc       = practice_acc,
    magnitude_mean_rt  = magnitude_mean_rt,
    magnitude_acc      = magnitude_acc,
    parity_mean_rt     = parity_mean_rt,
    parity_acc         = parity_acc,
    practice_sd_rt     = practice_sd_rt,
    magnitude_sd_rt    = magnitude_sd_rt,
    parity_sd_rt       = parity_sd_rt,
    stringsAsFactors   = FALSE
  )
  
  # Check that accuracy is between 0 and 1
  acc_cols <- c("practice_acc", "magnitude_acc", "parity_acc")
  for (col in acc_cols) {
    val <- participant_summary[[col]]
    if (!is.na(val) && (val < 0 || val > 1)) {
      warning(paste(col, "is outside the range [0, 1]. Check 'correct' coding."))
    }
  }
  
  # Check that mean RTs are within the expected range
  rt_cols <- c("practice_mean_rt", "magnitude_mean_rt", "parity_mean_rt")
  for (col in rt_cols) {
    val <- participant_summary[[col]]
    if (!is.na(val) && (val < rt_min || val > rt_max)) {
      warning(paste(col, "is outside the expected range [", rt_min, ",", rt_max, "]."))
    }
  }
  
  return(participant_summary)
}
