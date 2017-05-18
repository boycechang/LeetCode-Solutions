/** https://leetcode.com/problems/unique-paths/#/description
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var store = {};
    solve(m, n);

    function solve(m, n) {
        if (m === 1 || n === 1) {
            return 1;
        }

        var fm = store[ (m - 1) + ":" + n];
        var fn = store[ m + ":" + (n - 1)];

        if (fm === undefined) {
            fm = solve(m - 1, n);
        }

        if (fn === undefined) {
            fn = solve(m, n - 1);
        }

        store[ m + ":" + n] = fm + fn;
        return store[ m + ":" + n];
    }
};
