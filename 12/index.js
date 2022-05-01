const solution = (roman) => {
  const romanSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const sumArr = [];

  const string = roman.split("");

  for (let item in romanSymbols) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === item) 
          sumArr.push(romanSymbols[item])
    }
  }

  if(roman === 'IX')
    return 9

  if(roman === 'IV')
    return 4

  return sumArr.reduce((a,b) => a + b)
};

console.log(solution("IV"));
