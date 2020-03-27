
                $(document).ready(function(){
                $.mobile.loading().hide();
                        $(".gnb>h1").eq(0).on("click", function(){
                                $(location).attr("href", "main.html");
                        });
                        $(".gnb>nav>ul>li").eq(0).on("click", function(){
                                $(location).attr("href", "profile.html");
                        });
                        $(".gnb>nav>ul>li").eq(1).on("click", function(){
                                $(location).attr("href", "portfolio.html");
                        });
                        $(".gnb>nav>ul>li").eq(2).on("click", function(){
                                $(location).attr("href", "contact.html");
                        });


                        $(".section_preview").css("display", "none");
                        var page_cnt=0;

                        $(".section_preview>.v_pagenation>li").click(function(){
                                        $(this).siblings("li").children("span").removeAttr('class');
                                        $(this).children("span").addClass('page_selected');
                                        var sel_num=$(this).index();
                                        thumb_cnt=sel_num; 
                                        thumb_act();
                        });

                        $("aside").css("height", "100vh");

                        $(".section_preview>div>a").eq(0).on("click", function(){
                                $(".visual_desc").css("display", "block").animate({width: "100%", height: "100%", borderRadius: "0"}, 400).fadeIn(400);
                                $(".visual_desc>div").eq(0).fadeIn(400);
                                return false;
                        });
                        

                        var web_cnt = 0;//webpage portfolio
                        var web_page= $(".web>li").length; 

						web_img=1;
						while(web_img<=web_page){
							$(".web>li").eq(web_img-1).children(".m_bg").css("background", "url('images/img_m_port0"+web_img+".png') no-repeat center").css("backgroundSize", "cover");
							$(".web>li").eq(web_img-1).children(".web_pic").children("img").attr("src", "images/img_port0"+web_img+".png").attr("alt", "web0"+web_img);
							$(".web>li").eq(web_img).children(".web_desc").children("a").attr("href", "http://youngsfolio0"+web_img+".dothome.co.kr");
							web_img++;
						}

                        var thumb_cnt = 0;
                        var $thumbs = $(".section_preview div a");
                        
                        var thumb_img=1;
                        while(thumb_img<=$thumbs.length){
                                $(".visual_desc>div>img").eq(thumb_img-1).attr("src", "images/img_visual0"+thumb_img+".png").attr("alt", "visual0"+thumb_img);
                                $(".section_preview>div>a").eq(thumb_img-1).css("background", "url('images/img_visual0"+thumb_img+".png') no-repeat center").css("backgroundSize", "cover");
                                thumb_img++;
                        }

                        $(".btn_vprevious").on("click", function(){
                                thumb_cnt++;
                                if(thumb_cnt > $thumbs.length - 1){
                                        thumb_cnt = 0;
                                }
                                thumb_act();
                        });
                        $(".btn_vnext").on("click", function(){
                                thumb_cnt--;
                                if(thumb_cnt < 0){
                                        thumb_cnt = $thumbs.length - 1;
                                }
                                thumb_act();
                        });

                        function thumb_act(){
                            $thumbs.removeAttr('class');
                            var prev_num = thumb_cnt == $thumbs.length - 1 ? 0 : thumb_cnt + 1;
                            var next_num = thumb_cnt == 0 ? $thumbs.length - 1 : thumb_cnt - 1;
                            $(".section_preview>div>a").eq(thumb_cnt).addClass('thumb_center');
                            $(".section_preview>div>a").eq(next_num).addClass('thumb_left');
                            $(".section_preview>div>a").eq(prev_num).addClass('thumb_right');
                            $(".v_pagenation>li").eq(thumb_cnt).children("span").addClass('page_selected');
                            $(".v_pagenation>li").eq(thumb_cnt).siblings("li").children("span").removeAttr('class');
                        $(".section_preview>div>a.thumb_center").on("click", function(){
                                $(".visual_desc").css("display", "block").animate({width: "100%", height: "100%", borderRadius: "0"}, 400).fadeIn(400);
                                $(".visual_desc>div").eq(thumb_cnt).fadeIn(400);
                        });
                        }

                        $(".btn_v").on("click", function(){
                                $(this).parent("div").parent(".visual_desc").animate({width: "1px", height: "1px", borderRadius: "1px"}, 400).fadeOut(400);
                                $(this).parent("div").fadeOut(400);
                        });
                        $(".visual_desc>div").on("click", function(){
                                $(this).fadeOut(400);
                                $(this).parent(".visual_desc").animate({width: "1px", height: "1px", borderRadius: "1px"}, 400).fadeOut(400);
                        });

                        if ($(window).width()>=1280){//Desktop
							$(".gnb>nav>ul>li").mouseenter(function(){
								$(this).css("color", "#606060");
								$(this).children("span").css("color", "#bb3e42");
							});
							$(".gnb>nav>ul>li").mouseleave(function(){
								$(this).css("color", "#2b2627");
								$(this).children("span").css("color", "#a71e22");
							});


						var side_w=$(window).width();
						$(".web").css("width", side_w-240+"px");


								$(".web>li").eq(0).children("h2").fadeIn(400);
								$(".web>li").eq(0).children(".web_pic").delay(300).animate({opacity: "1"}, 400);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("a").delay(1650).animate({opacity: "1"}, 300);

                        $(".btn_wprevious").on("click", function(){
                                web_cnt++;
                                if(web_cnt > web_page - 1){
                                        web_cnt = 0;
                                }
                                d_web_act();
                        });
                        $(".btn_wnext").on("click", function(){
                                web_cnt--;
                                if(web_cnt < 0){
                                        web_cnt = web_page - 1;
                                }
                                d_web_act();
                        });
                        
                        $(".section_web>.w_pagenation>li").click(function(){
                                        $(this).siblings("li").children("span").removeAttr('class');
                                        $(this).children("span").addClass('page_selected');
                                        var sel_num=$(this).index();
                                        web_cnt=sel_num; 
                                        d_web_act();
                        });

                        function d_web_act(){
                            var prev_num = web_cnt == web_page - 1 ? 0 : web_cnt + 1;
                            var next_num = web_cnt == 0 ? web_page - 1 : web_cnt - 1;
                            $(".web>li").eq(web_cnt).css("opacity", "1").css("left", "0");
								$(".m_bg").css("display", "none");
								$(".web>li").eq(web_cnt).children("h2").fadeIn(400);
								$(".web>li").eq(web_cnt).children(".web_pic").delay(300).animate({opacity: "1"}, 400);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("a").delay(1650).animate({opacity: "1"}, 300);
                            $(".web>li").eq(next_num).css("opacity", "0").css("left", "-100%");
								$(".m_bg").css("display", "none");
								$(".web>li").eq(next_num).children("h2").fadeOut(50);
								$(".web>li").eq(next_num).children(".web_pic").animate({opacity: "0"}, 50);
                                $(".web>li").eq(next_num).children(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 50);
                                $(".web>li").eq(next_num).children(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 50);
                                $(".web>li").eq(next_num).children(".web_desc").children("a").animate({opacity: "0"}, 50);
                            $(".web>li").eq(prev_num).css("opacity", "0").css("left", "100%");
								$(".m_bg").css("display", "none");
								$(".web>li").eq(prev_num).children("h2").fadeOut(50);
								$(".web>li").eq(prev_num).children(".web_pic").animate({opacity: "0"}, 50);
                                $(".web>li").eq(prev_num).children(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 50);
                                $(".web>li").eq(prev_num).children(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 50);
                                $(".web>li").eq(prev_num).children(".web_desc").children("a").animate({opacity: "0"}, 50);
                            $(".w_pagenation>li").eq(web_cnt).children("span").addClass('page_selected');
                            $(".w_pagenation>li").eq(web_cnt).siblings("li").children("span").removeAttr('class');
                            web_btn=0;
                        }

                        $(".submenu>ul>li").eq(0).on("click", function(){
                                $(".submenu>ul").css("transform", "translate(0, 40px)");
                                $(this).addClass("txt_red");
                                $(this).siblings("li").removeAttr("class");
                                $(".section_preview").css("display", "none");
                                $(".section_web").css("display", "block");
						$(".section_preview>div>h2").animate({opacity: "0"}, 0);
										thumb_cnt = 0;
										thumb_act();
                        });
                        $(".submenu>ul>li").eq(1).on("click", function(){
                                $(".submenu>ul").css("transform", "translate(0, 15px)");
                                $(this).addClass("txt_red");
                                $(this).siblings("li").removeAttr("class");
                                $(".section_web").css("display", "none");
                                $(".section_preview").css("display", "block");
						$(".section_preview>div>h2").animate({opacity: "1"}, 600);
										web_cnt = 0;
										d_web_act();
                        });

                        }else if($(window).width()>=768){//Tablet
                                $(".alert_cover").fadeIn(400, function(){
                                        setTimeout(function(){$(".alert_cover").fadeOut(400);}, 1000);
										$("html, body").css("overflow", "hidden");
                                });

								$(".web>li").eq(0).children("h2").fadeIn(400);
								$(".web>li").eq(0).children(".web_pic").delay(300).animate({opacity: "1"}, 400);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dt").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("dl").children("dd").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(0).children(".web_desc").children("a").delay(1650).animate({opacity: "1"}, 300);

                        $(".btn_wprevious").on("click", function(){
                                web_cnt++;
                                if(web_cnt > web_page - 1){
                                        web_cnt = 0;
                                }
                                t_web_act();
                        });
                        $(".btn_wnext").on("click", function(){
                                web_cnt--;
                                if(web_cnt < 0){
                                        web_cnt = web_page - 1;
                                }
                                t_web_act();
                        });
                        $(".web>li").on("swipeleft", function(){
                                web_cnt++;
                                if(web_cnt > web_page - 1){
                                        web_cnt = 0;
                                }
                                t_web_act();
                        });
                        $(".web>li").on("swiperight", function(){
                                web_cnt--;
                                if(web_cnt < 0){
                                        web_cnt = web_page - 1;
                                }
                                t_web_act();
                        });

                        $(".section_web>.w_pagenation>li").click(function(){
                                        $(this).siblings("li").children("span").removeAttr('class');
                                        $(this).children("span").addClass('page_selected');
                                        var sel_num=$(this).index();
                                        web_cnt=sel_num; 
                                        t_web_act();
                        });

                        $(".section_preview>div>a").on("swipeleft", function(){
                                thumb_cnt++;
                                if(thumb_cnt > $thumbs.length - 1){
                                        thumb_cnt = 0;
                                }
                                thumb_act();
                        });
                        $(".section_preview>div>a").on("swiperight", function(){
                                thumb_cnt--;
                                if(thumb_cnt < 0){
                                        thumb_cnt = $thumbs.length - 1;
                                }
                                thumb_act();
                        });
                        

                        function t_web_act(){
                            var prev_num = web_cnt == web_page - 1 ? 0 : web_cnt + 1;
                            var next_num = web_cnt == 0 ? web_page - 1 : web_cnt - 1;
                            $(".web>li").eq(web_cnt).css("opacity", "1").css("left", "0");
								$(".m_bg").css("display", "none");
								$(".web>li").eq(web_cnt).children("h2").fadeIn(400);
								$(".web>li").eq(web_cnt).children(".web_pic").delay(300).animate({opacity: "1"}, 400);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(0).delay(500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(1).delay(700).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(2).delay(900).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(3).delay(1100).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(4).delay(1300).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dt").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("dl").children("dd").eq(5).delay(1500).animate({opacity: "1"}, 300);
                                $(".web>li").eq(web_cnt).children(".web_desc").children("a").delay(1650).animate({opacity: "1"}, 300);
                            $(".web>li").eq(next_num).css("opacity", "0").css("left", "-100%");
								$(".m_bg").css("display", "none");
								$(".web>li").eq(next_num).children("h2").fadeOut(50);
								$(".web>li").eq(next_num).children(".web_pic").animate({opacity: "0"}, 50);
                                $(".web>li").eq(next_num).children(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 50);
                                $(".web>li").eq(next_num).children(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 50);
                                $(".web>li").eq(next_num).children(".web_desc").children("a").animate({opacity: "0"}, 50);
                            $(".web>li").eq(prev_num).css("opacity", "0").css("left", "100%");
								$(".m_bg").css("display", "none");
								$(".web>li").eq(prev_num).children("h2").fadeOut(50);
								$(".web>li").eq(prev_num).children(".web_pic").animate({opacity: "0"}, 50);
                                $(".web>li").eq(prev_num).children(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 50);
                                $(".web>li").eq(prev_num).children(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 50);
                                $(".web>li").eq(prev_num).children(".web_desc").children("a").animate({opacity: "0"}, 50);
                            $(".w_pagenation>li").eq(web_cnt).children("span").addClass('page_selected');
                            $(".w_pagenation>li").eq(web_cnt).siblings("li").children("span").removeAttr('class');
                            web_btn=0;
                        }

                                var sub_btn=0;
                                $(".submenu>div").on("click", function(){
                                        if(sub_btn==0){
                                                $(".submenu>div").animate({bottom: "30px"}, 300);
                                                $(".submenu>ul").animate({bottom: "0px"}, 300);
                                                $(".submenu div img").eq(1).css("top", "15px").css("transform", " rotate3d(1, 0, 0, -180deg)");
                                                sub_btn=1;
                                        }else if(sub_btn==1){
                                                $(".submenu>div").animate({bottom: "0px"}, 300);
                                                $(".submenu>ul").animate({bottom: "-30px"}, 300);
                                                $(".submenu div img").eq(1).css("top", "10px").css("transform", " rotate3d(0, 0, 0, 0deg)");
                                                sub_btn=0;
                                        }
                                });

                                $(".submenu>ul>li").eq(0).on("click", function(){
                                        $(".alert_cover").fadeIn(400, function(){
                                                setTimeout(function(){$(".alert_cover").fadeOut(400);}, 1000);
                                        });
                                        $(this).addClass("txt_red");
                                        $(this).siblings("li").removeAttr("class");
                                        $(".section_preview").css("display", "none");
                                        $(".section_web").css("display", "block");
                                        $(".submenu>div").animate({bottom: "0px"}, 300);
                                        $(".submenu>ul").animate({bottom: "-30px"}, 300);
                                        $(".submenu div img").eq(1).css("top", "10px").css("transform", " rotate3d(0, 0, 0, 0deg)");
						$(".section_preview>div>h2").animate({opacity: "0"}, 0);
                                        sub_btn=0;
										thumb_cnt = 0;
										thumb_act();
                                });
                                $(".submenu>ul>li").eq(1).on("click", function(){
                                        $(".alert_cover").fadeIn(400, function(){
                                                setTimeout(function(){$(".alert_cover").fadeOut(400);}, 1000);
                                        });
                                        $(this).addClass("txt_red");
                                        $(this).siblings("li").removeAttr("class");
                                        $(".section_web").css("display", "none");
                                        $(".section_preview").css("display", "block");
                                        $(".submenu>div").animate({bottom: "0px"}, 300);
                                        $(".submenu>ul").animate({bottom: "-30px"}, 300);
                                        $(".submenu div img").eq(1).css("top", "10px").css("transform", " rotate3d(0, 0, 0, 0deg)");
						$(".section_preview>div>h2").delay(1000).animate({opacity: "1"}, 600);
                                        sub_btn=0;
										web_cnt = 0;
										t_web_act();
                                });

                        }else{//Basic
                                $(".alert_cover").fadeIn(400, function(){
                                        setTimeout(function(){$(".alert_cover").fadeOut(400);}, 1000);
										$("html, body").css("overflow", "hidden");
                                });

								$(".web>li").eq(0).children(".m_bg").fadeIn(1000);
								$(".web>li").eq(0).children(".m_bg").children(".m_cover").fadeIn(1400);

                        $(".btn_wprevious").on("click", function(){
                                web_cnt++;
                                if(web_cnt > web_page - 1){
                                        web_cnt = 0;
                                }
                                web_act();
                        });
                        $(".btn_wnext").on("click", function(){
                                web_cnt--;
                                if(web_cnt < 0){
                                        web_cnt = web_page - 1;
                                }
                                web_act();
                        });
                        $(".web>li").on("swipeleft", function(){
                                web_cnt++;
                                if(web_cnt > web_page - 1){
                                        web_cnt = 0;
                                }
                                web_act();
                        });
                        $(".web>li").on("swiperight", function(){
                                web_cnt--;
                                if(web_cnt < 0){
                                        web_cnt = web_page - 1;
                                }
                                web_act();
                        });
						
                        $(".section_web>.w_pagenation>li").click(function(){
                                        $(this).siblings("li").children("span").removeAttr('class');
                                        $(this).children("span").addClass('page_selected');
                                        var sel_num=$(this).index();
                                        web_cnt=sel_num; 
                                        web_act();
                        });
						
                        $(".section_preview>div>a").on("swipeleft", function(){
                                thumb_cnt++;
                                if(thumb_cnt > $thumbs.length - 1){
                                        thumb_cnt = 0;
                                }
                                thumb_act();
                        });
                        $(".section_preview>div>a").on("swiperight", function(){
                                thumb_cnt--;
                                if(thumb_cnt < 0){
                                        thumb_cnt = $thumbs.length - 1;
                                }
                                thumb_act();
                        });
                        

                        function web_act(){
                            var prev_num = web_cnt == web_page - 1 ? 0 : web_cnt + 1;
                            var next_num = web_cnt == 0 ? web_page - 1 : web_cnt - 1;
                            $(".web>li").eq(web_cnt).css("opacity", "1").css("left", "0");
                            $(".web>li").eq(web_cnt).children(".m_bg").fadeIn(400);
                            $(".web>li").eq(web_cnt).children(".m_bg").children(".m_cover").fadeIn(1000);
                            $(".web>li").eq(next_num).css("opacity", "0").css("left", "-100%");
                            $(".web>li").eq(next_num).children(".m_bg").fadeOut(200);
                            $(".web>li").eq(next_num).children(".m_bg").children(".m_cover").fadeOut(200);
                            $(".web>li").eq(next_num).children(".web_desc").css("top", "100%");
                                        $(".web>li").eq(next_num).children(".web_desc").children("h2").delay(300).animate({opacity: "0"}, 50);
                                        $(".web>li").eq(next_num).children(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 50);
                                        $(".web>li").eq(next_num).children(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 50);
                                        $(".web>li").eq(next_num).children(".web_desc").children("a").animate({opacity: "0"}, 50);
                            $(".web>li").eq(prev_num).css("opacity", "0").css("left", "100%");
                            $(".web>li").eq(prev_num).children(".m_bg").fadeOut(200);
                            $(".web>li").eq(prev_num).children(".m_bg").children(".m_cover").fadeOut(200);
                            $(".web>li").eq(prev_num).children(".web_desc").css("top", "100%");
                                        $(".web>li").eq(prev_num).children(".web_desc").children("h2").delay(300).animate({opacity: "0"}, 50);
                                        $(".web>li").eq(prev_num).children(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 50);
                                        $(".web>li").eq(prev_num).children(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 50);
                                        $(".web>li").eq(prev_num).children(".web_desc").children("a").animate({opacity: "0"}, 50);
                            $(".w_pagenation>li").eq(web_cnt).children("span").addClass('page_selected');
                            $(".w_pagenation>li").eq(web_cnt).siblings("li").children("span").removeAttr('class');
                            web_btn=0;
                        }
                                var sub_btn=0;
                                $(".submenu>div").on("click", function(){
                                        if(sub_btn==0){
                                                $(".submenu>div").animate({bottom: "30px"}, 300);
                                                $(".submenu>ul").animate({bottom: "0px"}, 300);
                                                $(".submenu div img").eq(1).css("top", "15px").css("transform", " rotate3d(1, 0, 0, -180deg)");
                                                sub_btn=1;
                                        }else if(sub_btn==1){
                                                $(".submenu>div").animate({bottom: "0px"}, 300);
                                                $(".submenu>ul").animate({bottom: "-30px"}, 300);
                                                $(".submenu div img").eq(1).css("top", "10px").css("transform", " rotate3d(0, 0, 0, 0deg)");
                                                sub_btn=0;
                                        }
                                });

                                $(".submenu>ul>li").eq(0).on("click", function(){
                                        $(".alert_cover").fadeIn(400, function(){
                                                setTimeout(function(){$(".alert_cover").fadeOut(400);}, 1000);
                                        });
                                        $(this).addClass("txt_red");
                                        $(this).siblings("li").removeAttr("class");
                                        $(".section_preview").css("display", "none");
                                        $(".section_web").css("display", "block");
                                        $(".submenu>div").animate({bottom: "0px"}, 300);
                                        $(".submenu>ul").animate({bottom: "-30px"}, 300);
                                        $(".submenu div img").eq(1).css("top", "10px").css("transform", " rotate3d(0, 0, 0, 0deg)");
						$(".section_preview>div>h2").animate({opacity: "0"}, 0);
                                        sub_btn=0;
										thumb_cnt = 0;
										thumb_act();
                                });
                                $(".submenu>ul>li").eq(1).on("click", function(){
                                        $(".alert_cover").fadeIn(400, function(){
                                                setTimeout(function(){$(".alert_cover").fadeOut(400);}, 1000);
                                        });
                                        $(this).addClass("txt_red");
                                        $(this).siblings("li").removeAttr("class");
                                        $(".section_web").css("display", "none");
                                        $(".section_preview").css("display", "block");
                                        $(".submenu>div").animate({bottom: "0px"}, 300);
                                        $(".submenu>ul").animate({bottom: "-30px"}, 300);
                                        $(".submenu div img").eq(1).css("top", "10px").css("transform", " rotate3d(0, 0, 0, 0deg)");
						$(".section_preview>div>h2").delay(1000).animate({opacity: "1"}, 600);
                                        $(".web>li").children(".web_desc").children("h2").delay(300).animate({opacity: "0"}, 400);
                                        $(".web>li").children(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 400);
                                        $(".web>li").children(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 400);
                                        $(".web>li").children(".web_desc").children("a").animate({opacity: "0"}, 400);
                                        sub_btn=0;
										web_cnt = 0;
										web_act();
                                });

                        var web_btn=0;
                        $(".btn_desc").on("click", function(){
                                if(web_btn==0){
                                        $(this).parent().parent().siblings(".web_desc").css("top", "0");
                                        $(this).parent().parent().siblings(".web_desc").children("h2").delay(300).animate({opacity: "1"}, 400);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dt").eq(0).delay(500).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dd").eq(0).delay(500).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dt").eq(1).delay(650).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dd").eq(1).delay(650).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dt").eq(2).delay(800).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dd").eq(2).delay(800).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dt").eq(3).delay(950).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dd").eq(3).delay(950).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dt").eq(4).delay(1100).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dd").eq(4).delay(1100).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dt").eq(5).delay(1250).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("dl").children("dd").eq(5).delay(1250).animate({opacity: "1"}, 300);
                                        $(this).parent().parent().siblings(".web_desc").children("a").delay(1400).animate({opacity: "1"}, 400);
                                        web_btn=1;
                                }else if(web_btn==1){
                                        $(this).parent(".web_desc").css("top", "100%");
                                        $(this).parent(".web_desc").children("h2").animate({opacity: "0"}, 50);
                                        $(this).parent(".web_desc").children("dl").children("dt").animate({opacity: "0"}, 50);
                                        $(this).parent(".web_desc").children("dl").children("dd").animate({opacity: "0"}, 50);
                                        $(this).parent(".web_desc").children("a").animate({opacity: "0"}, 50);
                                        web_btn=0;
                                }
                                return false;
                            });
                        }
                });