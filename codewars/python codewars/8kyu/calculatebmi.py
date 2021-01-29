########################################################################
# PROMPT
# https://www.codewars.com/kata/57a429e253ba3381850000fb/train/python

# Write function bmi that calculates body mass index (bmi = weight / height2).

# if bmi <= 18.5 return "Underweight"

# if bmi <= 25.0 return "Normal"

# if bmi <= 30.0 return "Overweight"

# if bmi > 30 return "Obese"
########################################################################


####### SOLUTION #######

def bmi(weight, height):
    the_bmi = weight/(height**2)
    
    if the_bmi <= 18.5:
        return "Underweight"
    elif the_bmi <= 25.0:
        return "Normal"
    elif the_bmi <= 30.0:
        return "Overweight"
    else:
        return "Obese"

####### SOLUTION #######
