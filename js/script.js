$(function() {
	var bg = document.getElementById('loader-bg');
	var loader = document.getElementById('loader');
	bg.classList.remove('hide');
	loader.classList.remove('hide');
});

$(window).on('load', function() {
	stopload();
	setTimeout('stopload()',10000);
	});


function stopload(){
	var bg = document.getElementById('loader-bg');
	var loader = document.getElementById('loader');
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
}
