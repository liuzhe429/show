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
  data-scale="min" 
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
<meta content="43104" name="appId">
<title>腾讯·头条客 300万稿酬等你来拿</title>
<link rel="stylesheet" type="text/css" href="style/g.css">
<link rel="stylesheet" type="text/css" href="style/animate.css">
<link rel="stylesheet" type="text/css" href="style/app.css">
<style type="text/css">
article{background-color: #2B2B2B;}
article.webapp-view{opacity: 0;}
.transparent{opacity:1}
.opaque{opacity:1}
.widget{position: absolute;}
.table{display: table;}
.table .table-cell{display: table-cell;}
.table .table-cell.vtop{vertical-align: top;}
.table .table-cell.vmiddle{vertical-align: middle;}
.table .table-cell.vbottom{vertical-align: bottom;}
.innerbox{z-index: 1;}
.resultWindow{position: absolute;}
.photo{-webkit-transform:scale(3) rotateZ(30deg) translate(80%,80%) translateZ(0); transform:scale(3) rotateZ(30deg) translate(80%,80%) translateZ(0);}
.copyright{-webkit-transform: translate(0,0) translateZ(0); transform: translate(0,0) translateZ(0);}
.page-loaded{
  -webkit-animation-name: fadeIn;
          animation-name: fadeIn;
  -webkit-animation-duration: .75s;
          animation-duration: .75s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}
</style>
<script>
var G_MAP_OPTIONS = [];
var G_BMAP_CALLBACK = {};
var G_MASKLAYER_OPTIONS = [];
</script>
<script type="text/template" name="wx">

imgUrl=http://test.qctt.cn/ttk/img/share.jpg;
lineLink=/a/43104_93024;
descContent=全新汽车稿件众筹平台，轻松快速注册头条客即有机会获得稿酬！！;
shareTitle=腾讯·头条客 300万稿酬等你来拿;
imgWidth=200;
imgHeight=200;
appid=;
shareClick=http://test.qctt.cn/index.php
</script>
</head>
<body>
<!--
<div class="webapp-loading flexbox center middle">
   <figure class="loading-logo">
      <figcaption class="flexbox center middle loading-logo-bg icon-ringlogo">
        <div class="loading-logo-img icon-ringlogo"></div>
      </figcaption>
   </figure>
</div>
-->
 <!-- 蒙板end -->
<article class="webapp-view none-header none-footer" id="view"  >
<!--    001-->
     <section data-appid="43104" data-moduleid="394975" data-index="1" style="z-index:1300;">
     	<div class="innerbox fullbg" style="background-image:url(img/001bg.jpg)">      
    <div data-appid="43104" data-moduleid="1630429" id="widget_1630429" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:261px;" data-widget="animation::fadeInDown:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/001title.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1630495" id="widget_1630495" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:261px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:304px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/001word.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1630509" id="widget_1630509" class="widget hidden ipic "   style="z-index:8;  left: 0px; right: 0; margin: 0 auto; top:612px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:402px;" data-widget="animation::fadeInUp:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/001man.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1630555" id="widget_1630555" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:615px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:402px;" data-widget="animation::zoomIn:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/001other.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1630564" id="widget_1630564" class="widget hidden ipic "   style="z-index:5;  left: 0px; right: 0; margin: 0 auto; top:891px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:126px;" data-widget="animation::zoomIn:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/001logo.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    002-->
     <section data-appid="43104" data-moduleid="405471" data-index="2" style="z-index:1299;">
       	<div class="innerbox fullbg" style="background-image:url(about:blank)" data-lazysrc="bg!img/002bg.jpg">      
    <div data-appid="43104" data-moduleid="1630675" id="widget_1630675" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:456px;" data-widget="animation::fadeInLeft:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/002man1.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1630737" id="widget_1630737" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:456px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/002word1.png"></div>
    </div>    
    <div data-appid="43104" data-moduleid="1630756" id="widget_1630756" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:512px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:501px;" data-widget="animation::fadeInUp:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/002man2.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1630887" id="widget_1630887" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:510px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:501px;" data-widget="animation::zoomIn:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/002word2.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    003-->
     <section data-appid="43104" data-moduleid="405527" data-index="3" style="z-index:1298;">
       	<div class="innerbox fullbg" style="background-image:url(about:blank)" data-lazysrc="bg!img/002bg.jpg">              
    <div data-appid="43104" data-moduleid="1631046" id="widget_1631046" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:438px;" data-widget="animation::pullTop:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/003man1.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631051" id="widget_1631051" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:438px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/003word1.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631057" id="widget_1631057" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:507px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:507px;" data-widget="animation::pullTop:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/003man2.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631062" id="widget_1631062" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:504px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:507px;" data-widget="animation::zoomIn:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/003word2.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    004-->
     <section data-appid="43104" data-moduleid="405557" data-index="4" style="z-index:1297;">
      <div class="innerbox fullbg" style="background-color:#FFFFFF">
      
    <div data-appid="43104" data-moduleid="1631201" id="widget_1631201" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:303px;" data-widget="animation::fadeInDown:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/004title.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631219" id="widget_1631219" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:51px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:960px;" data-widget="animation::fadeInLeft:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/004man.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631222" id="widget_1631222" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:673px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:336px;" data-widget="animation::fadeInUp:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/004other.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    005-->
     <section data-appid="43104" data-moduleid="405573" data-index="5" style="z-index:1296;">
      <div class="innerbox fullbg" style="background-color:#FFFFFF">
    <div data-appid="43104" data-moduleid="1631301" id="widget_1631301" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:139px;" data-widget="animation::fadeInLeft:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/005title.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631326" id="widget_1631326" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:132px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:250px;" data-widget="animation::fadeInLeft:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/005main1.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631334" id="widget_1631334" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:390px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:251px;" data-widget="animation::fadeInLeft:!1.0s ease 1.5s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/005main2.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631336" id="widget_1631336" class="widget hidden ipic "   style="z-index:4;  left: 0px; right: 0; margin: 0 auto; top:652px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:252px;" data-widget="animation::fadeInLeft:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/005main3.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    006-->
     <section data-appid="43104" data-moduleid="405604" data-index="6" style="z-index:1295;">
      <div class="innerbox fullbg" style="background-color:#FFFFFF">
    <div data-appid="43104" data-moduleid="1631407" id="widget_1631407" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:197px;" data-widget="animation::fadeInLeft:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/006title.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631409" id="widget_1631409" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:201px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:763px;" data-widget="animation::pullBottom:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/006main.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631413" id="widget_1631413" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:396px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:567px;" data-widget="animation::zoomIn:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/006other.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    007-->
     <section data-appid="43104" data-moduleid="405617" data-index="7" style="z-index:1294;">
      <div class="innerbox fullbg" style="background-color:#FFFFFF">
    <div data-appid="43104" data-moduleid="1631464" id="widget_1631464" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:198px;" data-widget="animation::fadeInLeft:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/007title1.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631466" id="widget_1631466" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:198px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:280px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/007pic1.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631471" id="widget_1631471" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:486px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:128px;" data-widget="animation::fadeInLeft:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/007title2.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631477" id="widget_1631477" class="widget hidden ipic "   style="z-index:4;  left: 0px; right: 0; margin: 0 auto; top:627px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:354px;" data-widget="animation::zoomIn:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/007pic2.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    008-->
     <section data-appid="43104" data-moduleid="405625" data-index="8" style="z-index:1293;">
      <div class="innerbox fullbg" style="background-color:#FFFFFF">      
    <div data-appid="43104" data-moduleid="1631561" id="widget_1631561" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:166px;" data-widget="animation::fadeInLeft:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/008_01.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631563" id="widget_1631563" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:165px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:428px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/008_02.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631567" id="widget_1631567" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:597px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:90px;" data-widget="animation::fadeInLeft:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/008_03.jpg"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631569" id="widget_1631569" class="widget hidden ipic "   style="z-index:4;  left: 0px; right: 0; margin: 0 auto; top:702px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:276px;" data-widget="animation::zoomIn:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/008_04.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    009-->
     <section data-appid="43104" data-moduleid="405642" data-index="9" style="z-index:1292;">
      <div class="innerbox fullbg" style="background-color:#FFFFFF">
    <div data-appid="43104" data-moduleid="1631575" id="widget_1631575" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:164px;" data-widget="animation::fadeInLeft:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/009title.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631582" id="widget_1631582" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:162px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:404px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/009pic.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631586" id="widget_1631586" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:618px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:392px;" data-widget="animation::fadeInLeft:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/009man.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1631589" id="widget_1631589" class="widget hidden ipic "   style="z-index:4;  left: 0px; right: 0; margin: 0 auto; top:618px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:392px;" data-widget="animation::zoomIn:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/009word.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    010-->
     <section data-appid="43104" data-moduleid="405791" data-index="10" style="z-index:1291;">
      <div class="innerbox fullbg" style="background-color:#FFFFFF">
    <div data-appid="43104" data-moduleid="1632124" id="widget_1632124" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:188px;" data-widget="animation::fadeInDown:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/010title.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632131" id="widget_1632131" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:180px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:152px;" data-widget="animation::fadeInDown:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/010word.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632134" id="widget_1632134" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:336px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:620px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/010pic.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632200" id="widget_1632200" class="widget hidden ipic "   style="z-index:4;  left: 0px; right: 0; margin: 0 auto; top:684px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:270px;" data-widget="animation::fadeInRight:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/010other.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    011-->
     <section data-appid="43104" data-moduleid="405808" data-index="11" style="z-index:1290;">
       	<div class="innerbox fullbg" style="background-image:url(about:blank)" data-lazysrc="bg!img/011bg.jpg">
    <div data-appid="43104" data-moduleid="1632379" id="widget_1632379" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:294px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:202px;" data-widget="animation::zoomIn:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/011pic2.png"></div>
    </div>
    
    <div data-appid="43104" data-moduleid="1632382" id="widget_1632382" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:311px;" data-widget="animation::fadeInDown:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/011title.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632385" id="widget_1632385" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:486px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:122px;" data-widget="animation::fadeInUp:!1.0s ease 2.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/011word.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632393" id="widget_1632393" class="widget hidden ipic "   style="z-index:5;  left: 0px; right: 0; margin: 0 auto; top:778px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:231px;" data-widget="animation::fadeInLeft:!1.0s ease 3.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/011other.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632407" id="widget_1632407" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:648px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:366px;" data-widget="animation::fadeInUp:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/011man.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632468" id="widget_1632468" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:960px;" data-widget="animation::fadeInUp:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/011pic.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    012-->
     <section data-appid="43104" data-moduleid="405809" data-index="12" style="z-index:1289;">
       	<div class="innerbox fullbg" style="background-image:url(about:blank)" data-lazysrc="bg!img/012bg.jpg">
    <div data-appid="43104" data-moduleid="1632478" id="widget_1632478" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:189px;" data-widget="animation::fadeInDown:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/012title.png"></div>
    </div>
    
    <div data-appid="43104" data-moduleid="1632480" id="widget_1632480" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:180px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:224px;" data-widget="animation::fadeInLeft:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/012pic1.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632486" id="widget_1632486" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:0px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:960px;"  >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/012pic.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632491" id="widget_1632491" class="widget hidden ipic "   style="z-index:4;  left: 0px; right: 0; margin: 0 auto; top:408px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:216px;" data-widget="animation::fadeInRight:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/012pic2.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632493" id="widget_1632493" class="widget hidden ipic "   style="z-index:5;  left: 0px; right: 0; margin: 0 auto; top:626px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:331px;" data-widget="animation::fadeInUp:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/012pic3.png"></div>
    </div>
   </div> 
     <!-- 背景结束 -->
  
    </section>
<!--    013-->
     <section data-appid="43104" data-moduleid="405820" data-index="13" style="z-index:1288;">
       	<div class="innerbox fullbg" style="background-image:url(about:blank)" data-lazysrc="bg!img/013bg.jpg">
      
    <div data-appid="43104" data-moduleid="1632498" id="widget_1632498" class="widget hidden ipic "   style="z-index:1;  left: 0px; right: 0; margin: 0 auto; top:111px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:261px;" data-widget="animation::fadeInDown:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/0131title.png"></div>
    </div>
    
    <div data-appid="43104" data-moduleid="1632501" id="widget_1632501" class="widget hidden ipic "   style="z-index:2;  left: 0px; right: 0; margin: 0 auto; top:414px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:289px;" data-widget="animation::zoomIn:!1.0s ease 1.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/013code.png"></div>
    </div>
    <div data-appid="43104" data-moduleid="1632503" id="widget_1632503" class="widget hidden ipic "   style="z-index:3;  left: 0px; right: 0; margin: 0 auto; top:735px;   border: 1px none rgb(0, 0, 0);;  width:640px; height:126px;" data-widget="animation::fadeInUp:!1.0s ease 0.0s 1 forwards" >
      <div style="width:100%; height:100%;"><img src="about:blank" width="100%" height="100%" data-lazysrc="src!img/001logo.png"></div>
    </div>
     <div id="widget_1632505" data-widget="animation::fadeInUp:!1.0s ease 0.0s 1 forwards" data-appid="43104" data-moduleid="1632505"  class="widget hidden stxt   f-tc" style="z-index:4;  left: 0px; right: 0; margin: 0 auto; top:762px;    border: 1px none rgb(255, 255, 255);;  width:640px;height:100px; color:#7f7f7f;   font-size:32px;  line-height: 1.6em;" ><div style="width:100%; height:auto; max-width:100%; max-height:100%; position:relative; left:50%; top:50%; -webkit-transform:translate(-50%, -50%); transform:translate(-50%, -50%);">阅读数(<?php echo $pv->getpv_count(); ?>)</div>
     
    </div>
   </div> 
   </section>
  
  <div class="icon-arrow-up" data-type="arrow">
<!--     <i class="ani-up1"></i>-->
  </div>
</article>
<header class="webapp-header" id="header">qctt.cn 2015</header>
<footer class="webapp-footer" id="footer">&copy;qctt.cn 2015</footer>
<div id="submit_tips" data-offset="-9999"></div>
<script>
(function(){
	var ImageLoader = window["ImageLoader"] = function(){
		this.images = [];
		this.counter = {
			success: 0,
			failed: 0
		};
	};

	ImageLoader.prototype = {
		add: function(url){
			this.images.push(url);
			return this;
		},
		notify: function(key){
			this.counter[key]++;

			var counter = this.counter;
			var size = this.images.length;
			var loaded = counter.success + counter.failed;
			var percent = Math.min(((loaded / size) * 100).toFixed(0), 100);
			var nShadow = document.querySelector(".loading-shadow");
			var nPercent = document.querySelector(".loading-percent");

			if(nShadow){
				nShadow.style.height =  (100 - percent) + "%";
			}
			if(nPercent){
				nPercent.innerHtml = (percent + "%");
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

	var loader = new ImageLoader();	
loader.load();

})();
</script>
<script src="js/wxqq.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
	'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      // 所有要调用的 API 都要加到这个列表中
    ]
  });
 
</script>

<script src="js/demo.js"></script>



<script src="js/se_mix.js"></script>
<script>
for(var i = 0; i < G_MASKLAYER_OPTIONS.length; i++){
	if(G_MASKLAYER_OPTIONS[i].backImage){
		new Image().src = G_MASKLAYER_OPTIONS[i].backImage;
	}
}
seajs.use(["logic/default/webapp.4b446244575b33bad0d97eb8d2a767b0e23e6226", "logic/tpl/bmap.7dfcb51fdafe32333c2402c58e10f6b43661f38e"], function(app, map){

  app.app.set("ready", {
      callback: function(success){
          this.appReady = true;
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
			var stage = $(id);
			if(!maskOptions.frontImage || !maskOptions.backImage){continue;}
			var maskLayer = new app.MaskLayer(stage[0]);

			maskLayer.setBrushSize(55)
					 .setBlurRadius(0)
					 .setScratchText({
						font: "80px Arial",
						textAlign: "center", 
						textBaseline: "middle", 
						color: "#000", 
						x: design.width / 2, 
						y: design.height * 0.8, 
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
							$(id).width(design.width - 0.001) //根据实际情况调整
							.width(design.width);  //根据实际情况调整

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
									0, 0, design.width, design.height,
									0, 0, design.width, design.height);
	    }//end for
      	app.app.create();

      
  }, 200);

  for(var i = 0; i < G_MAP_OPTIONS.length; i++){
    //{id, tel, address, latitude, longitude, info{width, height, title}}
    var m = G_BMAP_CALLBACK[G_MAP_OPTIONS[i].id] = map.newInstance(G_MAP_OPTIONS[i]);
  }
});
</script>


</body>
</html>

