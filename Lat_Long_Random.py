### Generating Random Lat/Long Points inside expected DMA coordinates to help verify watch live endpoints for DCG ###

import random
import sys
import math
from random import uniform

smallestLat = 60.743339
biggestLat = 61.477599
smallestLon = -149.314216
biggestLon = -148.954234

def newpoint():
   return uniform(smallestLat, biggestLat), uniform(smallestLon, biggestLon)

points = (newpoint() for x in xrange(10))
for point in points:
   print point

# def newpoint():
#    return uniform(61.477599,-149.314216), uniform(60.743339, -148.954234)

# points = (newpoint() for x in xrange(10))
# for point in points:
#    print point

# latitude = 19.99
# longitude = 73.78
