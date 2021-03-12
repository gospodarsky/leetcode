/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const map = [];

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const rest = [...nums];

    rest.splice(i, 1, NaN);

    const [j, k] = twoSum(rest, -x);

    if (Number.isInteger(j) && Number.isInteger(k)) {
      const indexSum = i + j + k;
      const sum = "" + [x, nums[j], nums[k]].sort();
      if (!map.includes(indexSum) && !map.includes(sum)) {
        map.push(indexSum);
        map.push(sum);
        result.push([x, nums[j], nums[k]]);
      }
    }
  }

  return result;
};

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

  return [];
};

// [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
// [] => []
// [0] => []
// [0,0,0,0] => [0,0,0]
// threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([0, 0, 0, 0]);
// threeSum([-1,0,1,0]);
threeSum([-2,0,1,1,2]);
