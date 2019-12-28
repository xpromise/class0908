/**
 * 主模块
 */
// 引入其他模块内容
import add from './module1';
import { name, age } from './module2';

import '../css/test1.css';

console.log(add(2, 2));
console.log(name, age);

document.getElementById('box').onclick = function() {
  this.style.backgroundColor = '#F90';
};

if (module.hot) {
  // 正常文件一旦变化，是要全部刷新
  // 监视 module1 文件的变化，就会触发后面的函数（其他模块不更新）
  module.hot.accept('./module1', function() {
    console.log(add(2, 2));
  });

  module.hot.accept('./module2', function() {
    // console.log(add(2, 2));
  });
}
