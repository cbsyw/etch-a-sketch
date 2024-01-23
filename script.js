

// create div in container 


// const container = document.createElement('div');
// container.id = 'container';
// document.body.appendChild(container);

//create div grid



// inject style
var style = document.createElement('style');
style.innerHTML = gridLayout();
document.head.appendChild(style);

// get grid values
function trueGrid(){
    let gridValueTwo = (document.getElementById('gridValue').value)
    return gridValueTwo;
}
let gridQuant =  (document.getElementById('gridValue').value)
let gridMulti = gridQuant * gridQuant

//create grid guides

function gridLayout(){
    let gridStyles = (
        `#container {grid-template-columns: repeat(` + (trueGrid()) + `,`  + `1fr);`
        + 
        `grid-template-rows: repeat(` + (trueGrid()) + `,` + ` 1fr);}`
        )
        return gridStyles;
}

// function to reload grid


gridValue.addEventListener("mouseup", () => {
    window.location.reload()
});


// create grids

for (let i = 0; i < gridMulti; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.className = 'cellDiv';
    container.appendChild(cellDiv);
}



//color div grid

let trueColor = 'default';

function handleMouseover(event) {
    if (event.target.classList.contains('cellDiv')) {

        if (trueColor === 'white'){
        event.target.style.backgroundColor = 'white';}

        if (trueColor === 'rainbow'){
            event.target.style.backgroundColor = getRandomColor();
        }
        if (trueColor === 'default'){
            event.target.style.backgroundColor = userColor();
        }
        
    }
}

function handleMouseup() {
    container.removeEventListener("mouseover", handleMouseover);}

container.addEventListener("mousedown", () => {
    container.addEventListener('mouseover', handleMouseover);
    container.addEventListener("mouseup", handleMouseup);});



// pick a color

const selectColor = document.getElementById('selectColor');
selectColor.addEventListener('click',defaultColor);

document.querySelector('button.opener')
  .addEventListener('click', 
    e => document.querySelector('.btn-invisible').click()
  );

function defaultColor(){
    trueColor = "default";
}

  function userColor(){ color = (document.getElementById('pickedColor').value)
  return color;
}



//rainbow button
const rainbowButton = document.getElementById('rainbowButton');
rainbowButton.addEventListener('click',rainbowFunction);


function rainbowFunction() {
     trueColor = "rainbow";
}

function getRandomColor(){
    const color = '#' + Math.floor(Math.random()*1677721).toString(16)
    return color;
}


//eraser button
const eraserButton = document.getElementById('eraserButton');
eraserButton.addEventListener('click',eraserFunction);

function eraserFunction() {
   return trueColor = 'white'
} 




//clear all color
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', colorFunction);

function colorFunction() {
    const allCellDiv = document.querySelectorAll('.cellDiv');
    allCellDiv.forEach(cellDiv => {
        cellDiv.style.backgroundColor = 'white';
    });
}








