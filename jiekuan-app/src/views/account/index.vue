<template>
  <div class="p_account_page">
    <div class="top">
      <div class="left">
        <p class="phone">187****79797</p>
        <p class="username">王先生</p>
      </div>
      <div class="right">
        <i class="cubeic-notification"></i>
      </div>
    </div>
    <div class="account_item">
      <mt-cell title="我的银行卡" is-link icon="back" to="/bankcard">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="我的额度" is-link icon="back">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="帮助中心" is-link icon="back">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <i class="blank"></i>
      <mt-cell title="常见问题" is-link icon="back" to="/question">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="在线客服" is-link icon="back">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
      <p class="line"><i></i></p>
      <mt-cell title="系统设置" is-link icon="back" to="/setup">
        <img src="@/assets/bankcard.png" alt="" slot="icon" style="width:24px;margin:0px 15px 0px 5px;">
      </mt-cell>
    </div>
    <Tabbar selected="3"></Tabbar>
  </div>
  
</template>
<script>
import Tabbar from '@/components/tabbar';
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="less" scoped>
.p_account_page{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #F5F5F5;
  .top{
    height: 130px;
    background: #F76968;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    .left{
      text-align: left;
      .phone{
        font-size: 18px;
        height: 50px;
        line-height: 50px;
      }
      .username{
        font-size: 14px;
      }
    }
    .right{
      font-size: 30px;
    }
  }
  /deep/ .mint-cell-title {
    text-align: left;
  }
  .account_item{
    /deep/ .mint-cell-wrapper{
      font-size: 14px;
    }
    .line{
      width: 100%;
      background: #fff;
      i {
        background: #d9d9d9;
        height: 1px;
        display: block;
        margin-left: 54px;
      }
    }
    .blank{
      width: 100%;
      background: transparent;
      height: 10px;
      display: block;
    }
  }
  
}
</style>

