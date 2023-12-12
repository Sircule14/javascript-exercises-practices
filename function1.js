//Function that sum two arrays and return the result

//Setup 

array1 = [1,2,3];
array2 = [10];

function sumArrays(array,array2) {
    return Number(array1.join('')) + Number(array2.join('')); //Join method to join the separate numbers of the arrays
}

console.log(sumArrays(array1,array2))//Print 133 in the terminal
//123 + 10