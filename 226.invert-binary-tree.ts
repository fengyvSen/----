/*
 * @lc app=leetcode.cn id=226 lang=typescript
 * @lcpr version=30121
 *
 * [226] 翻转二叉树
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

// 遍历解决问题
// function invertTree(root: TreeNode | null): TreeNode | null {
//     invertTree226(root)
//     return root
// };
// function invertTree226(root: TreeNode | null){
//     if(root===null){
//         return null;
//     }
//     invertTree226(root.left)
//     invertTree226(root.right)
//     let temp=root.left
//     root.left=root.right
//     root.right=temp
//  }

//拆解成每个节点翻转，解决问题
function invertTree(root: TreeNode | null): TreeNode | null {
    if(root===null){
        return null;
    }
    let left=invertTree(root.left)
    let right=invertTree(root.right)
    root.left=right
    root.right=left
    return root
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

