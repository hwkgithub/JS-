/*
 * @Description: 冒泡排序
 * @Autor: HWK
 * @Date: 2022-03-16 16:03:09
 * @LastEditors: HWK
 * @LastEditTime: 2022-03-16 17:00:19
 */
var array = [1, 4, -8, -3, 6, 12, 9, 8];

function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; i < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

let arr = sort(array);
console.log(arr);