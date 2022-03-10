const arr1 = [

    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 } ,
    { id: 1, name: '部门1', pid: 0 },
   ]
   
   let arr = Array.from({
       length: 200000
   }, (v,k) => {
       return {
           id: k ,
           pid: k < 10 ? 0: k % 10
       }
   })
   
   function arrayToTree(items) {
        const itemMap = {} // 定义一个map存在节点，get 时O（1）
        const result = []// 转换后结果
        items.forEach((item) => {
            const id = item.id // 当前节点 id
            const pid = item.pid // 当前节点 pid
            if(!itemMap[id]) { // 当前节点未放入map，先添加 children属性
                itemMap[id] = {
                    children: []
                }
            }
   
               // 将当前节点添加到 map,将 children 复制给当前children（）
            itemMap[id] = {
                ...item,
                children: itemMap[id].children
            }
   
            if(pid == 0) { // pid为0时，根节点放入数组
                result.push(itemMap[id])
            } else { 
            // 非根节点，判断一下itemMap 是否已经存在 父节点，不存在先创建
                if(!itemMap[pid]) {
                    itemMap[pid] = {
                        children: []
                    }
                }
                itemMap[pid].children.push(itemMap[id])
            }
        })
        return result
   }
   
   function arrayToTree1(items) {
     const result = [];   // 存放结果集
     const itemMap = {};  // 
       
     // 先转成map存储
     for (const item of items) {
       itemMap[item.id] = {...item, children: []}
     }
     
     for (const item of items) {
       const id = item.id;
       const pid = item.pid;
       const treeItem =  itemMap[id];
       if (pid === 0) {
         result.push(treeItem);
       } else {
         if (!itemMap[pid]) {
           itemMap[pid] = {
             children: [],
           }
         }
         itemMap[pid].children.push(treeItem)
       }
   
     }
     return result;
   }
    
    /**
    * 递归查找，获取children
    */
   const getChildren = (data, result, pid) => {
     for (const item of data) {
       if (item.pid === pid) {
         const newItem = {...item, children: []};
         result.push(newItem);
         getChildren(data, newItem.children, item.id);
       }
     }
   }
   
   /**
   * 转换方法
   */
   const arrayToTree2 = (data, pid) => {
     const result = [];
     getChildren(data, result, pid)
     return result;
   }
    
//    console.time('arrayToTree2_start')
//    arrayToTree2(arr,0)
//    console.timeEnd('arrayToTree2_start')
   
   console.time('arrayToTree_start')
   arrayToTree(arr)
   console.timeEnd('arrayToTree_start')
   
   console.time('arrayToTree1_start')
   arrayToTree1(arr)
   console.timeEnd('arrayToTree1_start')
   
   
   
   