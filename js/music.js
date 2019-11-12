$(document).ready(function(){
//	音乐初始化
var video1 = document.getElementById("videoV")
	var music_dom=$("<p class='music_p rotate' id='music'></p>");
//	var audio_dom=$("<audio class='mp3' src='./img/bgm.mp3' autoplay='autoplay' loop='loop' id='audio_mp3'></audio>")
//	var audio_dom=$("#audio_mp3");
	$(document.body).append(music_dom);
//	$(document.body).append(audio_dom);
//		console.log(music_dom);
		
	$("#music").click(function(){	
		if($("#music").is($(".rotate"))){
			$("#music").css({background:"url(img/musicClose.png) no-repeat center 100%/100%"});
			$("#music").removeClass("rotate");	
//			alert(10)
			$("#audio_mp3").trigger('pause');
			video1.volume=0;
//			alert(1)
		}
		else{
			$("#music").css({background:"url(img/musicOpen.png) no-repeat center 100%/100%"});
			$("#music").addClass("rotate");
			$("#audio_mp3").trigger('play');
			video1.volume=1.0;
//			alert(2)	
		}
	});
		
})