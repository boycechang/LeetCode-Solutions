/** https://leetcode.com/problems/one-edit-distance/#/description
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isOneEditDistance = function(s, t) {
    var slength = s.length;
    var tlength = t.length;
    var distance = slength - tlength;
    if (distance >= 2 ||distance <= -2 || s == t) {
        return false;
    }

    var ptr1 = 0;
    var ptr2 = 0;
    var edited = false;
    while (ptr1 < slength && ptr2 < tlength) {
        if (s.charAt(ptr1) !== t.charAt(ptr2)) {
            if (edited) {
                return false;
            }

            if (slength < tlength) {
                ptr2++;
            } else if (slength > tlength) {
                ptr1++;
            } else {
                ptr1++;
                ptr2++;
            }

            edited = true;
        } else {
            ptr1++;
            ptr2++;
        }
    }

    return (slength - ptr1 + tlength - ptr2) <= 1;
};

console.log(isOneEditDistance("abc", "abX"));
console.log(isOneEditDistance("aXc", "abX"));
console.log(isOneEditDistance("", ""));
