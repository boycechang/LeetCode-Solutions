/** https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/#/description
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    var deleted = [];
    return function(buf, n) {
        var readed = 0;
        var end = false;
        while (readed < n && !end) {
            var buffer = [];
            if (n <= deleted.length) {
                for (var i = 0; i < n; i++) {
                    buf.push(deleted[0]);
                    deleted.splice(0, 1);
                }
                readed = n;
                break;
            } else if (deleted.length !== 0) {
                readed += deleted.length;
                deleted.forEach( (e) => {
                    buf.push(e);
                });
                deleted = [];
            }

            var length = read4(buffer);
            if (length < 4) {
                end = true;
            }

            readed += length;

            if (readed > n) {
                deleted = buffer.splice(n - readed, readed - n);
                readed = n;
            }

            buffer.forEach( (e) => {
                buf.push(e);
            });
        }

        return readed;
    };
};
