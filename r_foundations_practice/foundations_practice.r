 #### Destinee Ramos, 10/28, Week 9 Task Set -------------------------------------

 ##Hello VS Code 

age <- 19 
typeof(age)
class(age)
name <- "destinee"
typeof(name)
class(name)
is_psych_major <- TRUE
typeof(is_psych_major)
class(is_psych_major)
favorite_numbers <- c(6, 12, 36, 42)
typeof(favorite_numbers)
class(favorite_numbers)


rt_vector <- c(480, 530, 495, 610, 455, 390, 510, 565, 430, 500)  # Numeric vector
mean(rt_vector)
sd(rt_vector)

rt_adjusted <- rt_vector + 50
rt_adjusted

mean_diff <- mean(rt_vector) - mean(rt_adjusted)

rt_vector[5] <- NA
rt_vector

mean(rt_vector, na.rm = TRUE)

summary(rt_vector)
str(rt_vector) 

subject_id <- c(1:10)

congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE)
condition <- c("control", "control", "incongruent", "control", "incongruent", "control", "incongruent", "incongruent", "control", "incongruent")

experiment_data <- data.frame(subject_id, rt_vector, congruent, condition)
experiment_data

head(experiment_data)
tail(experiment_data)
summary(experiment_data)
str(experiment_data)
experiment_data[3, 2]
experiment_data[experiment_data$rt_vector < 500,]
experiment_data[1:5, 1:2]
experiment_data[4, ]
experiment_data$condition
experiment_data[, "condition"]

##experiment_data$fast_trials <- experiment_data$rt_vector < 500

fast_trials <- experiment_data[experiment_data$rt_vector < 500, ]

incongruent_trials <- experiment_data[experiment_data$congruent == FALSE,  ]

##experiment_data$incongruent_trials <- experiment_data$congruent == FALSE

##experiment_data$fast_incongruent <- experiment_data$rt_vector < 500 & experiment_data$congruent == FALSE

fast_incongruent <- experiment_data[experiment_data$rt_vector < 500 & experiment_data$congruent == FALSE, ]

nrow(fast_incongruent) 
nrow(incongruent_trials)
nrow(fast_trials)

sapply(experiment_data, typeof)

##condition <- factor(c("control", "control", "incongruent", "control", "incongruent", "control", "incongruent", "incongruent", "control", "incongruent"))

str(condition)

mean(experiment_data[experiment_data$congruent == TRUE, "rt_vector"], na.rm = TRUE)
mean(experiment_data[experiment_data$congruent == FALSE, "rt_vector"], na.rm = TRUE)

mean_control <- mean(experiment_data[experiment_data$condition == "control", "rt_vector"], na.rm = TRUE)
mean_incongruent <- mean(experiment_data[experiment_data$condition == "incongruent", "rt_vector"], na.rm = TRUE)

congruency_effect <- mean_incongruent -  mean_control 
congruency_effect
print(paste("The congruency effect was", congruency_effect, "milliseconds."))

experiment_data$rt_z <- (experiment_data$rt_vector - mean(experiment_data$rt_vector, na.rm = TRUE))/ sd(experiment_data$rt_vector, na.rm = TRUE)
print(experiment_data$rt_z)
head(experiment_data)

experiment_data$fast <- (experiment_data$rt_vector < 500)
print(experiment_data$fast)
head(experiment_data)

new_participant <- data.frame(
  subject_id = 11,
  rt_vector = 470,
  congruent = TRUE,
  condition = "control",
  rt_z = NA,
  fast = TRUE)

experiment_data <- rbind(experiment_data, new_participant)
tail(experiment_data)

experiment_data$rt_z <- NULL
experiment_data
names(experiment_data)

clean_experiment_data <- experiment_data[experiment_data$rt_vector >= 300 & experiment_data$rt_vector <= 700 & !is.na(experiment_data$rt_vector), ]
nrow(clean_experiment_data)
nrow(experiment_data)

mean(experiment_data$rt_vector, na.rm = TRUE)
mean(clean_experiment_data$rt_vector, na.rm = TRUE)
