$(document).ready(function() {
	var index = 0;
	
	$("#slideshowMenu").on("click", "li a", function() {
		index = $("#slideshowMenu li a").index(this);		
   		updateSlideshow();   	
	});

	$("#rightArrow").click(function(){
		index++;
		if(index > $('#slideshowMenu li').length - 1)
			index = 0;		
	   	updateSlideshow();	   	
	});
	$("#leftArrow").click(function(){
		index--;
		if(index < 0)
			index = 5;		
	   	updateSlideshow();	   
	});

	function updateSlideshow() {
		$("#slideshowMenu li").removeClass("menuItemActive");
   		$("#slideshowMenu li a").removeClass("btnActive");	
   		$(".slide").removeClass("activeSlide");
	   	$("#slide" + index).addClass("activeSlide");
	   	$("#slideshowMenu li:nth-child(" + (index + 1) + ")").addClass("menuItemActive");
	   	$("#slideshowMenu li:nth-child(" + (index + 1) + ")").children("a").addClass("btnActive");
	}
});