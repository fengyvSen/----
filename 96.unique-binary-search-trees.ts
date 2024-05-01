/*
 * @lc app=leetcode.cn id=96 lang=typescript
 * @lcpr version=30122
 *
 * [96] 不同的二叉搜索树
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=starts
var mark:Array<Array<number>>
function numTrees(n: number): number {
    // mark=new Array(n+1).fill(new Array(n+1))//n+1 ,这样赋值mark[0][0]===mark[1][0]的地址
    mark=new Array(n+1).fill(0).map(()=>new Array(n+1).fill(0))
    return traverseNumTrees(1,n)
};
function traverseNumTrees(left:number,right:number):number {
    // if(left>=right)return 1; left==right//2
    if(left>right)return 1;
    if(mark[left][right]){
        return mark[left][right]
    }
    let res=0
    for (let i = left; i <= right; i++) {
        let ltree=traverseNumTrees(left,i-1)
        let rtree=traverseNumTrees(i+1,right)
        res+=ltree*rtree
    }
    mark[left][right]=res
    return res;
    
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

