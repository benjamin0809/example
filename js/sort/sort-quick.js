/*
 * @Author: Zhao Guoxiang
 * @Date: 2022-04-06 12:10:15
 * @LastEditors: Zhao Guoxiang
 * @LastEditTime: 2022-05-14 09:51:28
 * @Description: 
 * @Version: 
 * @FilePath: \fple:\Projects\example\js\sort\sort-quick.js
 */
let count = 0
function quickSort(array) {
    if(array.length < 2) {
        return array
    }
    const pivot = array[array.length - 1]
    let left = [], right = []
    for(let i = 0;i < array.length-1; i++) {
        count++
        if(array[i] > pivot) {
            right.push(array[i])
        }
        if(array[i] <= pivot) { 
            left.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function quickSort2(array) {
    if(array.length < 2) {
        return array
    }
    count++
    const pivotIndex = array.length >> 1
    let left = [], right = []
    for(let i = 0;i < array.length; i++) {
        count++
        if(pivotIndex === i) {
            continue
        }
        if(array[i] > array[pivotIndex]) {
            right.push(array[i])
        }
        if(array[i] <= array[pivotIndex]) { 
            left.push(array[i])
        }
    }
    return [...quickSort2(left), array[pivotIndex], ...quickSort2(right)]
}

const sort = (array, left, right) => {
    if(left >= right) {
        return
    }
    let pivot = array[right]
    while(left < right) {
        while(left < right && array[left] <= pivot) {
            left++
        }
        array[right]= array[left] 
    }
}

let count1 = 0
// 快速排序
const quickSort1 = (arr, left, right) => {
	let len = arr.length,
		partitionIndex;
	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
};

const partition = (arr, left, right) => {
	//分区操作
	let pivot = left, //设定基准值（pivot）
		index = pivot + 1;
	for (let i = index; i <= right; i++) {
        count1++
		if (arr[i] < arr[pivot]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, pivot, index - 1);
	return index - 1;
};

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}; 

// let array1 = [3,1,2,6,8,4,5,8,7,4,1,5,6,3,5,4,25,6]
let array1 = [1,2,3,4,5]
console.log(quickSort(array1), count)