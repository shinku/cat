const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 给出一个数字，找出它是斐波那契数列中的第几个数
 *
 * --- 说明 ---
 *
 * - 斐波那契数列 [1, 1, 2, 3, 5, 8, 13, ...]，后一个数字是前两个数字之和
 * - 输入的数字大于等于 2
 * - 如果输入数字不存于斐波那契数列中，返回 -1
 */
const fb = (i)=>{
  if(i==0) return 1;
  if(i==1) return 1;
  return fb(i-1) + fb(i-2); 
}

function findFibonacciIndex(n) {
  let res = 0;
  let i =0;
  while(fb(i) < n){
    i++;
    res = fb(i);
  }
  if(n == res) return i;
  return -1;
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.strictEqual(findFibonacciIndex(2), 2);
    assert.strictEqual(findFibonacciIndex(13), 6);
    assert.strictEqual(findFibonacciIndex(100), -1);
    return '通过';
  } catch (err) {
    return '不通过';
  }
};
