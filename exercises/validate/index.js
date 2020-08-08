// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent


function validate(node, min = -1000000, max = 1000000) {

   
       
        if (node== null)  
            return true;  
      

        if (node.data < min || node.data > max)  
            return false;  
 
        
           if( validate(node.left, min, node.data-1) &&  validate(node.right, node.data+1, max))
           return true;

           return false;
    }  
      



module.exports = validate;
