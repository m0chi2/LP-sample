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

$(function(){
	$(window).scroll(function(){
		$('.fade').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var h = $(window).height();
			if (scroll > elemPos - h){
				$(this).addClass('scroll');
			}else{
				$(this).removeClass('scroll');
			}
		});
		$('.slideRight').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var h = $(window).height();
			if (scroll > elemPos - h){
				$(this).addClass('scroll');
			}else{
				$(this).removeClass('scroll');
			}
		});
		$('.slideLeft').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var h = $(window).height();
			if (scroll > elemPos - h){
				$(this).addClass('scroll');
			}else{
				$(this).removeClass('scroll');
			}
		});
		$(window).scroll(function (){
	    	$('.slideup').each(function(){
	        	var elemPos = $(this).offset().top,
	            	scroll = $(window).scrollTop(),
	            	windowHeight = $(window).height()-300;
	          if (scroll > elemPos - windowHeight){
	            $(this).addClass('slide');
	            }
	        });
	    });
	});
});
