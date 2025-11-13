score_questionnaire <- function(json_string, 
                                  reverse =  c(2, 5, 9), 
                                  scale_min = 0L, 
                                  scale_max = 4L) {
    
    # If the JSON string is missing or empty, return a numeric NA
    if (is.null(json_string) || is.na(json_string) || !nzchar(json_string)) {
      return(NA_real_)
    }
    # Parsing + flattening to numeric 'responses'
    responses <- as.numeric(unlist(fromJSON(json_string)))
    
    # If reverse is provided, it must reference valid item positions
    if (length(reverse) > 0) {
      if (any(reverse < 1 | reverse > length(responses))) {
        stop("One or more 'reverse' item indices are out of range for this questionnaire response.")
      }
    }
    
    ## Reverse-score the specified items
    if (length(reverse) > 0) {
      responses[reverse] <- (scale_max - scale_min) - responses[reverse]
    }
    ## Compute the sum score
    sum_score <- sum(responses, na.rm = TRUE)
    return(sum_score)
  }
  
# score_questionnaire(participant_data[participant_data$trialType == "es_questionnaire", "response"])
  
