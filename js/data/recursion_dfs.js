/**
 * 深度遍历查找 递归
 * @param {*} tree 树形数据
 * @param {*} target 想要查找的目标
 */
function DFS_Recursion(tree, target) {
  if (tree.value === target) {
    return tree;
  } else {
    if (tree.children && tree.children.length) {
      for (let node of tree.children) {
        const res = DFS_Recursion(node, target);
        if (res) {
          return res;
        }
      }
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

console.log(DFS_Recursion(obj, "C")); // {value: 'C', children: Array(2)}
console.log(DFS_Recursion(obj, "G")); // {value: 'G', children: Array(0)}
