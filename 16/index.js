//Integer depth

function computeDepth (x){
    let digits = new Set()

    for (let i = 1; digits.size < 10; i++) {
        let num = x * i
        num.toString().split('').forEach(el => digits.add(+el));
        if (digits.size === 10) return i
    }
}