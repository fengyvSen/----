/*
 * @lc app=leetcode.cn id=46 lang=typescript
 * @lcpr version=30201
 *
 * [46] 全排列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function permute(nums: number[]): number[][] {
    let res:number[][]=[];
    let path:number[]=[];
    let used=new Array(nums.length).fill(false);
    let n=nums.length;
    let traverse=(nums: number[])=>{
        if(n===path.length){
            res.push([...path]);
        }
        for (let index = 0; index < nums.length; index++) {
            if(!used[index]){
                used[index]=true;
                path.push(nums[index]);
                traverse(nums)
                path.pop();
                used[index]=false;
            }   
        }
    }
    traverse(nums)
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

