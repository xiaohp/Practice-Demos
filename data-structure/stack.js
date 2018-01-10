// 栈
class Stack {
	constructor() {
		this.data = []
	}
	// 入栈
	push(el) {
		this.data.push(el)
	}
	// 出栈
	pop(el) {
		return this.data.pop()
	}
	// 获取栈长度
	size() {
		return this.data.length
	}
	// 获取栈顶元素
	top() {
		let index = this.data.length - 1
		return this.data[index]
	}
	// 清空栈
	empty() {
		this.data = []
	}
}


// test

// let s = new Stack()
// s.push('a')
// s.push('b')
// log(s.pop())
