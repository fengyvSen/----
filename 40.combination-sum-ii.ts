/*
 * @lc app=leetcode.cn id=40 lang=typescript
 * @lcpr version=30201
 *
 * [40] 组合总和 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort()
    let res:number[][] = [];
    let path:number[] = [];
    let pathSum:number=0;
    let n=candidates.length;
    let traverse=(candidates: number[],start:number)=>{
        if(target===pathSum){
            res.push([...path]);
            return ;
        }
        if(path.length===n){
            return ;
        }
        for(let i=start;i<n;i++){
            if(candidates[i]===candidates[i-1]&&i-1>=start){
                continue;
            }
            if(target<pathSum+candidates[i]){
                continue;
            }

            path.push(candidates[i]);
            pathSum+=candidates[i];
            traverse(candidates,i+1);
            path.pop();
            pathSum-=candidates[i];
        }
    }
    traverse(candidates,0);
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5\n
// @lcpr case=end

 */

