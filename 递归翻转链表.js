var reverseMN = function (head, m, n) {
  if (m === 1) {
    reverseN(head, n);
  } else {
    head.next=reverseMN(head.next,m-1,n-1)
    return head
  }
};
var reverseN = function (head, n) {
    if(n===1){
        successor=head.next;
        return head;
    }
    let last=reverseN(head,n-1)
    head.next.next=head;
    head.next=successor;
    return last
};
