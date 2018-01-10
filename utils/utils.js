var e = function(sel) {
    return document.querySelector(sel)
}

var es = function(sel) {
    return document.querySelectorAll(sel)
}

// 在元素中查找
var find = function(element, selector) {
    return element.querySelector(selector)
}

// 获取子元素在父元素中的 index
var indexOf = function(element, childElement) {
    var nodes = element.children
    var i = Array.prototype.indexOf.call(nodes, childElement)
    return i
}

var log = console.log.bind(console, '**debug** ')

var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var prependHtml = function(element, html) {
    element.insertAdjacentHTML('afterbegin', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
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
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}
// 删除元素
var removeAll = function(selector) {
    var tags = document.querySelectorAll(selector)
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
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
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            reseponseCallback(r)
        }
    }
    r.send(data)
}
