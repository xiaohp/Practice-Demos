const e = function(sel) {
    return document.querySelector(sel)
}

const es = function(sel) {
    return document.querySelectorAll(sel)
}

// 在元素中查找
const find = function(element, selector) {
    return element.querySelector(selector)
}

// 获取子元素在父元素中的 index
const indexOf = function(element, childElement) {
    let nodes = element.children
    let i = Array.prototype.indexOf.call(nodes, childElement)
    return i
}

const log = console.log.bind(console, '**debug** ')

const appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

const prependHtml = function(element, html) {
    element.insertAdjacentHTML('afterbegin', html)
}

const bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

const bindAll = function(selector, eventName, callback) {
    let elements = document.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var addClass = function(element, className) {
    element.classList.add(className)
}

var removeClass = function(element, className) {
    element.classList.remove(className)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}
// 找到所有拥有该 class 的元素，并删除该 class
var removeClassAll = function(className) {
    let selector = '.' + className
    let elements = document.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
    	let e = elements[i]
        e.classList.remove(className)
    }
}
// 删除元素
var removeAll = function(selector) {
    let tags = document.querySelectorAll(selector)
    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i]
        tag.remove()
    }
}

var setText = function(element, text) {
    element.textContent = text
}

var setHtml = function(element, html) {
    element.innerHTML = html
}

var setValue = function(element, value) {
    element.value = value
}

var getData = function(element, property) {
    return element.dataset.property
}

var setData = function(element, property, value) {
    element.dataset.property = value
}

var ajax = function(method, path, data, reseponseCallback) {
    let r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
			let res = JSON.parse(r.response)
            reseponseCallback(res)
        }
    }
    r.send(JSON.stringify(data))
}
