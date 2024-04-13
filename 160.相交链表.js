/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // TypeError: Assignment to constant variable
  // const P1 = new ListNode(-1);
  // P1.next=headA;
  // const P2 = new ListNode(-1);
  // P2.next=headB;
  // while(P1.next!==P2.next){
  //     if(P1.next===null) P1=P2.next;
  //     if(P2.next===null) P2=P1.next;
  //     P1=P1.next;
  //     P2=P2.next;
  // }

  // 下述思路
//   在设计的时候就想当然是.next，实际上P1.next = headB是直接修改了P1最后一位的指针，而不是拼接
//   let P1 = new ListNode(-1);
//   P1.next = headA;
//   let P2 = new ListNode(-1);
//   P2.next = headB;
//   while (P1.next !== P2.next) {
//     if (P1.next === null) P1.next = headB;
//     else P1 = P1.next;
//     if (P2.next === null) P2.next = headA;
//     else P2 = P2.next;

    // P1.next=headB本来就算往前走了一步
    // P1=P1.next;
    // P2=P2.next;


    let P1 =headA;
    let P2 = headB;
    while(P1!==P2){
        if(P1===null) P1=headB;
        else P1=P1.next;
        if(P2===null) P2=headA;
        else P2=P2.next;
    }
    
  return P1;
  //正确答案
  // var getIntersectionNode = function(headA, headB) {
  //     // p1 指向 A 链表头结点，p2 指向 B 链表头结点
  //     let p1 = headA, p2 = headB;
  //     while (p1 !== p2) {
  //         // p1 走一步，如果走到 A 链表末尾，转到 B 链表
  //         if (p1 === null) p1 = headB;
  //         else             p1 = p1.next;
  //         // p2 走一步，如果走到 B 链表末尾，转到 A 链表
  //         if (p2 === null) p2 = headA;
  //         else             p2 = p2.next;
  //     }
  //     return p1;
  // };
  };
//   @lc code=end

