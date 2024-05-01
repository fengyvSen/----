/*
 * @lc app=leetcode.cn id=450 lang=typescript
 * @lcpr version=30122
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    
  if (root === null) {
    return null;
  }
  if (root.val === key) {
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }
    let minNode = getMinNode(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }
  else if(root.val>key){
    root.left = deleteNode(root.left, key);
  }
  else{
    root.right = deleteNode(root.right, key);
  }
  return root;
}
function getMinNode(root: TreeNode | null): TreeNode | null {
  let node: TreeNode | null = root;
  while (node.left !== null) node = node.left;
  return node;
}
// @lc code=end

/*
// @lcpr case=start
// [5,3,6,2,4,null,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,7]\n0\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */
