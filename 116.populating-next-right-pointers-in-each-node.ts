/*
 * @lc app=leetcode.cn id=116 lang=typescript
 * @lcpr version=30121
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    if(!root) return null    
    root.next=null
    threeNode(root.left,root.right)
    return root
};
function threeNode(leftNode:Node,rightNode:Node) {
    if(!leftNode&&!rightNode) {
        // console.log("leftNode",leftNode,"rightNode",rightNode);
        return
    }else if(leftNode&&!rightNode) {
        // console.log("leftNode",leftNode);

        leftNode.next = null
        threeNode(rightNode.left,rightNode.right)
    }else if(!leftNode&&rightNode) {
        // console.log("rightNode",rightNode);

        rightNode.next=null
        threeNode(leftNode.left,leftNode.right)
    }else {
        // console.log("leftNode",leftNode,"rightNode",rightNode);
        leftNode.next = rightNode
        rightNode.next=null
        threeNode(leftNode.left,leftNode.right)
        threeNode(leftNode.right,rightNode.left)
        threeNode(rightNode.left,rightNode.right)
    }
    
}
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

