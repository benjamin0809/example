class LinkNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this._size = 0
  }
  append (value) {
    const node = new LinkNode(value)
    this._size++
    if (!this.head) {
      this.head = node
      this.tail = node
      return this
    }
    // 最后一个节点（即将变成倒数第二个节点）next指向新节点
    this.tail.next = node
    node.prev = this.tail

    this.tail = node
    return this
  }
  delete (value) {

    let delNode = null
    let curNode = this.head
    while (curNode) {
      // 匹配到当前值 == 节点的值，说明要删除curNode
      if (curNode.value === value) {
        this._size--
        delNode = curNode // 记录当前的节点为删除的节点
        // 删除的节点是头部节点
        if (this.head === delNode) {
          this.head = this.head.next
          if (this.head) {
            this.head.prev = null
          }
          if (delNode === this.tail) {
            this.tail = null
          }
        }
        // 删除的节点是尾部节点
        else if (this.tail === delNode) {
          this.tail = this.tail.prev
          this.tail.next = null
        }
        // 删除的节点是中间节点
        else {
          const prevNode = delNode.prev
          const nextNode = delNode.next
          prevNode.next = nextNode
          nextNode.prev = prevNode
        }

      }
      // 本次遍历结束，当前节点指向下一位
      curNode = curNode.next
    }
    return delNode
  }
  size() {
    return this._size
  }
}




const linkedListInstance = new LinkedList()
linkedListInstance.append('a')
linkedListInstance.append('b')
linkedListInstance.append('c')
linkedListInstance.append('d')
linkedListInstance.append('e')
console.log(linkedListInstance.delete('c'))
console.log(linkedListInstance)