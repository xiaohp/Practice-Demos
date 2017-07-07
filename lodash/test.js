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
