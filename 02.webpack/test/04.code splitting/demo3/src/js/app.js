/**
 * 主模块
 */
// 引入其他模块内容
import add from './module1';
import $ from 'jquery';

// 动态加载
// 一定会分割单独代码
// ES10动态导入
import(/* webpackChunkName: "module2" */'./module2')
  .then(({ name, age }) => {
    console.log(name, age);
  })
  .catch(err => {
    console.log(err);
  });

  console.log('app');
console.log($);
console.log(add(5, 5));
