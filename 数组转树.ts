interface ArrayItem {
  id: number;
  parentId: number | null;
  name: string;
}

interface TreeNode {
  id: number;
  name: string;
  children: TreeNode[];
}

function arrayToTree(items:ArrayItem[]):TreeNode[]{
    const nodeMap=new Map<number,TreeNode>();
    const rootNodes:TreeNode[]=[];

    //创建树节点
    items.forEach(item=>{
        nodeMap.set(item.id,{
            id:item.id,
            name:item.name,
            children:[]
        });
    });

    items.forEach(item=>{
        const node=nodeMap.get(item.id);
        if(item.parentId!==null){
            const parentNade=nodeMap.get(item.parentId);
            if(parentNade){
                parentNade.children.push(node);
            }
        }else{
            rootNodes.push(node);
        }
    })；
    return rootNodes;
}