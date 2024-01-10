function findRotationCount(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex){
    middleIndex = Math.floor((rightIndex + leftIndex)/2);
    if (arr[middleIndex] > arr[middleIndex + 1]){
        return middleIndex + 1;
    }
    else if (arr[middleIndex] > arr[0]){
        leftIndex = middleIndex + 1;
    }
    else if (arr[middleIndex] < arr[0]){
        rightIndex = middleIndex
    }
  }
  return 0;
}

module.exports = findRotationCount