// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
// 示例:
// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
// 说明:
// 1 是丑数。
// n 不超过1690。

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
    if (!n) return 0;
    let dp = [1];
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
        dp[i] == dp[a] * 2 && a++;
        dp[i] == dp[b] * 3 && b++;
        dp[i] == dp[c] * 5 && c++;
    }
    return dp[n - 1];
};
