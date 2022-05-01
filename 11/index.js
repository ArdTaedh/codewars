const arrayDiff = (arr1, arr2) => {
    return arr1.filter(a => !arr2.includes(a))
}

console.log(arrayDiff([1, 2, 3], [0, 1, 3]))