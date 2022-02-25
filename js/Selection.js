//------Read a Number and Display the week day (Sunday, Monday,...)------//
//------Generates Random number-----------//
var randomNumber = Math.floor(Math.random() * 10) % 7;
//------Switch Case--------//
switch (randomNumber) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
        break;

}


