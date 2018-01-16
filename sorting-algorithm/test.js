const log = console.log.bind(console, '*** debug ***')

const ensure = function(a, b, message) {
    let condition = JSON.stringify(a) === JSON.stringify(b)
    if (!condition) {
        log(message, `${a} 不等于 ${b}`)
    }
}

let a = [4, 15, 6, 49, 2]
let res = [2, 4, 6, 15, 49]

const test_bubble_sort = function() {
    ensure(bubble_sort(a), res, 'bubble_sort test 1 error')
}
// test_bubble_sort()

const test_selection_sort = function() {
    ensure(selection_sort(a), res, 'selection_sort test 1 error')
}
// test_selection_sort()

const test_insertion_sort = function() {
    ensure(insertion_sort(a), res, 'insertion_sort test 1 error')
}
// test_insertion_sort()

const test_merge_sort = function() {
    ensure(merge_sort(a), res, 'merge_sort test 1 error')
}
// test_merge_sort()

const test_quick_sort = function() {
    ensure(quick_sort(a), res, 'quick_sort test 1 error')
}
test_quick_sort()
