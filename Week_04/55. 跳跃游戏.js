/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let end = nums.length - 1;
    let end2 = end - 1;
    for (let i = end2; i >= 0; i--) {
        if (nums[i] + i >= end) {
            end = i;
        }
    }
    return end === 0;
};
