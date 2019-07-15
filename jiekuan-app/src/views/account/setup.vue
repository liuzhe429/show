<template>
  <div class="p_setup_page">
    <mt-header fixed title="系统设置" class="header">
      <mt-button slot="left" @click="handleBack">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="p_setup_page_content">
      <mt-cell title="修改登录密码" is-link to="/forget?type=edit"></mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="身份证" is-link to="/add-id"></mt-cell>
    </div>
    <cube-button outline class="quit_btn" @click="handleQuit">安全退出</cube-button>
  </div>
</template>
<script>
import { showToastOnly } from '@/libs/utils';
export default {
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    handleQuit() {
      // logout
      this.$service.post('/logout', {
        token: this.$Cookies.get('token')
      }, true).then(res => {
        if(res.code === 0) {
          showToastOnly({
            that: this,
            msg: '退出成功',
            time: 2000
          });
          setTimeout(() => {
            this.$router.push('/login');
          }, 1000);
        } else{
          showToastOnly({
            that: this,
            msg: res.msg,
            time: 2000
          });
          this.canClick = true;
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
.p_setup_page{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding:45px 0px 10px;
  box-sizing: border-box;
  background: #F5F5F5;
  .p_setup_page_content{
     margin-bottom: 30px;
    /deep/ .mint-cell-title {
      text-align: left;
    }
    /deep/ .mint-cell-wrapper{
      font-size: 14px;
    }
    .line{
      width: 100%;
      background: #fff;
      i {
        background: #eee;
        height: 1px;
        display: block;
      }
    }
    .blank{
      width: 100%;
      background: transparent;
      height: 10px;
      display: block;
    }
  }
  .quit_btn{
    color: #9c9c9c;
    background: #fff;
    position: fixed;
    bottom: 0;
  }
  .quit_btn.cube-btn-outline::after{
    border: none;
  }
}
</style>
