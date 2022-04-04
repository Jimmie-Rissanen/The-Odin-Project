const greek = document.querySelectorAll('.greek');
const extensionScreen = document.querySelector('.extensionScreen');
const mainScreen = document.querySelector('.mainScreen');
const numbers = document.querySelectorAll('.number')
const calculator = document.querySelector('.calculatorInterface');
const operators = document.querySelectorAll('.operator');


let currentValue = '';
let savedValues = [];
let currentOperator;

operators.forEach(item => item.addEventListener('mousedown', operate));
numbers.forEach(item => item.addEventListener('click', capture));
greek.forEach(button => button.addEventListener('mousedown', displayGreek));


function capture(e){
    const target = e.target.innerText;
    currentValue += target;
    displayValues(currentValue)
}


function equals(list){
    const [a,b] = list;
    console.log(a,b)
    savedValues = [];
    displayValues(currentOperator(a,b));
}


function operate(e){
    savedValues.push(parseInt(currentValue));
    currentValue = '';
    switch(e.currentTarget.classList[2]){
        case 'add':
            currentOperator = add;
            break;
        case 'subtract':
            currentOperator = subtract;
            break;
        case 'divide':
            currentOperator = divide;
            break;
        case 'multiply':
                currentOperator = multiply;
                break;
        case 'percent':
                currentOperator = percent;
                break;
        case 'equals':
            equals(savedValues);
            break;
        default:
            break;
        
        }
}
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => { 
    if(a === 0 || b === 0){
        return 'Error, 0 division';
    }
    return a / b;
}
const percent = (a) => a / 100;


function displayValues(value){
    mainScreen.innerText = value;
}

async function displayGreek(){
    extensionScreen.innerText ='This is Greek...';
    await wait(1000);
    extensionScreen.innerText = '';

}

function wait(milliSec){
    return new Promise(resolve => setTimeout(resolve, milliSec));
}