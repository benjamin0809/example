/**
 * 深度遍历查找
 * @param {*} tree 树形数据
 * @param {*} target 想要查找的目标
 */
function DFS(tree, target) {
  // 模拟栈，管理结点
  let stack = [tree];
  while (stack.length) {
    // 栈顶节点出栈
    let node = stack.pop();
    // 查找到目标，退出
    if (node.value === target) {
      return node;
    }
    if (node.children && node.children.length) {
      // 将候选顶点入栈，进行下一次循环
      stack.push(...node.children.reverse());
    }
  }
}

var obj = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        {
          value: "D",
          children: [
            {
              value: "H",
              children: []
            }
          ]
        },
        {
          value: "E",
          children: []
        }
      ]
    },
    {
      value: "C",
      children: [
        {
          value: "F",
          children: []
        },
        {
          value: "G",
          children: []
        }
      ]
    }
  ]
};

console.log(DFS(obj, "C")); // {value: 'C', children: Array(2)}
console.log(DFS(obj, "G")); // {value: 'G', children: Array(0)}
