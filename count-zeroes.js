function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    if (arr[leftIndex] === 0){
        return arr.length;
    }
    if (arr[rightIndex] === 1){
        return 0;
    }
    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if (arr[middleIndex] === 0 && arr[middleIndex - 1] === 1){
            return arr.length - middleIndex;
        }
        else if (arr[middleIndex] === 1) {
            leftIndex = middleIndex;
        }
        else {
            rightIndex = middleIndex;
        }
    }
}

module.exports = countZeroes