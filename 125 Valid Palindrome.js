//  https://leetcode.com/problems/valid-palindrome/#/description

function remainchar(str) {
    var i = 0;
    var dstr = "";
    while(i < str.length) {
        if ((str.charAt(i) <= 'z' && str.charAt(i) >= 'a') || (str.charAt(i) <= 'Z' && str.charAt(i) >= 'A')|| (str.charAt(i) <= '9' && str.charAt(i) >= '0')) {
            dstr += str.charAt(i);
        }
        i++;
    }
    return dstr;
}

function reverse(str) {
    var i = str.length;
    var dstr = "";
    while(--i >= 0) {
        dstr += str.charAt(i);
    }
    return dstr;
}


var isPalindrome = function(s) {
    if (s === null) {
        return true;
    }

    var lowerString = s.toLowerCase();
    var charString = remainchar(lowerString);
    var reverseString = reverse(charString);
    return (charString == reverseString);
};
