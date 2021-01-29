########################################################################
# PROMPT
# https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python

# You get an array of numbers, return the sum of all of the positives ones.

# Example [1, -4, 7, 12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.
########################################################################


####### SOLUTION #######

def positive_sum(arr):
    positive = 0
    for x in arr:
        if x > 0:
            positive = positive + x
    return positive

####### SOLUTION #######
