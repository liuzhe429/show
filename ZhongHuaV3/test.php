<?php
require_once "jssdk.php";
require_once "pv.php";
$jssdk = new JSSDK("wxe49221fafce06151", "aa4b0fe6a8f1122514b1ab935316d8a9");
$signPackage = $jssdk->GetSignPackage();
$pv = new pv();
?>



<!DOCTYPE html>
<html class="webapp" 
  data-design="640/1010" 
  data-uiwebview="0/32" 
  data-mode="scale" 
  data-widget-mode="everytime" 
  data-scroll="vertical" 
  data-scene-loop="true" 
  data-scene-deg="28"
  data-scene-duration="0.4" 
  data-scene-timing="ease" 
  data-scene-perspective="300px" id="webapp">
<head>
<meta charset="utf-8">
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="-1" />
<meta name="viewport" content="user-scalable=no, minimal-ui, target-densitydpi=device-dpi" />
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<meta content="60942" name="appId">
<meta name="viewport" content="width=device-width, minimum-scale=0.5, maximum-scale=0.5">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>中华V3</title>
<link rel="stylesheet" type="text/css" href="css/g.css">
<link rel="stylesheet" type="text/css" href="css/animate.css">
<link rel="stylesheet" type="text/css" href="css/app.css">
<style type="text/css">
article {
	background-color: #000000;
}
article.webapp-view {
	opacity: 0;
}
.transparent {
	opacity: 1
}
.opaque {
	opacity: 1
}
.widget {
	position: absolute;
}
.table {
	display: table;
}
.table .table-cell {
	display: table-cell;
}
.table .table-cell.vtop {
	vertical-align: top;
}
.table .table-cell.vmiddle {
	vertical-align: middle;
}
.table .table-cell.vbottom {
	vertical-align: bottom;
}
.innerbox {
	z-index: 1;
}
.photo {
	-webkit-transform: scale(3) rotateZ(30deg) translate(80%, 80%) translateZ(0);
	transform: scale(3) rotateZ(30deg) translate(80%, 80%) translateZ(0);
}
.photo-static {
	-webkit-transform: scale(0.9) rotateZ(0deg) translate(0%, 0%) translateZ(0);
	transform: scale(0.9) rotateZ(0deg) translate(0%, 0%) translateZ(0);
}
.copyright {
	-webkit-transform: translate(0, 0) translateZ(0);
	transform: translate(0, 0) translateZ(0);
}
.page-loaded {
	-webkit-animation-name: fadeIn;
	animation-name: fadeIn;
	-webkit-animation-duration: .75s;
	animation-duration: .75s;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.dn{display: none;}
</style>
<script>
var G_MASKLAYER_OPTIONS = [];
</script>
<script type="text/template" name="wx">

imgUrl=/newadmin/res/img/nopic150x150.jpg;
lineLink=/a/60942_0;
descContent=111;
shareTitle=吉利;
imgWidth=200;
imgHeight=200;
appid=;
shareClick=http://click.zuiku.com/share.jsp?appId=60942
</script>
</head>
<body >
 <!-- 蒙板end -->
<article class="webapp-view none-header none-footer" id="view"  >
  
     <section data-appid="84832" data-moduleid="817577" data-index="0" data-sn="0" style="z-index:100;">
     	<!-- 背景 -->
     	<div class="innerbox fullbg" style="background-image:url(images/bg.jpg)">
      
     <!--图片控件-->
       <div data-appid="84832" data-moduleid="3447892" id="widget_3447892"  class="widget ipic hidden " style="z-index:1;  left:0px; top:0px;  width:640px; height:96px;" data-widget="animation::fadeInDown:!1.0s ease 0.0s 1 forwards">
          <img data-action="Action://redirect#0,,0,0" src="about:blank" style="border: 1px none rgb(0, 0, 0);;  width:100%; height:100%; -webkit-transform:rotate(0deg); transform:rotate(0deg); opacity:1.0;" data-lazysrc="src!images/logo.png" >
      </div>
    
    
     <!--图片控件-->
       <div data-appid="84832" data-moduleid="3447975" id="widget_3447975"  class="widget ipic hidden " style="z-index:2;  left:0px; top:408px;  width:640px; height:270px;" data-widget="animation::fadeIn:!1.0s ease 0.0s 1 forwards">
          <img data-action="Action://redirect#0,,0,0" src="about:blank" style="border: 1px none rgb(0, 0, 0);;  width:100%; height:100%; -webkit-transform:rotate(0deg); transform:rotate(0deg); opacity:1.0;" data-lazysrc="src!http://file1.zuiku.com/2015/05/05/13/24141_fe2b3b75c2c1790328c784bbd43652eb.png" >
      </div>
    
     <!--图片控件-->
       <div data-appid="84832" data-moduleid="3448438" id="widget_3448438"  class="widget ipic hidden " style="z-index:3;  left:382px; top:600px;  width:260px; height:80px;" data-widget="animation::fadeInRight:!1.0s ease 0.0s 1 forwards">
          <img data-action="Action://redirect#0,,0,0" src="about:blank" style="border: 1px none rgb(0, 0, 0);;  width:100%; height:100%; -webkit-transform:rotate(0deg); transform:rotate(0deg); opacity:1.0;" data-lazysrc="src!http://file1.zuiku.com/2015/05/05/13/24141_78516f31ee9e50af050c6902fc99888d.png" >
      </div>
    
    
    
    
     <!--图片控件-->
       <div data-appid="84832" data-moduleid="3448534" id="widget_3448534"  class="widget ipic hidden " style="z-index:3;  left:384px; top:704px;  width:260px; height:80px;" data-widget="animation::fadeInRight:!1.0s ease 0.0s 1 forwards">
          <img data-action="Action://redirect#0,,0,0" src="about:blank" style="border: 1px none rgb(0, 0, 0);;  width:100%; height:100%; -webkit-transform:rotate(0deg); transform:rotate(0deg); opacity:1.0;" data-lazysrc="src!http://file1.zuiku.com/2015/05/05/13/24141_d037dd2914b8cef2ddde25b1d2fb0d5e.png" >
      </div>
    
     <!--图片控件-->
       <div data-appid="84832" data-moduleid="3448547" id="widget_3448547"  class="widget ipic hidden " style="z-index:3;  left:382px; top:830px;  width:260px; height:80px;" data-widget="animation::fadeInRight:!1.0s ease 0.0s 1 forwards">
          <img data-action="Action://redirect#0,,0,0" src="about:blank" style="border: 1px none rgb(0, 0, 0);;  width:100%; height:100%; -webkit-transform:rotate(0deg); transform:rotate(0deg); opacity:1.0;" data-lazysrc="src!http://file1.zuiku.com/2015/05/05/13/24141_b06ad25d4ce06a4cb085c34be07ec8f3.png" >
      </div>
    
      
   </div> 
     <!-- 背景结束 -->

    </section>
</article>



<script>
(function(){
	var ImageLoader = window["ImageLoader"] = function(){
		this.images = [];
		this.counter = {
			success: 0,
			failed: 0
		};
    this.percentNode = document.querySelector(".newloading-ptxt");
	};

	ImageLoader.prototype = {
		add: function(url){
			this.images.push(url);
			return this;
		},
		notify: function(key){
			this.counter[key]++;

      var counter = this.counter;
      var size = this.images.length + 2;
      var loaded = counter.success + counter.failed;
      var percent = Math.min(((loaded / size) * 100).toFixed(0), 100);
      var percentNode = this.percentNode;

      if(percentNode){
        percentNode.innerHTML = (percent + "%");
      }

      ImageLoader.complete = (loaded >= size);
		},
		load: function(){
			var imgs = this.images;
			var size = imgs.length;

			ImageLoader.startTime = (new Date().getTime());

			for(var i = 0; i < size; i++){
				ImageLoader.loader(this, imgs[i]);
			}
		}
	};

	ImageLoader.start = 0;
  ImageLoader.complete = false;
  ImageLoader.Cache = {};

	ImageLoader.loader = function(imageLoader, url){
		var img = new Image();

		img.onload = function(){
			imageLoader.notify("success");

			img = null;
		};

		img.onerror = function(){
			imageLoader.notify("failed");

			img = null;
		}

		img.src = url;
	};
	ImageLoader.timeout = function(){
		var end = (new Date().getTime());
		var diff = end - ImageLoader.start;

		return (diff >= 5000);
	};

  ImageLoader.getImageLoader = function(name){
    var loader = ImageLoader.Cache[name] || (ImageLoader.Cache[name] = new ImageLoader());

    return loader;
  }

	var loader = ImageLoader.getImageLoader("progress");	
loader.add('http://file1.zuiku.com/2015/05/05/13/24141_5a4d18f3d3e65142b67074f94c207868.jpg');
loader.add('http://file1.zuiku.com/2015/05/05/13/24141_05ac987445a9ebe00d3c05a45b43a8d2.png');
loader.add('http://file1.zuiku.com/2015/05/05/13/24141_fe2b3b75c2c1790328c784bbd43652eb.png');
loader.add('http://file1.zuiku.com/2015/05/05/13/24141_78516f31ee9e50af050c6902fc99888d.png');
loader.add('http://file1.zuiku.com/2015/05/05/13/24141_d037dd2914b8cef2ddde25b1d2fb0d5e.png');
loader.add('http://file1.zuiku.com/2015/05/05/13/24141_b06ad25d4ce06a4cb085c34be07ec8f3.png');
loader.load();

})();
</script>
<script src="http://static.zuiku.com/res/js/lib/se.mix.9db56692e584cbb087cd8897a5d88835ef0e0b80.js"></script>
<script>
for(var i = 0; i < G_MASKLAYER_OPTIONS.length; i++){
	if(G_MASKLAYER_OPTIONS[i].backImage){
		new Image().src = G_MASKLAYER_OPTIONS[i].backImage;
	}
}
var loader = ImageLoader.getImageLoader("progress");

loader.notify("success");

seajs.use(["logic/default/webapp.93871aa7a86bda4be2117c97a6b5d6870921b6a2"], function(app){

  app.app.set("ready", {
      callback: function(success){
          this.appReady = true;
          loader.notify("success");
          if(!success){
              alert("场景应用加载失败");
          }
      },
      context: app.app
  });

	var layout = app.app.layout;
	var design = layout.design;

	var timer = app.app.getTimer("default", 2.5, {
		  callback: function(_timer){
      if(this.appReady){
    			if(ImageLoader.complete || ImageLoader.timeout()){
    				  var loading = $(".webapp-loading");

              if(loading.length > 0){
                  loading.addClass("hide");
              }

              _timer.stop();
              
              this.view.addClass("page-loaded");
    			}
      }
		  },
		  context: app.app
	});

	timer.start();

  	setTimeout(function(){
      	
      	for(var i = 0; i < G_MASKLAYER_OPTIONS.length; i++){
			var maskOptions = G_MASKLAYER_OPTIONS[i];
			var id = "#masklayer_" + maskOptions.key;
			var stage = document.querySelector(id);
			if(!stage || !maskOptions.frontImage || !maskOptions.backImage){continue;}
			var maskLayer = new app.MaskLayer(stage);

      var width = design.width;
      var height = design.height;

      maskLayer
           .setBrushSize(55)
					 .setBlurRadius(0)
					 .setScratchText({
    						font: "80px Arial",
    						textAlign: "center", 
    						textBaseline: "middle", 
    						color: "#000", 
    						x: width / 2, 
    						y: height * 0.8, 
    						text:maskOptions.maskText
					  })
			    .setReady({
  						callback: function(id, backImage){
  							$(id).parent().css("background-image", "url(" + backImage + ")");
  						},
  						args: [id, maskOptions.backImage]
					})
					.setComplete({
						callback : function(remain, removed, id){
							var total = remain + removed;

							//解决Android下渲染问题
							$(id).width(width - 0.001) //根据实际情况调整
							.width(width);  //根据实际情况调整

							if(remain / total <= 0.75){
								this.clean();
								$(id).remove();
								$(id).attr("data-lockapp", "0");
								app.app.setLocked(false);
							}
						},
						context: maskLayer,
						args: [id]  
					})
				  .paintImage("about:blank", maskOptions.frontImage, 
									0, 0, width, height,
									0, 0, width, height);
	    }//end for
      	app.app.create();
        $(".popbox").on("touchmove", function(e){e.stopPropagation();});

      
  }, 200);
});
</script>

</body>
</html>
