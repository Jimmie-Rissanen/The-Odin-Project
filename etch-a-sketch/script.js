const gridSizeRange = document.querySelector('.range');
const sketch = document.querySelector('.sketch');
const range = document.querySelector('.range');
const colorButton = document.querySelector('.color');
const clearSketch = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const paintButton = document.querySelector('.paint');
const label = document.querySelector('.label');
let mouseDown = false;

window.addEventListener('load', loadGrid);
range.addEventListener('input', updateGrid);
colorButton.addEventListener('input', (e)=> {
    colorButton.value = (e.currentTarget.value)
    paint(colorButton.value); 
});
clearSketch.addEventListener('click', updateGrid);
eraser.addEventListener('click', erase);
paintButton.addEventListener('click', () => paint(colorButton.value));

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function updateGrid(){
    removeAllChildren(sketch);
    createGrid();
    makeElements();
    changeLabelValue();
    paint(colorButton.value);
}

function loadGrid(){
    createGrid();
    makeElements();
    paint(colorButton.value);
}

function changeLabelValue(){
    label.innerText = `${range.value} / ${range.value}`;
}

function createGrid(){
    sketch.style.gridTemplateColumns = `repeat(${range.value},1fr)`;
    sketch.style.gridTemplateRows = `repeat(${range.value},1fr)`;
}

function makeElements(){
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridItem');
    for(let i = 1; i <= range.value * range.value; i++){
        sketch.appendChild(gridDiv.cloneNode(true));
    }
}

function paint(colorToUse){
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(item => item.addEventListener('mouseover', (e)=>{
        mouseDown ? e.currentTarget.style.backgroundColor = colorToUse:null;
    }));
}

function erase(){
    paint('#ffffff');
}

function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}