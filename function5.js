function longestWord(str) {
    var strSplit = str.split(' ');
    var estWord = 0;
    for (var i = 0; i < strSplit.length; i++){
    if (estWord < strSplit[i].length) {
        estWord = strSplit[i].length;
    }
 }
    return estWord;
  }
  
console.log(longestWord("This repo sucks"))