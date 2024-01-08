function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startingIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startingIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Example usage of customReduce
function main() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = customReduce(numbers, (accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log("Sum using customReduce:", sum);
