# https://www.hackerrank.com/challenges/two-strings/problem


####### SOLUTION #######

import math
import os
import random
import re
import sys

# Complete the twoStrings function below.
def twoStrings(s1, s2):
    for char in s1:
        if char in s2:
            return "YES"
    return "NO"

####### SOLUTION #######
