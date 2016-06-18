/**
 * Created by liuzhe on 16/6/8.
 */
// ***************判断自动登录是否选中*************

var autoLogin = document.getElementById("autoLogin");

var msgWarn = DOM.getElementsByClass("msg-warn")[0];

window.onload = function(){
    isChecked();
}
autoLogin.onclick = function(){
    isChecked();
}
function isChecked(){
    var isChecked = autoLogin.checked;
    if(isChecked){
        msgWarn.style.display = "block";
    }else{
        msgWarn.style.display = "none";
    }
}

// *******************登陆框和密码框focus 和 失去焦点**********************
var username = document.getElementById("username");
var pwd = document.getElementById("pwd");
username.onfocus = function(){
    DOM.addClass(this.parentNode,"item_focus");
    isNull(this,clearUser);
}
username.onblur = function(){
    DOM.removeClass(this.parentNode,"item_focus");
}
pwd.onfocus = function(){
    DOM.addClass(this.parentNode,"item_focus");
    isNull(this,clearPwd);
}
pwd.onblur = function(){
    DOM.removeClass(this.parentNode,"item_focus");
}

// ***************输入框输入字符后显示清除标志************************
var clearUser = DOM.getElementsByClass("clearUser")[0];
var clearPwd = DOM.getElementsByClass("clearPwd")[0];

username.onkeyup = function(){
    isNull(this,clearUser);
}
pwd.onkeyup = function(){
    isNull(this,clearPwd);
}
username.onkeydown = function(){
    isNull(this,clearUser);
}
pwd.onkeydown = function(){
    isNull(this,clearPwd);
}

function isNull(thisEle,isEle){
    var val = thisEle.value.replace(/^ +| +$/ig,"");
    if(val.length>0){
        isEle.style.display = "block";
    }else{
        isEle.style.display = "none";

    }
}
// **************输入错误后清除输入框的内容***********************
clearUser.onclick = function(){
    username.value = "";
    username.focus();
}
clearPwd.onclick = function(){
    pwd.value = "";
    pwd.focus();
}

