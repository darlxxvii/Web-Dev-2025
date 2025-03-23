def is_vowel(char):
    if char == 'A' or char == 'E' or char == 'O' or char == 'U' or char == 'I':
        return True
    else: 
        return False
def minion_game(string):
    c = 0
    k=0
    for i in range(len(string)):
        if(is_vowel(string[i])):
            k += (len(string) - i)
        else:
            c += (len(string) - i)
    if c > k:
        print( "Stuart " + str(c))
    elif c < k:
        print( "Kevin " + str(k))
    else: 
        print("Draw")
        
if __name__ == '__main__':
    s = input()
    minion_game(s)