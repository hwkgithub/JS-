/*
 * @Description: 数组去重
 * @Autor: HWK
 * @Date: 2022-03-16 16:16:54
 * @LastEditors: HWK
 * @LastEditTime: 2022-03-16 17:33:11
 */
let arr = [1, 23, 1, 1, 1, 3, 23, 5, 6, 7, 9, 9, 8, 5, 5, 5, 5];

function noRepeat(arr) {
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

let arr2 = noRepeat(arr);
console.log(arr2);
