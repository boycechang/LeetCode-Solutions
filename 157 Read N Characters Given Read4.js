/** https://leetcode.com/problems/read-n-characters-given-read4/#/description
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
    return function(buf, n) {
        var readed = 0;
        var end = false;
        while (readed < n && !end) {
            var buffer = [];
            var length = read4(buffer);
            if (length < 4) {
                end = true;
            }
            readed += length;
            if (readed > n) {
                buffer.splice(n - readed, readed - n);
                readed = n;
            }

            buffer.forEach( (e) => {
                buf.push(e);
            });
        }

        return readed;
    };
};
