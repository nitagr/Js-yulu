// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    s1;
    s2;
    constructor(){
        this.s1= new Stack();
        this.s2= new Stack();

    }
    add(val){
        this.s1.push(val);
    }

    remove(){
       while(this.s1.size()>0){
           this.s2.push(this.s1.pop());
       }

       const x= this.s2.pop();

       while(this.s2.size()>0){
          this.s1.push(this.s2.pop());
       }
       return x;
    }

    peek(){
        return this.s1.data[0];
    }
}

module.exports = Queue;
