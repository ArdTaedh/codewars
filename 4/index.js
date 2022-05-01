//Sort Numbers

function solution(nums){
    if (Array.isArray(nums) && !nums.length)
        return []

    if (nums === null)
        return []
    
    return nums.sort((a, b) => a - b)
}

console.log(solution([1, 2, 40 ,10 ,45]))
