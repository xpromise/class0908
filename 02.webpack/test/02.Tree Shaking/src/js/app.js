/**
 * 主模块
 */
// 引入其他模块内容
import add from './module1';
import { name } from './module2';

// 样式文件只引入没有使用
import '../css/test1.css';

console.log(add(2, 2));
console.log(name);
