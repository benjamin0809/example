class LinkNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}
class LRUCache {
  constructor(limit) {
    this.limit = limit || 10
    this.size = 0
    this.head = null
    this.tail = null
    this.map = new Map()
  }

  get(key) {
    const node = this.map.get(key)
    if (this.head === node) {
      return node.value
    }
    return this.map.get(key)
  }

  set(key, value) {
    const node = this.map.get(key)
    if (!node) {

    }
    const prev
    const next
    return this.map.set(key, { prev, value, next })
  }
}


const instance = new LRUCache()

Array.from({ length: 11}, (k,v) => {
  instance.set(v, v)
  console.log(v, v)
})

console.log(instance)