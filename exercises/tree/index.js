// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data= data;
        this.children=[];
    }
    add(data){
         
         let child= new Node(data);
         this.children[0]= child;

    }
    remove(){
       var x= this.children[0];
       this.children.shift();
       return x;
    }
    
}

class Tree {
    constructor(root){
        this.root=null;
    }
    traverseDF(){

    }
    traverseBF(){
        
    }
    
}

module.exports = { Tree, Node };
