def string_match(a, b):
  n = min(len(a), len(b))
  c=0
  for i in range(n-1):
    suba=a[i:i+2]
    subb=b[i:i+2]
    if suba==subb:
      c+=1
  return c
      
