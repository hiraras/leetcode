/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
    };
    let list = map[digits[0]] || [];
    for (let i = 1; i < digits.length; i ++) {
      list = f(map[digits[i]], list);
    }
    return list;
};

function f(arr, list) {
  let l = [];
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < list.length; j ++) {
      l.push(list[j] + arr[i]);
    }
  }
  return l;
}

// @lc code=end

