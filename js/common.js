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
});