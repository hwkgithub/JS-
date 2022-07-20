// 如果改变原数组的长度，返回的新数组长度不会有任何变化，效果如下：
let arr = [1, 2, 3, 4, 5, 6]
let newArr = arr.map((x) => {
    if (x > 4) {
        return x + '个'
    }
})
// console.log(arr);  //(6) [1, 2, 3, 4, 5, 6]
console.log(newArr);  //(6) [undefined, undefined, undefined, undefined, '5个', '6个']

// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = arr.filter((x) => {
//     if (x > 4) {
//         return x + '个'
//     }
// })
// console.log(arr);       //(6) [1, 2, 3, 4, 5, 6]
// console.log(newArr);    //(2)[5,6]