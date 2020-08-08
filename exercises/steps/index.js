// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    var i,j;

    for(i=1; i<=n; i++){
        var sp= n-i;
        for(j=1; j<=i; j++) { 
            console.log("#");
        }
        for(j=1; j<=sp; j++)
        console.log(' ');

        console.log("\n");
    }
}

module.exports = steps;
