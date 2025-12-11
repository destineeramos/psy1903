#### summarize_behavior.R -------------------------------------------------------
## Purpose: Take one participant’s IAT task trials and return a one-row summary
##          of behavioral performance
##
## Inputs:
##   - data: A data frame of only IAT task trials for one participant.
##   - rt_min, rt_max: Bounds for valid RTs (default 300–900 ms).
## Output:
##   - A one-row participant summary with five behavioral metrics.
##
## Example input:
##   summarize_behavior(task_df)


summarize_behavior <- function(data, rt_min = 300, rt_max = 900) {
  
  ## Check if rt column is numeric 
  if (!is.numeric(data$rt)) {
    data$rt <- as.numeric(data$rt)
  }
  
  # if (!is.numeric(data$rt)) data$rt <- as.numeric(data$rt)	
  # 
  
  ## Change correct column to logical
  ## Create robust version of as.logical()
  normalize_logical <- function(x) {
    if (is.logical(x)) return(x)
    if (is.numeric(x)) return(x == 1)
    if (is.character(x)) return(toupper(x) == "TRUE")
    as.logical(x)
  }
  
  if (!is.logical(data$correct)) { 
    data$correct <- normalize_logical(data$correct)
   }
  
  
  ## Filter out trials where RT was outside of the threshold range
  
  ## I decided to get rid of the matrices in this code and index using subset() instead
  ## I did this because using matrices [ ,3] with this big of a data set can be dangerous, 
  ## especially since things could change their location and then, it would all be off. So, 
  ## it is better to index using variable names. 
  
  ##OLD 
  # valid_data_rt <- data[data[ , 3] >= 300 & data[ , 3] <= 900 & data[ , 12] == TRUE, ]
  # valid_data_acc <- data[data[ , 3] >= 300 & data[ , 3] <= 900, ]
  # 
  
  ##NEW
  valid_data_rt <- subset(data, rt >= 300 & rt <= 900 & correct == TRUE)
  valid_data_acc <- subset(data, rt >= 300 & rt <= 900)
  
  
  
  ## Center each participant’s reaction times:
  ## subtract the participant’s mean RT so centered RTs average to zero
  
  ## I decided to replace the for loop with the vectorized version because
  ##in this case, a for loop isn't necessary because R automatically 
  ## applies it to all rows. This makes it shorter and simpler in one easy line. 

 ##OLD VERSION  
    # valid_data_rt$rt_centered <- NA_real_
  # for (i in 1:nrow(valid_data_rt)) {
  #   valid_data_rt$rt_centered[i] <- valid_data_rt$rt[i] - mean(valid_data_rt$rt, na.rm = TRUE)
  # }
##NEW VERSION
  valid_data_rt$rt_centered <- valid_data_rt$rt - mean(valid_data_rt$rt, na.rm = TRUE)
  
  
  
  
  ## Prepare test trials by excluding practice trials
  ## Keep only trials where expectedCategory is:
  ## "school or anxiety" OR "nature or serenity" (congruent)
  ## "school or serenity" OR "nature or anxiety" (incongruent)
  test_data_rt <- valid_data_rt[grepl(" or ", valid_data_rt$expectedCategory), , drop = FALSE]
  test_data_acc <- valid_data_acc[grepl(" or ", valid_data_acc$expectedCategory), , drop = FALSE]
  
    
  ## Group trials by the category displayed
  desired_order <- c(
    "nature or serenity or school or anxiety",
    "nature or anxiety or school or serenity"
  )
  grp_rt <- factor(
    test_data_rt$expectedCategoryAsDisplayed,
    levels = desired_order
  )
  
  grp_acc <- factor(
    test_data_acc$expectedCategoryAsDisplayed,
    levels = desired_order
  )
  
  ## Calculate mean rt
  means <- tapply(test_data_rt$rt, grp_rt, FUN = mean)
  ## If you see “arguments must have same length” from tapply(), check whether the grouping variable (grp) has the same number of rows as test_data$rt. Inspect grp and test_data side by side:
# length(test_data_rt$rt)
# length(grp_rt)
# names(test_data_rt)

  ## A mismatched or misspelled column name in the factor() call will usually cause this.
  
  ## Calculate mean accuracy
  accuracy <- tapply(test_data_acc$correct, grp_acc, FUN = mean)
  
  ## Calculate D Score
  d_score  <- calculate_iat_dscore(test_data_rt)
  
  ## Create one-row summary data frame
  participant_summary <- data.frame(
    congruent_mean       = means[1],
    incongruent_mean     = means[2],
    congruent_accuracy   = accuracy[1],
    incongruent_accuracy = accuracy[2],
    d_score              = d_score, 
    stringsAsFactors     = FALSE,
    row.names            = NULL
  )
  
  ## Ensure Accuracy Values are between 0 and 1
  acc_cols <- c("congruent_accuracy", "incongruent_accuracy")
  for (col in acc_cols) {
    val <- participant_summary[[col]]
    if (!is.na(val) && (val < 0 || val > 1)) {
      warning(paste(col, "is outside [0, 1]. Check 'correct' coding."))
    }
  }
  ## Ensure Mean RTs within [rt_min, rt_max]
  rt_cols <- c("congruent_mean", "incongruent_mean")
  for (col in rt_cols) {
    val <- participant_summary[[col]]
    if (!is.na(val) && (val < rt_min || val > rt_max)) {
      warning(paste(col, "is outside range [", rt_min, ", ", rt_max, "]."))
    }
  }
  
  return(participant_summary)
}

