var ensure = function(a, b, message) {
    var condition = JSON.stringify(a) === JSON.stringify(b)
    if (!condition) {
        console.log(message, `${a} 不等于 ${b}`)
    }
}

var test_chunk = function() {
    var numbers = [1, 2, 3, 4]
    var list = [1, 2, 3, 4, 5]
    ensure(chunk(numbers, 2), [[1, 2], [3, 4]], 'chunk 测试 1 出错')
    ensure(chunk(list, 3), [[1, 2, 3], [4, 5]], 'chunk 测试 2 出错')
    ensure(chunk(list, 6), [[1, 2, 3, 4, 5]], 'chunk 测试 3 出错')
}

test_chunk()

var test_compact = function() {
    var numbers = [0, 1, false, 2, '', 3]
    ensure(compact(numbers), [1, 2, 3], 'compact 测试 1 出错')
}

test_compact()

var test_difference = function() {
    var a = [1, 2]
    var b = [2, 3]
    ensure(difference(a, b), [1], 'difference 测试 1 出错')
}

test_difference()

var test_drop = function() {
    ensure(drop([1, 2, 3]), [2, 3], 'drop 测试 1 出错')
    ensure(drop([1, 2, 3], 2), [3], 'drop 测试 2 出错')
    ensure(drop([1, 2, 3], 5), [], 'drop 测试 3 出错')
}

test_drop()

var test_flatten = function() {
    ensure(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5], 'flatten 测试 1 出错')
}

test_flatten()

var test_flatten_deep = function() {
    ensure(flatten_deep([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5], 'flatten_deep 测试 1 出错')
}

test_flatten_deep()
