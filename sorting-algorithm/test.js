const log = console.log.bind(console, '*** debug ***')

const ensure = function(a, b, message) {
    let condition = JSON.stringify(a) === JSON.stringify(b)
    if (!condition) {
        log(message, `${a} 不等于 ${b}`)
    }
}

const clone = function(data) {
    return JSON.parse(JSON.stringify(data))
}

let start = [49, 15, 6, 4, 2]
let res = [2, 4, 6, 15, 49]

const test_bubble_sort = function() {
    let a = clone(start)
    ensure(bubble_sort(a), res, 'bubble_sort test 1 error')
}
test_bubble_sort()

const test_selection_sort = function() {
    let a = clone(start)
    ensure(selection_sort(a), res, 'selection_sort test 1 error')
}
test_selection_sort()

const test_insertion_sort = function() {
    let a = clone(start)
    ensure(insertion_sort(a), res, 'insertion_sort test 1 error')
}
test_insertion_sort()

const test_merge_sort = function() {
    let a = clone(start)
    ensure(merge_sort(a), res, 'merge_sort test 1 error')
}
test_merge_sort()

const test_quick_sort = function() {
    let a = clone(start)
    ensure(quick_sort(a), res, 'quick_sort test 1 error')
}
test_quick_sort()
