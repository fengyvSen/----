/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 不能直接相等，要先整一个头节点
  // let P=head;
  if (head == null || n == 0) return head;

  // let P=new ListNode(-1);
  // P.next=head;
  // let P2=new ListNode(-1);
  // P2.next=head;
  let dummy = new ListNode(-1);
  dummy.next = head;
  let P = dummy;
  let P2 = dummy;
  if (n == 1) {
    if(dummy.next.next != null){
        while (P.next != null) {
            P2 = P;
            P = P.next;
          }
          P2.next = null;
          return head;
    }
  }

  // 如果想让P2指向n-1，需要先让P1先走1步
  // for(let i=0;i<n-1;i++) {

  for (let i = 0; i <= n ; i++) {
    if (P.next == null && i < n) {
      return head; // 如果 n 大于链表长度，则不需要删除节点，直接返回原链表
    }
    P = P.next;
  }

  while (P != null) {
    console.log(P2.val);
    P = P.next;
    P2 = P2.next;
  }
  P2.next = P2.next.next;
  // 如果输入[1],1的情况,P2会停滞在dummpy上
//   return head;
  return dummy.next;
};
// @lc code=end
