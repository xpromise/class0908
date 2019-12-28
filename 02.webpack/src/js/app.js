/**
 * 主模块
 */
// 引入其他模块内容
import add from './module1';
import { name, age } from './module2';
import mul from './module3';

// 引入css资源(为了让webpack打包这个资源)
import '../css/test1.css';
import '../css/iconfont.css';
import '../less/test1.less';
import '../less/test2.less';

console.log(add(2, 2));
console.log(name, age);
console.log(mul(3, 5));

if (module.hot) {
  // 正常文件一旦变化，是要全部刷新
  // 监视 module1 文件的变化，就会触发后面的函数（其他模块不更新）
  module.hot.accept('./module1', () => {
  });

  module.hot.accept('./module2', () => {
  });

  module.hot.accept('./module3', () => {
  });
}
