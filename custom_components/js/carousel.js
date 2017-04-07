$(document).ready(function(){
			$("body").on("click", function(event){
				event.preventDefault();
			});

			$("#ticketButton").on("click", function(){
				$("#carouselContent").remove();
				$(".carousel").load("html_components/ticket.html")
			});

			$("#clockButton").on("click", function(){
				$("#carouselContent").remove();
				$(".carousel").load("html_components/clock.html");
			});

			$("#workflowButton").on("click", function(){
				$("#carouselContent").remove();
				$(".carousel").load("html_components/workflow.html");
			});

			$("#bookButton").on("click", function(){
				$("#carouselContent").remove();
				$(".carousel").load("html_components/conhecimento.html");
			});

			$("#chatButton").on("click", function(){
				$("#carouselContent").remove();
				$(".carousel").load("html_components/chat.html");
			});

			$("#donutButton").on("click", function(){
				$("#carouselContent").remove();
				$(".carousel").html("<div id='carouselContent'></div>");
				$(".carousel").load("html_components/dashboard.html");
			});
		});