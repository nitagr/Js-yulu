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

    var ff = list.getFirst();
    var ss = list.getFirst();

    while(ff!=null && ss.next!=null && ff.next!=null  && ss!=null){

        ff= ff.next;
        ss = ss.next.next;
        if(ff == ss){
            return true;
        }
    }
    return false;

}

module.exports = circular;
