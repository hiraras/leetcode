/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
      return [];
  }
  const list = [];
  let flag = 0;
  const noRepeatNums = [...new Set(nums)];
  const repeatNums = [...new Set(nums.filter((v, i, self) => {
      if (v === 0) {
          flag ++;
      }
      return i !== self.indexOf(v);
  }))];

  if (flag > 2) {
      list.push([0, 0, 0]);
  }
  
  for (let i = 0; i < noRepeatNums.length; i ++) {
    if (repeatNums.includes(noRepeatNums[i])) {
      if (noRepeatNums.includes(0 - 2 * repeatNums[i]) && repeatNums[i] !== 0) {
        list.push([repeatNums[i], repeatNums[i], 0 - 2 * repeatNums[i]]);
      }
    }
    for (let j = i + 1; j < noRepeatNums.length; j ++) {
      const remain = 0 - noRepeatNums[i] - noRepeatNums[j];
      if (noRepeatNums.includes(remain, j + 1)) {
        list.push([noRepeatNums[i], noRepeatNums[j], remain]);
      }
    }
  }
  return list;
};
// @lc code=end

