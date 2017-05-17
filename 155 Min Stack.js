/** https://leetcode.com/problems/min-stack/#/description
 * initialize your data structure here.
 */
var MinStack = function() {
    this.nums = [];
    this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.nums.push(x);
    if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var num = this.nums.pop()
    if (num === this.min[this.min.length - 1]) {
        this.min.pop();
    }
    return num;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.nums[this.nums.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.min.length === 0) {
        return null;
    } else {
        return this.min[this.min.length - 1];
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
