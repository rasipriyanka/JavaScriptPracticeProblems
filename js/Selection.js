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