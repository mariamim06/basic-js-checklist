//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number


const numbers = [3, 5, 6, 9, 1, -4, 7, -5, 2, -7, 6];
// console.log(numbers);

for(var i = 0; i< numbers.length; i++){
    var positiveNumbers = numbers [i];
    if(positiveNumbers < 0){
        break; 
    }
   console.log(positiveNumbers);
}
