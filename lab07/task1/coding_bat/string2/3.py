def cat_dog(str):
  cdog=0
  ccat=0
  for i in range(len(str)-2):
    if str[i]=='d' and str[i+1]=='o' and str[i+2]=='g':
      cdog+=1
    elif str[i]=='c' and str[i+1]=='a' and str[i+2]=='t':
      ccat+=1
  return cdog==ccat

