function customFilter(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

// Example of customFilter
function main() {
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = customFilter(numbers, (num) => {
    return num % 2 === 0;
  });

  console.log("Even numbers using customFilter:", evenNumbers);
main();
