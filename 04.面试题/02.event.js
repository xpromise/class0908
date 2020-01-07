class Event {
  constructor() {
    // 初始化存储事件的容器
    this.callbacks = {};
  }
  /**
   * 绑定持续性事件
   */
  on(eventName, callback) {
    /*
      使用对象结构存储事件
        {
          eventName: [callback1, callback2...]
        }
    */
    if (this.callbacks[eventName]) {
      // 有值。 第二次以后
      this.callbacks[eventName].push(callback);
      return;
    }
    // 第一次添加
    this.callbacks[eventName] = [callback];
  }
  /**
   * 绑定一次性事件
   */
  once(eventName, callback) {
    const cb = (...args) => {
      // 触发回调函数
      callback(...args);
      // 触发一次后，解绑事件
      this.off(eventName, cb);
    };
    this.on(eventName, cb);
  }
  /**
   * 解绑事件
   */
  off(eventName, callback) {
    this.callbacks[eventName] = this.callbacks[eventName].filter(
      cb => cb !== callback
    );
  }
  /**
   * 触发事件
   */
  emit(eventName, data) {
    this.callbacks[eventName].forEach(callback => callback(data));
  }
}

// 请定义一个Event函数，实现以下需求
const event = new Event();
event.on('aaa', function() {
  console.log(111);
});
const fn = function() {
  console.log(222);
};
event.on('aaa', fn);

event.once('aaa', function() {
  console.log(333);
});
event.emit('aaa'); // 111 222 333
event.emit('aaa'); // 111 222
event.off('aaa', fn);
event.emit('aaa'); // 111
