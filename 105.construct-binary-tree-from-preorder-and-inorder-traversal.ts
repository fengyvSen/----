/*
 * @lc app=leetcode.cn id=105 lang=typescript
 * @lcpr version=30121
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(preorder.length<=0)return null
    if(preorder.length===1)return new TreeNode(preorder[0])
    let root=new TreeNode(preorder[0])
    let rootInoIndex=inorder.indexOf(root.val) //左边长度
    
    console.log(rootInoIndex);
    
    console.log(preorder.slice(1,1+rootInoIndex),inorder.slice(0,rootInoIndex));
    console.log(preorder.slice(rootInoIndex+1,preorder.length),inorder.slice(rootInoIndex+1,inorder.length));
     
    root.left=buildTree(preorder.slice(1,1+rootInoIndex),inorder.slice(0,rootInoIndex))
    root.right=buildTree(preorder.slice(rootInoIndex+1,preorder.length),inorder.slice(rootInoIndex+1,inorder.length))
    return root
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

