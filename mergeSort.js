function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const low = 0;
  const high = arr.length - 1;
  const mid = (low + high) / 2;

  // sort left half
  const arrLeft = arr.slice(low, mid + 1);
  const sortedLeft = mergeSort(arrLeft);

  // sort right half
  const arrRight = arr.slice(mid + 1, high + 1);
  const sortedRight = mergeSort(arrRight);

  // merge sorted halves
  const mergedArr = [];
  while (sortedLeft.length || sortedRight.length) {
    if (sortedLeft.length === 0 || (sortedLeft[0] > sortedRight[0])) {
      mergedArr.push(sortedRight[0]);
      sortedRight.shift();
    } else if (sortedRight.length === 0 || (sortedLeft[0] <= sortedRight[0])) {
      mergedArr.push(sortedLeft[0]);
      sortedLeft.shift();
    }
  }
  return mergedArr;
}

const arr = [4, 8, 6, 2, 1, 7, 5, 3];
console.log(mergeSort(arr));
