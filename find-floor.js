function findFloor(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex){
    middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if (arr[middleIndex] === val){
        return arr[middleIndex];
    }
    else if (arr[middleIndex] > val){
        if (middleIndex === 0){
            return -1;
        }
        else if (arr[middleIndex - 1] > val){
            rightIndex = middleIndex - 1;
        }
        else {
            return arr[middleIndex - 1];
        }
    }
    else {
        if (middleIndex === arr.length - 1){
            return arr[middleIndex];
        }
        else if (arr[middleIndex + 1] === val){
            return arr[middleIndex + 1];
        }
        else {
            leftIndex = middleIndex + 1;
        }
    }
  }
}

module.exports = findFloor