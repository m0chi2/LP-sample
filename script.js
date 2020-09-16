var bg = document.getElementById('loader-bg');
var loader = document.getElementById('loader');

bg.classList.remove('hide');
loader.classList.remove('hide');

window.addEventListener('load', stopload);

setTimeout('stopload()',10000);
function stopload(){
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
}