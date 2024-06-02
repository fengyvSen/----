/*
 * @lc app=leetcode.cn id=698 lang=typescript
 * @lcpr version=30202
 *
 * [698] 划分为k个相等的子集
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function canPartitionKSubsets(nums: number[], k: number): boolean {
    let sum=0;
    let n=nums.length
    
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    if(sum%k!=0){
        return false;
    }
    nums.sort((a, b) => b - a);
    let targer=sum/k;
    let bucket:number[]=new Array(k).fill(0);

    let traverse=(numsIndex:number):boolean=>{
        if(numsIndex===n){
            //检查是否满足条件
            for (let i = 0; i < bucket.length; i++) {
                if(bucket[i]!=targer){
                    return false;
                }
            }
            return true;
        }
        // 尝试把球装入盒子
        for (let bucketIndex = 0; bucketIndex < bucket.length; bucketIndex++) {
            // 相等了要放到下个遍历去判断，不算非法：if (bucket[bucketIndex] + nums[numsIndex] >= targer) {
            if (bucket[bucketIndex] + nums[numsIndex] > targer) {
                continue
            }
            bucket[bucketIndex]+=nums[numsIndex];
            //如果剩下都成功装入就是可以了
            if(traverse(numsIndex+1)){
                return true;
            }
            bucket[bucketIndex]-=nums[numsIndex];
        }
        return false;
    }
     return traverse(0);
};
// @lc code=end



/*
// @lcpr case=start
// [4, 3, 2, 3, 5, 2, 1]\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n3\n
// @lcpr case=end

 */

