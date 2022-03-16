/*
 * @Description: 冒泡排序
 * @Autor: HWK
 * @Date: 2022-03-16 16:03:09
 * @LastEditors: HWK
 * @LastEditTime: 2022-03-16 16:17:18
 */
const array = [1, 4, -8, -3, 6, 12, 9, 8];

function sort(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; i < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

sort(array);
console.log(array);