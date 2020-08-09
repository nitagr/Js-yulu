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
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(data){
        this.s1.push(data);
    }

    remove(){
        var x1, x2;
        x1= this.s1.size();
        x2= this.s2.size();

          if(x2==0){
            if(x1 ==0){
                return ;
            }

            while (x1>0){
                var x = this.s1.peek();
                this.s1.pop();
                this.s2.push(x);
                x1= this.s1.size();
            }
        }
        return this.s2.pop();
    }

    peek(){
        var l1, l2;
        l1= this.s1.size();
        l2= this.s2.size();

        if(l1>0){
            return this.s1.data[0];
        }
        return this.s2[l2 -1];
    }
}

module.exports = Queue;
