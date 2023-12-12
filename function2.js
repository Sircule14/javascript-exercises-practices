//Function 2

//Function to know if the value is a palindrome

function palindromeDet(value) {
    var toString = value.toString(); //Conver the value to a string
    var invert = toString.split('').reverse().join('');
      /* inverString equals...
     1- split('') the strings it's separated on individual characters on an array
     2- reverse () The strings invert his order on the array
     3- join('') join the elements of the array on a single string the argument ('') here means
    dont add characters between elements. */
    return toString === invert;
}

console.log(palindromeDet(121)); //return true
console.log(palindromeDet(123)); //return false