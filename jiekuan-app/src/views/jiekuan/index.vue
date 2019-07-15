<template>
  <div class="p_jiekuan_page">
    <mt-header fixed title="借款方案" class="header"></mt-header>
    <ul class="jiekuan_type_list">
      <li class="item" @click="goJieKuan(1)">
        <div class="left">
          <p>身份证借款:</p>
          <p class="amount">3000-20000</p>
          <p class="tips">门槛低，3-12个月，放款及时</p>
        </div>
        <div class="right">
          <span>立即借款</span>
        </div>
      </li>
      <li class="item" @click="goJieKuan(1)">
        <div class="left">
          <p >信用卡借款:</p>
          <p class="amount">3000-20000</p>
          <p class="tips">门槛低，3-12个月，放款及时</p>
        </div>
        <div class="right">
          <span>立即借款</span>
        </div>
      </li>
      <li class="item" @click="goJieKuan(3)">
        <div class="left">
          <p >精英借款:</p>
          <p class="amount">3000-20000</p>
          <p class="tips">门槛低，3-12个月，放款及时</p>
        </div>
        <div class="right">
          <span>立即借款</span>
        </div>
      </li>
    </ul>
    <Tabbar selected="1"></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/tabbar';
export default {
  components: {
    Tabbar
  },
  data() {
    return {
    }
  },
  methods: {
    goJieKuan(type) {
      this.$router.push(`/apply?type=${type}`)
    }
  }
}
</script>
<style lang="less" scoped>
.p_jiekuan_page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:60px 10px 10px;
  background: #f2f2f2;
  color: #101010;
  .header{
    background:#fff;
  }
  .jiekuan_type_list{
    padding-bottom: 90px;
    .item{
      padding: 0px 15px;
      background: #fff;
      height: 125px;
      box-sizing: border-box;
      border-radius: 10px;
      margin-bottom: 20px;
      text-align: left;
      display: flex;
      align-items: center;
      .left{
        flex: 1;
        text-indent: 10px;
        .amount{
          text-indent: 0;
          height: 41px;
          line-height: 41px;
          color: rgba(16, 16, 16, 1);
          font-size: 28px;
        }
        .tips{
          height: 23px;
          line-height: 20px;
          color: rgba(187, 187, 187, 1);
          font-size: 14px;
          margin-top: 7px;
        }
      }
      .right{
        width: 100px;
        span{
          width: 94px;
          height: 33px;
          display: block;
          line-height: 33px;
          border-radius: 10px;
          color: rgba(245, 105, 104, 1);
          font-size: 14px;
          text-align: center;
          border: 1px solid rgba(237, 235, 237, 1);
        }
      }
    }
  }
}
</style>


