/*
 * @lc app=leetcode.cn id=797 lang=typescript
 * @lcpr version=30122
 *
 * [797] 所有可能的路径
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// function allPathsSourceTarget(graph: number[][]): number[][] {
//     let n=graph.length
//   console.log(graph);
//   let traverse = (graph: number[][], nodeIndex: number): number[][] => {
//     let result: number[][]=[];
//     //找出所有从节点 0 到节点 n-1 的路径并输出,**到n-1**
//     if(graph[nodeIndex].length<=0&&nodeIndex===n-1){
//         result.push([nodeIndex])
//     }else{
//         graph[nodeIndex].forEach((nextNode, nextIndex) => {
//           let temp=traverse(graph, nextNode);
//           if(temp.length<=0&&nodeIndex===n-1){
//             result.push([nodeIndex])
//           }else{
//             temp.forEach(list=>{
//                 result.push([nodeIndex,...list])
//               })
//           }
//         });
//     }
//     return result
//   };
//   let result=traverse(graph,0);
//   return result
// }

function allPathsSourceTarget(graph: number[][]): number[][] {
    let n=graph.length;
    const path:number[]=[];
    const result:number[][]=[];
    let traverse=(graph: number[][],nodeIndex:number)=>{
        path.push(nodeIndex);
        if(nodeIndex===n-1){
            result.push(path.slice())
        }
        for (const nextNodeIndex of graph[nodeIndex]) {
            traverse(graph,nextNodeIndex);
            path.pop();
        }
    }
    traverse(graph,0)
    return result
}

// @lc code=end

/*
// @lcpr case=start
// [[1,2],[3],[3],[]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,3,1],[3,2,4],[3],[4],[]]\n
// @lcpr case=end

 */
