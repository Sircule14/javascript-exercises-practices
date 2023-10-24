/* A function that allow to know how many comments I post on Linkedin so far */

// Calculate the total of comments so far

const comments = [10,11,9,8,10,5];

function totalCommentsCount(comments){
    let sum = 0;
    for (let i = 0; i < comments.length; i++){
        sum += comments[i];
    }
    return sum;
}

console.log(totalCommentsCount(comments));