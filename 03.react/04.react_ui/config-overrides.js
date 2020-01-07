const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  })
);
