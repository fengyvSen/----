/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start

// 双向链表节点
// class Node{
//     // constructor(key,value){
//     //     this.next
//     //     this.pre
//     //     this.value=value
//     //     this.key=key
//     // }
//     // 默认值
//     constructor(key=0,value=0){
//         this.next=null
//         this.pre=null
//         this.value=value
//         this.key=key
//     }
// }

// // 双向链表
// class DoubleList{
//     constructor(){
//         this.head=new Node()
//         this.tail=new Node()
//         this.size=0

//         this.head.next=this.tail
//         this.tail.pre=this.head
//     }

//     addLast(newNode){
//         newNode.pre=this.tail.pre
//         newNode.next=this.tail
//         this.tail.pre.next=newNode
//         this.tail.pre=newNode
//         this.size++
//     }

//     addFirst(newNode){
//         newNode.next=this.head.pre
//         newNode.pre=this.head
//         this.head.pre.pre=newNode
//         this.head.next=newNode
//         this.size++
//     }

//     remove(removeNode){
//         removeNode.pre.next=removeNode.next
//         removeNode.next.pre=removeNode.pre
//     }

//     removeFirst(){
//         if (this.head.next==this.tail) {
//             return null
//         }
//         let first=this.head.next
//         this.remove(first)
//         return first
//     }

//     size(){
//         return this.size
//     }
// }

// /**
//  * 头部为最少使用，尾部使用最多
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.map = new Map();
//     this.cache = new DoubleList();
//     this.capacity=capacity
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     const node=map.get(key)
//     if(node){
//         return node.value
//     }else{
//         return -1
//     }
// };

// LRUCache.prototype.deleteKey=function(key){
//     caches.remove(this.map.get(key))
//     this.map.delete(key)
// }

// LRUCache.prototype.addRecently=function(key,valiue){
//     const newNode = new Node(key,valiue);
//     this.cache.addFirst(newNode)
//     this.map.set(key,newNode)
// }

// LRUCache.prototype.removeLeastRecently=function(){
//     const deleteNode=this.cache.removeFirst()
//     this.map.delete(deleteNode.key)
// }

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if(this.map.has(key)){
//         this.deleteKey(key)
//     }
//     else if(this.cache.size>=this.capacity){
//         this.removeLeastRecently()
//     }
//     this.addRecently(key, value)
// };

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    // 将 key 变为最近使用
    this.makeRecently(key);
    return this.cache.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // 修改 key 的值
        this.cache.set(key, value);
        // 将 key 变为最近使用
        this.makeRecently(key);
        return;
    }

    if (this.cache.size >= this.cap) {
        // 链表头部就是最久未使用的 key
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
    }
    // 将新的 key 添加链表尾部
    this.cache.set(key, value);
};

/**
 * @param {number} key
 * @return {void}
 */
LRUCache.prototype.makeRecently = function(key) {
    const val = this.cache.get(key);
    // 删除 key，重新插入到队尾
    this.cache.delete(key);
    this.cache.set(key, val);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

