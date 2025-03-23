def round_sum(a, b, c):
 return rounding(a) + rounding(b) + rounding(c)
def rounding(n):
  if n%10 >=5:
    return n//10*10+ 10
  else:
    return n // 10 *10
