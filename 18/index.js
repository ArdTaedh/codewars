let runLengthEncoding = function(str){
    const array = [];
    let value = 1;

    for (let i = 0; i < str.length; i++){
        if (str[i] !== str[i+1]){
            array.push([value, str[i]]);
            value=1;
        } else {
            value++;
        }
    }

    return array;
}

console.log(runLengthEncoding('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'))