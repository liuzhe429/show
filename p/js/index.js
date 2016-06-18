//********************点击楼层回到对应楼层****************************
~function(){
    var elevator = document.getElementById("elevator");
    var oLis = elevator.getElementsByTagName("li");
    for(var i=0;i<oLis.length;i++){
        var curLi = oLis[i];
        curLi.index = i;
        curLi.onclick = function(){
            for(var j=0;j<oLis.length;j++){
                oLis[j].className="";
            }
            this.className="selected";

            var attrId = oLis[this.index].getAttribute("floorId");
            var floorId = document.getElementById(attrId);
            var dest = DOM.offset(floorId).top;
            goTo(dest);
        }
    }
    function goTo(top,callback){
        var duration = 700;
        var distance = DOM.win('scrollTop');
        var interval = 10;
        var step = (distance/duration)/*1ms跑多远*/*interval;
        var timer = window.setInterval(function (){
            var scrollTop = DOM.win('scrollTop');
            if(scrollTop>top) {
                //往上滚动
                scrollTop -= step;
                if (scrollTop - step <= top) {
                    scrollTop = top;
                    window.clearInterval(timer);
                }
            }else{
                //往下滚动
                scrollTop += step;
                if(scrollTop+step>=top){
                    scrollTop = top;
                    window.clearInterval(timer);
                }
            }
            DOM.win('scrollTop',scrollTop);
        },interval);

        window.onscroll = null;
    }
    //**********************回到顶部代码*****************************
    var returnTop = document.getElementById("returnTop");
    var footbar = document.getElementById("footbar");

    returnTop.onclick = function (){
        var duration = 500;
        var distance = DOM.win('scrollTop');
        var interval = 10;
        var step = (distance/duration)/*1ms跑多远*/*interval;
        console.log(distance,top)
        var timer = window.setInterval(function (){
            if(DOM.win('scrollTop') <= top){
                window.clearInterval(timer);
                if(callback){
                    window.onscroll = showBtn;
                }
                return;
            }
            var srcollTop = DOM.win('scrollTop');
            srcollTop -= step;
            DOM.win('scrollTop',srcollTop);
        },interval);

        window.onscroll = null;
        footbar.style.display = 'none';
    }
    function showBtn(){
        var winScrollTop = DOM.win('scrollTop');
        var screenHeight = DOM.win('clientHeight');
        if(winScrollTop-screenHeight > 0){
            footbar.style.display = 'block';
        }else{
            footbar.style.display = 'none';
        }

        var floor1Btn = document.getElementById("floor1");
        var elevator = document.getElementById("elevator");
        var oLis = elevator.getElementsByTagName("li");

        var floor1Top = DOM.offset(floor1Btn).top;
        var top = (screenHeight - DOM.css(elevator,"height"))/2;
        elevator.style.top = top+"px";
        if(winScrollTop>floor1Top){
            elevator.style.display = "block";
        }else{
            elevator.style.display = "none";

        }
        var temp = getAry();
        for(var k=0;k<12;k++){
            if(winScrollTop>=temp[k]){
                init(temp);
                oLis[k].className="selected";
            }
        }

    }
    function init(temp){
        for(var j=0;j<temp.length;j++){
            oLis[j].className=""
        }
    }
    function getAry(){
        var ary=[];
        for(var i=0;i<oLis.length;i++){
            var curI = oLis[i];
            oLis[i].className="";
            curI.index = i;
            var a = "floor"+(i+1);
            var floorId = document.getElementById(a);
            var dest = DOM.offset(floorId).top;
            ary.push(dest);

        }
        return ary;
    }
    //************************图片延迟加载
    // 今日推荐部分


    function getTop(ele){

        var name = ele;
        var curEle = DOM.getElementsByClass(ele)[0];
        if(!curEle){
            return;
        }
        var eleImgList = curEle.getElementsByTagName("img");
        var eleTop = DOM.offset(curEle).top;
        var wTop = DOM.win("scrollTop");
        var wHeight = DOM.win("clientHeight");
        if(!obj[name]){return;}
        if(wTop+wHeight>=eleTop){
            for(var i=0;i<eleImgList.length;i++){
                ~function(){

                    var curR = eleImgList[i];
                    var tempImg = new Image();
                    tempImg.src = curR.getAttribute("trueImg");
                    if(tempImg.src){
                        tempImg.onload = function(){
                            curR.src = this.src;
                            animate(curR, {opacity: 1}, 1000);
                        }
                        tempImg = null;
                        //防止重复加载图片
                        obj[name] = false;
                    }else{
                        return;
                    }
                    
                }();
            }
        }
    };
    //给每一个区域定义一个标识,初始状态是true,代表可以加载(第一次加载图片,如果为false,就是已经加载过了)
    var obj = {
        "recommend":true,
        "life":true,
        "floor1":true,
        "brand1":true,
        "brand2":true,
        "brand3":true,
        "brand4":true,
        "brand5":true,
        "brand6":true,
        "brand7":true,
        "brand8":true,
        "brand9":true,
        "brand10":true,
        "brand11":true,
        "brand12":true
    }

    function imgLazyLoad(){
        var array = ["recommend","life","floor1","brand1","brand2","brand3","brand4","brand5","brand6","brand7","brand8","brand9","brand10","brand11","brand12"];
        for(var i =0;i<array.length;i++){
            var curArr = array[i];
            getTop(curArr);
        }
    };
    window.onscroll = function(){
        showBtn();
        imgLazyLoad();
    };

}();

// *************************关闭广告*************************************
~function(){
    var adClose = document.getElementById("adClose");
    var top_ad = document.getElementById("top_ad");
    adClose.onclick = function(){
        // console.log("aaaa")
        animate(top_ad,{opacity:0},500,function(){
            top_ad.style.display = "none";
        })
    }
}();
// *********************搜索框部分**************************************
~function(){
    var search_zone = DOM.getElementsByClass("search_zone")[0];
    var searchInput = document.getElementById("searchInput");
    var searchList = document.getElementById("searchList");

    searchInput.onkeyup = searchInput.onfocus = function() {
        var val = this.value.replace(/^ +| +$/g, "");
        if (val.length > 0) {
            showList(val);
            return;
        }
        searchList.style.display = "none";
    }

    search_zone.onclick = function(e){
        var tar = e.target;
        if (tar.id === "searchInput") {
            return;
        }

        if (tar.tagName.toUpperCase() === "SPAN" && tar.parentNode.tagName ==="LI" || tar.tagName.toUpperCase() === "LI") {
            var text = null;
            if(tar.tagName.toUpperCase() ==="SPAN"){
                text = tar.innerHTML;
            }
            if(tar.tagName.toUpperCase() ==="LI"){
                text = tar.childNodes[0].innerHTML;
            }
            searchList.style.display="none";

            window.open('http://search.jd.com/Search?enc=uft-9&suggest=2.def.0&wq=d&keyword=' + encodeURIComponent(text), '_blank');
            return;
        }
        searchList.style.display="none";
    }

    function showList(val) {
        searchList.style.display="block";
        //->如果文本框中不存在内容的话,我们不需要在获取列表信息了
        if (val.length === 0) {
            return;
        }

        var url = 'https://suggest.taobao.com/sug?code=utf-8&q=i&_ksTS=1465197221632_1509&callback=jsonp1510&area=b2c&code=utf-8&k=1&bucketid=16&src=tmall_pc&isg2=AsbGpzYbnXU3a8JP-A81jNaGlrZIfwrj';

        jsonp('https://suggest.taobao.com/sug',{q:val},'callback',function(data){
            var list = data.result;
            var str="";
            for (var i = 0, len = list.length; i < len; i++) {
                var cur = list[i];
                if(i<9){
                    str +="<li>";
                    str+="<span class='left'>"+ cur[0] +"</span>";
                    str+="<span class='right'>约"+ cur[1] +"个商品</span>"
                    str +="</li>";
                }
            }
            searchList.innerHTML = '';
            searchList.parentNode.style.display = 'block';
            searchList.innerHTML = str;
        });
    }

}();

// **********************城市选择部分*********************************
~function(){
    var sLeft = document.getElementById("sLeft");
    var selected_city = document.getElementById("selected_city");
    var countryList = document.getElementById("countryList");
    var oCountry = countryList.getElementsByTagName("li");
    sLeft.onmouseover = function(){
        countryList.style.display = "block";
    }
    sLeft.onmouseout = function(){
        countryList.style.display = "none";
    }
    for(var i=0;i<oCountry.length;i++){
        var curI = oCountry[i];
        curI.onclick = function(){
            this.children.className="";
            var val = this.children[0].innerHTML;

            selected_city.innerHTML = val;
            countryList.style.display = "none";
        }
    }
}();
// *******************菜单hover部分*****************************************
~function(){
    var cateTotal = document.getElementById("cate_total");
    var listTotal = document.getElementById("listTotal");
    var cateList = document.getElementById("cate_list");
    // var oLis = cateList.getElementsByTagName("li");
    var oLis = DOM.getElementsByClass("listLi",cateList);
    var cateDesc = document.getElementById("cate_desc");
    var oContent = document.getElementsByClassName("cate_desc");
    var totalC = document.getElementsByClassName("totalC")[0];
    for(var i=0;i<oLis.length;i++){
        var curLi = oLis[i];
        curLi.index = i;
        curLi.onmouseenter = function(){
            initLi();
            DOM.addClass(this,"hover");
            DOM.children(this,"div")[0].style.display = "block";
        }
        curLi.onmouseleave = function(){
            initLi();
        }
    }
    function initLi(){
        for(var i=0;i<oLis.length;i++){
            var curLi = oLis[i];
            isHover = DOM.hasClass(curLi,"hover");
            if(isHover){
                DOM.removeClass(curLi,"hover");
                DOM.children(curLi,"div")[0].style.display = "none";
            }

        }

    }

}();


// *********************轮播图部分*****************************
// new AutoBanner({curEleId:"slider0",ajaxURL:"./js/banner.json",ajaxParam:"banner0",isOpacity:1,time:3000});
// new AutoBanner({curEleId:"slider1",ajaxURL:"./js/banner.json",ajaxParam:"banner1",isOpacity:0,time:500});
// new AutoBanner({curEleId:"slider2",ajaxURL:"./js/banner.json",ajaxParam:"banner2",isOpacity:0,time:500});
// new AutoBanner({curEleId:"slider6",ajaxURL:"./js/banner.json",ajaxParam:"banner2",isOpacity:0,time:500});
// new AutoBanner({curEleId:"slider7",ajaxURL:"./js/banner.json",ajaxParam:"banner2",isOpacity:0,time:500});
// new AutoBanner({curEleId:"slider8",ajaxURL:"./js/banner.json",ajaxParam:"banner2",isOpacity:0,time:500});
new AutoBanner({curEleId:"slider9",ajaxURL:"./js/banner.json",ajaxParam:"banner2",isOpacity:0,time:500});
new AutoBanner({curEleId:"slider10",ajaxURL:"./js/banner.json",ajaxParam:"banner2",isOpacity:0,time:500});
// new Tab("floor1");
// new Tab("floor2");
// new Tab("floor6");
// new Tab("floor7");
// new Tab("floor8");
new Tab("floor9");
new Tab("floor10");


// **********************轮播图下面的左右切换*********************************
~function(){
    var tRight = DOM.getElementsByClass("tRight")[0];
    var tList = DOM.getElementsByClass("tList")[0];
    var oLis = tList.getElementsByTagName("li");
    var leftBtn = DOM.getElementsByClass("leftBtn",tRight)[0];
    var rightBtn = DOM.getElementsByClass("rightBtn",tRight)[0];
    var curPos = DOM.css(tList,"left");
    var step =0;
    var total = oLis.length/4;
    leftBtn.onclick = function(){

        if(step<=0){
            step= total -1;
            DOM.css(tList,"left",-step*1000);
        }
        step--;
        curPos = -step*1000;
        animate(tList,{left:curPos},700,1);
    }
    rightBtn.onclick = function(){
        if(step==total-1){
            step = 0;
            DOM.css(tList,"left",0);
        }
        step++;
        curPos = -step*1000;
        animate(tList,{left:curPos},700,1);
    }
}();

// *******************底部自动上下滚动******************************
~function(){
    var saleCenter = DOM.getElementsByClass("sale_center")[0];
    var left = DOM.getElementsByClass("left",saleCenter)[0];
    //左侧晃动区域
    var leftList = left.getElementsByTagName("li");
    for(var k=0;k<leftList.length;k++){
        var curLeft = leftList[k];
        curLeft.onmouseover = function(){
            this.img = this.getElementsByTagName("img")[0];
            animate(this.img,{marginLeft:-20},200,1);
            // console.log(this.img);
        }
        curLeft.onmouseout = function(){
            this.img = this.getElementsByTagName("img")[0];
            animate(this.img,{marginLeft:0},200,1);
            // console.log(this.img);
        }

    }
    //右侧滚动区域
    var right = DOM.getElementsByClass("right",saleCenter)[0];
    var saleList = DOM.getElementsByClass("saleList",right)[0];
    var curPos = DOM.css(saleList,"top");

    var oLis = saleList.getElementsByTagName("li").length;
    var total = oLis/2;
    var step =0;
    window.setInterval(function(){
        if(step==total-1){
            step = 0;
            DOM.css(saleList,"top",0);
        }
        step++;
        curPos = -step*250;
        animate(saleList,{top:curPos},700,1);
    },4000);
}();


//    *******************右下角toolbar*****************************
(function(){
    // var toolbar = DOM.getElementsByClass("toolbar");
    // for(var j=0;j<toolbar.length;j++){
    //     var curB = toolbar[j];
    //     var oTools = curB.getElementsByTagName("li");
    //     for(var i=0;i<oTools.length;i++){
    //         curT = oTools[i];
    //         curT.onmouseover = function(){
    //             var son = DOM.children(this,"em")[0];
    //             animate(son,{left:-60},300,1);
    //         }
    //         curT.onmouseout = function(){
    //             var son = DOM.children(this,"em")[0];
    //             animate(son,{left:35},200,1);
    //         }
    //     }
    // }


})();
// ********************话费充值区域********************
(function(){
    var mc = DOM.getElementsByClass("mc")[0];
    var lifelist = DOM.getElementsByClass("lifelist")[0];
    var oList = DOM.getElementsByClass("focus");
    var mc_inner = DOM.getElementsByClass("mc-inner");
    var close = DOM.getElementsByClass("close");
    for(var i=0;i<oList.length;i++){
        var curLi = oList[i];
        curLi.onmouseenter = function(){
            for(var i=0;i<oList.length;i++){
                DOM.addClass(oList[i],"hover");
            }
            initLi(this);
            DOM.addClass(this,"hover2");
        }
    }
    function initLi(curLi) {
        for(var i=0;i<oList.length;i++){
            var curLi = oList[i];
            isHover = DOM.hasClass(curLi,"hover2");
            if(isHover){
                DOM.removeClass(curLi,"hover2");
            }
        }

    }
    for(var j=0;j<close.length;j++){
        var curC = close[j];
        curC.onclick = function(e){
            for(var i=0;i<oList.length;i++){
                DOM.removeClass(oList[i],"hover");
            }
            initLi();
        }
    }
    function initMcLi(curInner){
        for(var i=0;i<curInner.length;i++){
            var curMc = curInner[i];
            isSelected = DOM.hasClass(curMc,"selected");
            if(isSelected){
                DOM.removeClass(curMc,"selected");
            }
        }
    }
    for(var i=0;i<mc_inner.length;i++){
        !function(i) {
            var curInner = mc_inner[i];
            //查找每一个mc_inner下面的li
            curInner.mcList = curInner.getElementsByTagName("li");
            //对每一个li加选中效果
            for (var j = 0; j < curInner.mcList.length; j++) {
                var curM = curInner.mcList[j];
                curM.onmouseover = function () {
                    initMcLi(curInner.mcList);
                    DOM.addClass(this, "selected");
                };
            }
        }(i);


    }


})();
