// 切分数组
var chunk = function(array, size=1) {
    var length = array.length
    if (length === 0 || size < 1 ) {
        return []
    } else {
        var res = []
        for (var i = 0; i < array.length; i += size) {
            var l = array.slice(i, i + size)
            res.push(l)
        }
        return res
    }
}
// 删除否定值 false, null, 0, "", undefined, NaN
var compact = function(array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
        var a = array[i]
        if (a) {
            res.push(a)
        }
    }
    return res
}
// 返回一个数组，由在 a 数组中不在 b 数组中的元素组成
var difference = function(a, b) {
    var res = []
    for (var i = 0; i < a.length; i++) {
        var l = a[i]
        if (!b.includes(l)) {
            res.push(l)
        }
    }
    return res
}
// 返回从指定位置截取的数组
var drop = function(array, n=1) {
    return array.slice(n)
}
