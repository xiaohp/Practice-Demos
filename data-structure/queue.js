// 队列
class Queue {
	constructor() {
		this.data = []
	}
	// 入队
	enqueue(el) {
		this.data.push(el)
	}
	// 出队
	dequeue(el) {
		return this.data.shift()
	}
	// 获取队列长度
	length() {
		return this.data.length
	}
	// 清空队列
	empty() {
		this.data = []
	}
}



// test
// let q = new Queue()
//
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// log('length', q.length())
// log(q.dequeue())
