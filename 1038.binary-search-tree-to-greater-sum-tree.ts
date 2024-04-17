/*
 * @lc app=leetcode.cn id=1038 lang=typescript
 * @lcpr version=30122
 *
 * [1038] 从二叉搜索树到更大和树
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
let sum=0;

function bstToGst(root: TreeNode | null): TreeNode | null {
    sum=0;
    root=traverse(root)
    return root;
};
function traverse(root: TreeNode | null): TreeNode | null {
    if(root===null)return;
    traverse(root.right);
    sum=sum+root.val;
    root.val=sum;
    traverse(root.left);
    return root;
}
    // @lc code=end



/*
// @lcpr case=start
// [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n
// @lcpr case=end

// @lcpr case=start
// [0,null,1]\n
// @lcpr case=end

 */

