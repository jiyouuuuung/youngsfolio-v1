$(window)
	.load(mLoad)
	.scroll(mScroll)
	.resize(mResize);

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var video_f01;
var isPlay;

function mLoad()
{
	video_f01 = document.getElementById('video_f01');
}


function mResize()
{

}

function mScroll()
{
	var t = $(window).scrollTop();

	var f01MotionTop = $(".f01").offset().top - (windowHeight / 3);
	var f01MotionBottom = $(".f01").offset().top + $(".f01").outerHeight(true) - (windowHeight / 3);

	if(t > f01MotionTop && t < f01MotionBottom){
		if( !isPlay ){
			isPlay = true;
			$(".f01 .video_wrap img").animate({opacity:0},300,function(){
				$(this).css("display","none");
				$(".f01 .video_wrap video").css("display","block");
			});
			if(video_f01 !== undefined)
				video_f01.play();
		}
	} else {
		if(video_f01 !== undefined){
			video_f01.currentTime = 0;
			video_f01.pause();
			isPlay = false;
		}
	}
}