const chain = (input, fs) =>
  fs.reduce((pre, val) => val(pre), input);
  
  
console.log(chain(2, [25, 35]))