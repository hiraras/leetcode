/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let starNum = p.split('*').length - 1;
  let len = s.length - p.length + starNum;
  for (let i = 0; i < p.length; i ++) {
    if (p[i] === '*') {
      func();
    } else if (p[i] === '.') {
      continue;
    } else if (s[i] !== p[i]) {
      return false;
    }
  }
};

function func(s, p, len) {
  for (let i = 0; i < len; i ++) {
    
  }
}

// @lc code=end

