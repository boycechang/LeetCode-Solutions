/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var store = {};
    return solve(n);

    function solve(n) {
        if (n === 1 || n === 2) {
            return n;
        }

        var fn2 = solve(n - 2);
        store[n - 2] = fn2;

        var fn1 = solve(n - 1);
        store[n - 1] = fn1;

        store[n] = fn2 + fn1;
        return store[n];
    }
};
