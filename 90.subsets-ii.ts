/*
 * @lc app=leetcode.cn id=90 lang=typescript
 * @lcpr version=30201
 *
 * [90] 子集 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
    nums.sort();
    let res:number[][]=[];
    let path:number[]=[];
    let traverse=(index:number,nums:number[])=>{
        res.push([...path]);
        for (let i = index; i < nums.length; i++) {
            if(i>index&&nums[i]==nums[i-1]){
                continue
            }
            path.push(nums[i]);
            traverse(i+1,nums);
            path.pop();
        }
    }
    traverse(0,nums);
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

