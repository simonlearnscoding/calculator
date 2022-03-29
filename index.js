
const calculate =
{
    add: (a,b) => a + b,
    subtract: (a,b) => a-b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    calculate(a,b, operator){
                return calculate[operator](a,b);
        }
};

var displayValue = "";
console.log(calculate.calculate(6,2,"multiply"));

//check string for Special chars
function containsSpecialChars(str) {

    const specialChars = ["+", "-", "/", "*"];
    let result = /e/.exec(str);
    for (var i in specialChars) {
        if (str.includes((i))) {
            console.log(i);
        }
    }
}

function splitValue(str) {
    var Numbers = str.split(/[*\-+\/]/)
    for (number in Numbers) {
        console.log(Numbers[number]);
    }}

function getValues(str) {
    splitValue(str);
    containsSpecialChars(str);
}

//split displayvalue by specialchar
//get specialchar
//pass operator based on specialChar

//get buttons
function updateScreen(ok) {
    //alert("updateScreen");
    TextElement = document.getElementsByClassName("screen");
    displayValue += ok.textContent;
    TextElement[0].textContent=displayValue;
    console.log(ok);




};

var Buttons = document.querySelectorAll("div.buttons > button:not([id='=']), div.operators > button ");
console.log(Buttons);
text = document.querySelector(".screen");
var Equals = document.getElementById("=");


Equals.addEventListener('click', function (e) { getValues(displayValue)});
Buttons.forEach((element => element.addEventListener('click', function (e) { updateScreen(e.target)
capture: true})));


