/**
 * 主模块
 */
// 引入其他模块内容
// 动态加载
// 一定会分割单独代码
// ES10动态导入
document.getElementById('btn').onclick = function() {
  /*
    不加 webpackPrefetch: true ，是懒加载。 点击按钮时，才去发送请求加载js文件
    加 webpackPrefetch: true， 是预加载。 等待页面其他资源加载完毕，再去偷偷加载js文件。点击按钮时，读取之前偷偷加载的缓存，直接使用
      兼容性问题比较严重
  */
  import(/* webpackChunkName: "module2", webpackPrefetch: true */'./module2')
    .then(({ name, age }) => {
      console.log(name, age);
    })
    .catch(err => {
      console.log(err);
    });
};

console.log('app加载了~');
