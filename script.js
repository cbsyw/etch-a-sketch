

// create DIVS in container 


const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

//create div grid
for (let i = 0; i < 256; i++) {
    const cellDiv = document.createElement('div');
    cellDiv.className = 'cellDiv';
    container.appendChild(cellDiv);
}

//color div grid

const trueColor = 'black'
container.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('cellDiv')) {
        event.target.style.backgroundColor = trueColor;
    }
});




//rainbow button
//eraser button
//change grid size



//clear all color
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', colorFunction);

function colorFunction() {
    const allCellDiv = document.querySelectorAll('.cellDiv');
    allCellDiv.forEach(cellDiv => {
        cellDiv.style.backgroundColor = 'white';
    });
}








