$(document).ready(function(){
		if ($(window).width()>=1280){
				$(".main_bg").fadeIn(400);
				$(".container>h2>p").eq(0).delay(300).animate({opacity: "1"}, 400);
				$(".container>h2>p").eq(1).delay(550).animate({opacity: "1"}, 400);
				$(".container>h2>p").eq(2).delay(800).animate({opacity: "1"}, 400);
				$(".left>div").delay(900).animate({left: "0px"}, 300);
				$(".left>div>h1").delay(900).animate({left: "30px"}, 300);
				$(".right>div").delay(1200).animate({right: "0px"}, 300);
				$(".btn_menu").delay(1200).animate({right: "30px"}, 300);

                                $(".left>div>h1").mouseenter(function(){
                                        $(".left>div>h1>a>p").animate({top: "100%", opacity: "1"}, 200, "easeOutBounce");
                                });
                                $(".left>div>h1").mouseleave(function(){
                                        $(".left>div>h1>a>p").animate({top: "40%", opacity: "0"}, 200);
                                });

				$(".container").mousemove(function(e){
						var x= e.pageX;
						var y= e.pageY;
						var d_w=($(".container").width())/2; //화면 중앙값
						var d_h=($(".container").height())/2;
						var n_pos;
						var n_pos1;
						var h_pos;
						var h_pos1;
						if(x>=d_w){
								n_pos=x - d_w;
						}
						else if(x<d_w){
								n_pos= -(d_w - x);
						}
						n_pos1=n_pos/60;
						if(y>=d_h){
								h_pos=y - d_h;
						}
						else if(y<d_h){
								h_pos= -(d_h - y);
						}
						h_pos1=h_pos/40;
						$(".container>img").css("transform", "translate("+n_pos1+"px, "+h_pos1+"px)");
				});
		}else{
				$(".main_bg").fadeIn(400);
				$(".container>h2>p").eq(0).delay(300).animate({opacity: "1"}, 400);
				$(".container>h2>p").eq(1).delay(500).animate({opacity: "1"}, 400);
				$(".container>h2>p").eq(2).delay(700).animate({opacity: "1"}, 400);
				$(".btn_menu").delay(900).animate({right: "10px"}, 300);
		}
});