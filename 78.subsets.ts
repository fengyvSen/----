/*
 * @lc app=leetcode.cn id=78 lang=typescript
 * @lcpr version=30122
 *
 * [78] 子集
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function subsets(nums: number[]): number[][] {
    /**
     * 遍历整数数组，并返回所有可能的子集
     * @param nums 整数数组
     * @param index 遍历到的数组下标
     * @param path 可选的数字
     */
    let path:number[]=[];
    let result:number[][]=[];
    let traverse=(nums: number[],start:number):number[][]=>{
        result.push([...path]);
        for (let index = start; index < nums.length; index++) {
            path.push(nums[index]);
            traverse(nums,index+1);
            path.pop();
        }
        return result;
    }
    traverse(nums,0)
    return result;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

