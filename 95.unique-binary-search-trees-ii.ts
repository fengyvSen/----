/*
 * @lc app=leetcode.cn id=95 lang=typescript
 * @lcpr version=30122
 *
 * [95] 不同的二叉搜索树 II
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
function generateTrees(n: number): Array<TreeNode | null> {
    if(n===0){
        return []
    }
    return traverse(1,n)
};
function traverse(left:number,right:number):Array<TreeNode | null> {
    if(left>right)
        {
            return [null];
        }
    let resultList:Array<TreeNode | null>=[]
    for (let k = left; k <= right; k++) {
        let leftList=traverse(left,k-1);
        let rightList=traverse(k+1,right);
        for(let i =0;i<leftList.length;i++){
            for(let j =0;j<rightList.length;j++)
                {                    
                    resultList.push(new TreeNode(k,leftList[i],rightList[j]))
                }
        }        
    }
    return resultList;
    
}
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

