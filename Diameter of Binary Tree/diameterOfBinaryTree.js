var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  let dfs = (root) => {
    let isBaseCase = root === null;
    if(isBaseCase) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    diameter = Math.max(diameter, (left+right))
    return Math.max(left+1, right+1)
  }
  dfs(root)
  return diameter
};