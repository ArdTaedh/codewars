function nthFibo(n) {
    const arr = []

    function fibSeq(number) {
        const result  = [0, 1]

        for(let i = 2; i <= number; i++) {
            const nextNumber = result[i - 1]
            const prevNumber = result[i - 2]
            result.push(prevNumber + nextNumber)
            arr.push(prevNumber)
        }

        return result[number]
    }

    fibSeq(20)

    return arr.find((el, i) => n > 0 
        ? (n - 1) === i 
        // ? n === i + 1 
        : null )
}

console.log(nthFibo(2))