// 两数之和
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
// 另一种解法
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (nums.indexOf(complement) !== -1) {
      return [i, nums.indexOf(complement)];
    }
  }
  return [];
}


