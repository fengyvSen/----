/*
 * @lc app=leetcode.cn id=98 lang=typescript
 * @lcpr version=30122
 *
 * [98] 验证二叉搜索树
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

let isValid:boolean=true;

function isValidBST(root: TreeNode | null): boolean {
    isValid=true;
    traverseNumTrees(root,null,null);
    return isValid;
};
// 限定左子树的最大值是 root.val，右子树的最小值是 root.val
function traverseNumTrees(root: TreeNode | null,min: TreeNode | null,max: TreeNode | null):TreeNode | null {
    if(root===null||!isValid) return ;
    
    if (isValid&&min&&min.val>=root.val) {
        isValid=false;
        return;
    }
    if (isValid&&max&&max.val<=root.val) {
        isValid=false;
        return;
    }
    traverseNumTrees(root.left,min,root)
    traverseNumTrees(root.right,root,max)
};

// @lc code=end



/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */

