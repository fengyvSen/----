/*
 * @lc app=leetcode.cn id=912 lang=typescript
 * @lcpr version=30122
 *
 * [912] 排序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

// /**
//  * 归并排序
//  * @param nums 待排序的数字数组
//  * @returns 排序后的数组
//  */
// function sortArray(nums: number[]): number[] {
//   sort(nums, 0, nums.length - 1);
//   return nums;
// }

// /**
//  * 归并排序的递归部分
//  * @param nums 数组
//  * @param low 低位索引
//  * @param high 高位索引
//  */
// function sort(nums: number[], low: number, high: number) {
//   if (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     sort(nums, low, mid);
//     sort(nums, mid + 1, high);
//     merge(nums, low, mid, high);
//   }
// }

// /**
//  * 归并排序的合并部分
//  * @param nums 数组
//  * @param low 低位索引
//  * @param mid 中位索引
//  * @param high 高位索引
//  */
// function merge(nums: number[], low: number, mid: number, high: number) {
//   let temp = [...nums.slice(low, high + 1)]; // 优化：仅复制需要排序的部分,对left，right也跟着改变逻辑
//   let left = 0;
//   let right = mid-low+1;

//   for (let i = low; i <= high; i++) {
//     if (left+low > mid) {
//       nums[i] = temp[right];
//       right++;
//     } else if (right+low > high) {
//       nums[i] = temp[left];
//       left++;
//     } else if (temp[left] <= temp[right]) {
//       nums[i] = temp[left];
//       left++;
//     } else {
//       nums[i] = temp[right];
//       right++;
//     }
//   }
// }

//快速排序
function sortArray(nums: number[]): number[] {
  shuffle(nums);
  console.log(nums);
  
  let partition=(nums:number[],low:number,high:number)=>{
    let pivot = nums[low];
    let left=low+1;
    let right=high;
    while(left<=right){
      //查询左右指针中不符合pivot的数
      while(left<high&&nums[left]<=pivot){
        left++;
      }
      while(right>low&&nums[right]>pivot){
        right--;
      }
      if(left>=right){break;}
      swap(nums,left,right);
    }
    swap(nums,low,right);
    return right;
  }
  let quickSort = (nums: number[], low: number, high: number) => {
    if (low >= high) {
      return;
    }
    let pivot = partition(nums, low, high);
    quickSort(nums, low, pivot - 1);
    quickSort(nums, pivot + 1, high);
  };
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function shuffle(nums: number[]){
  for (let index = 0; index < nums.length; index++) {
    let random = Math.floor(Math.random() * nums.length);
    swap(nums, index, random);
  }
}
function swap(nums: number[], i: number, j: number) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// @lc code=end

/*
// @lcpr case=start
// [5,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,2,0,0]\n
// @lcpr case=end

 */
