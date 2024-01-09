function sortedFrequency(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if (arr[middleIndex] === val && arr[middleIndex-1] !== val){
            startIndex = middleIndex;
        }
        else if (arr[middleIndex] < val){
            leftIndex = middleIndex + 1;
        }
        else {
            rightIndex = middleIndex - 1;
        }
    }
    console.log('startIndex is ', startIndex);
    leftIndex = startIndex;
    rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex){
        middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if (arr[middleIndex] === val && arr[middleIndex + 1] !== val){
            endIndex = middleIndex;
        }
        else if (arr[middleIndex] > val){
            rightIndex = middleIndex - 1;
        }
        else {
            leftIndex = middleIndex + 1;
        }
    }
    console.log('endIndex is ', endIndex)
    if (!startIndex && !endIndex){
        return -1;
    }
    else {
        return endIndex - startIndex + 1;
    }
}

module.exports = sortedFrequency
