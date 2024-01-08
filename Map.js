function customMap(arr, callback) {
  const mappedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }
  
  return mappedArray;
}

function num_square(num) {
  return num * num;
}

function main() {
  const numbers = [1, 2, 3, 4, 5];

  const squareNum = customMap(numbers, num_square);
  
  console.log("Original Numbers:", numbers);
  console.log("Doubled Numbers:", num_square);
}
main();
