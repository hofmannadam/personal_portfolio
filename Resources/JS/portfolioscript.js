// Javascript for the personal portfolio project on codecademy

// Inspirational Quote Generator

const createP = document.createElement('p');
let randomQuoteTextNode = document.createTextNode(randomQuote);
const quoteGeneratorButton = document.getElementById('quoteGenerator');

let randomQuoteArray = ['There is nothing impossible to they who will try. Alexander the Great', 'The bad news is time flies. The good news is youre the pilot. Michael Altshuler', 'Keep your face always toward the sunshine, and shadows will fall behind you. Walt Whitman',
'Success is not final, failure is not fatal: it is the courage to continue that counts. Winston Churchill', 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. Ralph Waldo Emerson']

function randomQuoteGenerator() {
    let randomQuote = randomQuoteArray[Math.floor(Math.random()*5)];
    return randomQuote
}

function buttonClick(event) {
    document.getElementById('quoteTargetBlock').innerHTML = randomQuoteGenerator();
}


quoteGeneratorButton.addEventListener('click', buttonClick);

