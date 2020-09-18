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
};

$(function() {
	var h = $(window).height();
	var speed = 200;
	$('.contents').each(function(){
		$(this).css({height:h}
	    );
    });

	$(window).on('scroll',function(){
		var value = $(this).scrollTop();
		$('.fadeDone').each(function(){
			var fadeTop = $(this).offset().top;
			var fadeShow = fadeTop - h/1.1;
			if(value >= fadeShow) {
				$(this).stop().animate({
					opacity: 1
				}, speed);
			}else{
				$(this).stop().animate({
					opacity: 0
				}, speed);
			}
		});
	});
});
