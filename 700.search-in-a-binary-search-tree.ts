/*
 * @lc app=leetcode.cn id=700 lang=typescript
 * @lcpr version=30122
 *
 * [700] 二叉搜索树中的搜索
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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root===null){
        return null
    }
    if(root.val===val){
        return root
    }
    let result:TreeNode|null
    if(root.val>val){
        result =searchBST(root.left, val)
    }else{
        result=searchBST(root.right, val)
    }
    return result?result:null
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,7,1,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [4,2,7,1,3]\n5\n
// @lcpr case=end

 */

