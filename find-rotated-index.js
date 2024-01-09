function findRotatedIndex(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let rotateIndex;
    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor((rightIndex + leftIndex)/2);
        if (arr[middleIndex] < arr[middleIndex + 1]){
            rotateIndex = middleIndex;
        }
        else if (arr[middleIndex] < arr[0]){
            leftIndex = middleIndex + 1;
        }
        else {
            rightIndex = middleIndex - 1;
        }
    }
    leftIndex = 0;
    rightIndex = rotateIndex
    while (leftIndex <= rightIndex){
        middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if (arr[middleIndex] === val){
            return middleIndex;
        }
        else if (arr[middleIndex] > val){
            rightIndex = middleIndex - 1;
        }
        else 
            leftIndex = middleIndex + 1;
    }
    leftIndex = rotateIndex;
    rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex){
        middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if (arr[middleIndex] === val){
            return middleIndex;
        }
        else if (arr[middleIndex] > val){
            rightIndex = middleIndex - 1;
        }
        else 
            leftIndex = middleIndex + 1;
    }
    return -1
}

module.exports = findRotatedIndex