// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  var mp= {};
  var mx= 0;
  var maxChar= '';

  for(var ch of str){
      if(mp[ch]) mp[ch]++;
      else mp[ch]=1;


  }
  for(var ch in mp){
     if(mp[ch]> mx){
         mx= mp[ch];
         maxChar= ch;
     }
  }
return maxChar;


}

module.exports = maxChar;
