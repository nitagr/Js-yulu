// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

 var s="";
 s+= str[0].toUpperCase();
 var n= str.length;

 for(let i=1; i<n; i++){
   if(str[i-1]==' '){
     s+= str[i].toUpperCase();

   }
   else{
    s+= str[i]
   }
 }
 str= s;

 return str;
}

module.exports = capitalize;
