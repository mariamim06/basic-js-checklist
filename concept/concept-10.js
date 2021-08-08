// 10. you have an array of numbers. display only the numbers bigger than 80

const numbers = [24, 59, 95, 108, 147, 65, 201, 397, 136, 22, 252];

for (i = 0; i < numbers.length; i++) {
    var numbersBiggerThan80 = numbers[i];
    if(numbersBiggerThan80 < 80){
        continue;
    }
    console.log(numbersBiggerThan80);
}