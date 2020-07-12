/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let n = nums.length;
    let res = [];
    let tmpPath = [];
    let track = (tmpPath) => {
        if (tmpPath.length === n) {
            res.push(tmpPath);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!tmpPath.includes(nums[i])) {
                tmpPath.push(nums[i]);
                track(tmpPath.slice());
                tmpPath.pop();
            }
        }
    };
    track(tmpPath);
    return res;
};
