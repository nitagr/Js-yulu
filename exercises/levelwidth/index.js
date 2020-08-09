// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
 

// function getWidth(root, level)  
// {  
      
//     if(root == null)  
//         return 0;  
          
//     if(level == 1)  
//         return 1;  
                  
//     else if (level > 1)  
//         return getWidth(root.left, level - 1) +  
//                 getWidth(root.right, level - 1);  
// }  

// function height(node)  
// {  
//     if (node == null)  
//         return 0;  
//     else
//     {  
       
//         var lHeight = height(node.left);  
//         var rHeight = height(node.right);  
     
          
//         return (lHeight > rHeight)? (lHeight + 1): (rHeight + 1);  
//     }  
// }  

function levelWidth(root) {
    

}

module.exports = levelWidth;
