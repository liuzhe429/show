(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c89e229"],{"0e5b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin_p_user_page"},[a("div",{staticClass:"title"},[t._v("图片列表")]),a("ul",{staticClass:"user_list"},[a("p",{staticClass:"pic_title"},[t._v("首页图片")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.homePic,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),a("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"right",trigger:"hover"}},[a("img",{attrs:{src:"http://loan.com"+t.row.img}}),a("img",{staticStyle:{"max-height":"150px"},attrs:{slot:"reference",src:"http://loan.com"+t.row.img,alt:""},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"handle_btn"},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(t._s(e.row.img.length>0?"修改":"添加"))]),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/admin/file/edit?adminToken="+t.adminToken+"&type=1","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]}}])})],1),a("p",{staticClass:"pic_title"},[t._v("支付二维码")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.payPic,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),a("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"right",trigger:"hover"}},[a("img",{attrs:{src:"http://loan.com"+t.row.img}}),a("img",{staticStyle:{"max-height":"150px"},attrs:{slot:"reference",src:"http://loan.com"+t.row.img,alt:""},slot:"reference"})])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"handle_btn"},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(t._s(e.row.img.length>0?"修改":"添加"))]),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/admin/file/edit?adminToken="+t.adminToken+"&type=3","show-file-list":!1,"on-success":t.handleAvatarSuccess3,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]}}])})],1),a("p",{staticClass:"pic_title"},[t._v("客服号码")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.qqPic,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),a("el-table-column",{attrs:{label:"客服号码"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.img)+"\n        ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!t.dialogVisible}}},[t._v(t._s(e.row.img.length>0?"修改":"添加"))])]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑客服号码",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"客服号码"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入客服号码"},model:{value:t.qq,callback:function(e){t.qq=e},expression:"qq"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.cancleAdd()}}},[t._v("取 消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.addQq}},[t._v("确 定")])],1)],1)],1)},l=[],o=a("90fe"),s=a("5c96"),n={components:{"el-table":s["Table"],"el-table-column":s["TableColumn"],"el-button":s["Button"],"el-upload":s["Upload"],"el-popover":s["Popover"],"el-dialog":s["Dialog"],"el-form":s["Form"],"el-input":s["Input"],"el-form-item":s["FormItem"]},data:function(){return{imageUrl:"",homePic:[],payPic:[],qqPic:[],qq:"",adminToken:this.$Cookies.get("adminToken"),dialogVisible:!1}},created:function(){this.getData(1),this.getData(3),this.getData(4)},methods:{handleClose:function(){this.dialogVisible=!1},cancleAdd:function(){this.dialogVisible=!1,this.qq=""},addPic:function(t){var e=this;this.$service.post("/admin/file/edit",{adminToken:this.adminToken,type:t},!0).then(function(a){a&&0===a.errNo?e.getData(t):Object(o["c"])({that:e,msg:"上传失败",time:2e3})})},addQq:function(){var t=this;this.$service.post("/admin/file/addqq",{adminToken:this.adminToken,type:4,qq:this.qq},!0).then(function(e){e&&0===e.code?(t.dialogVisible=!1,t.getData(4)):Object(o["c"])({that:t,msg:"上传失败",time:2e3})})},handleAvatarSuccess:function(){this.getData(1)},handleAvatarSuccess3:function(){this.getData(3)},beforeAvatarUpload:function(){},getData:function(t){var e=this;this.$service.post("/admin/file",{adminToken:this.$Cookies.get("adminToken"),type:t},!0).then(function(a){1===t?e.homePic=a.data.img:3===t?e.payPic=a.data.img:4===t&&(e.qqPic=a.data.img)}).catch(function(){})}}},r=n,c=(a("9b1c"),a("2877")),d=Object(c["a"])(r,i,l,!1,null,"a528c200",null);e["default"]=d.exports},"8fd8":function(t,e,a){},"90fe":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"c",function(){return l}),a.d(e,"b",function(){return o});a("a481");function i(t){return new Promise(function(e){var a=t.that,i=t.url,l=void 0===i?"/login":i,o=t.mobile,s=t.password;a.$service.post(l,{mobile:o,password:s},!0).then(function(t){0===t.code&&a.$Cookies.set("token",t.data.token),e(t)})})}function l(t){var e=t.that,a=t.msg,i=t.time,l=void 0===i?2e3:i,o=t.type,s=void 0===o?"txt":o;e.toast=e.$createToast({txt:a,type:s,time:l}),e.toast.show()}function o(t){return/\d{11}/.test(t)?t.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3"):t}},"9b1c":function(t,e,a){"use strict";var i=a("8fd8"),l=a.n(i);l.a}}]);
//# sourceMappingURL=chunk-6c89e229.564c905b.js.map