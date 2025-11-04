
## Start by setting your working directory to your psy1903 folder. Replace "~/Desktop/" with the correct path to your psy1903 directory:
setwd("~/Desktop/psy1903/")

## Create a new parent directory called "stats" where we will be doing all of our R work:
dir.create("stats/")

## Create a new directory called "rIntro" for today's exercises:
dir.create("stats/week10")

## Set working directory to the rIntro/scripts parent directory, which will be our home base for today:
setwd("~/Desktop/psy1903/stats/week10")

## Save this script as R_introduction.R within your scripts directory (you can just use command+S or File → Save As)

#### (2) Installation of packages ----------------------------------------------

## Packages are essential toolboxes that you load into R and allow you to do cool things with your data
## One package called "pacman" makes installing packages very easy...

if (!require("pacman")) {install.packages("pacman"); require("pacman")}  # First install and load in pacman to R

## Then use p_load and a list of all of the packages that you need for the project (with each one being in "quotes")

p_load("tidyverse","rstudioapi","lme4","emmeans","psych","corrplot")  # tidyverse contains many packages like dplyr, tidyr, stringr, and ggplot2, among others, and the additional packages should cover our data manipulations, plotting, and analyses

getRandomNumber <- function (min = 1, max = 10, number = 1) {
  sample(min:max, number)
}

getRandomNumber(5,25,3)
getRandomNumber()

#Conditionals 

age <- 70


if (age >= 18) {
  print("You are an adult.")
} else {
  print("You are not an adult")
}

if (age >= 65) {
  print("You are a senior")
} else if (age >= 18) {
  print("You are  an adult")
} else if (age >= 13) {
  print("You are a teen.")
} else {
  print("You are a child")
}

##Loops 
for (i in 1:5) {
  print(paste("Iteration:", i))
}

experiment_data <- data.frame(
  subject_id = c(1:20),
  rt = c(480, 530, 495, 610, 455, 390, 510, 565, 430, NA, 380, 230, 395, 710, 755, 590, 810, 365, 630, 200),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE, TRUE, FALSE, TRUE, FALSE),
  condition = c("control", "control", "incongruent", "control",
                "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent", "control", "control", "incongruent",
                "control", "incongruent", "control", "incongruent", "incongruent",
                "control", "incongruent")
)

experiment_data$rt_category <- NA 

## Use a for loop to classify each subject
for (i in 1:nrow(experiment_data)) {
  if (is.na(experiment_data[i, "rt"])) {
    experiment_data[i, "rt_category"] <- "Unknown"
  } else if (experiment_data[i, "rt"] < 500) {
    experiment_data[i, "rt_category"] <- "Fast"
  } else {
    experiment_data[i, "rt_category"] <- "Slow"
  }
}

experiment_data$rt_category_vector <- NA

## Using a vectorized function
experiment_data$rt_category_vector <- ifelse(experiment_data$rt < 500, "Fast", "Slow")

experiment_data$rt_category_vector <- ifelse(
  is.na(experiment_data$rt), "Unknown",              # If RT is missing
  ifelse(experiment_data$rt < 500, "Fast", "Slow")   # Otherwise, check Fast vs Slow
)

## Example matrix of reaction times from 3 blocks per subject
rt_data <- data.frame(
  block1 = c(520, 480, 610, 390, 450),
  block2 = c(530, 470, 600, 420, 500),
  block3 = c(540, 490, 590, 410, 480)
)
rt_data

## Mean reaction time across blocks for each subject across blocks (row-wise)
rowMeans(rt_data)
# [1] 530.0 480.0 600.0 406.7 476.7

## Mean reaction time for each block across subjects (column-wise)
colMeans(rt_data)
# block1 block2 block3 
# 490 504 504

## 2 = columns, 1 = rows 
apply(rt_data, 2, mean)
apply(rt_data, 1, sd)

experiment_data$rt[is.na(experiment_data$rt)] <- 500 # To start, replace the NA with 500 so tapply will work
## Mean RT by experimental condition
tapply(experiment_data$rt, experiment_data$condition, mean)
#   control incongruent 
#   498     505

## Mean RT by congruency (TRUE/FALSE)
tapply(experiment_data$rt, experiment_data$congruent, mean)
#   FALSE  TRUE 
#   447    556

#### Scope setup ---------------------------------------------------------------
dir.create("~/Desktop/psy1903/stats/week10/scope_example")
setwd("~/Desktop/psy1903/stats/week10/scope_example")

#### Global vs. Local Variable x -----------------------------------------------
x <- 10          # Global variable x is defined as 10

## Create function to print variable x
my_function <- function() {
  # x <- 20       # Local variable within the function x is defined as 20
  print(x)      # This will print 20 (the local variable x)
}

my_function()   # Call the function. This will print 20 (the local variable x)
print(x)        # Outside the function, this will print 10 (the global variable x)

x <- 10  # Global variable x is defined as 10

# Create a loop that defines x within the loop
for(i in 1:3) {
  x <- 20  # Local variable x inside the loop
  print(x)  # This will print 20, the local x inside the loop
}

print(x)  # Outside the loop, global x will have been overwritten as 20

#### Defining x locally in a function ------------------------------------------
## Function without argument x set
my_function <- function() {
  x * 2
}
my_function() # Produces the error: "Error in my_function() : object 'x' not found" because x is not defined in either global or local environment

## Function with variable x set in global environment
x <- 10
my_function <- function() {
  x * 2
}
my_function() # Uses global variable x, which is assigned the value of 10, and outputs 20. Will cause errors after removing global variable x, or will not update x as expected

## Function with argument x set
my_function <- function(x) {
  x * 2
  environment()
}
my_function(5) # Passes the value directly via the argument, e.g., `x <- 5` is implicitly coded by placing the 5 in the x position of the function argument, and each call of my_function(x) will produce an updated output of x * 2 as expected
environment()
ls()

install.packages("styler")
library(styler)

options(styler.addins_style_transformers = styler::style_file)

my_function <- function(x) {
  x * 2
  environment()
}

