/**
 * Created by liuzhe on 16/6/10.
 */
/**
 * Created by liuzhe on 16/6/9.
 */

function getEle(curEle) {
    return document.querySelector(curEle);
}
//->hasClass:验证当前元素中是否包含className这个样式类名
function hasClass(curEle, className) {
    var reg = new RegExp("(^| +)" + className + "( +|$)");
    return reg.test(curEle.className);
}

//->addClass:给元素增加样式类名
function addClass(curEle, className) {
    var ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
    for (var i = 0, len = ary.length; i < len; i++) {
        var curName = ary[i];
        if (!this.hasClass(curEle, curName)) {
            curEle.className += " " + curName;
        }
    }
}

//->removeClass:给元素移除样式类名
function removeClass(curEle, className) {
    var ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
    for (var i = 0, len = ary.length; i < len; i++) {
        var curName = ary[i];
        if (this.hasClass(curEle, curName)) {
            var reg = new RegExp("(^| +)" + curName + "( +|$)", "g");
            curEle.className = curEle.className.replace(reg, " ");
        }
    }
}
var main = getEle("#main");
var article = getEle(".article");
/******************初始化页面大小
 cover缩放原理:
 容器宽(设备宽)/容器高(设备高)<=背景图宽(设计稿宽)/背景图高(设计稿高)  按照高来缩放
 缩放值 = 容器的高/背景图高
 容器宽/容器高>背景图宽/背景图高  按照宽来缩放
 缩放值 = 容器的宽/背景图宽
 * */

var winW = window.innerWidth;/*设备宽*/
var winH = window.innerHeight;/*设备高*/

var desW = 640;
var desH = 1008;
// document.documentElement.style.fontSize = winW / desW * 100 + "px";

if(winW>desW){
    window.innerWidth="640px";
    document.documentElement.style.width="640px";
    document.body.style.width = "640px";
}else{
    if (winW / winH <= desW / desH) {
        main.style.webkitTransform = "scale(" + winH / desH + ")";
    } else {
        main.style.webkitTransform = "scale(" + winW / desW + ")";
    }
}
//********************加载图片
fnLoad();
function fnLoad(){
    var imgList = main.getElementsByTagName("img");
    var loading = getEle("#loading");
    var process = getEle(".process");
    var ary =[];
    for(var i=0;i<imgList.length;i++){
        var curImg = imgList[i];
        curImg.src = curImg.getAttribute("trueImg");
        ary.push(curImg.src);
    }
    /*
     * 执行步骤:
     * 1.给每张图片创建图片实例,让每张图片在后台加载
     * 2.图片加载完之后,我们记录下加载完图片的个数
     * 3.加载完图片的个数占所有图片(arr.length)的百分比等于process的宽度
     *
     * */
    var num=0;//记录加载完成的图片个数
    ary.forEach(function(){
        var img = new Image();
        img.src = arguments[0];
        img.onload = function(){
            num++;
            process.style.width = num/ary.length*100+"%";
            process.addEventListener("webkitTransitionEnd",function(){
                this.style.webkitTransition = "";
            },false);
            if(num==ary.length&&loading){
                window.setTimeout(function(){
                    article.removeChild(loading);
                    fnMove();
                    // bell.play();//播放
                },1500);
            }
        }
    });
};
function fnMove(){
    var oPageList = document.querySelectorAll(".article>.page");
    addClass(oPageList[0],"zIndex animation");

    //实现上下滑动的效果
    [].forEach.call(oPageList, function () {
        var oPage = arguments[0];
        oPage.index = arguments[1];
        oPage.addEventListener("touchstart", start, false);
        oPage.addEventListener("touchmove", move, false);
        oPage.addEventListener("touchend", end, false);
    });

    function start(e) {

        this.startY = e.changedTouches[0].pageY;
    }
    function move(e) {
        e.preventDefault();//滑动时页面滚动是默认行为,需要阻止默认行为
        this.style.webkitTransition = "";
        this.flag = true;
        var moveY = e.changedTouches[0].pageY;
        var movePos = moveY - this.startY;//移动的距离
        var index = this.index;
        [].forEach.call(oPageList,function(){
            removeClass(arguments[0],"zIndex");
            removeClass(arguments[0],"animation");

        })

        if (movePos > 0) {/*下滑*/
            //获取上一张索引
            this.prevsIndex = index == 0 ? oPageList.length - 1 : index - 1;
            var duration = -desH+movePos;
        } else if (movePos < 0) {/*上滑*/
            //获取下一张索引
            this.prevsIndex = index == oPageList.length - 1 ? 0 : index + 1;
            var duration = desH+movePos
        }
        addClass(oPageList[this.prevsIndex],"zIndex");

        oPageList[this.prevsIndex].style.webkitTransform = "translate(0,"+duration+"px)";
        // this.style.webkitTransform = "rotateX("+movePos/winH*90+"deg)";
        this.style.webkitTransform = "scale("+(1-Math.abs(movePos)/winH*1/3)+") translate(0,"+movePos+"px)";
    }

    function end(e) {
        if (this.flag) {
            var _this = this;
            //回到起始位置
            addClass(oPageList[this.prevsIndex], "animation");

            oPageList[this.prevsIndex].style.webkitTransform = "translate(0,0)";
            oPageList[this.prevsIndex].style.webkitTransition = "1s";
            oPageList[this.prevsIndex].addEventListener('webkitTransitionEnd', function (e) {
                //滑动效果结束之后可以做一些处理
                //相当于清除动画积累
                this.style.webkitTransition = "";
                _this.style.webkitTransform = "translate(0,0)";
            }, false)
            this.flag = false;//以便下一次再去判断

        }
    }
};
