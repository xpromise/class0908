/*
  求 无重复字符的最长子串 的长度

  输入："abcabcbb"
  输入："bacabecbb"
  输出: 3  （无重复最长子串 "abc"）

  输入: "bbbbb"
  输出: 1  （无重复最长子串 "b"）

  输入: "pwwkew"
  输出: 3  （无重复最长子串 "kew"）
*/

String.prototype.subStringMaxLength = function() {
  const str = this;

  // 初始化无重复最长子串
  let longStr = '';

  let maxLength = 0;

  // 遍历
  /* for (let value of str) {
    // 判断 value 是否重复
    if (longStr.indexOf(value) === -1) {
      // 不重复
      longStr += value;
      maxLength = longStr.length > maxLength ? longStr.length : maxLength;
    } else {
      // 重复
      // 排除重复的数，下一个数开始的下标
      const index = longStr.indexOf(value) + 1;
      // abc --> abca
      longStr += value;
      // 覆盖之前的值  abca --> bca
      longStr = longStr.slice(index);
    }
  } */


  for (let value of str) {
    // 判断 value 是否重复
    const index = longStr.indexOf(value);
    longStr += value;
    if (index === -1) {
      // 不重复
      maxLength = longStr.length > maxLength ? longStr.length : maxLength;
    } else {
      // 重复
      // 排除重复的数，下一个数开始的下标
      // abc --> abca
      // 覆盖之前的值  abca --> bca
      longStr = longStr.slice(index + 1);
    }
  }

  return maxLength;
};

const str = 'pwwkew';
const length = str.subStringMaxLength();
console.log(length);
