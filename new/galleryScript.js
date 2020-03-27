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


	}

	function onResize(){
		nafa.windowHeight = window.innerHeight;
        nafa.windowWidth = window.innerWidth;
	}

	function onScroll(){
		var t = $(window).scrollTop();
	}



	$(".gallery .gallery_btn_wrap a.pop_prev_btn").click(function(){
		console.log(".gallery .gallery_btn_wrap a.pop_prev_btn");
		gallerySlide = 0;
		
		$(".gallery .gallery_btn_wrap a.pop_prev_btn").css({"transition":"","-webkit-transition":"","display":"none", "opacity":0});
		$(".gallery .gallery_btn_wrap a.pop_next_btn").css({"transition":"","-webkit-transition":"","display":"block", "opacity":1});
		setTimeout(function(){
			$(".gallery .popup_gallery").css({"transition":"all 0.6s", "margin-left":"0px"});
		},100);

		$(".gallery ul li a").removeClass("active");
		$(".gallery ul li").eq(gallerySlide).find("a").addClass("active");

		setTimeout(function(){
			$(".gallery .popup_gallery").css({"transition":"","-webkit-transition":""});
		},700);
		return false;
	});

	$(".gallery .gallery_btn_wrap a.pop_next_btn").click(function(){
		console.log(".gallery .gallery_btn_wrap a.pop_next_btn");
		gallerySlide = 1;
		
		$(".gallery .gallery_btn_wrap a.pop_prev_btn").css({"transition":"","-webkit-transition":"","display":"block", "opacity":1});
		$(".gallery .gallery_btn_wrap a.pop_next_btn").css({"transition":"","-webkit-transition":"","display":"none", "opacity":0});
		$(".gallery .popup_gallery").css({"transition":"", "margin-left":"0px"});
		setTimeout(function(){
			$(".gallery .popup_gallery").css({"transition":"all 0.6s", "margin-left":"-100%"});
		},100);

		$(".gallery ul li a").removeClass("active");
		$(".gallery ul li").eq(gallerySlide).find("a").addClass("active");

		setTimeout(function(){
			$(".gallery .popup_gallery").css({"transition":"","-webkit-transition":""});
		},700);
		return false;
	});
	
	
	$(".gallery .popup_gallery01 .thumb00 a").click(function(){
		console.log(".gallery .popup_gallery01 .thumb00 a");
		gallery01_idx = $(this).parent().index();
		console.log("gallery01_idx : " + gallery01_idx);
		
		if (viewportWidth() > 768)
		{
			reGallery01_idx = gallery01Array_m[gallery01_idx];
			gallery01Array_index = gallery01_idx;	
		}else{
			
			for (var i = 0; i < 4 ;i++ )
			{
				if (gallery01Array_m[i] == gallery01_idx)
				{
					reGallery01_idx = i;
					gallery01Array_index = i;
				}
			}		
		}

		$(".gallery .popup_wrap").eq(gallerySlide).css({"display":"block", "opacity":0}).animate({"opacity":1},600);
		$(".gallery .popup_btn_wrap").css({"display":"block", "opacity":0}).animate({"opacity":1},600);

		$(".gallery .gallery_btn_wrap a.pop_prev_btn").animate({"opacity":0},600,function(){
			$(this).css("display","none");
		});
		$(".gallery .gallery_btn_wrap a.pop_next_btn").animate({"opacity":0},600,function(){
			$(this).css("display","none");
		});

		if (gallery01Array_index == 0)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}else if (gallery01Array_index == 3)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
		}else{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}

		switch (gallery01_idx)
		{
			case 0:
			{
				$(".gallery .popup_wrap01 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"0%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"100%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"200%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"300%"});
				break;
			}
			case 1:
			{
				$(".gallery .popup_wrap01 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"-100%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"0%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"100%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"200%"});
				break;
			}
			case 2:
			{
				$(".gallery .popup_wrap01 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"-200%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"-100%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"0%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"100%"});
				break;
			}
			case 3:
			{
				$(".gallery .popup_wrap01 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"-300%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"-200%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"-100%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"0%"});
				break;
			}		
		}
		return false;
	});

	$(".gallery .popup_gallery02 .thumb00 a").click(function(){
	console.log(".gallery .popup_gallery02 .thumb00 a");
		gallery02_idx = $(this).parent().index();
		console.log("1. gallery02_idx : " + gallery02_idx);
		
		if (viewportWidth() > 768)
		{
			reGallery02_idx = gallery02Array_w[gallery02_idx];
			gallery02Array_index = gallery02_idx;
		}else{
			for (var i = 0; i < 5 ;i++ )
			{
				if (gallery02Array_m[i] == gallery02_idx)
				{
					reGallery02_idx = i;
					gallery02Array_index = i;
				}
			}
		}
		console.log("2. gallery02_idx : " + gallery02_idx);

		$(".gallery .popup_wrap").eq(1).css({"display":"block", "opacity":0}).animate({"opacity":1},600);
		$(".gallery .popup_btn_wrap").css({"display":"block", "opacity":0}).animate({"opacity":1},600);
		$(".gallery .gallery_btn_wrap a.pop_prev_btn").animate({"opacity":0},600,function(){
			$(this).css("display","none");
		});
		$(".gallery .gallery_btn_wrap a.pop_next_btn").animate({"opacity":0},600,function(){
			$(this).css("display","none");
		});

		if (reGallery02_idx == 0)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}else if (reGallery02_idx == 4)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
		}else{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}

		switch (gallery02_idx)
		{
			case 0:
			{
				$(".gallery .popup_wrap02 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"0%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"100%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"200%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"300%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(4).css({"transition":"","-webkit-transition":"","left":"400%"});
				break;
			}
			case 1:
			{
				$(".gallery .popup_wrap02 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"-100%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"0%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"100%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"200%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(4).css({"transition":"","-webkit-transition":"","left":"300%"});
				break;
			}
			case 2:
			{
				$(".gallery .popup_wrap02 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"-200%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"-100%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"0%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"100%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(4).css({"transition":"","-webkit-transition":"","left":"200%"});
				break;
			}
			case 3:
			{
				$(".gallery .popup_wrap02 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"-300%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"-200%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"-100%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"0%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(4).css({"transition":"","-webkit-transition":"","left":"100%"});
				break;
			}	
			case 4:
			{
				$(".gallery .popup_wrap02 .popup_box00").eq(0).css({"transition":"","-webkit-transition":"","left":"-400%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(1).css({"transition":"","-webkit-transition":"","left":"-300%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(2).css({"transition":"","-webkit-transition":"","left":"-200%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(3).css({"transition":"","-webkit-transition":"","left":"-100%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(4).css({"transition":"","-webkit-transition":"","left":"0%"});
				break;
			}	
		}
		return false;
	});

	$(".gallery .popup_btn_wrap a.pop_close_btn").click(function(){
		console.log(".gallery .popup_btn_wrap a.pop_close_btn");
		$(".gallery .popup_wrap").eq(gallerySlide).animate({"opacity":0},600,function(){
			$(this).css("display","none");
		});
		$(".gallery .popup_btn_wrap").animate({"opacity":0},600,function(){
			$(this).css("display","none");
		});
		
		if (gallerySlide == 0)
		{
			$(".gallery .gallery_btn_wrap a.pop_prev_btn").css({"transition":"","-webkit-transition":"","display":"none", "opacity":0});
			$(".gallery .gallery_btn_wrap a.pop_next_btn").css({"transition":"","-webkit-transition":"","display":"block", "opacity":1});
			console.log("pop_next_btn show");
		}else {
			$(".gallery .gallery_btn_wrap a.pop_prev_btn").css({"transition":"","-webkit-transition":"","display":"block", "opacity":1});
			$(".gallery .gallery_btn_wrap a.pop_next_btn").css({"transition":"","-webkit-transition":"","display":"none", "opacity":0});
			console.log("pop_prev_btn show");
		}
		
		return false;
	});
	

	$(".gallery .popup_btn_wrap a.pop_prev_btn").click(function(){
		console.log(".gallery .popup_btn_wrap a.pop_prev_btn");
		if (!galleryMotion_Able)
		{
			galleryMotion_Able = true;

			if (gallerySlide == 0)
			{
				console.log("gallery01_idx : " + gallery01_idx);

				if (viewportWidth() > 768)
				{
					gallery01oldIdx = gallery01Array_w[gallery01Array_index];
					gallery01newIdx = gallery01Array_w[gallery01Array_index-1];
				}else{
					gallery01oldIdx = gallery01Array_m[gallery01Array_index];
					gallery01newIdx = gallery01Array_m[gallery01Array_index-1];
				}

				$(".gallery .popup_wrap01 .popup_box00").eq(gallery01oldIdx).css({"transition":"", "-webkit-transition":"", "left":"0%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(gallery01newIdx).css({"transition":"", "-webkit-transition":"", "left":"-100%"});
				setTimeout(function(){
					$(".gallery .popup_wrap01 .popup_box00").eq(gallery01oldIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"100%"});
					$(".gallery .popup_wrap01 .popup_box00").eq(gallery01newIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"0%"});
					gallery01Array_index--;
					gallery01_idx = gallery01newIdx;

					if (gallery01Array_index == 0)
					{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
					}else{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
					}
				},100);

				

			}else{
				console.log("gallery02_idx : " + gallery02_idx);
				
				if (viewportWidth() > 768)
				{
					gallery02oldIdx = gallery02Array_w[gallery02Array_index];
					gallery02newIdx = gallery02Array_w[gallery02Array_index-1];
				}else{
					gallery02oldIdx = gallery02Array_m[gallery02Array_index];
					gallery02newIdx = gallery02Array_m[gallery02Array_index-1];
				}

				$(".gallery .popup_wrap02 .popup_box00").eq(gallery02oldIdx).css({"transition":"", "-webkit-transition":"", "left":"0%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(gallery02newIdx).css({"transition":"", "-webkit-transition":"", "left":"-100%"});
				setTimeout(function(){
					$(".gallery .popup_wrap02 .popup_box00").eq(gallery02oldIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"100%"});
					$(".gallery .popup_wrap02 .popup_box00").eq(gallery02newIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"0%"});
					gallery02Array_index--;
					gallery02_idx = gallery02newIdx;

					if (gallery02Array_index == 0)
					{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
					}else{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
					}
				},100);

				
			}

			

			setTimeout(function(){
				galleryMotion_Able = false;
				$(".gallery .popup_wrap01 .popup_box00").css({"transition":"", "-webkit-transition":""});
				$(".gallery .popup_wrap02 .popup_box00").css({"transition":"", "-webkit-transition":""});
			},600);
		}
		
		return false;
	});

	$(".gallery .popup_btn_wrap a.pop_next_btn").click(function(){
		console.log(".gallery .popup_btn_wrap a.pop_next_btn");
		if (!galleryMotion_Able)
		{
			galleryMotion_Able = true;
			console.log("gallerySlide : " + gallerySlide);
			if (gallerySlide == 0)
			{
				console.log("gallery01_idx : " + gallery01_idx);

				if (viewportWidth() > 768)
				{
					gallery01oldIdx = gallery01Array_w[gallery01Array_index];
					gallery01newIdx = gallery01Array_w[gallery01Array_index+1];
				}else{
					gallery01oldIdx = gallery01Array_m[gallery01Array_index];
					gallery01newIdx = gallery01Array_m[gallery01Array_index+1];
				}
				console.log("gallery01newIdx : " + gallery01newIdx + ", gallery01oldIdx : " + gallery01oldIdx + ", gallery01Array_index : " + gallery01Array_index);

				$(".gallery .popup_wrap01 .popup_box00").eq(gallery01oldIdx).css({"transition":"", "-webkit-transition":"", "left":"0%"});
				$(".gallery .popup_wrap01 .popup_box00").eq(gallery01newIdx).css({"transition":"", "-webkit-transition":"", "left":"100%"});
				setTimeout(function(){
					$(".gallery .popup_wrap01 .popup_box00").eq(gallery01oldIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"-100%"});
					$(".gallery .popup_wrap01 .popup_box00").eq(gallery01newIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"0%"});
					gallery01Array_index++;
					gallery01_idx = gallery01newIdx;

					if (gallery01Array_index == 3)
					{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
					}else{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
					}
				},100);
			}else{
				console.log("gallery02_idx : " + gallery02_idx);

				if (viewportWidth() > 768)
				{
					gallery02oldIdx = gallery02Array_w[gallery02Array_index];
					gallery02newIdx = gallery02Array_w[gallery02Array_index+1];
				}else{
					gallery02oldIdx = gallery02Array_m[gallery02Array_index];
					gallery02newIdx = gallery02Array_m[gallery02Array_index+1];
				}
				
				console.log("gallery02newIdx : " + gallery02newIdx + ", gallery02oldIdx : " + gallery02oldIdx);

				$(".gallery .popup_wrap02 .popup_box00").eq(gallery02oldIdx).css({"transition":"", "-webkit-transition":"", "left":"0%"});
				$(".gallery .popup_wrap02 .popup_box00").eq(gallery02newIdx).css({"transition":"", "-webkit-transition":"", "left":"100%"});
				setTimeout(function(){
					$(".gallery .popup_wrap02 .popup_box00").eq(gallery02oldIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s","left":"-100%"});
					$(".gallery .popup_wrap02 .popup_box00").eq(gallery02newIdx).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s","left":"0%"});
					gallery02Array_index++;
					gallery02_idx = gallery02newIdx;

					if (gallery02Array_index == 4)
					{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
					}else{
						$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
						$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
					}
				},100);
			}

			setTimeout(function(){
				galleryMotion_Able = false;
				$(".gallery .popup_wrap01 .popup_box00").css({"transition":"", "-webkit-transition":""});
				$(".gallery .popup_wrap02 .popup_box00").css({"transition":"", "-webkit-transition":""});
			},600);
		}
		return false;
	});

	$(".gallery .popup_gallery_wrap > ul li a").click(function(){
		console.log(".gallery .popup_gallery_wrap > ul li a");
		if (gallerySlide != $(this).parent().index())
		{
			gallerySlide = $(this).parent().index();
			$(".gallery ul li a").removeClass("active");
			$(".gallery ul li").eq(gallerySlide).find("a").addClass("active");
			if (gallerySlide == 0)
			{
				
				$(".gallery .gallery_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
				$(".gallery .gallery_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
				setTimeout(function(){
					$(".gallery .popup_gallery").css({"transition":"all 0.6s", "margin-left":"0px"});
				},100);
			}
			else
			{
				$(".gallery .gallery_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
				$(".gallery .gallery_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
				$(".gallery .popup_gallery").css({"transition":"", "margin-left":"0px"});
				setTimeout(function(){
					$(".gallery .popup_gallery").css({"transition":"all 0.6s", "margin-left":"-100%"});
				},100);
			}
		}
		return false;
	});
});

var gallerySlide = 0;
var gallery01_idx = 0;
var gallery02_idx = 0;
var galleryMotion_Able = false;

var gallery01newIdx = 0;
var gallery01oldIdx = 0;
var gallery02newIdx = 0;
var gallery02olIdx = 0;

var reGallery01_idx = 0;
var reGallery02_idx = 0;

var gallery01Array_index = 0;
var gallery02Array_index = 0;

var gallery01Array_w = [0,1,2,3];
var gallery01Array_m = [0,1,3,2];
var gallery02Array_w = [0,1,2,3,4];
var gallery02Array_m = [0,2,4,1,3];
function galleryResize(size)
{

	console.log("galleryResize : " + size + ", gallery01_idx : " + gallery01_idx + ", gallery02_idx : " + gallery02_idx + ", gallery01Array_index : " + gallery01Array_index + ", gallery02Array_index : " + gallery02Array_index);
	if (size == "web")
	{
		gallery01_idx = gallery01Array_m[gallery01Array_index];
		
		if (gallerySlide == 0)
		{
			gallery01_idx = gallery01Array_m[gallery01Array_index];
			gallery01Array_index = gallery01_idx;
		}else {
			gallery02_idx = gallery02Array_m[gallery02Array_index];
			gallery02Array_index = gallery02_idx;
		}

	}else{
		
		
		console.log("resize gallery01_idx : " + gallery01_idx + ", gallery02_idx : " + gallery02_idx);
		if (gallerySlide == 0)
		{
			gallery01_idx = gallery01Array_m[gallery01Array_index];
			gallery01Array_index = gallery01_idx;
		}else {
			var reGallery02Arrya_index = 0;
			gallery02_idx = gallery02Array_m[gallery02Array_index];

			for (var i = 0; i < 5 ; i++ )
			{
				if (gallery02Array_m[i] == gallery02Array_index)
				{
					reGallery02Arrya_index = i;
				}
			}

			gallery02Array_index = reGallery02Arrya_index;
		}
	}

	console.log("resize gallery01_idx : " + gallery01_idx + ", gallery02_idx : " + gallery02_idx + ", gallery01Array_index : " + gallery01Array_index + ", gallery02Array_index : " + gallery02Array_index);

	if ($(".gallery .popup_wrap").eq(0).css("display") == "block")
	{
		if (gallery01Array_index == 0)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}else if (gallery01Array_index == 3)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
		}else{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}
	}else if ($(".gallery .popup_wrap").eq(1).css("display") == "block")
	{
		console.log("gallery02Array_index : " + gallery02Array_index);
		if (gallery02Array_index == 0)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}else if (gallery02Array_index == 4)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
		}else{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}
	}else {
		if (gallerySlide == 0)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"none", "opacity":0});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"block", "opacity":1});
		}else if (gallerySlide == 1)
		{
			$(".gallery .popup_btn_wrap a.pop_prev_btn").css({"display":"block", "opacity":1});
			$(".gallery .popup_btn_wrap a.pop_next_btn").css({"display":"none", "opacity":0});
		}
	}
}