const fs = require('fs');

/*
  timers （定时器）
  ...
  poll (I/O)
  check（setImmediate）
  ...
*/

// I/O
/* fs.readFile('./01.async.js', () => {
  console.log('000');
})

setTimeout(() => {
  console.log(111);
});

setImmediate(() => {
  console.log(222);
});

process.nextTick(() => {
  console.log(333);
});

Promise.resolve()
  .then(() => {
    console.log(444);
  })
  .then(() => {
    console.log(555);
  }); */

// console.log(666);

// 6 3 4 5 1 2 0



fs.readFile('./01.async.js', () => {
  console.log('000');

  setTimeout(() => {
    console.log(333);
  });
  
  setImmediate(() => {
    console.log(444);
  });

})

setTimeout(() => {
  console.log(111);
});

setImmediate(() => {
  console.log(222);
});

/*
  setTimeout和setImmediate不一定 setTimeout 先执行
    可能 setImmediate 先执行
*/

// 1 2 0 4 3