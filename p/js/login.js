~function(){
    var loginOne = DOM.getElementsByClass("qrcode-login")[0];
    var loginTwo = DOM.getElementsByClass("qrcode-loginTwo")[0];
    var formOne = DOM.getElementsByClass("loginForm")[0];
    var formTwo = DOM.getElementsByClass("qrcode-loginForm")[0];


    loginOne.onclick = function(){
        formTwo.style.display = "block";
        formOne.style.display = "none";

    }
    loginTwo.onclick = function(){
        formTwo.style.display = "none";
        formOne.style.display = "block";

    }
    // ***************判断自动登录是否选中*************

    var autoLogin = document.getElementById("autoLogin");

    var msgWarn = DOM.getElementsByClass("msg-warn")[0];
    var msgError = DOM.getElementsByClass("msg-error")[0];

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
    }
    username.onblur = function(){
        DOM.removeClass(this.parentNode,"item_focus");
    }
    pwd.onfocus = function(){
        DOM.addClass(this.parentNode,"item_focus");
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
    //***************验证登录用户名和密码**********************
    var submit = DOM.getElementsByClass("submit")[0];
    var itemUser = DOM.getElementsByClass("item_user")[0];
    var itemPwd = DOM.getElementsByClass("item_pwd")[0];
    var pCon = msgError.getElementsByTagName("p")[0];
    submit.onclick = function (e) {
        var val = username.value.replace(/^ +| +| +$/ig,"");

        var reg = /^ +| +| +$/ig;
        var value_user = username.value;
        var value_pwd = pwd.value;
        //判断用户名中是否有空格
        if(reg.test(value_user) || value_user.length==0){
            var Checked = autoLogin.checked;
            if(Checked){
                msgWarn.style.display = "none";
            }
            if(reg.test(value_user)){
                pCon.innerHTML = "用户名中不能有空格";
            }
            if(value_user.length==0){
                pCon.innerHTML = "用户名不能为空";
            }
            msgError.style.display = "block";
            DOM.addClass(itemUser,"item_error");
            return;
        }else {
            if(DOM.hasClass(itemUser,"item_error")){
                DOM.removeClass(itemUser,"item_error");
                msgError.style.display = "none";
                isChecked();
            }
        }
        //判断密码中是否有空格
        if(reg.test(value_pwd)|| value_pwd.length==0){
            var Checked = autoLogin.checked;
            console.log(value_pwd);
            if(Checked){
                msgWarn.style.display = "none";
            }
            if(reg.test(value_pwd)){
                pCon.innerHTML = "密码中不能有空格";
            }
            if(value_pwd.length==0){
                pCon.innerHTML = "密码不能为空";
            }
            msgError.style.display = "block";
            DOM.addClass(itemPwd,"item_error");
            return;
        }else{
            if(DOM.hasClass(itemPwd,"item_error")){
                DOM.removeClass(itemPwd,"item_error");
                msgError.style.display = "none";
                isChecked();
            }
        }

        window.open('./index.html',"_self");
    }
}();

















