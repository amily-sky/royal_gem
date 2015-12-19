
//tabs

(function($){				
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;

			showPage = function(i){
				$(tabs).children(".tabs_content").children(".tabs_item").hide();
				$(tabs).children(".tabs_content").children(".tabs_item").eq(i).show();
				$(tabs).children(".tabs_nav").children("li").removeClass("active");
				$(tabs).children(".tabs_nav").children("li").eq(i).addClass("active");
			}

			showPage(0);				

			$(tabs).children(".tabs_nav").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});

			$(tabs).children(".tabs_nav").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};	
})(jQuery);
$(document).ready(function(){
	$(".tabs").lightTabs();
});$(document).ready(function(){
    $("#pull").click(function(){
        $(this).siblings("ul").slideToggle("slow");
    });
		$(".main_nav_dropdown").click(function(e){
			$(this).toggleClass('is_active');
		});
		$(".sign_in").click(function(){
			$('.sign_in_inner').show(100);
		});
		$(".close_btn").click(function(){
			$('.sign_in_inner').hide(100);
		});
		$("select").selectBox();

		$(".product_info tr:even").css('background','#f7f7f7');

		// photo gallery

		$('.small_photo a img').load(function(){
    	var w = $(this).parent().width();
    	var h = $(this).parent().height();
    	var imgW = $(this).width();
    	var imgH = $(this).height();
    	var l = 0;
    	if (imgW>imgH) {
    		
    		$(this).css({
    			'max-width':'auto',
    			'max-height': h
    		});
    		imgW = $(this).width();
    		l = (w-imgW)/2;
    		$(this).css({
    			'left': l
    		});
    	}
    	else if(imgH>imgW){
    		$(this).css({
    			'max-width': w,
    			'max-height': 'auto'
    		});
    	}
    });

    $('.small_photo a').click(function(){
    	if (!$(this).hasClass('active')) {
    		$('.small_photo a').removeClass('active');
    		$(this).addClass('active');
    		$('.big_photo img').attr('src', $(this).attr('href'));
    	};
    	return false;
    });
});

$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//placeholder
	$.support.placeholder = ('placeholder' in document.createElement('input'));

	//bxslider
	$('.bxslider').bxSlider({
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  nextText: 'Onward →',
	  prevText: '← Go back'
	});
 
});

