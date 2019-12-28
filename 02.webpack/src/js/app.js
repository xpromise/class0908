/**
 * 主模块
 */
// 引入其他模块内容
import add from './module1';
import { name, age } from './module2';
import mul from './module3';

// 引入css资源(为了让webpack打包这个资源)
import '../css/test1.css';
import '../less/test1.less';
import '../less/test2.less';


console.log(add(2, 1));
console.log(name, age);
console.log(mul(3, 5));
console.log(1 === '1');
