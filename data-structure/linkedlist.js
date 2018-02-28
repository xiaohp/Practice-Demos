// 单个节点
class Node {
	constructor(el) {
		this.element = el
		this.next = null
	}
}
// 链表
class LinkedList {
	constructor() {
		this.head = new Node()
		this._length = 0
	}
	// 链表末尾添加元素
	append(el) {
		// 找到末尾节点
		let n = this.head
		while (n.next !== null) {
			n = n.next
		}
		let node = new Node(el)
		n.next = node
		this._length++
	}
	// 链接开头插入元素
	// 插入在 head 节点后
	prepend(el) {
		let n = this.head
		let node = new Node(el)
		node.next = n.next
		n.next = node
		this._length++
	}
	// 删除第一个元素
	removeFisrt() {
		let n = this.head
		if (this._length > 1) {
			n.next = n.next.next
			this._length--
		}
	}
	// 删除最后一个元素
	removeLast() {
		let n = this.head
		if (this._length > 1) {
			let i = 0
			while (n.next.next !== null) {
				n = n.next
				i++
			}
			n.next = null
			this._length--
		}
	}
	// 获取 index
	indexOf(el) {
		let index = -1
		let n = this.head
		let i = 0
		while (n.next !== null) {
			if (el === n.element) {
				index = i
				break
			}
			n = n.next
			i++
		}
		return index
	}
	// 获取列表长度
	length() {
		return this._length
	}
	// 显示链表内容
	log() {
		let n = this.head.next
		while (n !== null) {
			log(' > ', n.element)
			n = n.next
		}
	}
}


// test
// let list = new LinkedList()
// list.append('a')
// list.append('b')
// list.append('c')
// list.append('d')
// list.append('e')
// list.prepend('first')
// list.removeFisrt()
// list.removeLast()
// list.log()
