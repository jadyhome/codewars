# https://www.hackerrank.com/challenges/mini-max-sum/problem


####### SOLUTION #######

import math
import os
import random
import re
import sys

# Complete the miniMaxSum function below.
def miniMaxSum(arr):
    sorted_array = sorted(arr)
    min_sum = sum(sorted_array[ : 4])
    max_sum = sum(sorted_array[-4 : ])
    print(min_sum, max_sum)

####### SOLUTION #######
