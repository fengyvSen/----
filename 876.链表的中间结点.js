/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let dummy = new ListNode(-1);
    dummy.next=head;
    let P1=dummy;
    let P2=dummy;
    let i=0;
    while(P2.next && P2.next.next){
        i++;
        P1=P1.next;
        P2=P2.next.next;

        console.log("P1"+P1.val);
        console.log("P2"+P2.val);
    }
    console.log(i);
    return P1.next;
};
// @lc code=end

