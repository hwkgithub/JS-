/*
 * @Description: 判断图像是否不连续
 * @Autor: HWK
 * @Date: 2022-03-16 16:06:29
 * @LastEditors: HWK
 * @LastEditTime: 2022-03-16 16:08:41
 */

function checkDiscontinuity(sopObj, count) {
    let res = false
    for (let i = 0; i < sopList.length; i++) {
        if (i < sopList.length - 1) {
            const key = sopList[i],
                nextKey = sopList[i + 1]
            if (parseInt(key) + 1 !== parseInt(nextKey)) {
                res = true
                break;
            }
        }
    }
}