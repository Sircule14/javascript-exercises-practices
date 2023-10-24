/* A function that allow to know how many comments I post on Linkedin so far */

// Calculate the total of comments so far

const comments = [10,11,9,8,10,5]; //Array that will contain the number of comments

function totalCommentsCount(comments){//The function recives an argument (comments) 
    let sum = 0; // sum will be the total of comments
    for (let i = 0; i < comments.length; i++){ //for loop, i declarated for iterate, while i will be minor than comments length add 1 to i (for iterate)
        sum += comments[i]; //add to sum the valor that indicates de iterative (i) in comments array
    }// for every iteration the value changes, first 10, next 11 until end (comments.length is for this) and add that value to sum
    return sum; //finally return sum 
}

console.log(totalCommentsCount(comments));//console log for confirms that function works