// Array
// 切分数组
const chunk = function(array, size = 1) {
    let length = array.length
    if (length === 0 || size < 1) {
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
// 复制数组
const copy = function(array) {
    return [...array]
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
const drop = function(array, n = 1) {
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
// const head = function(array) {
//     const [first, ...rest] = array
//     return first
// }
// 返回元素在数组中第一次出现的位置，可以设置从指定位置开始查找
const indexOf = function(array, value, from_index = 0) {
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
const join = function(array, separator = ',') {
    return array.join(separator)
}
// 获取数组最后一个元素
const last = function(array) {
    return array[array.length - 1]
}
// 获取数组的第 n 个元素，如果 n 是负数，则返回的是从末尾开始查找的元素
const nth = function(array, n = 0) {
    if (n >= 0) {
        return array[n]
    } else {
        return array[n + array.length]
    }
}
// 删除与给定数组相同元素的所有值
const pullAll = function(array, remove_array) {
    const _remove = function(array, e) {
        let length = array.length
        for (var i = 0; i < length; i++) {
            let index = array.indexOf(e)
            if (index > -1) {
                array.splice(index, 1)
            } else {
                break
            }
        }
    }
    for (var i = 0; i < remove_array.length; i++) {
        let l = remove_array[i]
        _remove(array, l)
    }
    return array
}
// 删除指定位置元素，返回删除元素组成的数组，会修改原数组
const pullAt = function(array, indexes) {
    var res = []
    for (var i = indexes.length - 1; i > -1; i--) {
        var index = indexes[i]
        var r = array.splice(index, 1)
        res.unshift(r[0])
    }
    return res
}
// 翻转数组
const reverse = function(array) {
    let res = []
    for (var i = array.length - 1; i > -1; i--) {
        let a = array[i]
        res.push(a)
    }
    return res
}
// 返回除了第一个元素的数组
const tail = function(array) {
    let res = []
    for (var i = 1; i < array.length; i++) {
        res.push(array[i])
    }
    return res
}
// 返回数组的切片
const take = function(array, n = 1) {
    let res = []
    let l
    if (array.length > n) {
        l = n
    } else {
        l = array.length
    }
    for (var i = 0; i < l; i++) {
        res.push(array[i])
    }
    return res
}
// 返回数组并集
const union = function(a, b) {
    const _unique = function(array) {
        return Array.from(new Set(array))
    }
    let res = []
    for (let i = 0; i < a.length; i++) {
        res.push(a[i])
    }
    for (let i = 0; i < b.length; i++) {
        res.push(b[i])
    }
    return _unique(res)
}
// 数组去重
const uniq = function(array) {
    return Array.from(new Set(array))
}
// 重组数组
const unzip = function(a, b) {
    let res = []
    for (var i = 0; i < a.length; i++) {
        let temp = [a[i], b[i]]
        res.push(temp)
    }
    return res
}
// 对数组进去异或运算
const xor = function(array2, array1) {
    let a = uniq(array1)
    let b = uniq(array2)
    if (a.length > b.length) {
        let l = b.length
    } else {
        let l = a.length
    }
    for (var i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            b = pullAll(b, [a[i]])
        } else {
            b.push(a[i])
        }
    }
    return b
}
// 数组重组
const zip = function(a, b, c) {
    let res = []
    for (var i = 0; i < a.length; i++) {
        let r = [a[i], b[i], c[i]]
        res.push(r)
    }
    return res
}
// 数组重组为对象
const zipObject = function(a, b) {
    let res = {}
    for (var i = 0; i < a.length; i++) {
        res[a[i]] = b[i]
    }
    return res
}
// Collection
// 返回根据函数运算后数组中，各个元素的数量
const countBy = function(array, iteratee) {
    const _countArray = function(array, value) {
        let count = 0
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                count++
            }
        }
        return count
    }
    let resArray = []
    let res = {}
    for (var i = 0; i < array.length; i++) {
        let a = array[i]
        resArray.push(iteratee(a))
    }
    let uniqArray = uniq(resArray)
    for (var i = 0; i < uniqArray.length; i++) {
        let a = uniqArray[i]
        let count = _countArray(resArray, a)
        res[a] = count
    }
    return res
}
// 返回根据函数运算结果，全部返回 true, 则返回 true, 否则返回 false
const every = function(array, predicate) {
    return array.every(predicate)
}
// 返回符合结果的数组
const filter = function(array, predicate) {
    return array.filter(predicate)
}
// 返回符合结果的第一个元素
const find = function(array, predicate) {
    return array.find(predicate)
}
// 遍历数组
const forEach = function(array, iteratee) {
    array.forEach(iteratee)
}
// 数组是否包含元素
const includes = function(array, value) {
    return array.indexOf(value) > -1
}
// 遍历数组返回新数组
const map = function(array, iteratee) {
    return array.map(iteratee)
}
// 返回对数组累加运算的结果
const reduce = function(array, iteratee, accumulator) {
    return array.reduce(iteratee, accumulator)
}
// 返回数组中的一个随机元素
const sample = function(array) {
    const _random = function(n) {
        let r = Math.random() * n
        return Math.floor(r)
    }
    let n = _random(array.length)
    return array[n]
}
// Math
// add
const add = function(a, b) {
    return a + b
}
// divide
const divide = function(a, b) {
    return a / b
}
// max
// const max = function(array) {
//     if (array.length === 0) {
//         return undefined
//     }
//     let m = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > m) {
//             m = array[i]
//         }
//     }
//     return m
// }
// ES 6
const max = function(array) {
    if (array.length === 0) {
        return undefined
    }
    return Math.max(...array)
}
// mean
const mean = function(array) {
    if (array.length === 0) {
        return undefined
    }

    const sum = function(array) {
        let res = 0
        for (let i = 0; i < array.length; i++) {
            res += array[i]
        }
        return res
    }

    let s = sum(array)
    return s / array.length
}
// min
const min = function(array) {
    if (array.length === 0) {
        return undefined
    }
    let m = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < m) {
            m = array[i]
        }
    }
    return m
}
// sum
const sum = function(array) {
    let res = 0
    for (let i = 0; i < array.length; i++) {
        res += array[i]
    }
    return res
}

// const sum = function(...values) {
//     let res = 0
//     for (var val of values) {
//       res += val
//     }
//     return res
// }

// String
// camelCase
const camelCase = function(string) {
    let s = string.toLocaleLowerCase()
    let list = s.split('_')
    for (let i = 1; i < list.length; i++) {
        list[i] = list[i][0].toUpperCase() + list[i].slice(1)
    }
    return list.join('')
}
