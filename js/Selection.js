//----Selection Problems using If Else-------//
//------Read a single digit number and write the number in word using Case------//
//------Generates Random number between o to 9------------//
var randomNumber = Math.floor(Math.random() * 10);
//------Switch Case--------//
if(randomNumber==1)
console.log("One");
else if(randomNumber==2)
console.log("Two");
else if(randomNumber==3)
console.log("Three");
else if(randomNumber==4)
console.log("Four");
else if(randomNumber==5)
console.log("Five");
else if(randomNumber==6)
console.log("Six")
else if(randomNumber==7)
console.log("Seven")
else if(randomNumber==8)
console.log("Eight")
else
console.log("Nine");

//Read a Number and Display the week day
var randomNumber=Math.floor(Math.random()*10)%7;
if(randomNumber==0)
console.log("Monday");
else if(randomNumber==1)
console.log("Tuesday");
else if(randomNumber==2)
console.log("Wednesday");
else if(randomNumber==3)
console.log("Thursday");
else if(randomNumber==4)
console.log("Friday");
else if(randomNumber==5)
console.log("Saturday");
else
console.log("Sunday");
//----------Display Unit-------------//
let num=8765;
let rand=Math.floor(Math.random()*4)+1;
switch(rand)
{
    case 1:
        let thousand = (num /1000);
        console.log("Thousand : " + Math.floor(thousand));
        break;
    case 2:
        let a=num%1000;
        let hundred = a / 100;
        console.log("Hundreds : " + Math.floor(hundred));
        break;
    case 3:
        let b = num % 100;
        let ten = b/ 10 ;
        console.log("Tens : " + Math.floor(ten)) ;
        break;
    case 4:
        let c=num%10
        let one = c / 1
        console.log("Units : " + Math.floor(one));
        break;
}
//------------Arithmetic Operations------//
//------Enter 3 Numbers do following arithmetic operation and find the one thatis maximum and minimum------//
var a=20;
var b=10;
var c=5;
var x=a+b*c;
var y=c+a/b;
var z=a%b+c;
var t=a*b+c;
const arr=[];
arr.push(x,y,z,t);
console.log("Maximum num : " + Math.max(...arr));
console.log("Maximum num : " + Math.min(...arr));
