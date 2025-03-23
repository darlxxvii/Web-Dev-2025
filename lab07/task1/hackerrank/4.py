if __name__ == '__main__':
    n = int(input())  
    arr = list(map(int, input().split()))  
    max_num = max(arr) 
    while max_num in arr:
        arr.remove(max_num)  

    print(max(arr))  
