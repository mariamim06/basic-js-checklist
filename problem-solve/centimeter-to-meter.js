// 2. conversation


function centimeterToMeter (centimeter) {
    var meter = centimeter / 100;
    return meter;
}

var deskLengthCentimeter = 276;
var meter = centimeterToMeter (deskLengthCentimeter);
console.log(meter);