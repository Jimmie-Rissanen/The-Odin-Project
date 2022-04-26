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
    const result = currentOperator(a,b);
    savedValues = [];
    currentValue = result;
    displayValues(result);
}

function clear(){
    currentValue = '';
    currentOperator = null;
    savedValues = [];
    displayValues(currentValue);
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
                percent(savedValues[0]);
                break;
        case 'equals':
            equals(savedValues);
            break;
        case 'clear':
            clear();
            break;
        default:
            break;
        
        }
}
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const percent = (a) => {
    const result = a / 100;
    savedValues = [];
    currentValue = result;
    savedValues.push(result);
    displayValues(result);
}


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