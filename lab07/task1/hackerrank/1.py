def is_leap(year):
    return ({True: True, False: False}[year % 400 == 0 or (year % 4 == 0 and year % 100 !=0) ])

year = int(input())
print(is_leap(year))