var dodrop = function(event) {
    var dt = event.dataTransfer
    var files = dt.files
    var count = files.length
    output(`文件数量：${files.length}\n`)
    for (var i = 0; i < files.length; i++) {
		var content = `
		文件： ${i}
		(${typeof files[i]}) : <${files[i]}> ${files[i].name} ${files[i].size}`
		output(content)
    }
}

var output = function(text) {
    document.querySelector('#id-div-box').textContent += text
}

var bindEvents = function() {
	var box = document.querySelector('#id-div-box')
	box.addEventListener('dragenter', e => {
		box.textContent = ''
		e.stopPropagation()
		e.preventDefault()
	})

	box.addEventListener('dragover', e => {
		e.stopPropagation()
		e.preventDefault()
	})

	box.addEventListener('drop', e => {
		e.stopPropagation()
		e.preventDefault()
     	dodrop(e)
	})
}

var __main = function() {
	bindEvents()
}

__main()
