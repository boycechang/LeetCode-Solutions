var twoSum = function(nums, target) {
    var result = [];
    var dic = {};
    nums.forEach( (item, index, array) => {
        if (dic[target - item] != undefined) {
            result.push(index);
            result.push(dic[target - item]);
        }
        dic[item] = index;
    });
    return result;
};

var nums = [1, 2, 4, 6, 9];
var target = 5;
console.log(twoSum(nums, target));
