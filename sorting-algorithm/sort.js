// 工具函数，交换数组的值
const swap = function(array, p1, p2) {
    [array[p1], array[p2]] = [array[p2], array[p1]]
}

// 冒泡排序
const bubble_sort = function(array) {
    let length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}

// 选择排序
const selection_sort = function(array) {
    let length = array.length
    for (let i = 0; i < length; i++) {
        let min = i
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min < j
            }
        }
        if (i !== min) {
            swap(array, i, min)
        }
    }
    return array
}

// 插入排序
const insertion_sort = function(array) {
    let length = array.length
    let j
    for (let i = 0; i < length; i++) {
        let value = array[i]
        for ( j = i - 1; j > -1 && array[j] > value; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = value
    }
    return array
}

// 合并排序
// 合并排序工具函数，合并数组
const merge = function(left, right) {
    let res = []
    let index_l = 0
    let index_r = 0
    while (index_l < left.length && index_r < right.length) {
        if (left[index_l] < right[index_r]) {
            res.push(left[index_l])
            index_l++
        } else {
            res.push(right[index_r])
            index_r++
        }
    }
    let remain_left = left.slice(index_l)
    let remain_right = right.slice(index_r)
    return res.concat(remain_left).concat(remain_right)
}

const merge_sort = function(array) {
    if (array.length < 2) {
        return array
    }
    
    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)
    return merge(merge_sort(left), merge_sort(right))
}
// 快速排序
// 快速排序工具函数，完成一轮排序
const partition = function(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (array[i] < pivot) {
            i++
        }
        
        while (array[j] > pivot) {
            j--
        }
        
        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}

const quick_sort = function(array, left, right) {
    if (array.length < 2) {
        return array
    }
    if (typeof left !== 'number') {
        left = 0
    } 
    if (typeof right !== 'number') {
        right = array.length - 1
    }
    let index = partition(array, left, right)
    if (left < index - 1) {
        quick_sort(array, left, index - 1)
    }
    if (index < right) {
        quick_sort(array, index, right)
    }
    return array
}
