// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array

var classmate = ['ablu', 'bablu', 'cablu', 'dablu', 'mablu', 'fablu', 'gablu', 'hablu', 'iblu', 'jablu'];

//number of array's element
console.log(classmate.length);

//position of mablu
console.log(classmate.indexOf('mablu'));

//wablu is not in the array so its position -1
console.log(classmate.indexOf('wablu'));

//element of specific position 4
console.log(classmate[4]);

//change specific position 4th element
classmate[4] = 'eblu';

//remove last element from array
classmate.pop();

//add element in position last
classmate.push('sablu');

//remove first element from array
classmate.shift();

//add element in position first
classmate.unshift('pablu');

console.log(classmate);

