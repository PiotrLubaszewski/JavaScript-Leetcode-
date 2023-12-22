function twoSum(nums, target) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        const search = target - curr
        const seenSearchIndex = seen[search]
        if(seenSearchIndex > 0 || seenSearchIndex === 0) {
             return [i, seen[search]] 
        }
        seen[curr] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));
