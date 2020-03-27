var f08Index = 0;
var galleryImageIndex = 0;

var nafa = {};
nafa.windowHeight = 0;
nafa.windowWidth  = 0;
nafa.isMobile     = false;
nafa.qnaIndex     = 0;

$(function(){

	$(window)
	.load(onLoad)
	.resize(onResize)
	.scroll(onScroll);

	function onLoad(){

		$(window).trigger('resize');

		VideoManager.init();
	}

	function onResize(){
		nafa.windowHeight = window.innerHeight;
        nafa.windowWidth = window.innerWidth;

		FeatureManager.runResize();

		if(nafa.windowWidth <= 768){
			$(".f01 .mobile_video_wrap > video").css({"margin-bottom": -2 + "px"});
			//$(".f01 .mobile_video_wrap > img").css({"margin-top": 4 + "px"});
			$(".f02 .video_wrap > video").css({"margin-bottom": -2 + "px", "margin-top": -2 + "px"});
		}
	}

	function onScroll(){
		var t = $(window).scrollTop();
		FeatureManager.runScroll(t);
	}

	var VideoManager = {

		videoFeatureList : [],

		play : function(target, callbackParam) {

			var items = this.videoFeatureList.filter(function(item){
				return item.id === target;
			});

			if(items.length > 0) {
				items[0].playVideo(callbackParam);
			} else {
				var item = new VideoFeature(target, callbackParam);
				this.videoFeatureList.push(item);
			}
		},

		pause : function(target) {

			var items = this.videoFeatureList.filter(function(item){
				return item.id === target;
			});

			if(items.length > 0) {
				items[0].pauseVideo();
			}
		},

		pauseWithoutFlag : function(target) {
			var items = this.videoFeatureList.filter(function(item){
				return item.id === target;
			});

			if(items.length > 0) {
				items[0].pauseVideoWithoutFlag();
			}
		},

		setCurrentTime : function(target, time){

			var items = this.videoFeatureList.filter(function(item){
				return item.id === target;
			});

			if(items.length > 0 ) {
				var videoObj = items[0];

				if(videoObj.videoElement.paused && videoObj.videoElement.currentTime > 1 ) {
					videoObj.videoElement.currentTime = time;
				}
			}
		},

		setLoop : function(target, isLoop){
			var items = this.videoFeatureList.filter(function(item){
				return item.id === target;
			});

			if(items.length > 0) {
				items[0].videoElement.loop = isLoop;
			}
		},

		stop : function(target){
			var items = this.videoFeatureList.filter(function(item){
				return item.id === target;
			});

			if(items.length > 0) {
				var obj = items[0];
				if( obj.isPlayedVideo ){

					if(nafa.isMobile){
						// mobile���� pauseVideo() �޼����� touch event�� �����Ͽ� �۵��ϹǷ� Ŭ���̳� Ÿ ������Ʈ�� ���� �����Ǵ� ���� �������� ó��
						obj.isPlayedVideo = false;
						obj.videoElement.pause();
					}else{
						obj.pauseVideo();
					}

					obj.postCallback();
				}
			}
		},

		stopAnotherAllVideo : function(id){
			this.videoFeatureList.forEach(function(item){

				//if(item.id !== "video_f00"){ // video_f00 ������ all stop video���� ����

					if(item.id !== id){
						item.pauseVideo();
					}
				//}
			});
		},

		init : function() {
			// FIXME: ���� �̸� �ε�
			var item;

			if(nafa.windowWidth > 768){
				item = new VideoFeature("video_intro");
				this.videoFeatureList.push(item);

				item = new VideoFeature("video_f01");
				this.videoFeatureList.push(item);
			}else{
				item = new VideoFeature("video_intro_m");
				this.videoFeatureList.push(item);

				item = new VideoFeature("video_f01_m");
				this.videoFeatureList.push(item);
			}

			item = new VideoFeature("video_f00");
			this.videoFeatureList.push(item);

			item = new VideoFeature("video_f02");
			this.videoFeatureList.push(item);

			item = new VideoFeature("video_f11");
			this.videoFeatureList.push(item);

			//this.setLoop("video_f02", true);
		},
	}

	function VideoFeature(target, callbackParam) {

		var THIS = this;
		this.id = target;
		this.isPlayedVideo = false;
		if(callbackParam !== undefined && callbackParam.postCallback !== undefined){
			this.postCallback = callbackParam.postCallback;
		}

		// FIXME: ���� �±׸� �������� �����ؾ� �� ���� ������ �±׸� ���� �Ķ����ͷ� �����Ѵ�.
		//        ������ ��ü �����ڿ��� �±׸� ������ ������ loaded �̺�Ʈ�� ��������
		this.videoElement = document.getElementById(target);
		//console.log(target + "-readyState: " + this.videoElement.readyState);
		//this.videoElement.load();
		//console.log(target + "-readyState: " + this.videoElement.readyState);

		if(callbackParam !== undefined && callbackParam.postCallback !== undefined) {
			this.videoElement.onended = function(){

				//callbackParam.postCallback();
				// FIXME: pause
				//THIS.postCallback = callbackParam.postCallback;
				THIS.postCallback();
			};
		}

		// ���� �ε�
		if(callbackParam !== undefined && callbackParam.preCallback !== undefined) {
			/*this.videoElement.load();
			this.videoElement.onloadeddata = function() {
				THIS.playVideo(callbackParam);
			};*/
			THIS.playVideo(callbackParam);
		}
	}

	VideoFeature.prototype.playVideo = function(callbackParam){
		var THIS = this;

		if(check_androidDevice() === '' || callbackParam.eventType !== undefined && callbackParam.eventType === "click"){

			if( !THIS.isPlayedVideo && THIS.videoElement.paused){

				VideoManager.stopAnotherAllVideo(THIS.id);

				THIS.isPlayedVideo = true;
				callbackParam.preCallback();
				THIS.videoElement.play();
				THIS.videoElement.onended = function() {
					if(callbackParam.postCallback !== undefined) {
						callbackParam.postCallback();
					}

					THIS.videoElement.onended = null;
				};

			}


		} else {
			window.addEventListener('touchstart', function videoStart() {

				if( !THIS.isPlayedVideo && THIS.videoElement.paused){

					VideoManager.stopAnotherAllVideo(THIS.id);

					THIS.isPlayedVideo = true;
					callbackParam.preCallback();
					THIS.videoElement.play();
					THIS.videoElement.onended = function() {
						if(callbackParam.postCallback !== undefined) {
							callbackParam.postCallback();
						}

						THIS.videoElement.onended = null;
					};

				}

				// remove from the window and call the function we are removing
			    this.removeEventListener('touchstart', videoStart);
			});
		}
	}

	VideoFeature.prototype.pauseVideo = function(){
		var THIS = this;

		if(check_androidDevice() == ''){

			if( THIS.isPlayedVideo ){

				THIS.isPlayedVideo = false;
				THIS.videoElement.pause();

			}

		} else {
			window.addEventListener('touchstart', function videoStart() {

				if( THIS.isPlayedVideo ){

					THIS.isPlayedVideo = false;
					THIS.videoElement.pause();

				}

				// remove from the window and call the function we are removing
				this.removeEventListener('touchstart', videoStart);
			});
		}
	}

	VideoFeature.prototype.pauseVideoWithoutFlag = function(){
		var THIS = this;

		if(check_androidDevice() == ''){

			if( THIS.isPlayedVideo ){
				THIS.videoElement.pause();
			}

		} else {
			window.addEventListener('touchstart', function videoStart() {

				if( THIS.isPlayedVideo ){
					THIS.videoElement.pause();
				}

				// remove from the window and call the function we are removing
				this.removeEventListener('touchstart', videoStart);
			});
		}
	}

	var FeatureManager = {

		featureList : [],

		add : function(item){
			this.featureList.push(item);
		},

		runScroll : function(scrollTop) {
			this.featureList.forEach(function(cur, i){
				if(cur.func.on !== undefined && cur.func.off !== undefined) {
					cur.update(scrollTop);
				}
			});
		},

		runResize : function() {
			this.featureList.forEach(function(cur, i){
				if(cur.func.resize !== undefined) {
					cur.func.resize();
				}
			});
		},
	}

	FeatureManager.add(new FeatureItem("", {
		on : function() {

		},
		off : function() {

		},
		update : function(scrollTop) {

		},

	}));

	FeatureManager.add(new FeatureItem(".feature.intro", {
		on : function() {

			if(nafa.windowWidth > 768){
				VideoManager.play("video_intro", {
					preCallback : function(){
						$(".feature.intro .web_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.intro .mobile_video_wrap > video").css("display","block");
						});
					},
				});
			}else{
				VideoManager.play("video_intro_m", {
					preCallback : function(){
						$(".feature.intro .mobile_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.intro .mobile_video_wrap > video").css("display","block");
						});
					},
				});
			}
		},
		off : function() {

			if(nafa.windowWidth > 768){
				VideoManager.pause("video_intro");
				VideoManager.setCurrentTime("video_intro", 0);
			}else{
				VideoManager.pause("video_intro_m");
				VideoManager.setCurrentTime("video_intro_m", 0);
			}
		},
		update : function() {
			var scrollTop = $(window).scrollTop();
			var target = $(".feature.intro");

			if(nafa.windowWidth > 768){
				var fMotionTop = target.offset().top - (nafa.windowHeight / 3);
				var fMotionBottom = target.offset().top + target.outerHeight(true) - (nafa.windowHeight / 3);
			}else{
				var fMotionTop = target.offset().top - (nafa.windowHeight / 2);
				var fMotionBottom = target.offset().top + target.outerHeight(true) - (nafa.windowHeight / 2);
			}

			if (scrollTop > fMotionTop && scrollTop < fMotionBottom) {
				this.on();
			} else if(scrollTop < (fMotionTop - (nafa.windowHeight * (2/3)) ) || scrollTop > fMotionBottom + nafa.windowHeight) {
				this.off();
			}

		},

	}));

	FeatureManager.add(new FeatureItem(".feature.kv_info", {

		init : function() {

			$(".kv_info .info_btn_wrap > a.info_prev_btn").css({display:"none"});

			var control = new CarouselContainer(".kv_info .kv_info_inner .keybox00", ".kv_info .info_btn_wrap ul li a", function(carousel){

				$(".kv_info .info_btn_wrap > a.info_prev_btn").click(function(){
					carousel.movePrev();
					return false;
				});

				$(".kv_info .info_btn_wrap > a.info_next_btn").click(function(){
					carousel.moveNext();
					return false;
				});

				$(".kv_info .info_btn_wrap ul li a").click(function(){
					var idx = $(this).parent().index();
					carousel.move(idx);
					return false;
				});

				carousel.arrange = function(){
					if(carousel.curIndex === 0){
						$(".kv_info .info_btn_wrap > a.info_prev_btn").css({display:"none"});
					}else{
						$(".kv_info .info_btn_wrap > a.info_prev_btn").css({display:"block"});
					}

					if(carousel.curIndex === carousel.lastNumber){
						$(".kv_info .info_btn_wrap > a.info_next_btn").css({display:"none"});
					}else{
						$(".kv_info .info_btn_wrap > a.info_next_btn").css({display:"block"});
					}
				};

			});

			$(".kv_info .keybox00").click(function(){
				var clickIdx = $(this).index();
				$(".kv_info .keybox00").removeClass("active");
				$(this).addClass("active");
				if ($(".intro .intro-obj-layer").css("display") == "none")
				{
					$(".intro .intro-obj-layer").css({"display":"block", "opacity":0}).animate({"opacity":1},500, function(){
						playBrightCove(clickIdx);
					});
				}else{
					playBrightCove(clickIdx);
				}
								
				return false;
			});

			$(".intro .intro-obj .close").click(function(){
				$(".kv_info .keybox00").removeClass("active");
				$(".intro .brightcove-con .brightcove-cell").find("video").each(function(){
					this.currentTime = 0;
					this.pause();
				});
				$(".intro .intro-obj-layer").animate({"opacity":0},500, function(){
					$(this).css({"display":"none"});
				});
				return false;
			});
		},

	}));

	FeatureManager.add(new FeatureItem(".feature.f01", {
		on : function() {

			if(nafa.windowWidth > 768){
				VideoManager.play("video_f01", {
					preCallback : function(){
						$(".feature.f01 .web_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f01 .video_wrap > video").css("display","block");
						});
					},
				});

			}else{
				VideoManager.play("video_f01_m", {
					preCallback : function(){
						$(".feature.f01 .mobile_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f01 .video_wrap > video").css("display","block");
						});
					},
				});
			}

		},
		off : function() {
			if(nafa.windowWidth > 768){
				VideoManager.pause("video_f01");
				VideoManager.setCurrentTime("video_f01", 0);
			}else{
				VideoManager.pause("video_f01_m");
				VideoManager.setCurrentTime("video_f01_m", 0);
			}
		},
		init : function() {

			var $popup = $(".feature.f10 .txt_popup");

			if(check_allDevice() !== ''){
				$(".f10 .txt_popup a.close_btn").css({display:"block"});
				/*$(".f01 .txt .feature-desc a.tooltip_txt").click(function(){
					if($(".feature.f01 .txt_popup").css("display") !== "block") {
						$(".feature.f01 .txt_popup").css({display:"block", opacity:0});
						$(".feature.f01 .txt_popup").animate({opacity:1}, 300, "swing");
					}

					return false;
				});*/
				$(document).on("click",".f10 .txt .feature-desc a.tooltip_txt",function(){
					if($(".feature.f10 .txt_popup").css("display") !== "block") {
						$(".feature.f10 .txt_popup").css({display:"block", opacity:0});
						$(".feature.f10 .txt_popup").animate({opacity:1}, 300, "swing");
					}
					return false;
				});

			}else{
				/*$(".f01 .txt .feature-desc a.tooltip_txt").click(function(){return false;});
				$(".f01 .txt .feature-desc a.tooltip_txt").hover(function(){

					$(".feature.f01 .txt_popup").addClass("active");

				}, function(){

					$(".feature.f01 .txt_popup").removeClass("active");

				});*/
				$(document).on("click",".f10 .txt .feature-desc a.tooltip_txt",function(){
					return false;
				});

				$(document).on({
					mouseenter: function () {
						$(".feature.f10 .txt_popup").addClass("active");
					},
					mouseleave: function () {
						$(".feature.f10 .txt_popup").removeClass("active");
					}
				}, ".f10 .txt .feature-desc a.tooltip_txt");
			}

			$(".feature.f10 .txt_popup .close_btn").click(function(){
				$(".feature.f10 .txt_popup").animate({opacity:0}, 300, "swing", function(){
					$(this).css({display:"none"});
				});

				return false;
			});

		},

	}));

	FeatureManager.add(new FeatureItem(".feature.f02", {
		on : function() {
			if (viewportWidth() > 768)
			{
				VideoManager.play("video_f02_w",
				{
					preCallback : function(){
						$(".feature.f02 .video_wrap.web_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f02 .video_wrap > video").css("display","block");
						});
					},
					postCallback : function(){
						//alert("exit");
					},
				});
			}else{
				VideoManager.play("video_f02_m",
				{
					preCallback : function(){
						$(".feature.f02 .video_wrap.mobile_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f02 .video_wrap > video").css("display","block");
						});
					},
					postCallback : function(){
						//alert("exit");
					},
				});
			}
            
		},
		off : function() {
            VideoManager.pause("video_f02_w");
			VideoManager.setCurrentTime("video_f02_w", 0);
			VideoManager.pause("video_f02_m");
			VideoManager.setCurrentTime("video_f02_m", 0);
			$(".feature.f02 .video_wrap.web_video_wrap > img").css({"display":"block","opacity":1});
			$(".feature.f02 .video_wrap.mobile_video_wrap > img").css({"display":"block","opacity":1});
		},
		init : function() {

		},

	}));

	FeatureManager.add(new FeatureItem(".feature.f11", {
		on : function() {
			if (viewportWidth() > 768)
			{
				VideoManager.play("video_f11_w",
				{
					preCallback : function(){
						$(".feature.f11 .video_wrap.web_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f02 .video_wrap > video").css("display","block");
						});
					},
					postCallback : function(){
						//alert("exit");
					},
				});
			}else{
				VideoManager.play("video_f11_m",
				{
					preCallback : function(){
						$(".feature.f11 .video_wrap.mobile_video_wrap > img").animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f02 .video_wrap > video").css("display","block");
						});
					},
					postCallback : function(){
						//alert("exit");
					},
				});

			}
		},
		off : function() {
            VideoManager.pause("video_f11_w");
			VideoManager.setCurrentTime("video_f11_w", 0);
			VideoManager.pause("video_f11_m");
			VideoManager.setCurrentTime("video_f11_m", 0);
			$(".feature.f11 .video_wrap.web_video_wrap > img").css({"display":"block","opacity":1});
			$(".feature.f11 .video_wrap.mobile_video_wrap > img").css({"display":"block","opacity":1});
		},
		init : function() {

		},

	}));

	FeatureManager.add(new FeatureItem(".feature.f03", {

		on : function() {
			if(nafa.windowWidth > 768){
				if($(".f03 .video_popup.web_video_wrap").css("display") === "block"){

					VideoManager.play("video_f03_w",
					{
						preCallback : function(){
						},
						postCallback : function(){
						},
					});
				}
			}else{

				if($(".f03 .video_popup.mobile_video_wrap").css("display") === "block"){

					VideoManager.play("video_f03_m",
					{
						preCallback : function(){
						},
						postCallback : function(){
						},
					});
				}

			}
		},

		off : function() {
		},

		init : function() {

			var $popup_w = $(".f03 .video_popup.web_video_wrap");
			var $popup_m = $(".f03 .video_popup.mobile_video_wrap");

			$(".f03 .web_video_wrap img.v_cover").css({opacity:0, "display":"none"});
			$(".f03 .mobile_video_wrap img.v_cover").css({opacity:0, "display":"none"});

			$(".f03 .obj_in > a.play_btn").click(function(){

				if(nafa.windowWidth > 768) {

					$(this).animate({"opacity":0},300,function(){
						$(this).css("display","none");
					});


					$popup_w.css({"display":"block", opacity:0});
					$popup_w.animate({opacity:1},300,function(){

						VideoManager.play("video_f03_w",
						{
							preCallback : function(){
								//$(".f03 .web_video_wrap img.v_cover").css({opacity:0, "display":"none"});
							},
							postCallback : function(){
							},
							eventType : "click",
						});
					});
				}else{

					$(this).animate({"opacity":0},300,function(){
						$(this).css("display","none");
					});

					$popup_m.css({"display":"block", opacity:0});
					$popup_m.animate({opacity:1},100);

					VideoManager.setCurrentTime("video_f03_m", 0);
					VideoManager.play("video_f03_m",
					{
						preCallback : function(){

						},
						postCallback : function(){

						},
						eventType : "click",
					});

				}

				return false;
			});

			$(".f03 .web_video_wrap a.pop_close_btn").click(function(){

				$(".f03 .obj_in > a.play_btn").removeAttr("style");

				$popup_w.animate({opacity:0},300,function(){
					$(this).css({"display":"none"});
					VideoManager.stop("video_f03_w");
					VideoManager.setCurrentTime("video_f03_w", 0);
				});

				return false;
			});

			$(".f03 .mobile_video_wrap a.pop_close_btn").click(function(){


				$(".f03 .obj_in > a.play_btn").removeAttr("style");

				$popup_m.animate({opacity:0},300,function(){
					$(this).css({"display":"none"});
					VideoManager.stop("video_f03_m");
					VideoManager.setCurrentTime("video_f03_m", 0);
				});

				return false;
			});

		},

		resize : function(){

			VideoManager.pause("video_f03_w");
			VideoManager.pause("video_f03_m");

			var $popup_w = $(".f03 .video_popup.web_video_wrap");
			var $popup_m = $(".f03 .video_popup.mobile_video_wrap");

			if(nafa.windowWidth > 768 && nafa.isMobile === true){

				if($popup_m.css("display") === "block"){
					$popup_m.css({"display":"none", "opacity":0});
					$popup_w.css({"display":"block", "opacity":1});
				}else{
					$popup_m.css({"display":"none", "opacity":0});
					$popup_w.css({"display":"none", "opacity":0});
				}


			}else if(nafa.windowWidth <= 768 && nafa.isMobile === false){

				if($popup_w.css("display") === "block"){
					$popup_w.css({"display":"none", "opacity":0});
					$popup_m.css({"display":"block", "opacity":1});
				}else{
					$popup_m.css({"display":"none", "opacity":0});
					$popup_w.css({"display":"none", "opacity":0});
				}
			}

		},

	}));


	FeatureManager.add(new FeatureItem(".feature.f04", {

		init : function() {
			var $popup = $(".feature.f04 .txt_popup");

			if(check_allDevice() !== ''){

				$(".f04 .txt_popup a.close_btn").css({display:"block"});
				/*$(".f04 .txt .feature-desc a.tooltip_txt").click(function(){
					if($(".feature.f04 .txt_popup").css("display") !== "block") {
						$(".feature.f04 .txt_popup").css({display:"block", opacity:0});
						$(".feature.f04 .txt_popup").animate({opacity:1}, 300, "swing");
					}

					return false;
				});*/

				$(document).on("click",".f04 .txt .feature-desc a.tooltip_txt",function(){
					if($(".feature.f04 .txt_popup").css("display") !== "block") {
						$(".feature.f04 .txt_popup").css({display:"block", opacity:0});
						$(".feature.f04 .txt_popup").animate({opacity:1}, 300, "swing");
					}
					return false;
				});

			}else{

				/*$(".f04 .txt .feature-desc a.tooltip_txt").click(function(){return false;});
				$(".f04 .txt .feature-desc a.tooltip_txt").hover(function(){
					$(".f04 .txt_popup").addClass("active");
				}, function(){
					$(".f04 .txt_popup").removeClass("active");
				});*/

				$(document).on("click",".f04 .txt .feature-desc a.tooltip_txt",function(){
					return false;
				});

				$(document).on({
					mouseenter: function () {
						$(".feature.f04 .txt_popup").addClass("active");
					},
					mouseleave: function () {
						$(".feature.f04 .txt_popup").removeClass("active");
					}
				}, ".f04 .txt .feature-desc a.tooltip_txt");

			}

			$(".feature.f04 .txt_popup .close_btn").click(function(){
				$(".feature.f04 .txt_popup").animate({opacity:0}, 300, "swing", function(){
					$(this).css({display:"none"});
				});

				return false;
			});

		},

		resize : function() {
			if($(".feature.f04 .txt_popup").css("display") !== "none"){
				$(".feature.f04 .txt_popup").css({display:"none", opacity:0});
			}
		},

	}));



	FeatureManager.add(new FeatureItem(".feature.f06", {
		on : function() {
			$(".feature.f06 .motion_img > img").eq(1).addClass("arrow_anim");

		},
		off : function() {
			$(".feature.f06 .motion_img > img").eq(1).removeClass("arrow_anim");

		},
		init : function() {

			$(".feature.f06 .web_video_wrap a.play_btn").click(function(){

				//VideoManager.stop("video_f07_1");
				VideoManager.stop("video_f07_2");

				VideoManager.setCurrentTime("video_f06", 0);
				VideoManager.play("video_f06",
				{
					preCallback : function(){
						$(".feature.f06 .web_video_wrap a.play_btn").css({display:"none"});
						$(".feature.f06 .web_video_wrap > img").stop().animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f06 .video_wrap > video").css("display","block");
						});
					},
					postCallback : function(){
						VideoManager.pause("video_f06");
						$(".feature.f06 .web_video_wrap a.play_btn").css({display:"block", opacity:0});
						$(".feature.f06 .web_video_wrap a.play_btn").stop().animate({opacity:1},300);
					},
					eventType : "click",
				});

				return false;
			});

			$(".feature.f06 .mobile_video_wrap a.play_btn").click(function(){

				//VideoManager.stop("video_f07_1_m");
				VideoManager.stop("video_f07_2_m");

				VideoManager.setCurrentTime("video_f06_m", 0);
				VideoManager.play("video_f06_m",
				{
					preCallback : function(){
						$(".feature.f06 .mobile_video_wrap a.play_btn").css({display:"none"});
						$(".feature.f06 .mobile_video_wrap > img").stop().animate({opacity:0},300,function(){
							$(this).css("display","none");
							//$(".feature.f06 .video_wrap > video").css("display","block");
						});
					},
					postCallback : function(){
						VideoManager.pause("video_f06_m");
						$(".feature.f06 .mobile_video_wrap a.play_btn").css({display:"block", opacity:0});
						$(".feature.f06 .mobile_video_wrap a.play_btn").stop().animate({opacity:1},300);
					},
					eventType : "click",
				});

				return false;
			});
		},

		update : function() {
			var scrollTop = $(window).scrollTop();
			var target;

			if(nafa.windowWidth > 768){
				target = $(".f06");
			}else{
				target = $(".f06");
			}

			if(nafa.windowWidth > 768){
				var fMotionTop = target.offset().top - (nafa.windowHeight / 3) + 200;
				var fMotionBottom = target.offset().top + target.outerHeight(true) - (nafa.windowHeight / 3);
			}else{
				var fMotionTop = target.offset().top - (nafa.windowHeight / 2) + 200;
				var fMotionBottom = target.offset().top + target.outerHeight(true) - (nafa.windowHeight / 2);
			}

			if (scrollTop > fMotionTop && scrollTop < fMotionBottom) {
				this.on();
			} else if(scrollTop < fMotionTop - nafa.windowHeight || scrollTop > fMotionBottom + nafa.windowHeight) {
				this.off();
			}
		},

	}));

	FeatureManager.add(new FeatureItem(".feature.f07", {

		init : function() {

			$(".feature.f07 .web_video_wrap .right_video_wrap a").click(function(){

				VideoManager.stop("video_f06");
				//VideoManager.stop("video_f07_1");

				VideoManager.setCurrentTime("video_f07_2", 0);
				VideoManager.play("video_f07_2",
				{
					preCallback : function(){
						$(".feature.f07 .web_video_wrap .right_video_wrap a").css({display:"none"});
						$(".feature.f07 .web_video_wrap .right_video_wrap > img.02_video_cover").stop().animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					},
					postCallback : function(){
						VideoManager.pause("video_f07_2");
						$(".feature.f07 .web_video_wrap .right_video_wrap a").css({display:"block", opacity:0});
						$(".feature.f07 .web_video_wrap .right_video_wrap a").stop().animate({opacity:1},300);
						$(".feature.f07 .web_video_wrap .right_video_wrap > img.02_video_cover").css({display:"block", opacity:0});
						$(".feature.f07 .web_video_wrap .right_video_wrap > img.02_video_cover").stop().animate({opacity:1},300);
					},
					eventType : "click",
				});

				return false;
			});

			$(".feature.f07 .mobile_video_wrap .right_video_wrap a").click(function(){


				VideoManager.stop("video_f06_m");
				//VideoManager.stop("video_f07_1_m");

				VideoManager.setCurrentTime("video_f07_2_m", 0);
				VideoManager.play("video_f07_2_m",
				{
					preCallback : function(){
						$(".feature.f07 .mobile_video_wrap .right_video_wrap a").css({display:"none"});
						$(".feature.f07 .mobile_video_wrap .right_video_wrap > img.02_video_cover").stop().animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					},
					postCallback : function(){
						VideoManager.pause("video_f07_2_m");
						$(".feature.f07 .mobile_video_wrap .right_video_wrap a").css({display:"block", opacity:0});
						$(".feature.f07 .mobile_video_wrap .right_video_wrap a").stop().animate({opacity:1},300);
						$(".feature.f07 .mobile_video_wrap .right_video_wrap > img.02_video_cover").css({display:"block", opacity:0});
						$(".feature.f07 .mobile_video_wrap .right_video_wrap > img.02_video_cover").stop().animate({opacity:1},300);
					},
					eventType : "click",
				});

				return false;
			});

		},

	}));

	FeatureManager.add(new FeatureItem(".feature.f08", {

		init : function() {
			var $popup_fw = $(".f08 .video_popup.web_video_wrap");
			var $popup_fm = $(".f08 .video_popup.mobile_video_wrap");

			$(".f08 .popup_gallery .thumb00 a").hover(function(){
				$(this).parent().addClass("hover");
			}
			,function(){
				$(this).parent().removeClass("hover");
			});

			var matchArr = [0, 2, 3, 1];

			$(".f08 .popup_gallery .popup_wrap").css({display:"none"});

			var curIndex;
			var isAnim;
			var lastNumber;
			var $items = [];

			$(".f08 .popup_gallery .popup_wrap > .popup_box00").each(function(){
			$items.push($(this)); });

			lastNumber = $items.length - 1;

			$(".feature.f08 .popup_wrap .popup_box00").css({left:"100%"});
			

			$(".f08 .txt a.play_btn").click(function(){
				if (viewportWidth() > 768)
				{
					$popup_fw.css({"display":"block", opacity:0});
					$popup_fw.animate({opacity:1},300,function(){
							VideoManager.play("video_f08_w",
							{
								preCallback : function(){
									$(".f08 .video_wrap.web_video_wrap img.v_cover").animate({opacity:0},500,function(){
										$(this).css({"display":"none"});
									});
								},
								postCallback : function(){
								},
								eventType : "click",
							});
					});
				}else{
					$popup_fm.css({"display":"block", opacity:0});
					$popup_fm.animate({opacity:1},300,function(){
							VideoManager.play("video_f08_m",
							{
								preCallback : function(){
									$(".f08 .video_wrap.mobile_video_wrap img.v_cover").animate({opacity:0},500,function(){
										$(this).css({"display":"none"});
									});
								},
								postCallback : function(){
								},
								eventType : "click",
							});
					});
				}				
				return false;
			});

			$(".f08 .video_wrap a.pop_close_btn").click(function(){
				$popup_fw.animate({opacity:0},300,function(){
					$(this).css({"display":"none"});
					VideoManager.stop("video_f08_w");
					VideoManager.setCurrentTime("video_f08_w", 0);
				});
				$popup_fm.animate({opacity:0},300,function(){
					$(this).css({"display":"none"});
					VideoManager.stop("video_f08_m");
					VideoManager.setCurrentTime("video_f08_m", 0);
				});

				return false;
			});



			$(".feature.f08 .thumb_wrap .thumb00 a").click(function(){
				if(nafa.windowWidth <= 768) {

					curIndex = matchArr[$(this).parent().index()];
					f08Index = curIndex;

					$(".feature.f08 .popup_wrap").css({display:"block"});
					$(".feature.f08 .popup_wrap .popup_box00").css({opacity:1, left:"-100%"});

					$popupObj = $(".feature.f08 .popup_wrap .popup_box00").eq(curIndex);
					$popupObj.css({display:"block", opacity:0, left:"0"});
					$popupObj.animate({opacity:1}, 300, function(){
						$(".feature.f08 .btn_wrap").css({display:"block"});
					});

					arrangeButton();

				}

				return false;

			});

			$(".feature.f08 .btn_wrap .pop_close_btn").click(function(){
				$popupObj = $(".feature.f08 .popup_wrap .popup_box00").eq(curIndex);
				$popupObj.animate({opacity:0}, 300, function(){
					$(".feature.f08 .btn_wrap").css({display:"none"});
					$(".feature.f08 .popup_wrap").css({display:"none"});
				});

				return false;
			});

			$(".feature.f08 .btn_wrap .pop_prev_btn").click(function(){

				move(curIndex - 1);
				return false;
			});

			$(".feature.f08 .btn_wrap .pop_next_btn").click(function(){

				move(curIndex + 1);
				return false;
			});

			function move(idx) {
				if(curIndex == idx)
					return;

				if( !isAnim ) {
					isAnim = true;

					var THIS = this;

					if(idx < curIndex) {
						// ���� �����̵�

						if(idx < 0)
							idx = lastNumber;

						// �����̵� �� ������ ���ʿ� ��ġ��Ŵ -> �ִϸ��̼�
						var $dest = $items[idx];
						var $cur  = $items[curIndex];

						var width = $cur.width();
						$dest.css({left:"-100%"});
						$dest.animate({left:"0"},600,"swing");
						$cur.animate({left:width},600,"swing",function(){
							$(this).css({left:"100%"});
							isAnim = false;
							//curIndex = idx;
							//arrangeButton();
						});

					} else {
						// ������ �����̵�

						// �����̵� �� ������ �����ʿ� ��ġ��Ŵ
						if(idx > lastNumber)
							idx = 0;

						// �����̵� �� ������ ���ʿ� ��ġ��Ŵ -> �ִϸ��̼�
						var $dest = $items[idx];
						var $cur  = $items[curIndex];

						var width = $cur.width();
						$dest.css({left:"100%"});
						$dest.animate({left:"0"},600,"swing");
						$cur.animate({left:-width},600,"swing",function(){
							$(this).css({left:"-100%"});
							isAnim = false;
							//curIndex = idx;
							//arrangeButton();
						});
					}

					curIndex = idx;

					f08Index = curIndex;

					arrangeButton();
				}
			};

			function arrangeButton() {
				if(curIndex === 0) {
					$(".feature.f08 .btn_wrap .pop_prev_btn").css({display:"none"});
				} else {
					$(".feature.f08 .btn_wrap .pop_prev_btn").css({display:"block"});
				}

				if(curIndex === lastNumber) {
					$(".feature.f08 .btn_wrap .pop_next_btn").css({display:"none"});
				} else {
					$(".feature.f08 .btn_wrap .pop_next_btn").css({display:"block"});
				}
			};

		},

		resize : function(){
			if(nafa.windowWidth > 768 && nafa.isMobile === true){
				$(".feature.f08 .btn_wrap").css({display:"none"});
				$(".feature.f08 .popup_wrap").css({display:"none"});
				
				if ($(".f08 .video_popup.mobile_video_wrap").css("display") == "block")
				{
					$(".f08 .video_popup.web_video_wrap").css("display", "block");
					$(".f08 .video_popup.mobile_video_wrap").css("display", "none");
				}
				
			}else if (nafa.windowWidth < 768 && nafa.isMobile === false)
			{
				if ($(".f08 .video_popup.web_video_wrap").css("display") == "block")
				{
					$(".f08 .video_popup.web_video_wrap").css("display", "none");
					$(".f08 .video_popup.mobile_video_wrap").css("display", "block");
				}
			}
		},

	}));

	
	var slider01;
	var slider02;
	var control01;

	FeatureManager.add(new FeatureItem(".feature.qna.qna_web", {

		init : function() {
			var animDuration = 300;
			// close type 1
			$(".qna.qna_web .popup a.close").click(function(){
				$(this).parent().parent().parent().parent().animate({opacity:0},animDuration,"swing",function(){
					$(this).css({display:"none"});
				});
				return false;
			});


			// open type 1
			$(".qna.qna_web .qna_list ul li a.qna_q_btn").click(function(){
				$(".qna.qna_web .popup").eq($(this).parent().index()).css({display:"block", opacity:0}).animate({opacity:1},animDuration);
				return false;
			});

			/* mobile */
			slider01 = new SliderControl(".qna.qna_mobile .qna_list ul li.qna_list_01", ".qna.qna_mobile .qna_list ul li.qna_list_01 .popup.type1",function(){
				control01.init();
			});
			slider02 = new SliderControl(".qna.qna_mobile .qna_list ul li.qna_list_02", ".qna.qna_mobile .qna_list ul li.qna_list_02 .popup.type1");
			slider03 = new SliderControl(".qna.qna_mobile .qna_list ul li.qna_list_03", ".qna.qna_mobile .qna_list ul li.qna_list_03 .popup.type1");
			slider04 = new SliderControl(".qna.qna_mobile .qna_list ul li.qna_list_04", ".qna.qna_mobile .qna_list ul li.qna_list_04 .popup.type1");

			//
			$(".qna.qna_mobile .qna_list ul li.qna_list_00 > a").click(function(){
				if ($(this).parent().hasClass("select"))
				{
					switch ($(this).parent().index())
					{
						case 0:
						{
							slider01.closeFeature();
							break;
						}
						case 1:
						{
							slider02.closeFeature();
							break;
						}
						case 2:
						{
							slider03.closeFeature();
							break;
						}
						case 3:
						{
							slider04.closeFeature();
							break;
						}					
					}
				}else{
					switch ($(this).parent().index())
					{
						case 0:
						{
							slider02.closeFeature();
							slider03.closeFeature();
							slider04.closeFeature();
							slider01.openFeature();
							break;
						}
						case 1:
						{
							slider01.closeFeature();
							slider03.closeFeature();
							slider04.closeFeature();
							slider02.openFeature();
							break;
						}
						case 2:
						{
							slider01.closeFeature();
							slider02.closeFeature();
							slider04.closeFeature();
							slider03.openFeature();
							break;
						}
						case 3:
						{
							slider01.closeFeature();
							slider02.closeFeature();
							slider03.closeFeature();
							slider04.openFeature();
							break;
						}					
					}
				}

				return false;
			});


			function SliderControl(control, target, callback) {
				this.$control = $(control);
				this.$target = $(target);
				this.isOpen = false;
				this.callback = callback;
			};

			SliderControl.prototype.openFeature = function() {
				this.$control.addClass("select");
				this.isOpen = true;
				this.$target.css({display:"block", "margin-top": -this.$target.height()});
				this.$target.animate({"margin-top":0},animDuration,"swing");
			};

			SliderControl.prototype.closeFeature = function() {
				var THIS = this;
				this.$control.removeClass("select");
				this.isOpen = false;
				this.$target.animate({"margin-top": -this.$target.height()},animDuration,"swing",function(){
					$(this).css({display:"none"});

					if(THIS.callback){
						THIS.callback();
					}
				});
			};

			SliderControl.prototype.toggleFeature = function() {
				if(this.isOpen) {
					this.closeFeature();
				} else {
					this.openFeature();
				}
			};

			control01 = new CarouselContainer(".qna ul li .popup_type_wrap .cont_exp .slide00", ".qna ul li .btn_area .carousel_btn ul li", function(carousel){

				$(".qna ul li .btn_area .arrow_btn a.prev_arrow").click(function(){
					carousel.movePrev();
					return false;
				});

				$(".qna ul li .btn_area .arrow_btn a.next_arrow").click(function(){
					carousel.moveNext();
					return false;
				});

				$(".qna ul li .btn_area .carousel_btn ul li a").click(function(){
					var idx = $(this).parent().index();
					carousel.move(idx);
					return false;
				});

				carousel.arrange = function(){
					if(carousel.curIndex === 0){
						$(".qna ul li .btn_area .arrow_btn a.prev_arrow").css({display:"none"});
					}else{
						$(".qna ul li .btn_area .arrow_btn a.prev_arrow").css({display:"block"});
					}

					if(carousel.curIndex === carousel.lastNumber){
						$(".qna ul li .btn_area .arrow_btn a.next_arrow").css({display:"none"});
					}else{
						$(".qna ul li .btn_area .arrow_btn a.next_arrow").css({display:"block"});
					}

					//$(".qna ul li .btn_area .carousel_btn ul li").removeClass("active");
					//$(".qna ul li .btn_area .carousel_btn ul li").eq(carousel.curIndex).addClass("active");

				};

			});

			$(".qna a.qna_next_btn").click(function(){
				$(this).animate({"opacity":0},500,function(){
					$(this).css({"display":"none"});
				});
				$(".qna a.qna_prev_btn").css({"display":"block","opacity":0}).animate({"opacity":1},500);

				$(".qna .qna_list ul li").eq(0).css({"transition":"all 0.5s","margin-left":"-33.33%"});
				$(".qna .qna_list ul li").eq(1).css({"transition":"all 0.5s","margin-left":"-33.33%"});
				$(".qna .qna_list ul li").eq(2).css({"transition":"all 0.5s","margin-left":"-33.33%"});
				$(".qna .qna_list ul li").eq(3).css({"transition":"all 0.5s","margin-left":"-33.33%"});

				$(".qna .qna_list ul li:nth-child(3) a.qna_q_btn").css({"border-right":"1px solid rgba(0, 0, 0, 0.3)"});
				return false;
			});

			$(".qna a.qna_prev_btn").click(function(){
				$(this).animate({"opacity":0},500,function(){
					$(this).css({"display":"none"});
				});

				$(".qna a.qna_next_btn").css({"display":"block","opacity":0}).animate({"opacity":1},500);

				$(".qna .qna_list ul li").eq(0).css({"transition":"all 0.5s","margin-left":"0%"});
				$(".qna .qna_list ul li").eq(1).css({"transition":"all 0.5s","margin-left":"0%"});
				$(".qna .qna_list ul li").eq(2).css({"transition":"all 0.5s","margin-left":"0%"});
				$(".qna .qna_list ul li").eq(3).css({"transition":"all 0.5s","margin-left":"0%"});

				$(".qna .qna_list ul li:nth-child(3) a.qna_q_btn").css({"border-right":"0"});
				return false;
			});

		},

		resize : function() {
			if(nafa.windowWidth > 768 && nafa.isMobile === true){
				// ON PC
				nafa.isMobile = false;

				if(nafa.qnaIndex === 0){
					$(".qna.qna_web .popup.type1").css({display:"none", opacity:0});
					$(".qna.qna_web .popup.type2").css({display:"none", opacity:0});
				}else if(nafa.qnaIndex === 1){
					$(".qna.qna_web .popup.type1").css({display:"block", opacity:1});
					$(".qna.qna_web .popup.type2").css({display:"none", opacity:0});
				}else if(nafa.qnaIndex === 2){
					$(".qna.qna_web .popup.type1").css({display:"none", opacity:0});
					$(".qna.qna_web .popup.type2").css({display:"block", opacity:1});
				}

			}else if(nafa.windowWidth <= 768 && nafa.isMobile === false){
				// ON MOBILE
				nafa.isMobile = true;

				if(nafa.qnaIndex === 0){
					slider01.closeFeature();
					slider02.closeFeature();
					slider03.closeFeature();
					slider04.closeFeature();

				}else if(nafa.qnaIndex === 1){
					slider01.openFeature();
					slider02.closeFeature();
					slider03.closeFeature();
					slider04.closeFeature();

				}else if(nafa.qnaIndex === 2){
					slider01.closeFeature();
					slider02.openFeature();
					slider03.closeFeature();
					slider04.closeFeature();
				}else if(nafa.qnaIndex === 3){
					slider01.closeFeature();
					slider02.closeFeature();
					slider03.openFeature();
					slider04.closeFeature();
				}else if(nafa.qnaIndex === 4){
					slider01.closeFeature();
					slider02.closeFeature();
					slider03.closeFeature();
					slider04.openFeature();
				}
			}
		},

	}));

	// ��ũ�ѿ� �����ϴ� ��ó Ŭ����
	function FeatureItem(target, func) {
		this.target = $(target);
		this.func = func;

		if(this.func.init !== undefined) {
			this.func.init();
		}
	}

	FeatureItem.prototype.update = function(scrollTop) {

		if(this.func.update !== undefined) {

			// special
			this.func.update(scrollTop);

		} else {

			// FIXME: �б⺰ ����
			if(nafa.windowWidth > 768){
				var fMotionTop = this.target.offset().top - (nafa.windowHeight / 3);
				var fMotionBottom = this.target.offset().top + this.target.outerHeight(true) - (nafa.windowHeight / 3);
			}else{
				var fMotionTop = this.target.offset().top - (nafa.windowHeight / 2);
				var fMotionBottom = this.target.offset().top + this.target.outerHeight(true) - (nafa.windowHeight / 2);
			}


			// general
			if (scrollTop > fMotionTop && scrollTop < fMotionBottom) {
				this.func.on();
			} else if(scrollTop < fMotionTop - nafa.windowHeight || scrollTop > fMotionBottom + nafa.windowHeight) {
				this.func.off();
			}
		}
	}

	/***********************************************************************************/
	/* brightcove */
	document.addEventListener('DOMContentLoaded', function () {
		window.setTimeout(function () {
			brightcoveLoad();
		}, 1000);
	}, false);


	brightcoveLoad();
	function brightcoveLoad()
	{
		var s = document.createElement('script');
		//s.src = "http://players.brightcove.net/923136708001/default_default/index.min.js";
		s.src="http://players.brightcove.net/923136708001/de860ae7-af6b-4677-a7de-00a023db0853_default/index.min.js";

		document.body.appendChild(s);
		s.onload = callbackBrightCove;
	}
	
	function callbackBrightCove() {
	}

	function playBrightCove(idx){
		$(".intro .brightcove-con .brightcove-cell").css({"display":"none"});
		$(".intro .brightcove-con .brightcove-cell").eq(idx).css({"display":"block"});

		$(".intro .brightcove-con .brightcove-cell").find("video").each(function(){
			this.currentTime = 0;
			this.pause();
		});

		$(".intro .brightcove-con .brightcove-cell").eq(idx).find("video").each(function(){
			this.currentTime = 0;
			this.play();
		});
	}
	/***********************************************************************************/

});

/* Carousel */
function CarouselContainer(targets, buttonList, callback) {
	var THIS = this;

	this.$items = [];

	$(targets).each(function(){
		THIS.$items.push($(this));
	});

	this.isAnim;
	this.moveDuration;
	this.curIndex = 0;
	this.lastNumber = this.$items.length - 1;

	this.carouselButtons = $(buttonList);
	this.arrange;

	callback(this);

}

CarouselContainer.prototype = {

	movePrev : function() {
		this.move(this.curIndex - 1);
	},

	moveNext : function() {
		this.move(this.curIndex + 1);
	},

	move : function(idx) {
		if(this.curIndex == idx)
			return;

		if( !this.isAnim ) {
			this.isAnim = true;

			var THIS = this;

			if(idx < this.curIndex) {
				// ���� �����̵�

				if(idx < 0)
					idx = this.lastNumber;

				// �����̵� �� ������ ���ʿ� ��ġ��Ŵ -> �ִϸ��̼�
				var $dest = this.$items[idx];
				var $cur  = this.$items[this.curIndex];

				var width = $cur.width();
				$dest.css({left:"-100%"});
				$dest.animate({left:"0"},600,"swing");
				$cur.animate({left:width},600,"swing",function(){
					$(this).css({left:"100%"});
					THIS.isAnim = false;

				});

			} else {
				// ������ �����̵�

				// �����̵� �� ������ �����ʿ� ��ġ��Ŵ
				if(idx > this.lastNumber)
					idx = 0;

				// �����̵� �� ������ ���ʿ� ��ġ��Ŵ -> �ִϸ��̼�
				var $dest = this.$items[idx];
				var $cur  = this.$items[this.curIndex];

				var width = $cur.width();
				$dest.css({left:"100%"});
				$dest.animate({left:"0"},600,"swing");
				$cur.animate({left:-width},600,"swing",function(){
					$(this).css({left:"-100%"});
					THIS.isAnim = false;

				});
			}

			THIS.curIndex = idx;

			if(THIS.arrange)
				THIS.arrange();

			// ĳ���� ��ư ����
			if(THIS.carouselButtons) {
				THIS.carouselButtons.removeClass("active");
				THIS.carouselButtons.eq(idx).addClass("active");
			}

		}
	},

	init : function(){
		var THIS = this;
		this.curIndex = 0;
		//var $cur  = this.$items[this.curIndex];

		this.$items.forEach(function(cur, i){
			if(i === 0)
				cur.css({"left":"0"});
			else
				cur.css({"left":"100%"});
		});

		if(THIS.arrange)
			THIS.arrange();

		// ĳ���� ��ư ����
		if(THIS.carouselButtons) {
			THIS.carouselButtons.removeClass("active");
			THIS.carouselButtons.eq(THIS.curIndex).addClass("active");
		}

	},


}

/* UTIL */
function check_allDevice(){
	var mobileKeyWords = new Array('iPhone', 'iPad', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson'); //160625 device ���Ͽ� ipad �߰�
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}

	return device_name;
}

function check_androidDevice(){
	var mobileKeyWords = new Array('BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}

	return device_name;
}
