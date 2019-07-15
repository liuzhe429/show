<template>
  <div class="p_huankuan_page">
    <mt-header fixed title="还款列表" class="header"></mt-header>
    <ul v-if="repayList.length > 0" class="repay_list">
      <li v-for="(item, index) in repayList" :key="index" class="per_item">
        <div v-if="item.repayPlan.length>0">
          <p class="order_title">订单： {{item.orderId}}</p>
          <div class="item_total">
            <div class="item" v-for="(per, index) in item.repayPlan" :key="index">
              <div class="left">
                <p class="tips">{{per.period}}期</p>
                <p class="tips">还款金额：{{per.repaid}}元</p>
                <p class="tips">还款时间：{{per.repay_time}}</p>
              </div>
            </div>
          </div>
          
          <!-- <div v-for="(per, index) in item.repayPlan" :key="index">
            <p>{{per.period}}</p>
            <p>{{per.repaid}}</p>
            <p>{{per.repay_time}}</p>
          </div> -->
        </div>
      </li>
    </ul>
    <div class="no_list" v-if="repayList.length === 0">
      还未申请任何贷款
    </div>
    <Tabbar selected="2"></Tabbar>
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
      repayList: []
    }
  },
  created(){
    this.$service.post('/repayList',{
      token: this.$Cookies.get('token')
    }, true).then(res => {
      if(res.data && res.data.repayList) {
        this.repayList = res.data.repayList;
      }
    });
  }
}
</script>
<style lang="less" scoped>
.p_huankuan_page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding:60px 10px 10px;
  background: #f2f2f2;
  color: #101010;
  .no_list{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #101010;
    font-size: 16px;
    padding-bottom: 60px;
    box-sizing: border-box;
  }
  .repay_list{
    padding-bottom: 50px;
  }
  .per_item{
    margin-bottom: 20px;
    .order_title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      text-indent: 10px;
    }
    .item_total{
      border-radius: 10px;
      overflow: hidden;
    }
    .item{
      padding: 0px 15px;
      background: #fff;
      height: 105px;
      box-sizing: border-box;
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
          color: #999;
          font-size: 14px;
          margin-top: 7px;
        }
      }
    }
  }
  
 
}
</style>



