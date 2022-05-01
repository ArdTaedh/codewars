function arrAdder(arr) {
    let sentence = '';
    for (let i = 0; i < arr[0].length; i++) {
        console.log(i)
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] != '') {
          sentence += arr[j][i];
        //   console.log(sentence)
        }
      }
      sentence += ' ';
    }
    return sentence.trim();
    console.log(arr[0])
  }

console.log(arrAdder([
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
]))
