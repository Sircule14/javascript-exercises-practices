//Function to know the remnaining time of something

function timeTo (remnaining) {
    if (remnaining === 0) {
      return 'Ready';
    } else if (remnaining > 0) {
    return 'not done';
} else {
    'You forgot to set timer.'
}
}

//Test remaining time
console.log(timeTo(0));
//Test with 5 minutes
console.log(timeTo(4));
//Test if dont pass parameter to the function
console.log(timeTo(""));