$(document).ready(function(){
                $.mobile.loading().hide();
		if ($(window).width()>=1280){//Desktop
				$(".article_info").animate({opacity: "1"}, 400);
				$(".article_person").delay(200).animate({opacity: "1"}, 500);
				$(".article_identity").delay(500).animate({opacity: "1"}, 500);
				$(".article_skills").delay(900).animate({opacity: "1"}, 500);
				$(".article_ex").delay(1300).animate({opacity: "1"}, 500);
		}else{//Basic
					var art=$(".container article");
								$(art).eq(0).animate({opacity: "1"}, 200);
			$(window).scroll(function(){
					var st_pos=$(this).scrollTop();
					var num=1;
					while(num<art.length){
						var start=$(art).eq(num).position().top-$(window).height();
						if(st_pos>=start){
								$(art).eq(num).stop().delay(100).animate({opacity: "1"}, 200);
						}
						else if(st_pos<start){
								$(art).eq(num).css("opacity", "0");
						}
						num++;
					}
			});
		}
});