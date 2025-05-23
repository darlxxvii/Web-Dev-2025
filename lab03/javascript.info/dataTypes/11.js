function getMaxSubSum(arr) {
    let maxSum = 0;
    let currSum = 0;

    for (let num of arr) {
        currSum = Math.max(num, currSum + num); 
        maxSum = Math.max(maxSum, currSum); 
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); //5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); //3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); //100
console.log(getMaxSubSum([1, 2, 3])); //6
console.log(getMaxSubSum([-1, -2, -3])); //0
