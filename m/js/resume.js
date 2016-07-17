/**
 * Created by liuzhe on 16/6/16.
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
// var audioBox = getEle("#audioBox");
// var audio = audioBox.getElementsByTagName("audio")[0];
var content = getEle(".content");
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
windowStyle();
function windowStyle(){

    winW = window.innerWidth;/*设备宽*/
    winH = window.innerHeight;/*设备高*/
    desW = 640;
    desH = 1008;

    if (winW / winH <= desW / desH) {
        main.style.webkitTransform = "scale(" + winH / desH + ")";
        document.documentElement.style.fontSize = "100px"
    } else {
        main.style.webkitTransform = "scale(" + winW / desW + ")";
        document.documentElement.style.fontSize = "100px"
    }
}

document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, false);
fnLoad();
function fnLoad(){
    var imgList = main.getElementsByTagName("img");
    var loading = getEle("#loading");
    var process = getEle(".process");
    var processText = getEle(".processText");
    var ary =[];
    if(imgList.length>0){
        for(var i=0;i<imgList.length;i++){
            var curImg = imgList[i];
            curImg.src = curImg.getAttribute("trueImg");
            ary.push(curImg.src);
        }
    }

    /*
     * 执行步骤:
     * pc.给每张图片创建图片实例,让每张图片在后台加载
     * 2.图片加载完之后,我们记录下加载完图片的个数
     * 3.加载完图片的个数占所有图片(arr.length)的百分比等于process的宽度
     *
     * */
    var num=0;//记录加载完成的图片个数
    if(ary.length>0){
        ary.forEach(function(){
            var img = new Image();
            img.src = arguments[0];
            img.onload = function(){
                try{
                    num++;
                    process.style.width = num/ary.length*100+"%";
                    process.addEventListener("webkitTransitionEnd",function(){
                        this.style.webkitTransition = "";
                    },false);
                    if(num==ary.length){
                        window.setTimeout(function(){
                            if(loading){
                                addClass(loading,"fadeIn3")
                            }
                            fnMove();
                            // var audioSrc = audio.getAttribute("trueSrc");
                            // audio.src = audioSrc;
                            // audioSrc.onload = function(){
                            //     addClass(audioBox,"rotate");
                            //     bell.play();//播放
                            // }

                        },2000);
                    }
                }catch (e){
                    console.log("图片加载失败");
                }

            }
        });

    }
}
// audioBox.addEventListener("touchstart",function(){
//     if(hasClass(this,"rotate")){
//         removeClass(this,"rotate");
//         bell.pause();//暂停
//     }else{
//         addClass(this,"rotate");
//     }
// })
// audioBox.addEventListener("touch",function(){
//     if(hasClass(this,"rotate")){
//         removeClass(this,"rotate");
//         bell.pause();
//     }else{
//         addClass(this,"rotate");
//         bell.play();
//     }
// })
function fnMove(){
    var oPageList = document.querySelectorAll(".content>.page");
    addClass(oPageList[0],"zIndex animation");
    oPageList[0].style.webkitTransform = "translate(0px,0px)";
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
        var moveY = e.changedTouches[0].pageY;
        this.flag = true;

        var movePos = moveY - this.startY;//移动的距离
        var index = this.index;
        [].forEach.call(oPageList,function(){
            if(arguments[1]!==index){
                removeClass(arguments[0],"zIndex");
                removeClass(arguments[0],"animation");
            }else{
                removeClass(arguments[0],"zIndex");
            }


        })
        if (movePos > 0) {/*下滑*/
            //获取上一张索引
            this.prevsIndex = index == 0 ? oPageList.length - 1 : index - 1;
            var duration = -desH+movePos;
            this.style.webkitTransformOrigin="bottom";
            this.style.webkitTransform = "scale("+(1-Math.abs(movePos)/winH*1/2)+") translate(0,"+movePos/4+"px)";

        } else if (movePos < 0) {/*上滑*/
            //获取下一张索引
            this.prevsIndex = index == oPageList.length - 1 ? 0 : index + 1;
        var duration = desH+movePos;
            this.style.webkitTransformOrigin="top";
            this.style.webkitTransform = "scale("+(1-Math.abs(movePos)/winH*1/2)+") translate(0,"+movePos/4+"px)";
        }
        addClass(oPageList[this.prevsIndex],"zIndex");

        oPageList[this.prevsIndex].style.webkitTransform = "translate(0px,"+ duration+"px)";

        // this.style.webkitTransform = "translate(0,"+movePos/2+"px)";
    }

    function end(e) {
        var _this = this;
        if (this.flag) {
            //回到起始位置
            removeClass(this,"animation");
            addClass(oPageList[this.prevsIndex], "animation");

            oPageList[this.prevsIndex].style.webkitTransform = "translate(0,0)";

            oPageList[this.prevsIndex].style.webkitTransition = "0.5s";
            oPageList[this.prevsIndex].addEventListener('webkitTransitionEnd', function (e) {
                this.style.webkitTransition = "";
                _this.style.webkitTransform = "translate3d(0, -2008px, 0)";

            }, false);

            this.flag = false;//以便下一次再去判断

        }
    }

};
window.onresize = window.onload = function(){
    windowStyle();
    fnLoad();
};