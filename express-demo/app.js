var express = require('express')
var cors = require('cors')
var bodyParse = require('body-parser')
var fs = require('fs')

var app = express()
app.use(cors())
app.use(express.static('static'))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({
	extended: true,
}))

var todoList = [
    {
        id: 1,
        task: "吃饭",
    }
]

app.get('/', function(request, response) {
    var path = 'index.html'
    var options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data){
        response.send(data)
    })
})

var todoAdd = function(todo) {
	// 判断是否有数据
	if(todoList.length === 0) {
		todo.id = 1
	} else {
		todo.id = todoList[todoList.length-1].id + 1
	}
	todoList.push(todo)
	return todo
}

var sendJSON = function (response, object) {
    var data = JSON.stringify(object)
    response.type('json')
    response.send(data)
}

app.get('/todo/all', function(request, response) {
	// console.log('request is', request.body)
    var data = {
        list: todoList,
    }
    sendJSON(response, data)
})

app.post('/todo/add', function(request, response) {
	console.log('request is', request.body)
	var todo = request.body
	var t = todoAdd(todo)
	sendJSON(response, t)
})


var server = app.listen(8086, function () {
	var port = server.address().port
	console.log(`已启动服务器，访问地址为 http://192.168.1.139:${port}`)
})
