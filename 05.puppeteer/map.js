/*
  puppeteer 无头浏览器

  1. 打开浏览器
  2. 新建一个Tab页
  3. 输入网址， 等待页面加载完成
  4. 爬取数据（将数据存储起来）
  5. 关闭浏览器
*/

// 引入
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // 1. 打开浏览器
  const browser = await puppeteer.launch({
    headless: false
  });
  // 2. 新建一个Tab页
  const page = await browser.newPage();
  // 3. 输入网址， 等待页面加载完成
  await page.goto('https://ncov.dxy.cn/ncovh5/view/pneumonia', {
    // 等待页面触发load事件
    waitUntil: 'load'
  });
  // 4. 爬取数据（将数据存储起来）
  const result = await page.evaluate(() => {
    // 在函数中写的代码，最终会在浏览器端运行
    // 中国所有城市的基本数据
    // return window.getListByCountryTypeService1;

    // 中国所有城市的详情数据
    return window.getAreaStat;
  });

  // console.log(result);
  // 数据保存成json文件
  fs.writeFile('city.json', JSON.stringify(result), (err) => {
    if (!err) {
      console.log('文件写入成功~');
    }
  });

  // 关闭浏览器
  await browser.close();
})();