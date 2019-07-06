<template>
  <div class="p_login_page">
    <mt-header fixed>
      <mt-button slot="left" @click="handleClose">
        <img src="@/assets/guanbi.png" alt="" style="width:25px;height:25px;"/>
      </mt-button>
    </mt-header>
    <p class="login_title">登录</p>
    <cube-input
      class="input_cell"
      v-model="mobile"
      placeholder="用户名/邮箱/手机号">
    </cube-input>
    <cube-input
      type="password"
      class="input_cell"
      v-model="password"
      :eye="eye"
      placeholder="登录密码">
    </cube-input>
    <cube-button class="login_btn" @click="canClick ? handleLogin(): ''">登录</cube-button>
    <p class="tips_line">
      <router-link to="/quick-register">
        手机快速注册
      </router-link>
      <router-link to="/forget">
        忘记密码
      </router-link>
    </p>
  </div>
</template>
<script>
import {login} from '@/libs/utils';
export default {
  data() {
    return {
      mobile: '',
      password: '',
      eye: {
        open: false
      },
      canClick: true
    }
  },
  methods: {
    handleClose() {
      this.$router.push('/');
    },
    showToastTxtOnly(obj) {
      let {msg, time = 2000, type = 'txt'} = obj;
      this.toast = this.$createToast({
        txt: msg,
        type: type,
        time: time,
      })
      this.toast.show()
    },
    handleLogin() {
      if (this.mobile === '') {
        this.showToastTxtOnly({
          msg: '手机号不能为空哦',
          time: 2000
        });
      } else if (this.password === '') {
        this.showToastTxtOnly({
          msg: '密码不能为空哦',
          time: 2000
        });
      } else {
        this.canClick = false;
        login({
          that: this,
          mobile: this.mobile,
          password: this.password
        }).then(res => {
          if (res.code !== 0){
            this.canClick = true;
            this.showToastTxtOnly({
              msg: res.msg,
              time: 2000
            });
            return;
          }
          this.$router.go(-1);
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.p_login_page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:45px 10px 10px;
  overflow-x: hidden;
  .login_title{
    font-size: 28px;
    text-align: left;
    margin:20px 0 30px;
  }
  .input_cell {
    border: none;
    background:#F2F2F2;
    margin-bottom: 10px;
  }
  .login_btn{
    background: #F76968;
    font-size: 16px;
  }
  .tips_line{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content:space-between;
    a{
      color: #101010;
    }
  }
}
</style>


