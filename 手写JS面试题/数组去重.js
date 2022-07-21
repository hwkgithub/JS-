/*
 * @Description: 数组去重
 * @Autor: HWK
 * @Date: 2022-03-16 16:16:54
 * @LastEditors: HWK
 * @LastEditTime: 2022-03-16 17:33:11
 */

/** 
 * @type {*} 
 * splice方法
 * 会让数据的索引变化，不是最优解
 * */
let arr1 = [1, 23, 1, 1, 1, 3, 23, 5, 6, 7, 9, 9, 8, 5, 5, 5, 5];

function noRepeat1(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}

let newArr1 = noRepeat1(arr1);
console.log(newArr1);

/** 
 * @type {*} 
 * filter方法
 * 
 * */
let arr2 = ['apple', 'banana', 'pear', 'apple', 'orange', 'orange'];

let newArr2 = arr2.filter(function (value, index, arr) {
    return arr.indexOf(value) === index;
});

console.log(newArr2);    //["apple", "banana", "pear", "orange"]

/** 
 * @type {*} 
 * ES6 Set()
 * 
 * */
let arr3 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 4, 3, 2, 1, 1, 1];

function noRepeat2(arr3) {
    let newArr = [];
    let myset = new Set(arr3);//利用了Set结构不能接收重复数据的特点
    for (var val of myset) {
        newArr.push(val)
    }
    return newArr;
}
var newArr3 = noRepeat2(arr3)
console.log(newArr3);    //[1, 2, 3, 4, 5]