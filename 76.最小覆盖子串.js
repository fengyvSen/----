/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 建立窗口
  const window = new Map();
  const need = new Map();
  for (const i of t) {
    need.set(i, (need.get(i) || 0) + 1);
  }
  let right = 0;
  let left = 0;
  let minStr;
  let valid = 0;

  while (right < s.length) {
    const r = s[right];
    // 扩大窗口
    right++;
    // 更新扩大窗口后的数据
    if (need.has(r)) {
      window.set(r, (window.get(r) || 0) + 1);
      if (window.get(r) === need.get(r)) {
        valid++;
        // console.log(`   valid=${valid}`);
      }
      //   if (valid === need.size) {
      //     minStr =
      //       minStr && minStr.length < right - left
      //         ? minStr
      //         : s.substring(left, right);
      //   }
    }

    console.log(`window: [${left}, ${right})    valid=${valid}`);

    // 什么时候缩小窗口判断错误，以下条件，如果是"ab""b"，就只能给出"ab"

    // 尽量不要列举情况，很可能无法穷举（e.g.下面选的两个条件，实际上都是优化答案而已）
    // 只是判断是否符合题目的要求即可

    // 对窗口理解有误：实际上缩小窗口是为了在**满足题目所给的条件的情况下**，进一步优化答案

    // 缩小窗口<什么时候>
    // if (window.get(r) > need.get(r) || valid === need.size) {
    //   console.log(`   left`);
    //   do {
    //     const l = s[left];
    //     left++;

    //     // vaild要先判断是否存在数据
    //     // 缩小窗口后更新的数据
    //     //  if (window.get(l)===need.get(l)) {
    //     //     valid--;
    //     //     console.log(`   valid=${valid}`);
    //     //  }

    //     if (window.has(l)) {
    //       if (window.get(l) === need.get(l)) {
    //         valid--;
    //         console.log(`   valid=${valid}`);
    //       }
    //       window.set(l, window.get(l) - 1);
    //     }

    //     // left在do里改了，所以要在这里做个判断
    //     // } while (!need.has(s[left]));
    //   } while (left < s.length && !need.has(s[left]));
    //   console.log(`   window: [${left}, ${right})`);
    // }

    while (valid === need.size) {
      minStr =
        minStr && minStr.length < right - left
          ? minStr
          : s.substring(left, right);
        //   console.log(`   minStr: ${minStr}`);
      let l = s[left];
      left++;
      if (need.has(l)) {
        if (window.get(l) === need.get(l)) {
          valid--;
        //   console.log(`   valid=${valid}`);
        }
        window.set(l, window.get(l) - 1);
        // console.log(`   window: [${left}, ${right})`);
      }
    }
  }

  let result = minStr ? minStr : "";

  console.log(` `);
  console.log(`result=${result}`);

  return result;
};
// @lc code=end
