
/* Loading... */
var queue = new createjs.LoadQueue();
queue.on("progress", function(e) {
	//console.log(e.progress);
//	$('#loadBegin').text(parseInt(e.progress * 100) + '%');
	$(".main").fadeOut();	
	$('video')[0].pause();
}, this);

queue.on("complete", function(e) {
	$("#loadDiv").fadeOut();
	$(".main").fadeIn();	
//	$('video')[0].pause();
}, this);

queue.loadManifest([
	//闇€瑕佸姞杞界殑璧勬簮鐨勬墍鏈夎祫婧�
	"img/bg.jpg",
	"img/link.jpg",
	"img/pic01.jpg",
	"img/pic02.jpg",
	"img/pic03.jpg",
	"img/pic04.jpg",
	"img/pic05.jpg",
	"img/pic06.jpg",
	"img/back.png",
	"img/border.png",
	"img/c1.png",	
	"img/c8.png",	
	"img/c9.png",	
	"img/c10.png",	
	"img/close.png",
	"img/code.png",
	"img/logo.png",
	"img/musicClose.png",
	"img/musicOpen.png",
	"img/next.png",
	"img/p1_01.png",
	"img/p1_02.png",
	"img/p1_btn.png",
	"img/p2_btn01.png",
	"img/p2_btn02.png",
	"img/p2_r01.png",
	"img/p2_r02.png",
	"img/p2_rt.png",
	"img/p3_btn01.png",
	"img/p3_btn02.png",
	"img/p3_btn03.png",
	"img/p3_r01.png",
	"img/p3_r02.png",
	"img/p3_r03.png",
	"img/pic01a.png",
	"img/pic02a.png",
	"img/pic03a.png",
	"img/pic04a.png",
	"img/pic05a.png",
	"img/pic06a.png",
	"img/prev.png",
	"img/r4.png",	
	"img/r6.png",	
	"img/r7.png",	
	"img/rule_bg.png",
	"img/link.jpg",
//	"img/bgm.mp3",
	"img/loading.gif"
	
	
//	"img/video_0.mp4",
//	"img/video_1.mp4",
//	"img/video_2.mp4"
]);