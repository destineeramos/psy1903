
summarize_behavior <- function(data, rt_min = 300, rt_max = 900) {
  data$correct <- as.logical(data$correct)
  if (!is.numeric(data$rt)) data$rt <- as.numeric(data$rt)	
  mean_accuracy <- mean(data$correct == TRUE, na.rm = TRUE)
  mean_rt_correct <- mean(data$rt[data$correct == TRUE & data$rt >= rt_min & data$rt <= rt_max],na.rm = TRUE)
  mean_positive_rt <- mean(data$rt[data$condition == "positive"],  na.rm = TRUE) 
  mean_negative_rt <- mean(data$rt[data$condition == "negative"],  na.rm = TRUE) 
  mean_neutral_rt <- mean(data$rt[data$condition == "neutral"],  na.rm = TRUE) 
  
  behavior <- data.frame(
    mean_rt_correct   = mean_rt_correct,
    mean_accuracy = mean_accuracy, 
    mean_positive_rt = mean_positive_rt, 
    mean_negative_rt = mean_negative_rt,
    mean_neutral_rt = mean_neutral_rt
  )
  
  return(behavior)
  
  }


# summarize_behavior(participant_data, rt_min = 300, rt_max = 900)
