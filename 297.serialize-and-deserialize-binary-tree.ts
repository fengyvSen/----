/*
 * @lc app=leetcode.cn id=297 lang=typescript
 * @lcpr version=30121
 *
 * [297] 二叉树的序列化与反序列化
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

/*
 * Encodes a tree to a single string.
 */
let result = "";
function serialize(root: TreeNode | null): string {
  if (root === null) {
    result = result + "#,";
    return result;
  }
  result = result + root.val.toString() + ",";
  serialize(root.left);
  serialize(root.right);
  return result;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    let dataArr = data.split(',')
    let result=deserializeTraverse(dataArr)
    return result
}
function deserializeTraverse(dataArr: Array<String>): TreeNode | null{
    result=""
    let rootVal=dataArr.shift()
    if (dataArr.length<=0 || rootVal === "#") {
      return null;
    }else{
      const root = new TreeNode(Number(rootVal));
      root.left = deserializeTraverse(dataArr);
      root.right = deserializeTraverse(dataArr);
      return root;
    }
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,null,null,4,5]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
