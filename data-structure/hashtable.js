// 哈希表
class HashTable {
	constructor() {
		this.data = []
		this.size = 101
	}
	// hash 函数, 返回数字
	hash(s) {
		let sum = 0
		for (var i = 0; i < s.length; i++) {
			let c = s[i]
			let n = Math.pow(10, i)
			sum += (c.charCodeAt(0) * n)
		}
		return sum
	}
	// 返回 index
	index(s) {
		let index = this.hash(s) % this.size
		return index
	}
	// 保存元素
	set(key, value) {
		let index = this.index(key)
		let data = this.data
		let result = [key, value]
		// 下标未保存过数据
		if (data[index] === undefined) {
			data[index] = []
		}
		let kvs = data[index]
		for (var i = 0; i < kvs.length; i++) {
			let kv = kvs[i]
			if (key === kv[0]) {
				break
			}
		}
		// 替换或保存数据
		data[index][i] = result
	}
	// 获取元素, 未找到返回 value
	get(key, value) {
		let index = this.index(key)
		let data = this.data
		if (data[index] === undefined) {
			data[index] = []
		}
		let kvs = data[index]
		let v = undefined
		for (var i = 0; i < kvs.length; i++) {
			let kv = kvs[i]
			if (key === kv[0]) {
				v = kv[1]
				break
			}
		}
		// 未找到
		if (v === undefined) {
			v = value
		}
		return v
	}
	// 检查是否保存 key, 返回 布尔值
	has(key) {
		let index = this.index(key)
		let data = this.data
		if (data[index] === undefined) {
			data[index] = []
		}
		var kvs = data[index]
		for (var i = 0; i < kvs.length; i++) {
			let kv = kvs[i]
			if (key === kv[0]) {
				return true
			}
		}
		return false
	}
}


// test
// let table = new HashTable()
// table.set('a', 'hello')
// table.set('b', 'world')
// log('table has a', table.has('a'))
// log('table a value', table.get('a', 'hello'))
