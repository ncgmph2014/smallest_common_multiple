function smallestCommons(arr) {
  let product1 = arr.reduce((a, b) => a * b);
  let allNumbers = [];
  let testCase = 1;
  let arr2 = [];
  let result = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    allNumbers.push(i);
  }

  for (let j = 0; j < allNumbers.length; j++) {
    testCase *= allNumbers[j];
  }

  for (let j = 0; j < allNumbers.length; j++) {
    arr2.push((testCase /= allNumbers[j]));
  }

  let arr3 = arr2;
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[j] % 2 === 0) {
      arr2.push(arr3[j] / 2);
    }
    // if (arr3[j] % 3 === 0) {
    //   arr2.push(arr3[j] / 3);
    // }
    // if (arr3[j] % 4 === 0) {
    //   arr2.push(arr3[j] / 4);
    // }
  }

  arr2.sort((a, b) => a - b);

  let arr4 = arr2.filter((a, b) => arr2.indexOf(a) === b);
  console.log(arr4);
  //   console.log(allNumbers + " is allNumbers array");
  //   console.log(arr2 + "  is arr2");
  //   console.log(allNumbers.every(x => 60 % x === 0) + " testing, testing");
  for (let k = 0; k < arr4.length; k++) {
    if (allNumbers.every(x => arr4[k] % x === 0) === true) {
      return arr4[k];
    }
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10])); //should return 2520.
console.log(smallestCommons([1, 13])); //should return 360360. //timed out because i was doing too much
console.log(smallestCommons([23, 18])); //should retr
