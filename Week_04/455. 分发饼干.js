/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort(function (a, b) {
        return a - b;
    });
    s = s.sort(function (a, b) {
        return a - b;
    });
    let num = 0;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        if (i < g.length && g[i] <= s[j]) {
            num++;
            i++;
        }
    }

    return num;
};
