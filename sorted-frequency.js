function sortedFrequency(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let startIndex;
    let endIndex;
    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if (arr[middleIndex] === val){
            if (middleIndex === 0){
                startIndex = 0;
                leftIndex = rightIndex + 1;
            }
            else if (arr[middleIndex - 1] < val){
                startIndex = middleIndex;
                leftIndex = rightIndex + 1;
            }
            else {
                rightIndex = middleIndex - 1;
            }
        }
        else if (arr[middleIndex] > val){
            rightIndex = middleIndex - 1;
        }
        else {
            leftIndex = middleIndex + 1
        }
    } 
    if (startIndex === undefined){
        return -1;
    }
    leftIndex = startIndex;
    rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if (arr[middleIndex] === val){
            if (middleIndex === arr.length - 1){
                endIndex = arr.length - 1;
                leftIndex = rightIndex + 1;
            }
            else if (arr[middleIndex + 1] > val){
                endIndex = middleIndex;
                leftIndex = rightIndex + 1
            }
            else {
                leftIndex = middleIndex + 1
            }
        }
        else {
            rightIndex = middleIndex - 1
        }
    }
    return (endIndex + 1) - startIndex;
}

module.exports = sortedFrequency