const solution = (roman) => {
    const romanSymbols = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }

    const splittedString = roman.split('')

    const romanElements = splittedString.map(letter => romanSymbols[letter])

    const romanNum = romanElements.reduce((acc, cur, idx, arr) => {
        let next = arr[idx + 1];

        if (cur < next) {
            acc -= cur
        } else {
            acc += cur
        }

        return acc;
    }, 0);

    return romanNum
}