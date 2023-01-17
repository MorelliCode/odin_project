//
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
//
//



const container = document.querySelector('#container');

const createP = document.createElement('p');
const anotherP = document.createElement('p');
const createH3 = document.createElement('h3');
const createH1 = document.createElement('h1');
const createDivs = document.createElement('div');

createP.textContent = "Hey, I'm red!";
createP.style.cssText = 'color: red';
container.appendChild(createP);

createH3.textContent = "I'm a blue h3!";
createH3.style.cssText = 'color: blue';
container.appendChild(createH3);

createDivs.setAttribute('style', 'background: pink; border: solid black');

createH1.textContent = "I'm in a div";
createDivs.appendChild(createH1);

anotherP.textContent = "ME TOO!";
createDivs.appendChild(anotherP);

container.appendChild(createDivs);