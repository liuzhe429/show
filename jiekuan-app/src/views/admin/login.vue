<template>
  <div class="admin_p_login_page">
    <div class="content">
      <p class="login_title" @click="login">登录</p>
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
    </div>
  </div>
</template>
<script>
import {showToastOnly} from '@/libs/utils';
export default {
  data() {
    return {
      mobile: '13100110011',
      password: '123456',
      eye: {
        open: false
      },
      canClick: true
    }
  },
  methods: {
    login() {
      
    },
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
        this.$service.get('/admin/login', {
          mobile: this.mobile,
          password: this.password
        }, true).then(res => {
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
          } else {
            this.$Cookies.set('adminToken', res.data.adminToken);
            this.$router.replace('/admin/home');
          }
        }).catch(() => {
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
html, body {
  font-size: 12px !important;
}
.admin_p_login_page{
  position: absolute;
  top:0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin:0 auto;
  overflow-x: hidden;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    width: 400px;
    padding:30px;
    background: #fff;
    border-radius: 5px;
    margin-top: -50px;
  }
  .login_title{
    font-size: 28px;
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
