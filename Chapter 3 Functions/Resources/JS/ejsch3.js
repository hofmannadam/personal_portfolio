
// Minimum function 

const minimumDiv = document.getElementById('minimum');
const submitButton1 = document.getElementById('submitnum1');
const submitButton2 = document.getElementById('submitnum2');
const runFunctionButton = document.getElementById('runfunction');

let num1= null;
let num2= null;

function Submithandler1(e) {
    e.preventDefault();
    num1 = document.getElementById('number1').value;
    minimumDiv.appendChild(document.createElement('p')).innerHTML = `The first number is: ${num1}`;
    return num1
};

submitButton1.addEventListener('click', Submithandler1);

function Submithandler2(e) {
    e.preventDefault();
    num2 = document.getElementById('number2').value;
    minimumDiv.appendChild(document.createElement('p')).innerHTML = `The second number is: ${num2}`;
    return num2
};

submitButton2.addEventListener('click', Submithandler2);


function returnMinimum(num1, num2) {
    if (num2 > num1) {
        return num1
    } else if (num1 === num2) {
        return 'These numbers are equal'
    } else if (num2 < num1) {
        return num2
    }    
}

runFunctionButton.addEventListener('click', runFunction)

function runFunction(e) {
    e.preventDefault();
    minimumDiv.appendChild(document.createElement('p')).innerHTML = `The minimum value between the two submitted numbers is: ${returnMinimum(num1, num2)}`;
};



// isEven function

const recursiveDiv = document.getElementById('recursive');

const isEven = (query) => {
    let initialQuery = query;
    if (initialQuery === 0) {
        return true;
    } else if (initialQuery === 1) {
        return false
    } else {
        return isEven(initialQuery-2);
    }
    }

recursiveDiv.appendChild(document.createElement('p')).innerHTML = `Result: ${isEven(75)}`;

// Bean Counting Function

const beanDiv = document.getElementById('bean');

const beanCounter = (string, targetChar) => {
    let counter = 0;
    for (i=0; i<string.length; i++) {
        if (string[i] === targetChar) {
            counter++
        }
    }
    return `Input Word: ${string}, Input Char: ${targetChar}, Number of Char Incidences: ${counter}`
}

beanDiv.appendChild(document.createElement('p')).innerHTML = beanCounter('Gregarious', 'n');

