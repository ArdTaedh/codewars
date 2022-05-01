function solution(number) {
    if (number < 0) return 0;

    let arr = []

    for(let i = 0; i < number; i++) {
        arr.push(i)
    }

    let multiples = arr.filter(el => 
        el % 3 === 0 || el % 5 === 0 ? el : null   
    )
    
    return multiples.reduce((acc, curr) => acc + curr, 0)
}

console.log(solution(10))