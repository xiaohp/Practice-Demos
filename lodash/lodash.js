// 切分数组
var chunk = function(array, size) {
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
