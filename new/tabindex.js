$(function() {
	
	var gallery02Sequence = [0, 2, 4, 1, 3];

	$(".feature .info_btn_wrap a.info_prev_btn").keydown(function(e) {
		if((e.keyCode === 13)){ // enter
			
			$(".feature .info_btn_wrap a.info_prev_btn").trigger("click");

			if($(".feature.kv_info .info_btn_wrap ul li").eq(0).find("a").hasClass("active"))
			{
				e.preventDefault();
				$(".feature.kv_info .info_btn_wrap a.info_next_btn").focus();
			}
		};
	});

	$(".feature .info_btn_wrap a.info_next_btn").keydown(function(e) {
		if((e.keyCode === 13)){ // enter
			$(".feature .info_btn_wrap a.info_next_btn").trigger("click");

			if($(".feature.kv_info .info_btn_wrap ul li").eq(2).find("a").hasClass("active"))
			{
				e.preventDefault();
				$(".feature.kv_info .info_btn_wrap a.info_prev_btn").focus();
			}
		};
	});

	$(document).on("keydown",".f10 .txt .feature-desc a.tooltip_txt",function(e){
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
			$(".f10 .txt_popup").removeClass("active");
			$(".f01").focus();
			e.stopImmediatePropagation();
		};
		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			$(".f10 .txt_popup").removeClass("active");
			$(".f10").focus();
			e.stopImmediatePropagation();
		};
	});
	
	$(document).on("keydown",".f10",function(e){
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
			$(".f10 .txt .feature-desc a.tooltip_txt").focus();
			$(".f10 .txt_popup").addClass("active");
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			//e.preventDefault();
			$(".f10 .txt_popup").removeClass("active");
		};
	});

	$(document).on("keydown",".f01",function(e){
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			//e.preventDefault();
			$(".f10 .txt_popup").removeClass("active");
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			$(".f10 .txt .feature-desc a.tooltip_txt").focus();
			$(".f10 .txt_popup").addClass("active");
		};
	});

	$(document).on("focusout",".f10 .txt .feature-desc a.tooltip_txt",function(e){
		$(".f10 .txt_popup").removeClass("active");
	});

	/////////////////////////////////////////////////////////////////////
	/* f03 */

	$(".f03 .obj_in > a.play_btn").keydown(function(e) {
		if((e.keyCode === 13)){ // enter

			if(nafa.windowWidth > 768){
				$(this).trigger("click");
				setTimeout(function(){
					$(".f03 .web_video_wrap a.pop_close_btn").focus();
				}, 500);
			}else{
				$(this).trigger("click");
				setTimeout(function(){
					$(".f03 .mobile_video_wrap a.pop_close_btn").focus();
				}, 500);
			}
			e.stopPropagation();
		};
	});

	$(".f03 .web_video_wrap a.pop_close_btn").keydown(function(e) {

		if((e.keyCode === 13)){ // enter

			
			$(this).trigger("click");
			setTimeout(function(){
				$(".f03 .obj_in > a.play_btn").focus();
			}, 500);
			
			e.stopPropagation();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
        };

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
		};
	});

	$(".f03 .mobile_video_wrap a.pop_close_btn").keydown(function(e) {

		if((e.keyCode === 13)){ // enter

			
			$(this).trigger("click");
			setTimeout(function(){
				$(".f03 .obj_in > a.play_btn").focus();
			}, 500);
			
			e.stopPropagation();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
        };

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
		};
	});

	$(document).on("keydown",".f04 .txt .feature-desc a.tooltip_txt",function(e){

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
			$(".f04 .txt_popup").removeClass("active");
			$(".f05").focus();
			e.stopImmediatePropagation();
		};
		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			$(".f04 .txt_popup").removeClass("active");
			$(".f04").focus();
			e.stopImmediatePropagation();
		};
	});
	
	$(document).on("keydown",".f04",function(e){

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
			$(".f04 .txt .feature-desc a.tooltip_txt").focus();
			$(".f04 .txt_popup").addClass("active");
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			//e.preventDefault();
			$(".f04 .txt_popup").removeClass("active");
			//$(".f04").focus();
		};
	});

	$(document).on("keydown",".f05",function(e){

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			//e.preventDefault();
			$(".f04 .txt_popup").removeClass("active");
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			$(".f04 .txt .feature-desc a.tooltip_txt").focus();
			$(".f04 .txt_popup").addClass("active");
		};
	});

	$(document).on("focusout",".f04 .txt .feature-desc a.tooltip_txt",function(e){
		$(".f04 .txt_popup").removeClass("active");
	});

	/////////////////////////////////////////////////////////////////////
	/* f08 */

	$(".f08").keydown(function(e) {
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();


			if($(".f08 .popup_wrap").css("display") === "block"){
				$(".f08 .btn_wrap a.pop_close_btn").focus();
			}else{
				$(".f08 .popup_gallery div.thumb01 a").focus();
				$(".f08 .popup_gallery div.thumb01").addClass("hover");
			}
		};
	});

	$(".f08 .popup_gallery .thumb00 a").focusout(function(e){
		$(this).parent().removeClass("hover");
	});
	
	$(".f08 .popup_gallery .thumb00 a").keydown(function(e) {
		
		e.preventDefault();
		if((e.keyCode === 13)){ // enter

			if(nafa.windowWidth <= 768){
				$(this).trigger("click");
				setTimeout(function(){
					$(".f08 .btn_wrap a.pop_close_btn").focus();
				}, 500);
			}
			e.stopPropagation();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab

			var idx = $(this).parent().index();
			if(idx !== 0){
				$(".f08 .popup_gallery .thumb00").eq(idx-1).find("a").focus();
				$(".f08 .popup_gallery .thumb00").eq(idx-1).addClass("hover");
			}else{
				$(".f08").focus();
			}
        };

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			
			var idx = $(this).parent().index();
			if(idx < 4){
				$(".f08 .popup_gallery .thumb00").eq(idx+1).find("a").focus();
				$(".f08 .popup_gallery .thumb00").eq(idx+1).addClass("hover");
			}else{
				$(".gallery").focus();
			}

			e.stopPropagation();
		};
	});

	$(".f08 .btn_wrap a.pop_close_btn").keydown(function(e){
		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			if($(".f08 .btn_wrap a.pop_prev_btn").css("display") === "block")
				$(".f08 .btn_wrap a.pop_prev_btn").focus();
			else
				$(".f08 .btn_wrap a.pop_next_btn").focus();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
            if($(".f08 .btn_wrap a.pop_next_btn").css("display") === "block")
				$(".f08 .btn_wrap a.pop_next_btn").focus();
			else
				$(".f08 .btn_wrap a.pop_prev_btn").focus();
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			//$(".f08 .popup_gallery .thumb00 a").focus();

			$(".f08 .popup_gallery .thumb00").eq(f08Index).find("a").focus();
		};

		e.stopPropagation();
	});

	$(".f08 .btn_wrap a.pop_prev_btn").keydown(function(e){
		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab

			if($(".f08 .btn_wrap a.pop_next_btn").css("display") === "block"){
				$(".f08 .btn_wrap a.pop_next_btn").focus();
			}else{
				$(".f08 .btn_wrap a.pop_close_btn").focus();
			}
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			$(".f08 .btn_wrap a.pop_close_btn").focus();
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			if($(".f08 .btn_wrap a.pop_prev_btn").css("display") === "none"){
				$(".f08 .btn_wrap a.pop_next_btn").focus();
			}
		};

		e.stopPropagation();
	});

	$(".f08 .btn_wrap a.pop_next_btn").keydown(function(e){
		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			$(".f08 .btn_wrap a.pop_close_btn").focus();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			if($(".f08 .btn_wrap a.pop_prev_btn").css("display") === "block"){
				$(".f08 .btn_wrap a.pop_prev_btn").focus();
			}else{
				$(".f08 .btn_wrap a.pop_close_btn").focus();
			}
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			if($(".f08 .btn_wrap a.pop_next_btn").css("display") === "none"){
				$(".f08 .btn_wrap a.pop_prev_btn").focus();
			}
		};

		e.stopPropagation();
	});

	/////////////////////////////////////////////////////////////////////
	/* gallery */

	function getGalleryIdx(){

		return gallerySlide;
	}

	$(".gallery").keydown(function(e) {

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab

			e.preventDefault();

			if($(".f08 .popup_wrap").css("display") === "block"){
				$(".f08 .btn_wrap a.pop_close_btn").focus();
			}else{
				$(".f08 .popup_gallery div.thumb05 a").focus();
				$(".f08 .popup_gallery div.thumb05").addClass("hover");
			}
        };

		if((e.keyCode === 9 && !e.shiftKey)){ // tab

			e.preventDefault();

			if($(".gallery .popup_screen .popup_btn_wrap").css("display") === "block"){
				$(".gallery .popup_screen .popup_btn_wrap a.pop_close_btn").focus();
			}else{
				if(getGalleryIdx() === 0){
					$(".gallery .popup_gallery01 .thumb00").eq(0).find("a").focus();
				}else{
					$(".gallery .btn_wrap.gallery_btn_wrap a.pop_prev_btn").focus();
				}
			}
		};
	});

	var curGalleryItem;

	$(".gallery .popup_gallery01 .thumb00 a").keydown(function(e) {

		e.preventDefault();
		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			$//$(".gallery .btn_wrap a.pop_close_btn").focus();
console.log(".gallery .popup_gallery01 .thumb00 a - gallery01Array_index : " + gallery01Array_index);
			if (gallery01Array_index == 4)
				$(".gallery .popup_btn_wrap a.pop_prev_btn").focus();
			else
				$(".gallery .popup_btn_wrap a.pop_next_btn").focus();
			

			curGalleryItem = $(this);
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			var curIndex = $(this).parent().index();

			var $gallery = $(".gallery .popup_gallery01 .thumb00");

			if(curIndex === 0){
				$(".gallery").focus();
			}else{
				$gallery.eq(curIndex - 1).find("a").focus();
			}

			e.stopPropagation();
        };

		if((e.keyCode === 9 && !e.shiftKey)){ // tab

			var curIndex = $(this).parent().index();

			var $gallery = $(".gallery .popup_gallery01 .thumb00");

			if(curIndex === 4){
				$(".gallery .btn_wrap a.pop_next_btn").focus();
			}else{
				$gallery.eq(curIndex + 1).find("a").focus();
			}

			
			e.stopPropagation();

		};
	});

	$(".gallery .popup_gallery02 .thumb00 a").keydown(function(e) {

		e.preventDefault();
		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			//$(".gallery .btn_wrap a.pop_close_btn").focus();
			
			console.log("reGallery01_idx : " + reGallery01_idx);
			if (gallery02Array_index == 4)
				$(".gallery .popup_btn_wrap a.pop_prev_btn").focus();
			else
				$(".gallery .popup_btn_wrap a.pop_next_btn").focus();

			curGalleryItem = $(this);
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			
			var curIndex = $(this).parent().index();

			var $gallery = $(".gallery .popup_gallery02 .thumb00");
			
			if(nafa.windowWidth > 768){

				if(curIndex === 0){
					$(".gallery .btn_wrap.gallery_btn_wrap a.pop_prev_btn").focus();
				}else{
					$gallery.eq(curIndex - 1).find("a").focus();
				}

			}else{
				

				switch(curIndex) {
					case 0 :
						$(".gallery .btn_wrap.gallery_btn_wrap a.pop_prev_btn").focus();
						break;
					case 1 :
						$gallery.eq(4).find("a").focus();
						break;
					case 2 :
						$gallery.eq(0).find("a").focus();
						break;
					case 3 :
						$gallery.eq(1).find("a").focus();
						break;
					case 4 :
						$gallery.eq(2).find("a").focus();
						break;
				}
			}

			e.stopPropagation();
        };

		if((e.keyCode === 9 && !e.shiftKey)){ // tab

			var curIndex = $(this).parent().index();

			var $gallery = $(".gallery .popup_gallery02 .thumb00");

			if(nafa.windowWidth > 768){
				if(curIndex === 4){
					$(".gallery .popup_gallery_wrap ul li").eq(0).find("a").focus();
				}else{
					$gallery.eq(curIndex + 1).find("a").focus();
				}
				/*switch(curIndex) {
					case 0 :
						$gallery.eq(1).find("a").focus();
						break;
					case 1 :
						$gallery.eq(2).find("a").focus();
						break;
					case 2 :
						$gallery.eq(3).find("a").focus();
						break;
					case 3 :
						$gallery.eq(4).find("a").focus();
						break;
					case 4 :
						$(".gallery .popup_gallery_wrap ul li").eq(0).find("a").focus();
						//$(".gallery .btn_wrap a.pop_prev_btn").focus();
						break;
				}*/
			}else{
				
				switch(curIndex) {
					case 0 :
						$gallery.eq(2).find("a").focus();
						break;
					case 1 :
						$gallery.eq(3).find("a").focus();
						break;
					case 2 :
						$gallery.eq(4).find("a").focus();
						break;
					case 3 :
						$(".gallery .popup_gallery_wrap ul li").eq(0).find("a").focus();
						break;
					case 4 :
						$gallery.eq(1).find("a").focus();
						//$(".gallery .btn_wrap a.pop_prev_btn").focus();
						break;
				}
			}
			
			e.stopPropagation();

		};
	});

	$(".gallery .btn_wrap.gallery_btn_wrap a.pop_prev_btn").keydown(function(e){

		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			//$(".gallery .popup_gallery_wrap ul li").eq(0).find("a").focus();
			if(getGalleryIdx() === 0){
				$(".gallery .popup_gallery01 .thumb00").eq(0).find("a").focus();
			}else{
				$(".gallery .popup_gallery02 .thumb00").eq(0).find("a").focus();
			}
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			//$(".gallery .popup_gallery02 .thumb00").eq(4).find("a").focus();
			$(".gallery").focus();
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			if($(".gallery .btn_wrap.gallery_btn_wrap a.pop_prev_btn").css("display") === "none"){
				$(".gallery .btn_wrap.gallery_btn_wrap a.pop_next_btn").focus();
			}
		};

		e.stopPropagation();

	});

	$(".gallery .btn_wrap.gallery_btn_wrap a.pop_next_btn").keydown(function(e){

		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			$(".gallery .popup_gallery_wrap ul li").eq(0).find("a").focus();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			$(".gallery .popup_gallery01 .thumb00").eq(4).find("a").focus();
        };

		if((e.keyCode === 13)){ // enter

			$(this).trigger("click");
			if($(".gallery .btn_wrap.gallery_btn_wrap a.pop_next_btn").css("display") === "none"){
				$(".gallery .btn_wrap.gallery_btn_wrap a.pop_prev_btn").focus();
			}
		};

		e.stopPropagation();
	});

	$(".gallery .popup_gallery_wrap ul li a").keydown(function(e){

		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			var idx = $(this).parent().index();

			if(idx === 0){
				$(".gallery .popup_gallery_wrap ul li").eq(1).find("a").focus();
			}else{
				$(".f09").focus();
			}
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			var idx = $(this).parent().index();

			if(idx === 1){
				$(".gallery .popup_gallery_wrap ul li").eq(0).find("a").focus();
			}else{

				if($(".gallery .btn_wrap a.pop_next_btn").css("display") === "block"){
					$(".gallery .btn_wrap a.pop_next_btn").focus();
				}else{
					if(getGalleryIdx() === 0) {
						$(".gallery .popup_gallery01 .thumb00").eq(4).find("a").focus();
					}else{
						if(nafa.windowWidth > 768){
							$(".gallery .popup_gallery02 .thumb00").eq(4).find("a").focus();
						}else{
							$(".gallery .popup_gallery02 .thumb00").eq(3).find("a").focus();
						}
					}
				}
				
			}
			
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			
		};

		e.stopPropagation();
	});

	$(".gallery .popup_screen .btn_wrap a.pop_close_btn").keydown(function(e){

		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			if($(".gallery .popup_screen .btn_wrap a.pop_prev_btn").css("display") === "block" ){
				$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
			}else{
				$(".gallery .popup_screen .btn_wrap a.pop_next_btn").focus();
			}
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			if($(".gallery .popup_screen .btn_wrap a.pop_next_btn").css("display") === "block" ){
				$(".gallery .popup_screen .btn_wrap a.pop_next_btn").focus();
			}else{
				$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
			}
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");

			if (gallerySlide == 0)
			{
				if (viewportWidth() > 768)
				{
					gallery01newIdx = gallery01Array_w[gallery01Array_index];
				}else{
					gallery01newIdx = gallery01Array_m[gallery01Array_index];
				}

				$(".gallery .popup_gallery01 .thumb00").eq(gallery01newIdx).find("a").focus();
			}else {
				if (viewportWidth() > 768)
				{
					gallery02newIdx = gallery02Array_w[gallery02Array_index];
				}else{
					gallery02newIdx = gallery02Array_m[gallery02Array_index];
				}

				$(".gallery .popup_gallery02 .thumb00").eq(gallery02newIdx).find("a").focus();
			}
			
		};

		e.stopPropagation();
	});

	$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").keydown(function(e){

		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			if($(".gallery .popup_screen .btn_wrap a.pop_next_btn").css("display") === "block"){
				$(".gallery .popup_screen .btn_wrap a.pop_next_btn").focus();
			}else{
				$(".gallery .popup_screen .btn_wrap a.pop_close_btn").focus();
			}
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			$(".gallery .popup_screen .btn_wrap a.pop_close_btn").focus();
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");
			
			if (gallerySlide == 0)
			{
				if (gallery01Array_index == 1)
				{
					$(".gallery .popup_screen .btn_wrap a.pop_next_btn").focus();
				}
			}else {
				if (gallery02Array_index == 1)
				{
					$(".gallery .popup_screen .btn_wrap a.pop_next_btn").focus();
				}
			}
			/*if(galleryImageIndex === 0){
				$(".gallery .popup_screen .btn_wrap a.pop_next_btn").focus();
			}*/
		};

		e.stopPropagation();
	});

	$(".gallery .popup_screen .btn_wrap a.pop_next_btn").keydown(function(e){

		e.preventDefault();
		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			$(".gallery .popup_screen .btn_wrap a.pop_close_btn").focus();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			if($(".gallery .popup_screen .btn_wrap a.pop_prev_btn").css("display") === "block"){
				$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
			}else{
				$(".gallery .popup_screen .btn_wrap a.pop_close_btn").focus();
			}
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");

			if (gallerySlide == 0)
			{
				console.log("gallery01Array_index : " + gallery01Array_index);
				if (gallery01Array_index == 3)
				{
					$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
				}
			}else {
				if (gallery02Array_index == 3)
				{
					$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
				}
			}

			/*if(getGalleryIdx() === 0){
				if(galleryImageIndex === 3){
					$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
				}
			}else{
				if(galleryImageIndex === 4){
					$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
				}
			}*/
		};

		e.stopPropagation();
	});

	/////////////////////////////////////////////////////////////////////////////////////////////
	/* f09 */

	$(".f09").keydown(function(e){

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			
			if($(".f09 .video_screen .video_wrap .dimmed_txt_box").css("display") === "block"){
				e.preventDefault();
				$(".f09 .video_screen .video_wrap .dimmed_txt_box a.play_btn").focus();
			}else{
				//$(".f09 .video_list ul li").eq(0).find("a").focus();
			}
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			if($(".gallery .popup_screen .btn_wrap").css("display") === "block"){
				e.preventDefault();
				if($(".gallery .popup_screen .btn_wrap a.pop_next_btn").css("display") === "block"){
					$(".gallery .popup_screen .btn_wrap a.pop_next_btn").focus();
				}else if($(".gallery .popup_screen .btn_wrap a.pop_prev_btn").css("display") === "block"){
					$(".gallery .popup_screen .btn_wrap a.pop_prev_btn").focus();
				}
			}else{
				//$(".gallery .popup_gallery_wrap ul li").eq(1).find("a").focus();
			}
        };

	});

	$(".f09 .video_screen .video_wrap .dimmed_txt_box a.play_btn").keydown(function(e){

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
			$(".f09 .video_list ul li").eq(0).find("a").focus();
			e.stopPropagation();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			$(".f09").focus();
			e.stopPropagation();
        };

		
		if((e.keyCode === 13)){ // enter
			e.preventDefault();
			$(this).trigger("click");

			$(".f09 .video_list ul li").eq(0).find("a").focus();
		};

	});

	$(".f09 .video_list ul li a").keydown(function(e){

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();

			var idx = $(this).parent().index();

			// FIXME: 
			if(idx == 0){
				$(".f09 .video_list ul li").eq(idx+1).find("a").focus();
			}else if(idx == 1){
				if(nafa.windowWidth > 768){
					$(".qna_web").focus();
				}else{
					$(".qna_mobile").focus();
				}
			}
			
			e.stopImmediatePropagation();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			

			var idx = $(this).parent().index();
			if(idx === 0){
				if($(".f09 .video_screen .video_wrap .dimmed_txt_box").css("display") === "block"){
					e.preventDefault();
					$(".f09 .video_screen .video_wrap .dimmed_txt_box a.play_btn").focus();
					e.stopImmediatePropagation();
				}else{
				}
			}else{
				e.preventDefault();
				$(".f09 .video_list ul li").eq(idx-1).find("a").focus();
			}
        };

	});

	/////////////////////////////////////////////////////////////////////////////////////////////
	/* qna_web */

	$(".qna_web").keydown(function(e){

		if((e.keyCode === 13)){ // enter
			
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab

        };

		if((e.keyCode === 13)){ // enter

		};
	});

	$(".qna_web .qna_list ul li a.qna_q_btn").keydown(function(e){

		if((e.keyCode === 13)){ // enter
			e.preventDefault();
			$(this).trigger("click");

			var idx = $(this).parent().index();

			setTimeout(function(){
				//$(".qna_web .popup .popup_title a.close").focus();
				$(".qna_web .popup").eq(idx).find(".popup_title a.close").focus();
			}, 500);
		};
	});

	$(".qna_web .popup .popup_title a.close").keydown(function(e){

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");

			var idx = $(this).parent().parent().parent().parent().index();

			setTimeout(function(){
				$(".qna_web .qna_list ul li").eq(idx-1).find("a.qna_q_btn").focus();
			}, 500);
		};
	});


	/////////////////////////////////////////////////////////////////////////////////////////////
	/* qna_mobile */

	//.qna ul li .btn_area .arrow_btn a.next_arrow
	$(".qna ul li .btn_area .arrow_btn a.next_arrow").keydown(function(e){

		e.preventDefault();

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			$(".qna.qna_mobile ul li .btn_area .carousel_btn ul li").eq(0).find("a").focus();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			$(".qna .qna_list ul li.qna_list_00.select > a").focus();
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");

			$(".qna ul li .btn_area .arrow_btn a.prev_arrow").focus();
		};
	});

	$(".qna ul li .btn_area .arrow_btn a.prev_arrow").keydown(function(e){

		e.preventDefault();

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			$(".qna.qna_mobile ul li .btn_area .carousel_btn ul li").eq(0).find("a").focus();
		};

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			$(".qna .qna_list ul li.qna_list_00.select > a").focus();
        };

		if((e.keyCode === 13)){ // enter
			$(this).trigger("click");

			$(".qna ul li .btn_area .arrow_btn a.next_arrow").focus();

		};
	});

	function checkIE(){
		var agent = navigator.userAgent.toLowerCase();
	 
		if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
			return true;
		}else{
			return false;
		}
	}

});