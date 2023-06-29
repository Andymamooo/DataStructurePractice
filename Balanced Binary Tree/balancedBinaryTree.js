/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
  let result = true; 
  let dfs = function(root) {
    if(!root) {
      return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right)
    if(Math.abs(right-left) > 1) {
      result = false;
    }
    return Math.max(left,right)+1;
  }
  dfs(root);
  return result;
 };


 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}