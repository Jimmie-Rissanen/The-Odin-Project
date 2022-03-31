const gridSizeRange = document.querySelector('.range');
window.addEventListener('resize', listenForScreenSize);
window.addEventListener('load', listenForScreenSize);

const sketch = document.querySelector('.sketch');

const range = document.querySelector('.range');
window.addEventListener('load', loadGrid);
range.addEventListener('change', updateGrid);

const colorButton = document.querySelector('.color');
colorButton.addEventListener('input', (e)=> {
    colorButton.value = (e.currentTarget.value)
    paint(colorButton.value); 
});

const clearSketch = document.querySelector('.clear');
clearSketch.addEventListener('click', updateGrid);

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', erase);

const paintButton = document.querySelector('.paint');
paintButton.addEventListener('click', () => paint(colorButton.value));


function updateGrid(){
    removeAllChildren(sketch);
    createGrid();
    makeElements();
    paint(colorButton.value);
}

function loadGrid(){
    createGrid();
    makeElements();
    paint(colorButton.value);
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
        e.currentTarget.style.backgroundColor = colorToUse;
    }));
}

function erase(){
    paint('#ffffff');
}

function listenForScreenSize(){
    if(window.innerWidth >= 700){
        gridSizeRange.setAttribute('orient', 'vertical');
    } else if(window.innerWidth < 700){
        gridSizeRange.setAttribute('orient', 'horizontal');
    }
}

function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}