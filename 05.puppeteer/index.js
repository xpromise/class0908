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

(async () => {
  // 1. 打开浏览器
  const browser = await puppeteer.launch({
    headless: false
  });
  // 2. 新建一个Tab页
  const page = await browser.newPage();
  // 3. 输入网址， 等待页面加载完成
  await page.goto('https://movie.douban.com/cinema/nowplaying/shenzhen/', {
    // 等待页面触发load事件
    waitUntil: 'load'
  });
  // 4. 爬取数据（将数据存储起来）
  const result = await page.evaluate(() => {
    // 在函数中写的代码，最终会在浏览器端运行
    const $lis = $('#nowplaying .lists>li');

    const result = [];

    for (let index = 0; index < $lis.length; index++) {
      const li = $lis[index];

      result.push({
        title: li.dataset.title,
        score: li.dataset.score,
        release: li.dataset.release,
        duration: li.dataset.duration,
        director: li.dataset.director,
        actors: li.dataset.actors,
        img: $(li).find('img').attr('src'),
        url: $(li).find('a').attr('href'),
      })
    }

    return result;
  });

  for (let index = 0; index < result.length; index++) {
    const item = result[index];

    await page.goto(item.url, {
      // 等待页面触发load事件
      waitUntil: 'load'
    });
    
    const res = await page.evaluate(() => {
      // 在函数中写的代码，最终会在浏览器端运行

      const summary = $('[property="v:summary"]').text().trim()
      const video = $('.related-pic-video').attr('href');
  
      return {
        summary,
        video
      };
    });

    item.summary = res.summary;
    item.video = res.video;
  }

  console.log(result);
  

  await browser.close();
})();