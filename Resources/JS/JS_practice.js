// Practice Pad for JS 

// Red Box

const redButton = document.getElementById('redBox');
const colorBox = document.getElementById('colorBox');
const whiteButton = document.getElementById('whiteBox');

function changeBoxToRed(event) {
    colorBox.style.backgroundColor = 'red';
}

function changeBoxtoWhite(event) {
    colorBox.style.backgroundColor = 'white';
}

redButton.addEventListener('click', changeBoxToRed);
whiteButton.addEventListener('click', changeBoxtoWhite)

// End of Red Box


// Random Number Generator

const randomNumberButton = document.getElementById('numberGenerator');
const randomNumberTargetText = document.getElementById('ranNum');

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    randomNumberTargetText.innerHTML = ' ' + randomNumber;
}

randomNumberButton.addEventListener('click', generateRandomNumber);


// End of Random Number Generator

// Random Colour Mouseover Section

const multiColorBox1 = document.getElementById('multiColorBox');


// function changeBoxColor(event) {

function randomizer() {
    let randomRGB = Math.floor(Math.random()*255);
    return randomRGB;
}
function multiColorBoxMouseOver() {    
    let redValue = randomizer();
    let greenValue = randomizer();
    let blueValue = randomizer();
    document.getElementById('valueForRed').innerHTML = redValue;
    document.getElementById('valueForGreen').innerHTML = greenValue;
    document.getElementById('valueForBlue').innerHTML = blueValue;
    multiColorBox1.style.backgroundColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
}

multiColorBox1.addEventListener('mouseover', multiColorBoxMouseOver);


//InnerHTML Usage

document.getElementById('innerme').innerHTML = 'I am a string inserted by innerHTML';

//Form Input Section

//Hello Button

const helloButton = document.getElementById('hello');
const helloDiv = document.getElementById('hellodiv');

function printHello(e) {
    e.preventDefault();
    const newChild = helloDiv.appendChild(document.createElement('p'))
    newChild.innerHTML = "Hello!"
}

helloButton.addEventListener('click', printHello)

//End of Hello Button


// Return Input Value Button

const submitTextButton = document.getElementById('submittext');
const returnTextDiv = document.getElementById('returntextdiv');

function submitTextHandler(e) {
    e.preventDefault();
    let inputTextValue = document.getElementById('returntext').value;
    returnTextDiv.innerHTML = inputTextValue;
}

submitTextButton.addEventListener('click', submitTextHandler);

// End of Return Input Value Button

//Import module attempt

import name from './modulepractice';

document.getElementById('modulediv').innerHTML = name;







