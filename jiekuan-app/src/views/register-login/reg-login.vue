<template>
  <div class="p_home_page">
    <mt-header fixed>
      <mt-button slot="left" @click="handleClose">
        <img src="@/assets/guanbi.png" alt="" style="width:25px;height:25px;"/>
      </mt-button>
    </mt-header>
    <mt-field label="手机号" v-model="mobile" class="input_msg" placeholder="手机号"></mt-field>
    <mt-field v-if="reg_show" label="验证码" v-model="msg" class="input_msg" placeholder="请输入验证码">
      <div class="msg_btn_container" @click="handleGetMsg(mobile)">
        <span class="msg_btn" :class="['msg_btn', sendSmsBtnDisabled ? '' : 'active']">{{sendBtnText}}</span>
      </div>
    </mt-field>
    <mt-field label="密码" v-model="password" class="input_msg" placeholder="请输入密码"></mt-field>
    <div class="btn_line">
      <cube-button class="btn_click" @click="canLoginClick ? handleRegisterOrLogin('login') : ''">登录</cube-button>
      <cube-button class="btn_click" @click="canRegClick ? handleRegisterOrLogin('reg') : ''">注册</cube-button>
    </div>
    <p class="register_tips">没有注册的用户清先注册再登录</p>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import {showToastOnly} from '@/libs/utils';
export default {
  data() {
    return {
      reg_show: false,
      mobile: '',
      password: '',
      msg: '',
      time: 60,
      sendBtnText: '获取验证码',
      sendSmsBtnDisabled: true,
      canRegClick: true,
      canLoginClick: true,
      eye: {
        open: false
      }
    }
  },
  watch:{
    mobile(val) {
      this.sendSmsBtnDisabled = !this.verifyMsg(val);
    }
  },
  methods: {
    handleClose() {
      this.$router.go(-1);
    },
    //  倒计时
    countDown(){
      let time = this.time;
      let interval = setInterval(() => {
        time--;
        if (this.time === 0) {
          clearInterval(interval);
          this.sendBtnText = '重新发送';
          this.sendSmsBtnDisabled = false;
          return;
        }
        this.time = time,
        this.sendBtnText = this.time + 's';
        this.sendSmsBtnDisabled = true;
      }, 1000);
    },
    showToastTxtOnly(obj) {
      let {msg, time = 2000, type='txt'} = obj;
      this.toast = this.$createToast({
        txt: msg,
        type: type,
        time: time,
      })
      this.toast.show()
    },
    verifyMsg(mobile, needToast){
      let phonereg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      if (this.phoneNum === '') {
        needToast && showToastOnly({
          that: this,
          msg: '手机号不能为空哦',
          time: 2000
        });
        return false;
      } else if (!phonereg.test(mobile)) {
        needToast && showToastOnly({
          that: this,
          msg: '请输入正确的手机号',
          time: 2000
        });
        return false;
      }
      return true;
    },
    handleGetMsg(mobile) {
      if (!this.verifyMsg(mobile, true)) return;
      if (this.sendSmsBtnDisabled === true && this.time > 0) return;
      this.$service.post('/getVerifyCode', {
        token: Cookies.get('ip_token'),
        mobile: this.mobile,
      }, true).then(res => {
        if (res.code === 0) {
          this.time = 60;
          this.countDown();
          showToastOnly({
            that: this,
            msg: '发送成功',
            time: 1000
          });
        } else {
          showToastOnly({
            that: this,
            msg: res.msg,
            time: 2000
          });
        }
      }).catch(() => {
        // console.log(err);
      });
    },
    handleRegisterOrLogin(type){
      if (type === 'reg' && this.reg_show === false) {
        this.reg_show = true;
      }
      let flag = this.verifyMsg(this.mobile, true);
      if (flag) {
        if (type === 'reg' && !/^\d{6}$/.test(this.msg)) {
          showToastOnly({
            that: this,
            msg: '请输入正确的验证码',
            time: 1000
          });
          return false;
        } else if (this.password === '') {
          showToastOnly({
            that: this,
            msg: '请输入密码',
            time: 2000
          });
          return false;
        } else {
          let url = '';
          if (type === 'login') {
            // canLoginClick
            url = '/api/login';
            this.canLoginClick = false;
          } else {
            url = '/api/regist';
            this.canRegClick = false;
          }
          this.$service.post(url, {
            mobile: this.mobile,
            password: this.password,
            verifyCode: '123456',
            name: 'arlene'
          }, true).then(res => {
            if (res.code !== 0) {
              type === 'login' ? this.canLoginClick = true : this.canClick = true;
            } else {
              type === 'login' &&  Cookies.set('token', res.data.token);
              type === 'reg' && showToastOnly({
                that: this,
                msg: '注册成功',
                time: 2000
              });
            }
          })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.p_home_page{
  padding:55px 10px 10px;
  margin-top: 40px;
  color: #101010;
  .register_title{
    font-size: 28px;
    text-align: left;
    margin:20px 0 15px;
  }
  .register_tips{
    text-align: left;
    text-indent: 10px;
    margin-top: 18px;
  }
  .input_cell {
    border: none;
    background:#F2F2F2;
    margin-bottom: 10px;
  }
  
  .input_msg{
    background:#F2F2F2;
    margin-bottom: 10px;
    color: #101010;
    height: 45px;
  }
  .msg_btn_container {
    width: 123px;
    height: 100%;
  }
  /deep/ .mint-field-other{
    height: 100%;
  }
  .msg_btn {
    width:123px;background: rgba(245, 105, 104, 0.5);color:#fff;height:100%;line-height:45px;display:block;
    &.active{
      background: rgba(245, 105, 104, 1);
    }
  }
  /deep/ .mint-field .mint-cell-title{
    width: 60px;
    margin-right: 10px;
  }
  /deep/ .mint-cell-wrapper{
    // padding-right: 0;
  }
  .btn_line{
    display: flex;
    justify-content: space-around;
    .btn_click{
      background: #F76968;
      // border: 2px solid #F76968;
      // color: #F76968;
      font-size: 16px;
      margin: 10px;
    }
  }
}
</style>


