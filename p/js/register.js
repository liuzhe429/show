~function(){
    //用户名  鼠标进入 value为空  鼠标离开 显示默认内容
    var rUser = DOM.getElementsByClass("rUser")[0];
    var rPwd = DOM.getElementsByClass("rPwd")[0];
    var rPwd2 = DOM.getElementsByClass("rPwd2")[0];
    var rPhone = DOM.getElementsByClass("rPhone")[0];
    var rVertify = DOM.getElementsByClass("rVertify")[0];
    var rPhoneCode = DOM.getElementsByClass("rPhoneCode")[0];

    var rUser_tip = DOM.getElementsByClass("rUser_tip")[0];
    var rPwd_tip = DOM.getElementsByClass("rPwd_tip")[0];
    var rPwd2_tip = DOM.getElementsByClass("rPwd2_tip")[0];
    var rPhone_tip = DOM.getElementsByClass("rPhone_tip")[0];
    var rVertify_tip = DOM.getElementsByClass("rVertify_tip")[0];
    // console.log(rUser_tip)
    var rUserPlaceholder = rUser.placeholder;
    var rPwdPlaceholder = rPwd.placeholder;
    var rPwd2Placeholder = rPwd2.placeholder;
    var rPhonePlaceholder = rPhone.placeholder;
    var rVertifyPlaceholder = rVertify.placeholder;
    var rPhoneCodePlaceholder = rPhoneCode.placeholder;

    
    
    function findSpan(ele){
       return DOM.children(ele,"span")[0];
    }
    //用户名部分

    rUser.onfocus = function(){
        this.placeholder ="";
        var span = findSpan(rUser_tip);
        span.style.display = "block";
    }
    rUser.onblur = function(){
        this.placeholder = rUserPlaceholder;
        var span = findSpan(rUser_tip);
        span.style.display = "none";
    }

    rPwd.onfocus = function(){
        this.placeholder ="";
        var span = findSpan(rPwd_tip);
        span.style.display = "block";
    }
    rPwd.onblur = function(){
        this.placeholder = rPwdPlaceholder;
        var span = findSpan(rPwd_tip);
        span.style.display = "none";
    }

    rPwd2.onfocus = function(){
        this.placeholder ="";
        var span = findSpan(rPwd2_tip);
        span.style.display = "block";

    }
    rPwd2.onblur = function(){
        this.placeholder = rPwd2Placeholder;
        var span = findSpan(rPwd2_tip);
        span.style.display = "none";
    }
    rPhone.onfocus = function(){
        this.placeholder ="";
        var span = findSpan(rPhone_tip);
        span.style.display = "block";

    }
    rPhone.onblur = function(){
        this.placeholder = rPhonePlaceholder;
        var span = findSpan(rPhone_tip);
        span.style.display = "none";
    }
    rVertify.onfocus = function(){
        this.placeholder ="";
        var span = findSpan(rVertify_tip);
        span.style.display = "block";

    }
    rVertify.onblur = function(){
        this.placeholder = rVertifyPlaceholder;
        var span = findSpan(rVertify_tip);
        span.style.display = "none";
    }
    rPhoneCode.onfocus = function(){
        this.placeholder ="";
    }
    rPhoneCode.onblur = function(){
        this.placeholder = rPhoneCodePlaceholder;
    }

}();