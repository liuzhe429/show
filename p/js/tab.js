~function(){
    function Tab(ele){
        this.ele = document.getElementById(ele);
        // 选项卡部分
        this.tab = DOM.getElementsByClass("tab",this.ele)[0];
        this.oLis = this.tab.getElementsByTagName("li");
        // 选项卡内容部分
        this.items = DOM.getElementsByClass("item",this.ele);
        this.liIndex=0;
        return this.init();
    }
    Tab.prototype = {
        constructor: AutoBanner,
        tabChange:function(){
            var _this = this;
            for(var i=0;i<this.oLis.length;i++){
                var curLi = this.oLis[i];
                curLi.index = i;
                var _this = this;
                curLi.onmouseover = function(){
                    _this.initTab();
                    DOM.addClass(this,"selected");
                    _this.liIndex = this.index;
                    _this.contentChange();
                }
            }

        },
        initTab:function(){
            for(var i=0;i<this.oLis.length;i++){
                var curLi = this.oLis[i];
                var isSelected = DOM.hasClass(curLi,"selected");
                if(isSelected){
                    DOM.removeClass(curLi,"selected");
                }
            }
        },
        contentChange:function(){
            for(var i=0;i<this.items.length;i++){
                var curItem = this.items[i];
                var isBlock = DOM.hasClass(curItem,"block");
                if(isBlock){
                    DOM.removeClass(curItem,"block");
                }
            }
            DOM.addClass(this.items[this.liIndex],"block");
            // console.log(this.liIndex);
        },
        init:function(){
            this.tabChange();
            this.contentChange();
            return this;
        }
    }
    window.Tab = Tab;
}();