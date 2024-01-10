function findRotatedIndex(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let rotationIndex;
    while (leftIndex < rightIndex){
      middleIndex = Math.floor((rightIndex + leftIndex)/2);
      if (arr[middleIndex] > arr[middleIndex + 1]){
          rotationIndex =  middleIndex + 1;
          leftIndex = rightIndex;
      }
      else if (arr[middleIndex] > arr[0]){
          leftIndex = middleIndex + 1;
      }
      else if (arr[middleIndex] < arr[0]){
          rightIndex = middleIndex
      }
    }
    leftIndex = 0;
    rightIndex = rotationIndex - 1;
    while (leftIndex <= rightIndex){
        middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if (arr[middleIndex] === val){
            return middleIndex;
        }
        else if (arr[middleIndex] > val){
            rightIndex = middleIndex - 1;
        }
        else {
            leftIndex = middleIndex + 1;
        }
    }
    leftIndex = rotationIndex;
    rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex){
        middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if (arr[middleIndex] === val){
            return middleIndex;
        }
        else if (arr[middleIndex] > val){
            rightIndex = middleIndex - 1;
        }
        else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex

