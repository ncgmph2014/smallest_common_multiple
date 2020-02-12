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
    arr2.push((testCase *= allNumbers[j]));
  }

  let arr3 = arr2;
  for (let j = 0; j < arr3.length; j++) {
    for (let i = 0; i < allNumbers.length; i++) {
      if (
        arr3[j] % allNumbers[i] === 0 &&
        arr2.includes(arr3[j] / allNumbers[i]) == false
      ) {
        arr2.push(arr3[j] / allNumbers[i]);
      }
    }
  }
  let arr4 = arr2;

  //this doesn't work, but it's getting better. will figure out tomorrow

  for (let i = 0; i < arr4.length; i++) {
    for (let j = 2; j <= 20; j++) {
      if (arr4[i] % j === 0 && arr2.includes(arr4[i] / j) == false) {
        arr2.push(arr4[i] / j);
      }
    }
  }
  arr2.sort((a, b) => a - b);
  console.log(arr2);
  //   console.log(allNumbers + " is allNumbers array");
  //   console.log(arr2 + "  is arr2");
  //   console.log(allNumbers.every(x => 60 % x === 0) + " testing, testing");
  for (let k = 0; k < arr2.length; k++) {
    if (allNumbers.every(x => arr2[k] % x === 0) === true) {
      return arr2[k];
    }
  }
}

console.log(smallestCommons([1, 5]) + " should return 60"); //should return 60
console.log(smallestCommons([5, 1]) + " should return 60"); //should return 60
console.log(smallestCommons([2, 10]) + " should return 2520"); //should return 2520.
console.log(smallestCommons([1, 13]) + " should return 360360"); //should return 360360. //timed out because i was doing too much
console.log(smallestCommons([23, 18]) + " should return 6056820"); //should return 6056820.
