/*
 * @lc app=leetcode.cn id=1373 lang=typescript
 * @lcpr version=30122
 *
 * [1373] 二叉搜索子树的最大键值和
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
// 注意：一个单独的节点本身就算搜索二叉树
// function maxSumBST(root: TreeNode | null): number {
//     if (root===null) {
//         return 0;
//     }
//     let sum=0;
//     let leftMaxSum=0,rightMaxSum=0;
//     if(isBST(root,null,null)){
//         sum=Math.max(sum,getBSTSum(root));
//     }
//     // 如果有负数就二叉子树和就不一定是最大的
//     // else{
//     //     leftMaxSum=maxSumBST(root.left);
//     //     rightMaxSum=maxSumBST(root.right);
//     // }
//     leftMaxSum=maxSumBST(root.left);
//     rightMaxSum=maxSumBST(root.right);
//     return Math.max(sum,leftMaxSum,rightMaxSum);
// };
// function isBST(root:TreeNode | null,leftMax:TreeNode | null,rightMax:TreeNode | null):boolean{
//     if(root===null) return true;
//     if(leftMax&&root.val<=leftMax.val || rightMax&&root.val>=rightMax.val){
//         return false;
//     }else if(isBST(root.left,leftMax,root)&&isBST(root.right,root,rightMax)){
//         return true;
//     }else{
//         return false;
//     }
// }

// let sumBSTMap:Map<TreeNode,number>=new Map();

// function getBSTSum(root:TreeNode | null):number {
//     if(root===null){
//         return 0;
//     }
//     let result=0
//     if(sumBSTMap.has(root)){
//         result=sumBSTMap.get(root)||0;
//         return result;
//     }
//     let left:number=sumBSTMap.has(root)?sumBSTMap.get(root.left)||0:getBSTSum(root.left);
//     let right:number=sumBSTMap.has(root)?sumBSTMap.get(root.right)||0:getBSTSum(root.right);
//     return left+right+root.val;
//     // return root.val+getBSTSum(root.left)+getBSTSum(root.right);
// }
function maxSumBST(root: TreeNode | null): number {
    const inf=1<<30;
    let result=0;
    // 遍历并且验证和更新和
    const traverse=(root: TreeNode | null):[boolean,number,number,number]=>{
        if(!root){
            return [true,inf,-inf,0];
        }
        //遍历
        let [lVaild,lLeftMin,lRigthMax,lMaxSum]=traverse(root.left);
        let [rVaild,rLeftMin,rRigthMax,rMaxSum]=traverse(root.right);
        //验证
        if(lVaild&&rVaild&&root.val>lRigthMax&&root.val<rLeftMin){
            let sum=lMaxSum+rMaxSum+root.val;
            result=Math.max(sum,result)
            // return [true,Math.min(root.val,lLeftMin),Math.max(root.val,rRigthMax),sum]
            return [true,Math.min(root.val,lLeftMin),Math.max(root.val,rRigthMax),sum]

        }
        return [false,0,0,0];
    }
    traverse(root);
    return result;
}
// @lc code=end



/*
[4,8,null,6,1,9,null,-5,4,null,null,null,-3,null,10]
// @lcpr case=start
// [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]\n
// @lcpr case=end

// @lcpr case=start
// [4,3,null,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [-4,-2,-5]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,8,3,null,6,3]\n
// @lcpr case=end

 */

