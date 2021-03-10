/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    var complement = target - nums[i];

    if (map[complement] && map[complement] !== i) {
      return [i, map[complement]];
    }
  }
};
