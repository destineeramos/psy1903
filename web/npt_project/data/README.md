# npt_project · Numerical Parity & Magnitude Task (Student Data)

## Overview
This folder contains **raw participant files** for a simple reaction-time experiment used in Week 11.
The task includes:
- A **practice block** (10 trials)
- An **experiment block** (40 trials), with two trial types: **magnitude** and **parity**
- One **questionnaire row** (stored as a JSON string) collected at the end

These files are intentionally realistic:
- Reaction times range from **150 to 1200 ms** (with most in **400–700 ms**) so that you can practice filtering out implausible values (<250 ms or >900 ms).
- Some trials include **missing reaction times**; those trials also have missing responses.
- Questionnaire responses occasionally include **missing items**.

## Responses and Meanings
Participants responded with keyboard keys:
- **`f`** (left) and **`j`** (right).

The `answer_meaning` column translates each key into the task-relevant category:
- For **magnitude** trials: `f → "low"` and `j → "high"` (digits 1–4 are low; 6–9 are high).  
- For **parity** trials: `f → "even"` and `j → "odd"` (even digits: 2, 4, 6, 8).

If a reaction time is missing, the response and `answer_meaning` are left blank, and `correct` is set to `FALSE`.

## File Names
Each participant file is named with the pattern:
```
npt-experiment-YYYY-MM-DD-HH-MM-SS.csv
```
The timestamp represents when the participant completed the task. In your analysis, you can use the file name to derive a **subject_id**.

## Columns
| Column           | Meaning                                                                 |
|------------------|-------------------------------------------------------------------------|
| `trialType`      | `"task"` for trials, `"questionnaire"` for the survey row               |
| `block`          | `"practice"` or `"experiment"`                                          |
| `trial_type`     | `"magnitude"` or `"parity"` (task trials only)                          |
| `stimulus`       | A digit shown on screen (1–9, excluding 5)                              |
| `response`       | Key label recorded for the trial: `f` or `j` (blank if no response)     |
| `answer_meaning` | Meaning of the response: `"low"/"high"` or `"even"/"odd"` (blank if no response) |
| `correct`        | `TRUE` or `FALSE` (no response is counted as `FALSE`)                   |
| `rt`             | Reaction time in milliseconds (may include missing values)              |

For the questionnaire row (`trialType == "questionnaire"`), the `response` column contains a **JSON string** with items `item1` through `item10`, where each value is on a **0–4 Likert scale** (reverse score items 2, 4, and 7 in your scoring function). Other columns in that row may be empty.

## Getting Started in R
1. Import a **single** participant file using `read.csv()` and store it in a clearly named object, for example:
   ```r
   participant_data <- read.csv("psy1903/web/npt_project/data/raw/npt-experiment-2025-11-05-12-34-56.csv")
   ```
2. Inspect with `head()`, `str()`, and `unique(participant_data$trial_type)` to confirm the structure.
3. Locate the questionnaire row (`trialType == "questionnaire"`) and note that `response` is a JSON string. You will decode and score it using your `score_questionnaire()` function.
4. Split the task data into **practice** and **experiment** blocks, then into **magnitude** and **parity** trial types.
5. Filter RTs to keep **250–900 ms** before computing mean RT and accuracy.
6. When your participant-level function is working, scale up by processing **all files** in this folder and combining them into a study-level data frame.

## Folder Structure
```
psy1903/web/npt_project/
└── data/
    └── raw/      # participant .csv files (this folder)
```