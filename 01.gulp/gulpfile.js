/*
  1. 全局安装
    npm i gulp-cli -g
  2. 本地安装
    npm init -y
    npm i gulp -D
  3. 初始化gulp配置文件：（文件名称固定） gulpfile.js    
    配置文件: 当你运行gulp指令时，读取gulpfile.js配置文件里面的配置，安装里面配置去运行
  4. 定义配置
    - 去插件网找插件  https://gulpjs.com/plugins/
      gulp-xxx
    - 下载插件 
      npm i xxx -D
    - 引入插件    
    - 配置任务
      gulp.task(任务名称, 任务要执行的回调函数)
    - 执行任务
      gulp 任务名称  
*/

// 使用commonjs引入插件
//（所有构建工具都需要使用fs文件读写，而fs在nodejs环境，所以所有构建工具都是基于nodejs平台构建）
const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const eslint = require('gulp-eslint');

// 配置任务
gulp.task('babel', () => {
  // 必须制定return，否则报错
  return gulp
    .src('./src/js/*.js') // 将所有js文件引入到gulp可读流中
    .pipe(
      // 通过pipe方法对可读流数据进行操作
      babel({
        // 将ES6模块化语法编译成Commonjs模块化语法
        // 将ES6其他语法编译成ES5以下语法`
        presets: ['@babel/preset-env']
      })
    )
    .pipe(gulp.dest('./build/js')); // 将可读流数据输出出去
});

gulp.task('browserify', function() {
  return gulp
    .src('./build/js/app.js')
    .pipe(browserify()) // 将Commonjs模块化语法编译成浏览器能识别的语法
    .pipe(rename('built.js')) // 重命名
    .pipe(gulp.dest('./build/js'));
});

/*
  定义eslint配置文件： .eslintrc
  定义eslint忽略文件: .eslintignore
    {
      "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
      },
      "rules": {
        "semi": 2,
        "eqeqeq": 2
      },
    }
  推荐规则：airbnb  eslint-config-airbnb-base
  下载:  npx install-peerdeps --dev eslint-config-airbnb-base
  使用：
    {
      "extends": "airbnb-base/legacy"
    }
*/
gulp.task('eslint', () => {
  return gulp
    .src(['src/js/*.js']) // 检查源代码
    .pipe(eslint()) // 语法检查
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
