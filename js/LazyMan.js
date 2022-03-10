class LazyManClass {
  // 维护函数队列
  queue = [];
  constructor(name) {
    this.name = name;
    const fn = () => {
      console.log(`Hi, this is ${name}`);
      this.next();
    };
    // 先入队列
    this.register(fn);
    // 下一个eventLoop开始执行next方法
    setTimeout(() => {
      this.next();
    }, 0);
  }
  sleep(wait) {
    const fn = () => {
      console.log(`sleep ${wait} miles`);
      setTimeout(() => this.next(), wait);
    };
    // 收集一个sleep函数
    this.register(fn);
    return this;
  }
  sleepFirst(wait) {
    const fn = () => {
      console.log(`First sleep ${wait}`);
      setTimeout(() => this.next(), wait);
    };
    // 收集一个sleep函数，并放入队列首位
    this.register(fn, true);
    return this;
  }
  eat(name) {
    const fn = () => {
      console.log(name), this.next();
    };
    this.register(fn);
    return this;
  }
  // 执行队列第一个函数，直到队列为空
  next() {
    const f = this.queue.shift();
    f && f();
  }
  // 收集函数
  register(fn, isFirst) {
    if (isFirst) {
      this.queue.unshift(fn);
    } else {
      this.queue.push(fn);
    }
  }
}
// 定义一个实例
function LazyMan(name) {
  return new LazyManClass(name);
}
LazyMan("benjamin")
  .eat("breakfast")
  .sleep(1000)
  .eat("lunch")
  .sleep(1000)
  .eat("dinner")
  .sleepFirst(3000);
  
//   First sleep 3000
//   Hi, this is benjamin
//   breakfast
//   sleep 1000 miles
//   lunch
//   sleep 1000 miles
//   dinner
  