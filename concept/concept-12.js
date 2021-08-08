// 12. declare an object and change any property of that object.

//object declaration
var phone = {
    name: 'samsungj7',
    color: 'golden',
    price: 20000
}
   
//changing property
//way-1
phone.color = 'silver';

//way-2
phone['name'] ='samsungA35'

//way-3
var changingPrice = 'price';
phone[changingPrice] = 40000;

console.log(phone);