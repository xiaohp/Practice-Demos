// 切分数组
const chunk = function(array, size=1) {
    let length = array.length
    if (length === 0 || size < 1 ) {
        return []
    } else {
        let res = []
        for (let i = 0; i < array.length; i += size) {
            let l = array.slice(i, i + size)
            res.push(l)
        }
        return res
    }
}
// 删除否定值 false, null, 0, "", undefined, NaN
const compact = function(array) {
    var res = []
    for (let i = 0; i < array.length; i++) {
        let a = array[i]
        if (a) {
            res.push(a)
        }
    }
    return res
}
// 返回一个数组，由在 a 数组中不在 b 数组中的元素组成
const difference = function(a, b) {
    let res = []
    for (let i = 0; i < a.length; i++) {
        let l = a[i]
        if (!b.includes(l)) {
            res.push(l)
        }
    }
    return res
}
// 返回从指定位置截取的数组
const drop = function(array, n=1) {
    return array.slice(n)
}
// 拍平数组
// 方法一
// var flatten = function(array) {
//     let res = []
//     for (let i = 0; i < array.length; i++) {
//         let a = array[i]
//         if (Array.isArray(a)) {
//             for (let j = 0; j < a.length; j++) {
//                 let b = a[j]
//                 res.push(b)
//             }
//         } else {
//             res.push(a)
//         }
//     }
//     return res
// }
// 方法二
// var flatten = function(array) {
//     let res = array.reduce(function(a, b) {
//         return a.concat(b)
//     }, [])
//     return res
// }
// 方法三 是二的 ES6 写法
const flatten = list => list.reduce(
    (a, b) => a.concat(b), []
)
// 方法四
// var flatten = function(array) {
//     return Array.prototype.concat(...array)
// }
// 深度拍平数组
// 通过方法三递归调用
const flatten_deep = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten_deep(b) : b), []
)
// 将数组拼成键值对
const from_pairs = function(pairs) {
    let res = {}
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i]
        res[pair[0]] = pair[1]
    }
    return res
}
// 返回数组第一个元素
const head = function(array) {
    return array[0]
}
// 返回元素在数组中第一次出现的位置，可以设置从指定位置开始查找
const indexOf = function(array, value, from_index=0) {
    for (let i = from_index; i < array.length; i++) {
        let a = array[i]
        if (a === value) {
            return i
        }
    }
    return -1
}
// 返回不包含最后一个元素的数组
const initial = function(array) {
    let l = array.length - 1
    return array.slice(0, l)
}
// 数组求交集
const intersection = function(a, b) {
    const _unique = function(array) {
        return Array.from(new Set(array))
    }
    let unique_a = _unique(a)
    let res = []
    for (let i = 0; i < unique_a.length; i++) {
        let ai = unique_a[i]
        if (b.includes(ai)) {
            res.push(ai)
        }
    }
    return res
}
// 将数组拼接成字符串
const join = function(array, separator=',') {
    return array.join(separator)
}
// 获取数组最后一个元素
const last = function(array) {
    return array[array.length - 1]
}
// 获取数组的第 n 个元素，如果 n 是负数，则返回的是从末尾开始查找的元素
const nth = function(array, n=0) {
    if (n >= 0) {
        return array[n]
    } else {
        return array[n + array.length]
    }
}
