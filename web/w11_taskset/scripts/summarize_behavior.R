
summarize_behavior <- function(data, rt_min = 300, rt_max = 900) {
  data$correct <- as.logical(data$correct)
  if (!is.numeric(data$rt)) data$rt <- as.numeric(data$rt)	
  mean_accuracy <- mean(data$correct == TRUE, na.rm = TRUE)
  mean_rt_correct <- mean(data$rt[data$correct == TRUE & data$rt >= rt_min & data$rt <= rt_max],na.rm = TRUE)
  
  behavior <- data.frame(
    mean_rt_correct   = mean_rt_correct,
    mean_accuracy = mean_accuracy
  )
  
  return(behavior)
  
  }


# summarize_behavior(participant_data, rt_min = 300, rt_max = 900)
