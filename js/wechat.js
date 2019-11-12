(function () {
    var shareData = {
        "appid": "",
        "title": "",
        "link": "",
        "msgImg": "",
        "desc": "",
        "shareAppMessage_trigger": false,
        "shareAppMessage_success": false,
        "shareAppMessage_cancel": false,
        "shareAppMessage_fail": false,
        "shareTimeline_trigger": false,
        "shareTimeline_success": false,
        "shareTimeline_cancel": false,
        "shareTimeline_fail": false,
        "shareQQ_trigger": false,
        "shareQQ_complete": false,
        "shareQQ_success": false,
        "shareQQ_cancel": false,
        "shareQQ_fail": false,
        "shareWeibo_trigger": false,
        "shareWeibo_complete": false,
        "shareWeibo_success": false,
        "shareWeibo_cancel": false,
        "shareWeibo_fail": false
    };
    window.wxSetShareData = function () {
        if (typeof $CONFIG !== 'undefined' && $CONFIG.dataForWeixin !== undefined) {
            for (key in $CONFIG.dataForWeixin) {
                shareData[key] = $CONFIG.dataForWeixin[key];
            }
        }
    };
    window.wxSetShareData();
    //初始化
    window.wx && wx.config({
        //debug:true,
        appId: weixinConfigInfo['appId'],
        nonceStr: weixinConfigInfo['nonceStr'],
        signature: weixinConfigInfo['signature'],
        timestamp: weixinConfigInfo['timestamp'],
        //要调用的接口需要先在这里声明
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'chooseImage',
          'uploadImage',
          'openLocation',
          'getLocation',
          'getNetworkType'
        ]
    });

    //所有微信事件都要写到ready里
    window.wx && wx.ready(function () {
        //分享给朋友
        window.wxReadyCallback && window.wxReadyCallback(); //微信的ready回调可以写在这里
        wx.onMenuShareAppMessage({
            title: shareData.title,
            desc: shareData.desc,
            link: shareData.link,
            imgUrl: shareData.msgImg,
            trigger: function (res) {
                //alert('用户点击发送给朋友');
                shareData.shareAppMessage_trigger && shareData.shareAppMessage_trigger(res);
            },
            success: function (res) {
                //alert('已分享');
                shareData.shareAppMessage_success && shareData.shareAppMessage_success(res);
            },
            cancel: function (res) {
                //alert('已取消');
                shareData.shareAppMessage_cancel && shareData.shareAppMessage_cancel(res);
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
                shareData.shareAppMessage_fail && shareData.shareAppMessage_fail(res);
            }
        });
        //分享到朋友圈，注意去掉回调里的alert
        wx.onMenuShareTimeline({
            title: shareData.title,
            desc: shareData.desc,
            link: shareData.link,
            imgUrl: shareData.msgImg,
            trigger: function (res) {
                //alert('用户点击分享到朋友圈');
                shareData.shareTimeline_trigger && shareData.shareTimeline_trigger(res);
            },
            success: function (res) {
                //alert('已分享');
                shareData.shareTimeline_success && shareData.shareTimeline_success(res);
            },
            cancel: function (res) {
                //alert('已取消');
                shareData.shareTimeline_cancel && shareData.shareTimeline_cancel(res);
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
                shareData.shareTimeline_fail && shareData.shareTimeline_fail(res);
            }
        });
        //分享到QQ
        wx.onMenuShareQQ({
            title: shareData.title,
            desc: shareData.desc,
            link: shareData.link,
            imgUrl: shareData.img_url,
            trigger: function (res) {
                //alert('用户点击分享到QQ');
                shareData.shareQQ_trigger && shareData.shareQQ_trigger(res);
            },
            complete: function (res) {
                //alert(JSON.stringify(res));
                shareData.shareQQ_complete && shareData.shareQQ_complete(res);
            },
            success: function (res) {
                //alert('已分享');
                shareData.shareQQ_success && shareData.shareQQ_success(res);
            },
            cancel: function (res) {
                //alert('已取消');
                shareData.shareQQ_cancel && shareData.shareQQ_cancel(res);
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
                shareData.shareQQ_fail && shareData.shareQQ_fail(res);
            }
        });

        //分享到微博
        wx.onMenuShareWeibo({
            title: shareData.title,
            desc: shareData.desc,
            link: shareData.link,
            imgUrl: shareData.img_url,
            trigger: function (res) {
                //alert('用户点击分享到微博');
                shareData.shareWeibo_trigger && shareData.shareWeibo_trigger(res);
            },
            complete: function (res) {
                //alert(JSON.stringify(res));
                shareData.shareWeibo_complete && shareData.shareWeibo_complete(res);
            },
            success: function (res) {
                //alert('已分享');
                shareData.shareWeibo_success && shareData.shareWeibo_success(res);
            },
            cancel: function (res) {
                //alert('已取消');
                shareData.shareWeibo_cancel && shareData.shareWeibo_cancel(res);
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
                shareData.shareWeibo_fail && shareData.shareWeibo_fail(res);
            }
        });

    });
})();