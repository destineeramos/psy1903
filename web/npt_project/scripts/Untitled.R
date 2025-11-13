participant_data <- read.csv("data/raw/npt-experiment-2025-11-05-10-33-05.csv")

head(participant_data)
str(participant_data)
unique(participant_data$trialType)
unique(participant_data$block)
