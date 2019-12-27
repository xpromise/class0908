/**
 * 主模块
 */
// 引入其他模块内容
import add from './module1';
import { name, age } from './modules2';
import { mul } from './module3';

console.log(add(1, 2));
console.log(name, age);
console.log(mul(3, 4));
