/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.store = {};
    this.keys = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let index = this.keys.indexOf(key);
    if (index < 0) {
        return -1;
    }
    var c = this.keys.splice(index, 1);
    this.keys.push(c[0]);
    return this.store[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let index = this.keys.indexOf(key);
    if (index >= 0) {
        var c = this.keys.splice(index, 1);
        this.keys.push(c[0]);
        this.store[key] = value;
        return;
    }
    if (this.keys.length < this.capacity) {
        this.keys.push(key);
        this.store[key] = value;
    } else {
        var oldKey = this.keys.shift();
        delete this.store[oldKey];
        this.keys.push(key);
        this.store[key] = value;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2)
obj.put(2, 1);
obj.put(1, 1);
let c = obj.get(2);
obj.put(4, 1);
let d = obj.get(1);
let e = obj.get(2);