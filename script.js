//put outpit in grid squares

let firstNum = '';
let secondNum = '';
let operator = '';
let total = '';
let secondNumToggle = 0;

//experiment
const cells = document.querySelectorAll('.grid-cell');


const displayScreen = document.querySelector('.display');

const displayTextF = document.createElement('p');
displayScreen.appendChild(displayTextF);

const displayTextN = document.createElement('p');
displayScreen.appendChild(displayTextN);

const displayOperator = document.createElement('p');

document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.classList.contains('nmb')) {
        if(secondNumToggle === 0) firstNum += e.target.textContent;
        if(secondNumToggle === 1) secondNum += e.target.textContent;
        displayTextF.textContent = firstNum;
        displayTextN.textContent = secondNum;
    };

    if (e.target.classList.contains('operator')) {
        operator = e.target.textContent;
        secondNumToggle = 1;
        displayScreen.appendChild(displayOperator).textContent = operator;
        console.log(secondNumToggle);
    }

    if (e.target.classList.contains('clear')) {
        firstNum = '';
        operator = '';
        secondNum = '';
        displayTextF.textContent = '';
        displayTextN.textContent = '';
        displayOperator.textContent = '';
    };

    if (e.target.classList.contains('result')) {
        firstNum = operate(firstNum, operator, secondNum);
        secondNum = '';
        operator = '';
        secondNumToggle = 0;
        displayTextF.textContent = firstNum;
        displayTextN.textContent = '';
        displayOperator.textContent = '';
    };
});

function add(a, b) {
    return Number(a) + Number(b);
};

function substract(a, b) {
    return Number(a) - Number(b);
};

function multiply(a, b) {
    return Number(a) * Number(b);
};

function divide(a, b) {
    return Number(a) / Number(b);
};

function operate(fNum, sign, sNum) {
    if(sign === '+') return add(fNum, sNum);
    if(sign === '/') return divide(fNum, sNum);
    if(sign === '*') return multiply(fNum, sNum);
    if(sign === '-') return substract(fNum, sNum);
};

