var express = require('express')
var cors = require('cors')
var bodyParse = require('body-parser')
var fs = require('fs')

var app = express()
app.use(cors())
app.use(express.static('static'))
app.use(bodyParse.json())

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

var sendJSON = function (response, object) {
    var data = JSON.stringify(object)
    response.type('json')
    response.send(data)
}

app.get('/todo/all', function(request, response) {
    var data = {
        list: todoList,
    }
    sendJSON(response, data)
})



var server = app.listen(8086, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://192.168.1.139", host, port)
})