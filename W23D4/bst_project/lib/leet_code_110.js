// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/



var isBalanced = function (root) {
    if (!root) return true;
    let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
    return heightDifference && isBalanced(root.left) && isBalanced(root.right)
};


let getHeight = function (root) {
    if (!root) return -1;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}



function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}