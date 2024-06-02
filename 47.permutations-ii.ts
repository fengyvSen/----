/*
 * @lc app=leetcode.cn id=47 lang=typescript
 * @lcpr version=30202
 *
 * [47] 全排列 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    nums.sort()
    const res: number[][] = []
    const path: number[] = []
    const n=nums.length
    const used: boolean[] = new Array(n).fill(false)


    let traverse=()=>{
        if(n===path.length){
            res.push([...path])
            return
        }
        for(let i=0;i<n;i++){
            if(nums[i]===nums[i-1]&&!used[i-1]){
                continue;
            }
            if(used[i]){
                continue;
            }
            used[i]=true;
            path.push(nums[i]);
            traverse();
            path.pop();
            used[i]=false;
        }
    }

    traverse();
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */

