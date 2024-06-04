function bubbleSort(arr) {
  let swapped = null;
  // debugger
  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped)
}

let arr1 = [1, 5 , 3, -2, 8, 34] // El último par es: 4, 5
bubbleSort(arr1);
