/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var res = [];
    var path = [];
    if (k === 0) {
        return [[]];
    }
    function dfs(start, n, k, res, path) {
        if (path.length === k) {
            res.push(path.slice(0));
            return;
        }
        for (var i = start; i < n + 1; i++) {
            path.push(i);
            dfs(i + 1, n, k, res, path);
            path.pop();
        }
        return res;
    }
    return dfs(1, n, k, res, path);
};
