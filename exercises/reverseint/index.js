// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var sum=0;
   
    var f=0;
    if (n<0){
        n = n *-1;
        f=1;
    }
    while(n>0){
       
        sum = sum * 10 + n%10;
        n = parseInt(n / 10);
    }
   
    if(f) return -sum;
    else return sum
}

module.exports = reverseInt;
