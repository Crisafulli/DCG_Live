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

# def generate_random_data(lat, lon, num_rows):
#     for _ in xrange(num_rows):
#         hex1 = '%012x' % random.randrange(16**12) # 12 char random string
#         flt = float(random.randint(0,100))
#         dec_lat = random.random()/100
#         dec_lon = random.random()/100
#         print '%s %.1f %.6f %.6f \n' % (hex1.lower(), flt, lon+dec_lon, lat+dec_lat)

# generate_random_data(latitude, longitude, 5)