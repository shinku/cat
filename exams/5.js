const assert = require('assert');

const question = '重新排列一个字符串，使得每个相邻字符都不同，列出所有情况';

let strresult =[];
let loop = {};
let needlength = 0;
function reorganize(str) {
  strresult = [];
  loop ={};
  needlength = str.length;
  let arr = str.split('');
  let strs = [];
  let temp = []
  arr.forEach((item)=>{
      if(!temp[item]){
        temp[item] =1;
        strs.push(item);
      }
  })
  strs.forEach(val=>{
    lisNode(arr,val);
  })
  return strresult;
}
function lisNode (_arr,head){
  this.node = new node(head);
  this.node.findNextNode(_arr);
}
//make a list
function node(name){
  this.nexts =[];
  this.label = name;
  this.nodevalue = name;
  this.parentnode =null;
  
  this.findNextNode = (_arr)=>{
      //let str = _str;
      let index=_arr.findIndex((item)=>item==name);
      let arr =[..._arr];
      if(index>=0) {
        arr.splice(index,1);
      }
      arr.forEach(_val=>{
        if(_val!==name){
          let n = new node(_val);
          n.parentnode = this;
          n.label = this.label + _val;
          this.nexts.push(n);
          n.findNextNode(arr)
        }
      })
      if(this.nexts.length ==0) {
       
        if(!loop[this.label]){
          if(this.label.length == needlength) 
          {
            strresult .push(this.label);
          }
          loop[this.label] = 1;
        }
      }
  }
} 


/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepStrictEqual(reorganize('aabb').sort(), ['abab', 'baba']);
    assert.deepStrictEqual(reorganize('aaabbbb').sort(), ['bababab']);
    assert.deepStrictEqual(reorganize('aabbbc').sort(), [
      'ababcb',
      'abcbab',
      'bababc',
      'babacb',
      'babcab',
      'babcba',
      'bacbab',
      'bcabab',
      'bcbaba',
      'cbabab',
    ]);
    assert.deepStrictEqual(reorganize('1bbbbb'), []);
    return '通过';
  } catch (ex) {
    return '不通过';
  }
};
