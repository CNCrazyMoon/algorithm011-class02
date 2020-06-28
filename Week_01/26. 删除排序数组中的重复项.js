/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let j = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            j += 1;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};
