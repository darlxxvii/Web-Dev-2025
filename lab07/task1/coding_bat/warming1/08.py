def pos_neg(a, b, negative):
  if negative:
    return (a<0 and b<0)
  elif (a>0 and b<0) or (a<0 and b>0):
    return True
  else:
    return False
