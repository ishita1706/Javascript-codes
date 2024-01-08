function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

//EXAMPLE for foreach loop
const arr = ['ishita’', 'formula1', 'mercedes', 'lewis'];

// Using forEach() to print each element of the array
arr.forEach(function (arr) {
  console.log(arr);
});
