$(document).ready(function(){
		if($(window).width()>=768){//Tablet
				$(".form>h2").fadeIn(300);
				$(".label>ul").delay(300).animate({opacity: "1"}, 300);
				$(".form>form>ul").delay(300).animate({opacity: "1"}, 300);
				$(".btn").delay(600).animate({opacity: "1"}, 300);
				$("iframe").delay(900).animate({opacity: "1"}, 300);
		}else{//Basic
				$(".form>h2").fadeIn(300);
				$(".label>ul").delay(300).animate({opacity: "1"}, 300);
				$(".form>form>ul").delay(300).animate({opacity: "1"}, 300);
				$(".btn").delay(600).animate({opacity: "1"}, 300);
		}
});