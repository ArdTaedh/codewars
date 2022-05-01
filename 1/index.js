// /*
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// */

const squareOrNotSquare = ([...args]) => {
  console.log(args);
  
  const newArr = [];
  args.map((el) => {
    const isRoot = Number.isInteger(Math.sqrt(el));
    const hasRoot = Math.sqrt(el);
    const didnt = Math.pow(el, 2);

    if (isRoot) {
      newArr.push(hasRoot);
    } else {
      newArr.push(didnt);
    }
  });
  console.log(newArr);
}

squareOrNotSquare([12, 15, 16, 1], 'first test');
squareOrNotSquare([25, 14, 8, 49, 3, 2, 9, 4], 'second');
