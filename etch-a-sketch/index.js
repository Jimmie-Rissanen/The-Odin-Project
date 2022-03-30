const gridSizeRange = document.querySelector('.range');
window.addEventListener('resize', listenForScreenSize);
window.addEventListener('load', listenForScreenSize);


function listenForScreenSize(){
    if(window.innerWidth >= 700){
    gridSizeRange.setAttribute('orient', 'vertical');
    } else if(window.innerWidth < 700){
        gridSizeRange.setAttribute('orient', 'horizontal');
    }
}