/*
 * @Description: 判断图像是否不连续
 * @Autor: HWK
 * @Date: 2022-03-16 16:06:29
 * @LastEditors: HWK
 * @LastEditTime: 2022-03-16 16:12:56
 */

function checkDiscontinuity(arr) {
    let res = false
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            const key = arr[i],
                nextKey = arr[i + 1]
            if (parseInt(key) + 1 !== parseInt(nextKey)) {
                res = true
                break;
            }
        }
    }
}