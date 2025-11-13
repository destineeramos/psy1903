# 
# compute_rt_if_missing <- function(data) {
#   for (i in 1:nrow(data)) {
#     if (is.na(data[i, "rt"]) &&
#         !is.na(data[i, "stim_onset_ms"]) &&
#         !is.na(data[i, "resp_time_ms"])) {
#       data[i, "rt"] <- data[i, "resp_time_ms"] - data[i, "stim_onset_ms"]
#     }
#   }
#   return(data)
#   
# }
# 
# participant_data1 <- compute_rt_if_missing(participant_data)

compute_rt_if_missing <- function (data) { 
data$rt <- ifelse(
  is.na(data$rt) &
    !is.na(data$stim_onset_ms) & 
    !is.na(data$resp_time_ms),
  data$resp_time_ms - data$stim_onset_ms, data$rt
)
return(data)

}

# participant_data <- compute_rt_if_missing(participant_data)

# mean(participant_data1$rt)  
# mean(participant_data$rt) 
