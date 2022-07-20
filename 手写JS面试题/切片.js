// arr = [1,2,3,4,5,6,7,8,9]
// 怎么最快的转换成 [[1,2,3],[4,5,6],[7,8,9]]

function chunk(arr, size) {
    var arr = [];
    for (var i = 0; i < arr.length; i = i + size) {
        arr.push(arr.slice(i, i + size))
    }
}