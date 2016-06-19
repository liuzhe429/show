/**
 * Created by liuzhe on 16/5/30.
 */
~function () {
    function AutoBanner(option) {
        this._default = {
            curEleId:"slider1",
            ajaxURL:null,
            ajaxParam:null,
            interval:20,
            time:500,
            effect:1,
            isOpacity:0
        }
        for(var key in option){
            if(option.hasOwnProperty(key)){
                this._default[key] = option[key]
            }
        }
        //->把之前存储获取元素的变量都作为当前实例的私有的属性
        this.banner = document.getElementById(this._default.curEleId);
        // this.bannerInner = DOM.firstChild(this.banner);
        // this.bannerInner = DOM.firstChild(this.banner);
        this.bannerTip = DOM.getElementsByClass("dotList",this.banner)[0];
        this.ulList = DOM.getElementsByClass("list",this.banner)[0];
        this.oLis = this.ulList.getElementsByTagName("li");
        this.liWidth = this.oLis[0].offsetWidth || 440;

        this.bannerLeft = DOM.getElementsByClass("leftBtn",this.banner)[0];
        this.bannerRight = DOM.getElementsByClass("rightBtn",this.banner)[0];
        this.divList = this.ulList.getElementsByTagName("div");
        this.imgList = this.ulList.getElementsByTagName("img");

        this.tipoLis = this.bannerTip.getElementsByTagName("li");

        //->之前的全局变量也应该变为自己的私有的属性
        this.option =option;
        this.jsonData = null;
        this.interval = option.interval || 3000;
        this.autoTimer = null;
        this.step = 0;
        this.ajaxURL = option.ajaxURL;
        return this.init();
    }

    AutoBanner.prototype = {
        constructor: AutoBanner,
        //->Ajax请求数据
        getData: function () {
            var _this = this;
            var xhr = new XMLHttpRequest;
            xhr.open("get", this.ajaxURL + "?_=" + Math.random(), false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                    _this.jsonData = DOM.formatJSON(xhr.responseText);
                }
            };
            xhr.send();
        },
        //->实现数据绑定
        bindData: function () {
            var str = "";
            if (this.jsonData) {
                var jsonData = null;
                if(this._default.ajaxParam){
                    ajaxParam = this._default.ajaxParam;
                    jsonData = this.jsonData[ajaxParam];
                }else{
                    jsonData = this.jsonData;
                }

                for (var i = 0, len = jsonData.length; i < len; i++) {
                    var curData = jsonData[i];
                    if(!curData["img"]){

                        for(var j=0;j<curData["img2"].length;j++){
                            var curJ = curData["img2"][j]["img"];

                            str += "<li>";

                            str += "<div class='top'><a href='javascript:;'><img src='' trueImg='" + curJ["0"]["img"] + "'/></a></div>";
                            str += "<div class='center'><a href='javascript:;'><img src='' trueImg='" + curJ["1"]["img"] + "'/></a></div>";
                            str += "</li>";
                        }
                    }else{
                        str +="<li><div><img src='' trueImg='"+ curData["img"] +"' alt=''></div></li>";
                    }
                }
                if(!this._default["isOpacity"]){
                    if(jsonData[0]["img"]){
                        str +="<li><div><img src='' trueImg='" + jsonData[0]["img"] + "'/></div></li>";
                    }else{
                        str += "<li>";

                        str += "<div class='top'><a href='javascript:;'><img src='' trueImg='" + jsonData[0]["img2"][0]["img"][0]["img"] + "'/></a></div>";
                        str += "<div class='center'><a href='javascript:;'><img src='' trueImg='" + jsonData[0]["img2"][0]["img"][1]["img"] + "'/></a></div>";
                        str += "</li>";
                    }
                }

            }
            this.ulList.innerHTML = str;
        },
        //->延迟加载
        lazyImg: function () {
            var _this = this;
            for (var i = 0, len = this.imgList.length; i < len; i++) {
                ~function (i) {
                    var curImg = _this.imgList[i];
                    var oImg = new Image;
                    oImg.src = curImg.getAttribute("trueImg");
                    oImg.onload = function () {
                        curImg.src = this.src;
                        curImg.style.display = "block";
                        if (i === 0) {
                            var curDiv = curImg.parentNode;
                            curDiv.style.zIndex = 1;
                            animate(curDiv, {opacity: 1}, 200);
                        }
                        oImg = null;
                    }
                }(i);
            }
        },
        //->自动轮播
        autoMove: function () {
            var oLisLength = 0;
            if(this._default["isOpacity"]){
                oLisLength = this.oLis.length;
                if (this.step === oLisLength-1) {
                    this.step = -1;
                }
                this.step++;
            }else{
                oLisLength = this.oLis.length-1;

                if (this.step === oLisLength) {
                    this.step = 0;
                    DOM.css(this.ulList,"left",0);
                }
                this.step++;
            }
            this.setBanner();
        },

        setDotList:function(){
            var dotstr = "";
            var dotNum =0;
            if(this._default["isOpacity"] == 1){
                dotNum = this.oLis.length;
            }else{

                dotNum = this.oLis.length-1;
            }

            for(var j =0;j<dotNum;j++){
                if(j===0){
                    dotstr +="<li class='selected'>"+(j+1)+"</li>";
                }else{
                    dotstr +="<li>"+(j+1)+"</li>";
                }
            }
            this.bannerTip.innerHTML = dotstr;
            //->实现焦点对齐
        },
        addDotListClass:function(){
            var tempStep = this.step==this.tipoLis.length? 0 : this.step;
            for (var i = 0; i < this.tipoLis.length; i++) {
                    var curLi = this.tipoLis[i];
                    DOM.removeClass(curLi, "selected");
            }

            DOM.addClass(this.tipoLis[tempStep], "selected");
        },
        initListWidth:function(){
            DOM.css(this.ulList,{"width":this.oLis.length*this.liWidth,"position":"absolute","left":"0"});
        },
        //->切换效果和焦点对齐
        setBanner: function () {
            //->实现轮播图切换效果
            if(this._default["isOpacity"]){
                var _this = this;
                for (var i = 0, len = this.divList.length; i < len; i++) {
                    var curDiv = this.divList[i];
                    DOM.css(curDiv, {"position":"absolute","left":"0","top":"0","opacity":"0"});
                    if (i === this.step) {
                        DOM.css(curDiv, "zIndex", 1);

                        animate(curDiv, {opacity: 1}, this._default["time"], function () {
                            var curDivSib = DOM.siblings(this);
                            for (var k = 0, len = curDivSib.length; k < len; k++) {
                                DOM.css(curDivSib[k], "opacity", 0);
                            }
                        });
                        continue;
                    }
                    DOM.css(curDiv, "zIndex", 0);

                }
            }else{
                animate(this.ulList, {left: -this.step*this.liWidth}, this._default.time,this._default.effect);
            }
            this.addDotListClass();
        },
        //->控制自动轮播
        mouseEvent: function () {
            var _this = this;
            this.banner.onmouseover = function () {
                window.clearInterval(_this.autoTimer);
                _this.bannerLeft.style.display = _this.bannerRight.style.display = "block";
            };
            this.banner.onmouseout = function () {
                _this.autoTimer = window.setInterval(function () {
                    _this.autoMove();
                }, _this.interval);
                _this.bannerLeft.style.display = _this.bannerRight.style.display = "none";
            };
        },
        //->实现焦点切换
        tipEvent: function () {
            var _this = this;
            for (var i = 0, len = this.tipoLis.length; i < len; i++) {
                var curLi = this.tipoLis[i];
                curLi.index = i;
                curLi.onclick = function () {
                    _this.step = this.index;
                    _this.setBanner();
                }
            }
        },
        //->实现左右切换
        leftRight: function () {
            var _this = this;
            this.bannerRight.onclick = function () {
                _this.autoMove();
            };
            if(_this._default["isOpacity"]){
                this.bannerLeft.onclick = function () {
                    if (_this.step === 0) {
                        _this.step = _this.oLis.length;
                    }
                    _this.step--;
                    _this.setBanner();
                };
            }else{
                this.bannerLeft.onclick = function () {

                    if (_this.step <= 0) {
                        _this.step = _this.oLis.length-1;
                        DOM.css(_this.ulList,"left",-_this.step*_this.liWidth);
                    }
                    _this.step--;
                    _this.addDotListClass();

                    animate(_this.ulList,{left:-_this.step*_this.liWidth},_this._default.time,_this._default.effect);

                };
            }

        },
        //->命令模式：init相当于指挥室，指挥各军队协同作战
        init: function () {
            var _this = this;
            if(_this._default["ajaxURL"]){
                this.getData();
                this.bindData();
            }
            if(!_this._default["isOpacity"]){
                _this.initListWidth();
            }
            window.setTimeout(function () {
                _this.lazyImg();
            }, 500);
            _this.setDotList();
            this.autoTimer = window.setInterval(function () {
                _this.autoMove();
            }, this.interval);

            this.mouseEvent();
            this.tipEvent();
            this.leftRight();

            return this;
        }
    };
    window.AutoBanner = AutoBanner;
}();