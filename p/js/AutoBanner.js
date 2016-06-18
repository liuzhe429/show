~function () {
    function AutoBanner(option) {
        this.default = {
            curEleId:"slider1",
            ajaxURL:null,
            interval:20,
            time:500,
            effect:1,
            isOpacity:0
        }
        for(var key in option){
            if(option.hasOwnProperty(key)){
                this.default[key] = option[key]
            }
        }
        //->把之前存储获取元素的变量都作为当前实例的私有的属性
        this.banner = document.getElementById(option.curEleId);
        this.bannerInner = DOM.firstChild(this.banner);
        this.bannerTip = DOM.getElementsByClass("dotList",this.banner)[0];
        this.ulList = DOM.getElementsByClass("list",this.banner)[0];
        this.oLis = this.ulList.getElementsByTagName("li");
        this.liWidth = this.oLis[0].offsetWidth;
        this.bannerLeft = DOM.getElementsByClass("leftBtn",this.banner)[0];
        this.bannerRight = DOM.getElementsByClass("rightBtn",this.banner)[0];
        this.divList = this.bannerInner.getElementsByTagName("div");
        this.imgList = this.bannerInner.getElementsByTagName("img");
        this.tipoLis = this.bannerTip.getElementsByTagName("li");
        // //->之前的全局变量也应该变为自己的私有的属性
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
            xhr.send(null);
        },
        //->实现数据绑定
        bindData: function () {
            var str = "", str2 = "";
            if (this.jsonData) {
                for (var i = 0, len = this.jsonData.length; i < len; i++) {
                    var curData = this.jsonData[i];
                    str += "<div><img src='' trueImg='" + curData["img"] + "'/></div>";
                    i === 0 ? str2 += "<li class='bg'></li>" : str2 += "<li></li>";
                }
            }
            this.bannerInner.innerHTML = str;
            this.bannerTip.innerHTML = str2;
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
                            animate(curDiv, {opacity: 1}, 200,1);
                        }
                        oImg = null;
                    }
                }(i);
            }
        },
        //->自动轮播
        initListWidth:function(){
            DOM.css(this.ulList,"width",this.oLis.length*this.liWidth);
        },
        // opacityInitListWidth:function(){
        //     DOM.css(this.ulList,"width",this.oLis.length*this.liWidth);
        // },
        autoMove: function () {

            if (this.step >= (this.oLis.length-1)) {
                this.step = 0;;
                DOM.css(this.ulList,"left",0);
            }
            this.step++;
            animate(this.ulList, {left: -this.step*this.liWidth}, this.default.time,this.default.effect);
            this.addDotListClass();
        },
        opacityAutoMove: function () {
            if (this.step === (this.oLis.length - 1)) {
                this.step = -1;
            }
            this.step++;
            this.OpacitysetBanner();
        },
        setDotList:function(){
            str = "";
            for(var j =0;j<this.oLis.length-1;j++){
                if(j===0){
                    str +="<li class='selected'></li>";
                }else{
                    str +="<li></li>";
                }
            }
            this.bannerTip.innerHTML = str;
            //->实现焦点对齐


        },
        opacitysetDotList:function(){
            str = "";
            for(var j =0;j<this.oLis.length;j++){
                if(j===0){
                    str +="<li class='selected'></li>";
                }else{
                    str +="<li></li>";
                }
            }
            this.bannerTip.innerHTML = str;
            //->实现焦点对齐


        },
        addDotListClass:function(){
            var tempStep = this.step==this.tipoLis.length? 0 : this.step;
            for (var i = 0, len = this.tipoLis.length; i < len; i++) {
                var curLi = this.tipoLis[i];
                DOM.removeClass(curLi, "selected");
            }
            DOM.addClass(this.tipoLis[tempStep], "selected");
        },

        setBanner: function () {
            //->实现轮播图切换效果
                animate(this.ulList,{left:-this.step*this.liWidth},this.default.time,this.default.effect);
            //->实现焦点对齐
            this.addDotListClass();
        },
        opacitySetBanner: function () {
            //->实现轮播图切换效果
            for (var i = 0, len = this.divList.length; i < len; i++) {
                var curDiv = this.divList[i];
                if (i === this.step) {
                    DOM.css(curDiv, "zIndex", 1);
                    animate(curDiv, {opacity: 1}, 700, function () {
                        var curDivSib = DOM.siblings(this);
                        for (var k = 0, len = curDivSib.length; k < len; k++) {
                            DOM.css(curDivSib[k], "opacity", 0);
                        }
                    });
                    continue;
                }
                DOM.css(curDiv, "zIndex", 0);
            }
            //->实现焦点对齐
            for (i = 0, len = this.oLis.length; i < len; i++) {
                var curLi = this.oLis[i];
                i === this.step ? DOM.addClass(curLi, "bg") : DOM.removeClass(curLi, "bg");
            }
        },
        //->切换效果和焦点对齐
        OpacitysetBanner: function () {
            //->实现轮播图切换效果
            for (var i = 0, len = this.oLis.length; i < len; i++) {
                var curDiv = this.oLis[i];
                DOM.css(curDiv, {"position":"absolute","left":"0","top":"0"});
                if (i === this.step) {
                    DOM.css(curDiv, "zIndex", 1);
                    animate(curDiv, {opacity: 1}, 200, function () {
                        var curDivSib = DOM.siblings(this);
                        for (var k = 0, len = curDivSib.length; k < len; k++) {
                            DOM.css(curDivSib[k], "opacity", 0);
                        }
                    });
                    continue;
                }
                DOM.css(curDiv, "zIndex", 0);
                this.addDotListClass();
            }
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

            this.bannerLeft.onclick = function () {

                if (_this.step <= 0) {
                    _this.step = _this.oLis.length-1;
                    DOM.css(_this.ulList,"left",-_this.step*_this.liWidth);
                }
                _this.step--;
                _this.addDotListClass();

                animate(_this.ulList,{left:-_this.step*_this.liWidth},this.default.time,_default.effect);

            };
        },
        opacityLeftRight: function () {
            var _this = this;
            this.bannerRight.onclick = function () {
                _this.autoMove();
            };
            this.bannerLeft.onclick = function () {
                if (_this.step === 0) {
                    _this.step = _this.oLis.length;
                }
                _this.step--;
                _this.opacitySetBanner();
            };
        },
        //->命令模式：init相当于指挥室，指挥各军队协同作战
        init: function () {
            var _this = this;
            if(this.default.isOpacity){
                this.initListWidth = null;
                this.autoMove = this.opacityAutoMove;
                this.leftRight = this.opacityLeftRight;
                this.setDotList = this.opacitysetDotList;
            }
            if(this.option.ajaxURL){
                this.getData();
                this.bindData();
            }
            this.setDotList();
            if(this.initListWidth){
                this.initListWidth();

            }
            window.setTimeout(function () {
                _this.lazyImg();
            }, 500);

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