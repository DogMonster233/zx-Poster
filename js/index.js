//123
var shangchuan = "";
var picLoaded = 0;
var _dataURL = "";
var timeOutEvent = 0;   
var music = document.getElementById("music")

$(".page02").hide();
$(".p1_btn").on({     
	touchstart: function(e) {
		timeOutEvent = setTimeout(function() {
			$(".p1_btn").addClass("tap_ani");      
			$(".p1_btn").removeClass("shake6");      
		}, 300);   
		e.preventDefault();     
	},
	     touchend: function() {       
		clearTimeout(timeOutEvent);

		if(timeOutEvent != 0) {
			$(".page01").fadeOut();
			$(".p1_btn").removeClass("tap_ani");      
			$(".p1_btn").addClass("shake6");
			$(".page02").show();
		} else {}
	}   
});

$(".p2_rule").click(function() {
	mmp3.pause();
	$(".page02 .p2_rule").fadeOut();
	$('video')[0].play();
	$(".make").addClass("shake7");

});

$(".page02 .make").on({     
	touchstart: function(e) {
		timeOutEvent = setTimeout(function() {
			$(".make").addClass("tap_ani");      
			$(".make").removeClass("shake7"); 
		}, 300);   
		e.preventDefault();     
	},
	     touchend: function() {       
		clearTimeout(timeOutEvent);

		if(timeOutEvent != 0) {
			$(".page02").hide();
			$(".page03").show();
			mmp3.play();
			$('video')[0].pause();
			$(".make").removeClass("tap_ani");      
			$(".make").addClass("shake7");
		} else {}
	}   
});

$(".page02 .adver").on({     
	touchstart: function(e) {
		timeOutEvent = setTimeout(function() {
			$(".adver").addClass("tap_ani");      
		}, 300);   
		e.preventDefault();     
	},
	     touchend: function() {       
		clearTimeout(timeOutEvent);

		if(timeOutEvent != 0) {
			$(".adver").removeClass("tap_ani");      
			//			$('video')[0].pause();
			$('video').attr('src', "")
			mmp3.play();
			$(".page02").hide();
			$(".page03").hide();
			$(".link").fadeIn();
			$("body").addClass("touch_body");
		} else {}
	}   
});

$(".back").on({     
	touchstart: function(e) {
		timeOutEvent = setTimeout(function() {
			$(".back").addClass("tap_ani");      
		}, 300);   
		e.preventDefault();     
	},
	     touchend: function() {       
		clearTimeout(timeOutEvent);

		if(timeOutEvent != 0) {
			$(".back").removeClass("tap_ani");      
			//			$('video')[0].play();
			$('video').attr('src', $('.swiper-wrapper .swiper-slide-active').attr('data-video'))
			mmp3.pause();
			$(".page02").fadeIn();
			$(".link").hide();
			$("body").removeClass("touch_body");
		} else {}
	}   
});

$(".again").on({     
	touchstart: function(e) {
		timeOutEvent = setTimeout(function() {
			$(".again").addClass("tap_ani");      
		}, 300);   
		e.preventDefault();     
	},
	     touchend: function() {       
		clearTimeout(timeOutEvent);

		if(timeOutEvent != 0) {
			$(".again").removeClass("tap_ani");      
			window.location.reload();

		} else {}
	}   
});

$(".p3_rule").click(function() {
	$(".page03 .p3_rule").fadeOut();
	$(".upload").addClass("tip2");
	$(".p3_prev").addClass("shake4");
	$(".p3_next").addClass("shake5");
});

$(".create .c_rule").click(function() {
	$(".create .c_rule").fadeOut();
	$(".again").addClass("shake6");
	$(".create .content .again").hide();
	console.log("c_rule");
});

//loading
function myGod(id, w, n) {
	var box = document.getElementById(id),
		can = true,
		w = w || 1500,
		fq = fq || 10,
		n = n == -1 ? -1 : 1;
	box.innerHTML += box.innerHTML;
	box.onmouseover = function() {
		can = false
	};
	box.onmouseout = function() {
		can = true
	};
	var max = parseInt(box.scrollHeight / 2);
	new function() {
		var stop = box.scrollTop % 18 == 0 && !can;
		if(!stop) {
			var set = n > 0 ? [max, 0] : [0, max];
			box.scrollTop == set[0] ? box.scrollTop = set[1] : box.scrollTop += n;
		};
		setTimeout(arguments.callee, box.scrollTop % 18 ? fq : w);
	};
};
myGod('div1', 3000, 1);

//上传图片
$(".after").hide();

var clipArea = new PhotoClip('.clipArea1', {
	size: [279, 415],
	file: '#file',
	ok: '.save',
	loadStart: function() {
		console.log('开始读取照片');
	},
	loadComplete: function(dataURL) {
		console.log('照片读取完成');
		console.log(dataURL);
		$(".pic").hide();
		$(".after").show();
		$(".save").addClass("shake7");
		$(".upload").removeClass("tip2");

	},
	loadError: function() {
		console.log('照片读取失败');
	},
	done: function(dataURL) {
		console.log("done tjBtn");
		_dataURL = dataURL;
		console.log(dataURL);
		$("#img1").attr("src", dataURL);
		console.log("draw1");
		draw();
		console.log("draw2");

	},
	fail: function(msg) {
		alert(msg);
	}
});

function draw() {
	console.log("draw123456");
	$(".swiper-slide").find(".pic_p").removeAttr("id")
	$(".swiper-slide-active").find(".pic_p").attr("id", "img2");
	var num = swiper2.activeIndex + 1;
	var canvas = document.getElementById("photoImgCan");
	canvas.width = 558;
	canvas.height = 830;
	canvas.y = 0;
	canvas.x = 0;

	function circleImg(ctx, img, x, y, r) {
		ctx.save();
		var d = 2 * r;
		var cx = x + r;
		var cy = y + r;
		ctx.arc(cx, cy, r, 0, 2 * Math.PI);
		ctx.clip();
		ctx.drawImage(img, x, y, d, d);
		ctx.restore();
	}

	var ctx = canvas.getContext("2d");

	var imgBg = new Image();
	var imgBg2 = new Image();
	var imgewm = new Image();

	imgBg.src = _dataURL;
	imgBg.onload = function() {
		console.log("imgBg");
		console.log(num);
		ctx.drawImage(this, 0, 0, 558, 830);
		imgBg2.src = $("#img2").attr("src");
		picLoaded++;
	}
	imgBg2.onload = function() {
		console.log("imgBg2")
		ctx.drawImage(this, 0, 0);
		imgewm.src = "../poster(静)/img/code.png";
		//		imgewm.src = "http://wx.whyimingkeji.com/wx/zxtfbjjrc/poster/img/code.png?v=1.01";
		picLoaded++;
	}

	imgewm.onload = function() {
		console.log("imgewm")
		ctx.drawImage(this, 430, 705, 108, 108);
		picLoaded++;
		tijiaoHaibao();
	}

	function tijiaoHaibao() {
		console.log("tjiao");
		var mycanvas = document.getElementById("photoImgCan");
		new_dataURL = mycanvas.toDataURL("image/jpeg", 0.7);
		console.log("new_dataURL:" + new_dataURL);

		$("#img3").attr("src", new_dataURL);
		$(".upload,.swiper-button-prev,.swiper-button-next").hide();
		$(".save").removeClass("shake7");
		$(".page03").fadeOut();
		$(".create").fadeIn();
	}

}