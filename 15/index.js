const filterReps = (arr, maxReps) => {
    return arr.length ? 
        arr.reduce((acc, num, i) => {
            acc.found[num] = acc.found[num] 
                ? ++acc.found[num] 
                : 1
        
            if (acc.found[num] <= maxReps)
                acc.arr.push(num)

            console.log(i === nums.length - 1, i, acc)
            return i === nums.length - 1 ? acc.arr : acc
        }, { found: {}, arr: [] }) 
        : arr
}

const nums = [1, 1, 1, 1, 2, 2, 2, 2]
console.log(filterReps(nums, 2))