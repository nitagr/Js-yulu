// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    

    var i,j,h=0;
    let mat = new Array(n).fill().map(() => new Array(n).fill(''))
    var startCol=0;
    var endCol=n-1;
    var startRow=0;
    var endRow= n-1;
    
    while(startCol <= endCol && startRow <= endRow){
        for(var i= startCol; i<=endCol; i++){
            mat[startRow][i]= ++h;

        }
        startRow++;

        for (var j = startRow; j <= endRow; j++) {
           mat[j][endCol] = ++h;
          
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
           mat[endRow][i] = ++h;
          
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            mat[i][startCol] = ++h;
            
        }

        startCol++;
    }

   return mat;
}

module.exports = matrix;
