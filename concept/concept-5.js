// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition


//case-1: both condition has to be fulfilled
var isDecent = true;
var examMarks = 70;

if (isDecent == true && examMarks >= 80) {  
    console.log('good student')
}
else{
    console.log('need improvement')
}


//case-2: fulfill at least one condition
var goodJob = true;
var ownHome = false;

if (goodJob == true || ownHome == true ) {
    console.log('borolok')
}
