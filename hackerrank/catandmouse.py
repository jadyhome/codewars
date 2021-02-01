# https://www.hackerrank.com/challenges/cats-and-a-mouse/problem


####### SOLUTION #######

import math
import os
import random
import re
import sys

# Complete the catAndMouse function below.
def catAndMouse(x, y, z):
    cat_a = abs(x - z)
    cat_b = abs(y - z)
    
    if cat_a < cat_b:
        return 'Cat A'
    elif cat_b < cat_a:
        return 'Cat B'
    else:
        return 'Mouse C'

####### SOLUTION #######
