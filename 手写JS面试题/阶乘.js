//for循环
function pow(x, y) {
    let result = 1
    for (let i = 0; i < y; i++) {
        result *= x
    }
    return result
}
console.log(pow(2, 10)) // 1024
//递归(小数值才用递归，不然会造成变量溢出)
function jiecheng(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * jiecheng(num - 1)
    }
}
let a = jiecheng(4)
console.log(a);
