
// Looping a triangle exercise 1

const parentDiv = document.getElementById('looping');


let triangle = '';
const makeATriangle = () => {
    for (i=0; i<7; i++) {
        triangle += '#';
        parentDiv.appendChild(document.createElement('p')).innerHTML = triangle;
    };

};

makeATriangle();

// Looping a triangle exercise 2

const parentDivX = document.getElementById('loopingX');
const submitXButton = document.getElementById('submitx');
let valueOfX = 0;

function submitXHandler(e) {
    e.preventDefault();
    let valueOfX = document.getElementById('valueofx').value;
        let triangleX = '';
        for (i=0; i<valueOfX; i++) {
            triangleX += '#';
            parentDivX.appendChild(document.createElement('p')).innerHTML = triangleX;
    // } else { 
    //     parentDivX.appendChild(document.createElement('p')).innerHTML ='Please only input number values'
    // }
};
};


submitXButton.addEventListener('click', submitXHandler)





// Fizzbuzz

const pFizzBuzz = document.getElementById('fizzbuzz');

let array = [];

for (i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        array.push(' FizzBuzz')
    } else if (i%3 === 0) {
        array.push(' Fizz')
    } else if (i%5 === 0) {
        array.push(' Buzz')
    } else {
        array.push(' '+i)
    }
}

pFizzBuzz.innerHTML = array;


// Chessboard

// const heightButton = document.getElementById('heightbutton');
// const widtheButton = document.getElementById('widthbutton');

// lengthButton.addEventListener('click', getInputVal)

let width = 8;
let height = 8;

const gridDiv = document.getElementById('grid');

function generateLines(width, height) {
    for (i=0; i<height; i++) {
        let lineConstruct = '';
        if (i%2 === 0) {
            for (j=1; j<= width; j++) {
                if (j%2 === 0) {
                    lineConstruct += ' '
                } else {
                    lineConstruct += '#'
                }
            }
            gridDiv.appendChild(document.createElement('p')).innerHTML = lineConstruct;
    } else {
        for (j=0; j< width; j++) {
            if (j%2 === 0) {
                lineConstruct += ' '
            } else {
                lineConstruct += '#'
            }
        }
        gridDiv.appendChild(document.createElement('p')).innerHTML = lineConstruct;
}
}
}

generateLines(width, height);