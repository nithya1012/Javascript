
var a=10;
var a=25;
let b=35;
var a=30;
//FUNCTION
function num() {
    let b=60;
    console.log("inside func",b);
    var a=45;
    var a=55;
    var a=65;
    console.log("inside func",a);
}
//FUNCTION CALL
num()
console.log(a);
//  const pi=3.4;
// console.log(typeof(pi));
//DATATYPE
var pi=3.14;
console.log(typeof(pi));
const c=true;
console.log(typeof(c));
var d="nithya";
console.log(typeof(d));
//ALERT MESSAGE
alert("hey hi!...Howw youu?");
//GET INPUT
prompt("Enter the number",80);
//CONFIRM MESSAGE
confirm("Confirm the mess")
//EXPRESSION
var x=10;
x=x*2;
console.log(x)
//ERROR MESSAGE
console.error("hello");
//WARNING MESSAGE
console.warn("hello");
//GROUP CONTENT
console.group("CSE");
console.log("Royal");
console.log("Loyal");
console.groupEnd();
//DATATYPE CONVERSION
var a=55;
console.log(typeof(a))
console.log(typeof(String(a)));
console.log(Boolean(a))
var a=0;
console.log(Boolean(a));
var a='rkhfn';
console.log(Boolean(a));
//EXPRESSION
var a='3' * '2';
console.log(a);
//CONCATENATION
var a=90
var e='hello'
var d='nithi'
console.log(a+" "+ e+d)
//INCREMENT
var d=40;
--d;
console.log(d);
//ARROW FUNCTION
const arrow = () =>{
    return 10;
 
}
console.log(arrow());
//SWITCH CASE
var a=25;
switch(a) {
    case 4:
    console.log("iam 4")
    case 25:
    console.log("iam 25")
    
    default:
        console.log("none")
        break;
}
//
function ask(question,yes,no){
    if (confirm(question))yes()
    else no()
}
function ok(){
    console.log("ok");
}
function cancel(){
    console.log("cancel")
}
ask('Do u want to continue',cancel,ok);
//CONDITION
var a=25;
var e=35;
const f=(a>e)?"a is lesser than e":
(a<e)? "a is greater than e":
"hello";
console.log(f);