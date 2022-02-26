//------Read a Number and Display the week day (Sunday, Monday,...)------//
//------Generates Random number-----------//
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

