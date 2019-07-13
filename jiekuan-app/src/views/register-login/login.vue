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
      placeholder="手机号">
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
      <router-link to="/forget?type=forget">
        忘记密码
      </router-link>
    </p>
  </div>
</template>
<script>
import {login, showToastOnly} from '@/libs/utils';
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
    handleLogin() {
      let phonereg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      if (this.mobile === '') {
        showToastOnly({
          that: this,
          msg: '手机号不能为空哦',
          time: 2000
        });
        return false;
      } else if (!phonereg.test(this.mobile)) {
        showToastOnly({
          that: this,
          msg: '请输入正确的手机号',
          time: 2000
        });
        return false;
      } else if (this.password === '') {
        showToastOnly({
          that: this,
          msg: '密码不能为空哦',
          time: 2000
        });
        return false;
      } else if (this.canClick){
        this.canClick = false;
        login({
          that: this,
          mobile: this.mobile,
          password: this.password
        }).then(res => {
          if (res.code !== 0){
            setTimeout(() => {
              this.canClick = true;
            }, 1000);
            showToastOnly({
              that: this,
              msg: res.msg,
              time: 2000
            });
            return;
          }
          this.$router.replace('/');
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
  padding:45px 20px 10px;
  overflow-x: hidden;
  background: #fff;
  user-select: none;
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


