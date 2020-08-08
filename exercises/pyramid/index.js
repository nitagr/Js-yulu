// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

   

    var space = n-1;
    var st="";

    for(i=1; i<=n; i++){
        for(var j=0; j<space; j++) st+=" ";
        var d= 2*i-1;
        for(var j=0;j<d; j++) st+="#";
        for(var j=0; j<space; j++) st+= " ";
        console.log(st);
        st="";
        console.log("\n");
        space--;

    }
}

module.exports = pyramid;
