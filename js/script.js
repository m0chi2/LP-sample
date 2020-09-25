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
	$('#nav1').click(function(){
		$('body, html').animate({
			scrollTop: 710
		}, 800);
	});
	$('#nav2').click(function(){
		$('body, html').animate({
			scrollTop: 1950
		}, 800);
	});
	$('#nav3').click(function(){
		$('body, html').animate({
			scrollTop: 4360
		}, 800);
	});
	$('#nav4').click(function(){
		$('body, html').animate({
			scrollTop: 5600
		}, 800);
	});
});

$(function(){
	$(window).scroll(function(){
		$('.fade').each(function(){
			var elemPos = $(this).offset().top,
			     scroll = $(window).scrollTop(),
			     h = $(window).height();
			if (scroll > elemPos - h/1.1){
				$(this).addClass('scroll');
			}else{
				$(this).removeClass('scroll');
			}
		});
		$('.slideRight').each(function(){
			var elemPos = $(this).offset().top,
			    scroll = $(window).scrollTop(),
			    h = $(window).height();
			if (scroll > elemPos - h/1.1){
				$(this).addClass('scroll');
			}else{
				$(this).removeClass('scroll');
			}
		});
		$('.slideLeft').each(function(){
			var elemPos = $(this).offset().top,
			    scroll = $(window).scrollTop(),
			    h = $(window).height();
			if (scroll > elemPos - h/1.1){
				$(this).addClass('scroll');
			}else{
				$(this).removeClass('scroll');
			}
		});
		$(window).scroll(function (){
	    	$('.slideup').each(function(){
	        	var elemPos = $(this).offset().top,
	                scroll = $(window).scrollTop(),
	                h = $(window).height()-300;
	          if (scroll > elemPos - h/1.1){
	            $(this).addClass('slide');
	            }
	        });
	    });
	    $(window).scroll(function(){
	    	$('.feature-box').each(function(){
		    	var elemPos = $(this).offset().top,
				    scroll = $(window).scrollTop(),
				    h = $(window).height();
				if (scroll > elemPos - h/1.1){
					$(this).addClass('active');
		    	};
			});
		});
	});
});

$(function(){
	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
	    autoplaySpeed: 3000,
		asNavFor: '.slider-nav',
	    pauseOnDotshover: false,
	    pauseOnhover: false,
	    lazyLoad: "progressive"
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
	  $(".slider").not('.slick-initialized').slick({});
});