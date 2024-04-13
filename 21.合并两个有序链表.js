/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//   let p1 = list1;
//   let p2 = list2;
//   const first = new ListNode(-1);
//   let node = first;
//   while (p1 != null && p2 != null) {
//     if (p1.val > p2.val) {
//       node.next = p2;
//       p2 = p2.next;
//       node=p2;
//     } else {
//       node.next=p1;
//       p1 = p1.next;
//       node=p1;
//     }
//   }
//   if (p1 == null) {
//     node.next=p1;
//   }
//   if (p2==null) {
//     node.next=p2
//   }
//   return first
// };
var mergeTwoLists = function (list1, list2) {
    let p1 = list1;
    let p2 = list2;
    const first = new ListNode(-1);
    let node = first;
    while (p1 &&p2) {
      if (p1.val > p2.val) {
        node.next = p2;
        p2 = p2.next;
      } else {
        node.next=p1;
        p1 = p1.next;
      }
      node=node.next;
    }
    node.next=p1||p2;
    // return first
    return first.next
};
// @lc code=end
