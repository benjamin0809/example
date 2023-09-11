/**
 * 提供了一个数组结构的 data，要求实现一个 query 方法，返回一个新的数组
 * query 方法内部有过滤、排序、分组 等操作，并且支持链式调用
 * 调用最终的 execute 方法返回结果
 * @param {*} list 
 * @returns 
 */
function query (list) {
  this.list = list
  this.queue = []
  this.where = function (cb) {
    this.queue.push(() => {
      this.list = this.list.filter(cb)
    })
    return this
  }
  this.sortBy = function (id) {
    this.queue.push(() => {
      this.list.sort((a, b) => {
        return a.id - b.id
      })
    })
    return this
  }
  this.groupBy = function (name) {
    this.queue.push(() => {
      const map = this.list.reduce((acc, cur) => {
        if (!acc[cur[name]]) {
          acc[cur[name]] = []
        }
        acc[cur[name]].push(cur)
        return acc
      }, {})
      console.log(map)
      this.list = Object.keys(map).map((key) => {
        console.log(map[key])
        return { [name]: key, list: map[key] }
      })
    })
    return this
  }
  this.execute = function () {
    this.queue.forEach(cb => {
      cb()
    })
    return this.list
  }
  return this
}

const list = [{ age: 25, id: 3, name: 'benjamin' }, { age: 5, id: 1, name: 'rose' }, { age: 26, id: 2, name: 'rose' }, { age: 29, id: 4, name: 'benjamin' }, { age: 15, id: 6, name: 'rose' }, { age: 15, id: 7, name: 'benjamin' }]
const result = query(list)
  .where(item => item.age > 18)
  .sortBy('id')
  .groupBy('name')
  .execute();

console.dir(result);
console.dir(JSON.stringify(result));