const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.static('static'))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({
    extended: true,
}))

const todoList = [
	{
	    id: 1,
	    task: "吃饭",
	},
]

app.get('/', (request, response) => {
    const path = 'index.html'
    const options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data) {
        response.send(data)
    })
})

const todoAdd = (todo) => {
    // 判断是否有数据
    if (todoList.length === 0) {
        todo.id = 1
    } else {
        todo.id = todoList[todoList.length - 1].id + 1
    }
    todoList.push(todo)
    return todo
}

const sendJSON = (response, object) => {
    const data = JSON.stringify(object)
    response.type('json')
    response.send(data)
}

app.get('/todo/all', (request, response) => {
    // console.log('request is', request.body)
    const data = {
        list: todoList,
    }
    sendJSON(response, data)
})

app.post('/todo/add', (request, response) => {
    console.log('request is', request.body)
    const todo = request.body
    const t = todoAdd(todo)
    sendJSON(response, t)
})

const run = (port = 8080, host = '') => {
    const server = app.listen(port, host, () => {
        const address = server.address()
        host = address.address
        port = address.port
        console.log(`已启动服务器，访问地址为 http://${host}:${port}`)
    })
}

if (require.main === module) {
    const port = 8086
    const host = '127.0.0.1'
    run(port, host)
}
