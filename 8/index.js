function isOddHeavy(array){
    const evenElements = array.filter(el => el % 2 == 0)
    const oddElements = array.filter(el => el % 2 !== 0)

    if (!oddElements.length) return false

    const maxEvenElement = Math.max(...evenElements)
    const minOddElement = Math.min(...oddElements)
    
    return minOddElement > maxEvenElement ? true : false
}

console.log(isOddHeavy([0,2,19,4,4]))
console.log(isOddHeavy([1,-2,-1,2]))