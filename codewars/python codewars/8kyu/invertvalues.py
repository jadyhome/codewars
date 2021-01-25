########################################################################
# PROMPT
# https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/python

# Given a set of numbers, return the additive inverse of each. 
# Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

# You can assume that all values are integers. 
# Do not mutate the input array/list.
########################################################################


####### SOLUTION #######

def invert(lst):
    new_array = []
    for x in lst:
        new_array.append(x * -1)
    return new_array

    # 2nd Solution
# def invert(lst):
#     new_array = [-x for x in lst]
#     return new_array

    # 3rd Solution
# def invert(lst):
#     return [-x for x in lst]

####### SOLUTION #######