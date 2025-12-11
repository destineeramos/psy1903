file_path <- "data/raw/est-experiment-2025-11-05-09-04-45.csv"
basename(file_path)
subject_id <- sub("\\.csv$","", basename(file_path))

participant_data <- read.csv(
  here::here(file_path),
  stringsAsFactors = FALSE
)
str(participant_data)
head(participant_data)
names(participant_data)


process_participants <- function(file_path) {
  subject_id <- sub("\\.csv$","", basename(file_path))
  
  participant_data <- read.csv(
    here::here(file_path),
    stringsAsFactors = FALSE
  )
  
  return(participant_data)
}

participant_data <- process_participants("data/raw/est-experiment-2025-11-05-09-04-45.csv")
head(participant_data)
