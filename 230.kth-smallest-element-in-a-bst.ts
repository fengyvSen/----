/*
 * @lc app=leetcode.cn id=230 lang=typescript
 * @lcpr version=30122
 *
 * [230] 二叉搜索树中第K小的元素
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

let hight:number = 0;
let result:number = 0;

function kthSmallest(root: TreeNode | null, k: number): number {
    hight = 0;
    traverse(root,k)
    return result
};
function traverse(root: TreeNode | null, k: number){
    if(root===null){
        return ;
    }
    traverse(root.left, k)
    hight++
    if (k===hight) {
        result = root.val;
        return;
    }
    traverse(root.right, k)
}
// @lc code=end



/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */

