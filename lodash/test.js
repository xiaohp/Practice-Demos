var ensure = function(a, b, message) {
    var condition = JSON.stringify(a) === JSON.stringify(b)
    if (!condition) {
        console.log(message, `${a} 不等于 ${b}`)
    }
}

var test_chunk = function() {
    var numbers = [1, 2, 3, 4]
    var list = [1, 2, 3, 4, 5]
    ensure(chunk(numbers, 2), [[1, 2], [3, 4]], 'chunk test 1 error')
    ensure(chunk(list, 3), [[1, 2, 3], [4, 5]], 'chunk test 2 error')
    ensure(chunk(list, 6), [[1, 2, 3, 4, 5]], 'chunk test 3 error')
}

test_chunk()

var test_compact = function() {
    var numbers = [0, 1, false, 2, '', 3]
    ensure(compact(numbers), [1, 2, 3], 'compact test 1 error')
}

test_compact()

var test_difference = function() {
    var a = [1, 2]
    var b = [2, 3]
    ensure(difference(a, b), [1], 'difference test 1 error')
}

test_difference()

var test_drop = function() {
    ensure(drop([1, 2, 3]), [2, 3], 'drop test 1 error')
    ensure(drop([1, 2, 3], 2), [3], 'drop test 2 error')
    ensure(drop([1, 2, 3], 5), [], 'drop test 3 error')
}

test_drop()

var test_flatten = function() {
    ensure(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5], 'flatten test 1 error')
}

test_flatten()

var test_flatten_deep = function() {
    ensure(flatten_deep([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5], 'flatten_deep test 1 error')
}

test_flatten_deep()

var test_from_paris = function() {
    let pairs = [['a', 1], ['b', 2]]
    ensure(from_pairs(pairs), { 'a': 1, 'b': 2 }, 'from_pairs test1 error')
}

test_from_paris()

var test_head = function() {
    ensure(head([1, 2, 3]), 1, 'head test 1 error')
    ensure(head([]), undefined, 'head test 2 error')
}

test_head()

var test_indexOf = function() {
    ensure(indexOf([1, 2, 1, 2], 2), 1, 'indexOf test 1 error')
    ensure(indexOf([1, 2, 1, 2], 2, 2), 3, 'indexOf test 2 error')
}

test_indexOf()

var test_initial = function() {
    ensure(initial([1, 2, 3]), [1, 2], 'initial test 1 error')
}

test_initial()

var test_intersection = function() {
    ensure(intersection([2, 1, 2, 4], [2, 3, 4]), [2, 4], 'intersection test 1 error')
}

test_intersection()

var test_join = function() {
    ensure(join(['a', 'b', 'c'], '~'), 'a~b~c', 'join test 1 error')
    ensure(join(['a', 'b', 'c'], ' '), 'a b c', 'join test 2 error')
    ensure(join(['a', 'b', 'c']), 'a,b,c', 'join test 3 error')
}

test_join()

var test_last = function() {
    ensure(last([1, 2, 3]), 3, 'last test 1 error')
}

test_last()

var test_nth = function() {
    let array = ['a', 'b', 'c', 'd']
    ensure(nth(array, 1), 'b', 'nth test 1 error')
    ensure(nth(array, -2), 'c', 'nth test 2 error')
}
test_nth()

var test_pullAll = function() {
    var array = ['a', 'b', 'c', 'a', 'b', 'c']
    var remove = ['a', 'c']
    ensure(pullAll(array, remove), ['b', 'b'], 'pull test 1 error')
}

test_pullAll()

var test_pullAt = function() {
    var array = ['a', 'b', 'c', 'd']
    ensure(pullAt(array, [1, 3]), ['b', 'd'], 'pullAt test 1 error')
    // console.log('处理后', array)
}

test_pullAt()

var test_reverse = function() {
    var array = [1, 2, 3]
    ensure(reverse(array), [3, 2, 1], 'reverse test 1 error')
}

test_reverse()

var test_tail = function() {
    ensure(tail([1, 2, 3]), [2, 3], 'tail test 1 error')
}

test_tail()

var test_take = function() {
    ensure(take([1, 2, 3]), [1], 'take test 1 error')
    ensure(take([1, 2, 3], 2), [1, 2], 'take test 2 error')
    ensure(take([1, 2, 3], 5), [1, 2, 3], 'take test 3 error')
    ensure(take([1, 2, 3], 0), [], 'take test 4 error')
}

test_take()

var test_union = function() {
    ensure(union([2], [1, 2]), [2, 1], 'union test 1 error')
}

test_union()

var test_uniq = function() {
    ensure(uniq([2, 1, 2]), [2, 1], 'uniq test 1 error')
}

test_uniq()

var test_unzip = function() {
    var a = ['a', 1, true]
    var b = ['b', 2, false]
    ensure(unzip(a, b), [['a', 'b'], [1, 2], [true, false]], 'unzip test 1 error')
}
test_unzip()

var test_xor = function() {
    ensure(xor([2, 1], [2, 3]), [1, 3], 'xor test 1 error')
}
test_xor()

var test_zip = function() {
    var a = ['a', 'b']
    var b = [1, 2]
    var c = [true, false]
    ensure(zip(a, b, c), [['a', 1, true], ['b', 2, false]], 'zip test 1 error')
}

test_zip()

var test_zipObject = function() {
    var a = ['a', 'b']
    var b = [1, 2]
    var obj = {
        a: 1,
        b: 2,
    }
    ensure(zipObject(a, b), obj, 'zipObject test 1 error')
}

test_zipObject()
