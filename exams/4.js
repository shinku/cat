const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 实现一个 arrange 函数，可以进行时间和工作调度
 *
 * --- 说明 ---
 *
 * - 本题需要自己实现测试用例
 * - 具体功能参考下列示例
 * - 在示例中调用到的方法都需要实现
 * - 下面示例中 `>` 表示在控制台中输出 (console.log)
 *
 * --- 示例 ---
 *
 * 示例一:
 * `arrange('William').execute();`
 * > William is notified
 *
 * 示例二:
 * `arrange('William').wait(5).do('commit').execute();`
 * > William is notified
 * 等待 5s...
 * > Start to commit
 *
 * 示例三:
 * `arrange('William').waitFirst(3).do('push').execute();`
 * 等待 3s...
 * > William is notified
 * > Start to push
 *
 */

function arrange(name) {

    let obc = function (_name){
       this.name = _name;
       this.time_1 = [];
       this.time_0 = [];
       this.action = "";
       var self = this;
       this.actionSeq = [];
       this.waitFirst = function(time){
           self.time_0 .push(time);
           return self;
       };
       this.wait = function (time){
           self.time_1.push(time);
           return self;
       }
       this.do = function(action){
           self.action = action;
           return self;
       }
       this.execute = function(){
           let seq = [];
           if(self.time_0.length>=0){
               self.time_0.forEach(item=>{
                   seq.push(()=>new Promise((res)=>{
                       console.log(` 等待  ${item}s ...`) 
                       setTimeout(()=>{
                           res();
                       },parseInt(item)*1000)
                   }))
               })
               
           }
           seq.push(()=>new Promise((res)=>{ console.log(`${self.name} is notified`);res()}))
           if(self.time_1.length>=0){
               self.time_1.forEach(item=>{
                   seq.push(()=>new Promise((res)=>{
                       console.log(` 等待  ${item}s ...`) 
                       setTimeout(()=>{
                           res();
                       },parseInt(item)*1000)
                   }))
               })
               
           }
           seq.push(()=>new Promise((res)=>{ console.log(`Start to ${self.action}`)}));
           //Promise.race(seq)
           //let i = 0;
           doList(seq)
          
       }
   }
   return new obc(name);
 
 }
 doList = async (arr)=>{
   for(var i=0;i<arr.length;i++){
     await arr[i]();
   }
 }

/*******测试部分*******/
module.exports = function doTest() {
    
};
