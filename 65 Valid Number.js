/** https://leetcode.com/problems/valid-number/#/description
 * @param {string} str
 * @return {number}
 */

String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

var isSimpleNum = function(s, canContainsDot) {
    if (s.length === 0) {
        return false;
    }

    var isValid = false;
    var start = 0;
    var dotPosition = -1;

    if (s.charAt(0) === '-' || s.charAt(0) === '+') {
        start = 1;
    }

    for (var i = start; i < s.length; i++) {
        if (s.charAt(i) === '.') {
            if (canContainsDot && dotPosition === -1) {
                dotPosition = i;
                continue;
            } else {
                return false;
            }
        }

        if (!(s.charAt(i) <= '9' && s.charAt(i) >= '0')) {
            return false;
        }

        isValid = true;
    }

    return isValid;
}

 var isNumber = function(str) {
     if (str === null || str.length === 0) {
         return 0;
     }

     var array = str.trim().toLowerCase().split("e");
     console.log(array);
     if (array.length == 1) {
         return isSimpleNum(array[0], true);
     } else if (array.length == 2) {
         return (isSimpleNum(array[0], true) && isSimpleNum(array[1], false))
     } else {
         return false;
     }
 };
