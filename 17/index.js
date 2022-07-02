const persistence = (num) => {
    let count = 0

    while (num.toString().length !== 1) {
        num = num
            .toString()
            .split('')
            .reduce((prevValue, currValue) => prevValue * currValue)
        count++
    }

    return count
}
