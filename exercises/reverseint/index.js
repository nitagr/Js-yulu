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
    var res=0;
    var f=0;
    if(n<0){
       f=1;
       n= -n;
    }

    while(n!=0){
        var r= n %10;;
        n=n/10;
        if(n>0) res= (res+r) * 10;
        else res+=r;


    }
    if(f) return -res;
    else return res;
}

module.exports = reverseInt;
