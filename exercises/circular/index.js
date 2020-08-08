// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
const L = require('./linkedlist');
const list = L.LinkedList;
const Node = L.Node;
function circular(list) {
    var curr= this.list.head;
    if(curr==null) return true;

    var currnext= curr.next;
    while (currnext != NULL && currnext != curr)
       currnext = currnext.next;

       return (currnext==curr);


}

module.exports = circular;
