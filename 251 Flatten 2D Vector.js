/** https://leetcode.com/problems/flatten-2d-vector/#/description
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
    this.row = 0;
    this.colum = 0;
    this.elements2d = vec2d;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
    if (this.elements2d === null || this.elements2d.length === 0) {
        return false;
    }

    var elements = this.elements2d[this.row];
    while (this.row < this.elements2d.length && this.colum === elements.length) {
        this.row++;
        this.colum = 0;
        elements = this.elements2d[this.row];
    }

    if (this.row === this.elements2d.length) {
        return false;
    }

    return true;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
    var elements = this.elements2d[this.row];
    var element = elements[this.colum];
    this.colum++;

    while (this.row < this.elements2d.length && this.colum === elements.length) {
        this.row++;
        this.colum = 0;
        elements = this.elements2d[this.row];
    }

    return element;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
