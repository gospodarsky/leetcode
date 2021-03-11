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

// [2,7,11,15] 9 => [0,1]
// [3,2,4] 6 => [1,2]
// [3,3] 6 => [0,1]
