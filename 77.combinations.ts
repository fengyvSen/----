/*
 * @lc app=leetcode.cn id=77 lang=typescript
 * @lcpr version=30201
 *
 * [77] 组合
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
//k个数的组合是子集中有k个数的子集
function combine(n: number, k: number): number[][] {
    let res: number[][] = [];
    let path: number[] = [];
    let traverse=(path:number[],start:number)=>{
        if(path.length===k){
            //应该放的是新的数组，而不是引用
            // res.push(path);
            res.push([...path]);
            return;
        }
        for (let item = start; item <= n; item++) {
            path.push(item);
            traverse(path,item+1);
            path.pop();
        }
    }
    traverse(path,1)
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */

