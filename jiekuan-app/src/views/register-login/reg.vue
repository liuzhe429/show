<template>
  <div class="p_register_page">
    <mt-header fixed>
      <mt-button slot="left" @click="handleClose">
        <img src="@/assets/guanbi.png" alt="" style="width:25px;height:25px;"/>
      </mt-button>
    </mt-header>
    <p class="register_title">注册</p>
    <p class="register_tips">请输入您的手机号码</p>
    <mt-field label="+86" v-model="mobile" class="input_msg" placeholder="请输入手机号">
    </mt-field>
    <mt-field label="验证码" v-model="msg" class="input_msg" placeholder="请输入验证码">
      <div class="msg_btn_container" @click="handleGetMsg(mobile)">
        <span :class="['msg_btn', sendSmsBtnDisabled ? '' : 'active']">{{sendBtnText}}</span>
      </div>
    </mt-field>
    <cube-button class="reg_btn" @click="handleRegister">注册</cube-button>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import {showToastOnly} from '@/libs/utils';
export default {
  data() {
    return {
      mobile: '',
      msg: '',
      sendBtnText: '获取验证码',
      sendSmsBtnDisabled: true,
      time: 60,
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
  created() {
    
  },
  methods: {
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
      let {msg, time, type} = obj;
      this.toast = this.$createToast({
        txt: msg,
        type: type || 'txt',
        time: time || 2000,
      })
      this.toast.show()
    },
    handleClose() {
      this.$router.push('/');
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
      if (this.verifyMsg(mobile, true)) {
        this.$service.post('/getVerifyCode', {
          token: Cookies.get('ip_token'),
          mobile: this.mobile,
        }, true).then(res => {
          if (res.code === 0) {
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
        });
      }
    },
    handleRegister(){
      this.verifyMsg(this.mobile, true)
    }
  }
}
</script>

<style lang="less" scoped>
.p_register_page{
  padding:45px 10px 10px;
  color: #101010;
  .register_title{
    font-size: 28px;
    text-align: left;
    margin:20px 0 15px;
  }
  .register_tips{
    text-align: left;
    margin-bottom: 18px;
  }
  .input_cell {
    border: none;
    background:#F2F2F2;
    margin-bottom: 10px;
  }
  .reg_btn{
    background: #F76968;
    font-size: 16px;
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
    width: 50px;
    margin-right: 10px;
  }
  /deep/ .mint-cell-wrapper{
    padding-right: 0;
  }
}
</style>


