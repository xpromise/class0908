const { override, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');

const { resolve } = require('path');

module.exports = override(
  // 添加 ES7 装饰器语法支持
  // @babel/plugin-proposal-decorators
  addDecoratorsLegacy(),
  addWebpackAlias({
    '$comp': resolve(__dirname, 'src/components'),
  })
);
