/*
 * @lc app=leetcode.cn id=106 lang=typescript
 * @lcpr version=30121
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length<=0) {
        return null
    }
    const root = new TreeNode(postorder[postorder.length-1]);
    const rootInorderIndex=inorder.indexOf(root.val) //左子树的长度
    root.left=buildTree(inorder.slice(0,rootInorderIndex),postorder.slice(0,rootInorderIndex));
    root.right=buildTree(inorder.slice(rootInorderIndex+1,inorder.length),postorder.slice(rootInorderIndex,postorder.length-1))
    return root
};
// @lc code=end



/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

