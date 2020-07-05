// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

/**
 * 解法1，排序 + hashMap
 *
 * 思路： 找到转化异位词为key的方法
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {};
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }
    return Object.keys(map);
};

/**
 * 方法 映射表
 * key -> 每个字母对应的质数乘积
 * 26位质数元数组，两两乘积都不一样。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map(),
        prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i],
            key = 1;
        for (let j = 0; j < str.length; j++) {
            key *= prime[str.charCodeAt(j) - 97];
        }
        if (map.get(key)) map.get(key).push(str);
        else map.set(key, [str]);
    }
    return [...map.values()];
};
