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






