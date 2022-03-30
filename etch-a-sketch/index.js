const gridSizeRange = document.querySelector('.range');
window.addEventListener('resize', listenForScreenSize);
window.addEventListener('load', listenForScreenSize);

const sketch = document.querySelector('.sketch');

const range = document.querySelector('.range');
window.addEventListener('load', loadGrid);
range.addEventListener('change', updateGrid);



function updateGrid(){
    removeAllChildren(sketch);
    createGrid();
    makeElements();
    eventListeners();
}

function loadGrid(){
    createGrid();
    makeElements();
    eventListeners();
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

function eventListeners(){
    const gridItems = document.querySelectorAll('.gridItem');
    const color = document.querySelector('.color').value;
    gridItems.forEach(item => item.addEventListener('mouseover', (e)=>{
        e.currentTarget.style.backgroundColor = color;
    }));
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