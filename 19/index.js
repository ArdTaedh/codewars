function partsSums(ls) {
    let result = [0]
    let l = ls.length - 1;

    for (let i = l; i >= 0; i--) {
        // result.push(ls[i] + result[ l - i])
        console.log(ls[i] + result[l - i])
    }

    return result.reverse();
}

console.log(partsSums([0, 1, 3, 6, 10]))