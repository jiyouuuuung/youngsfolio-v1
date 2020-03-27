
                $(document).ready(function(){
                        if ($(window).width()>=1280){//Desktop
                                $(window).resize(function(){
                                        if($(window).width()<1280){
                                                $(".resize").fadeIn(200, function(){
                                                        setTimeout(function(){location.reload();}, 1500);
                                                });
                                        }
                                });
                                var btn=0;
                                $(".btn_menu").click(function(){
                                        if(btn==0){//눌렀을때
                                                $(".gnb").css("left", "0");
                                                $(".btn_01").css("transform", "translate(40%, 40%)");
                                                $(".btn_02").css("transform", "translate(0, 130%) scale(0.6)");
                                                $(".btn_03").css("transform", "translate(-40%, 40%)");
                                                $(".btn_04").css("transform", "translate(130%, 0) scale(0.6)");
                                                $(".btn_06").css("transform", "translate(-130%, 0) scale(0.6)");
                                                $(".btn_07").css("transform", "translate(40%, -40%)");
                                                $(".btn_08").css("transform", "translate(0, -130%) scale(0.6)");
                                                $(".btn_09").css("transform", "translate(-40%, -40%)");
                                                btn=1;
                                        }
                                        else if(btn==1){
                                                $(".gnb").css("left", "100%");
                                                $(".btn_01").css("transform", "translate(0)")
                                                $(".btn_02").css("transform", "translate(0) scale(1)");
                                                $(".btn_03").css("transform", "translate(0)");
                                                $(".btn_04").css("transform", "translate(0) scale(1)");
                                                $(".btn_06").css("transform", "translate(0) scale(1)");
                                                $(".btn_07").css("transform", "translate(0)");
                                                $(".btn_08").css("transform", "translate(0) scale(1)");
                                                $(".btn_09").css("transform", "translate(0)");
                                                btn=0;
                                        }
                                });

                                $(".left>h1").mouseenter(function(){
                                        $(".left>h1>a>p").animate({top: "100%", opacity: "1"}, 200, "easeOutBounce");
                                });
                                $(".left>h1").mouseleave(function(){
                                        $(".left>h1>a>p").animate({top: "40%", opacity: "0"}, 200);
                                });
                        }else if($(window).width()>=768){//Tablet
                                $(window).resize(function(){
                                        if($(window).width()>=1280){
                                                $(".resize").fadeIn(200, function(){
                                                        setTimeout(function(){location.reload();}, 1500);
                                                });
                                        }else if($(window).width()<768){
                                                $(".resize").fadeIn(200, function(){
                                                        setTimeout(function(){location.reload();}, 1500);
                                                });
                                        }
                                });

                                var btn=0;
                                $(".btn_menu").click(function(){
                                        if(btn==0){//눌렀을때
                                                $(".gnb").css("left", "0");
                                                $(".btn_01").css("transform", "translate(40%, 40%)");
                                                $(".btn_02").css("transform", "translate(0, 130%) scale(0.6)");
                                                $(".btn_03").css("transform", "translate(-40%, 40%)");
                                                $(".btn_04").css("transform", "translate(130%, 0) scale(0.6)");
                                                $(".btn_06").css("transform", "translate(-130%, 0) scale(0.6)");
                                                $(".btn_07").css("transform", "translate(40%, -40%)");
                                                $(".btn_08").css("transform", "translate(0, -130%) scale(0.6)");
                                                $(".btn_09").css("transform", "translate(-40%, -40%)");
                                                btn=1;
                                        }
                                        else if(btn==1){
                                                $(".gnb").css("left", "100%");
                                                $(".btn_01").css("transform", "translate(0)")
                                                $(".btn_02").css("transform", "translate(0) scale(1)");
                                                $(".btn_03").css("transform", "translate(0)");
                                                $(".btn_04").css("transform", "translate(0) scale(1)");
                                                $(".btn_06").css("transform", "translate(0) scale(1)");
                                                $(".btn_07").css("transform", "translate(0)");
                                                $(".btn_08").css("transform", "translate(0) scale(1)");
                                                $(".btn_09").css("transform", "translate(0)");
                                                btn=0;
                                        }
                                });
                        }else{
                                $(window).resize(function(){
                                        if($(window).width()>=768){//Basic
                                                $(".resize").fadeIn(200, function(){
                                                        setTimeout(function(){location.reload();}, 1500);
                                                });
                                        }
                                });

                                var btn=0;
                                $(".btn_menu").click(function(){
                                        if(btn==0){//눌렀을때
                                                $(".gnb").css("left", "0");
                                                $(".btn_01").css("transform", "translate(40%, 40%)");
                                                $(".btn_02").css("transform", "translate(0, 130%) scale(0.6)");
                                                $(".btn_03").css("transform", "translate(-40%, 40%)");
                                                $(".btn_04").css("transform", "translate(130%, 0) scale(0.6)");
                                                $(".btn_06").css("transform", "translate(-130%, 0) scale(0.6)");
                                                $(".btn_07").css("transform", "translate(40%, -40%)");
                                                $(".btn_08").css("transform", "translate(0, -130%) scale(0.6)");
                                                $(".btn_09").css("transform", "translate(-40%, -40%)");
                                                btn=1;
                                        }
                                        else if(btn==1){
                                                $(".gnb").css("left", "100%");
                                                $(".btn_01").css("transform", "translate(0)")
                                                $(".btn_02").css("transform", "translate(0) scale(1)");
                                                $(".btn_03").css("transform", "translate(0)");
                                                $(".btn_04").css("transform", "translate(0) scale(1)");
                                                $(".btn_06").css("transform", "translate(0) scale(1)");
                                                $(".btn_07").css("transform", "translate(0)");
                                                $(".btn_08").css("transform", "translate(0) scale(1)");
                                                $(".btn_09").css("transform", "translate(0)");
                                                btn=0;
                                        }
                                });

                        }
                });