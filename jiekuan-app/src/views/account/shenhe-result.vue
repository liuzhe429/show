<template>
  <div class="p_huankuan_page">
    <mt-header fixed title="额度" class="header">
      <mt-button slot="left" @click="handleBack">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <ul>
      <li class="item" v-for="(item, index) in repayList" :key="index">
        <div class="left">
          <p class="tips">订单号: {{item.orderId}}</p>
          <!-- <p class="amount"><span>借款金额：</span>{{item.auditMoney}}</p> -->
          <p class="amount">{{item.auditStatus === 0 ? '审核中' : item.auditStatus === 1 ? '审核通过' : '审核未通过'}}</p>
          <!-- <p class="tips">{{item.orderId}}</p> -->
        </div>
        <div class="right">
          <span @click="goDetail(item)">查看详细</span>
        </div>
      </li>
      <!-- <li v-for="(item, index) in repayList" :key="index" class="item">
        <p>{{item.orderId}}</p>
        <p>{{item.auditMoney}}</p>
        <p>{{item.auditStatus}}</p>
        <div v-if="item.repayPlan.length>0">
          <div v-for="(per, index) in item.repayPlan" :key="index">
            <p>{{per.period}}</p>
            <p>{{per.repaid}}</p>
            <p>{{per.repay_time}}</p>
          </div>
        </div>
      </li> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      repayList: [],
      detail: []
    }
  },
  created(){
    this.$service.post('/repayList',{
      token: this.$Cookies.get('token')
    }, true).then(res => {
      this.repayList = res.data.repayList;
    });
  },
  
  methods: {
    goDetail(detail){
      this.$router.push(`/shenhe?detail=${JSON.stringify(detail)}`);
    },
    handleBack() {
      this.$router.go(-1);
    },
    getDetail(id){
      this.$service.post('/queryPosition',{
        token: this.$Cookies.get('token'),
        orderId: id
      }).then(res => {
        if (res) {
          this.detail.push({
            orderId:res
          });
        }
      });
    }
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
      // width: 150px;
      flex: 1;
      .amount{
        text-indent: 0;
        height: 41px;
        line-height: 41px;
        color: rgba(16, 16, 16, 1);
        font-size: 20px;
        margin-top: 10px;
        span{
          font-size: 15px;
        }
      }
      .tips{
        width: 230px;
        height: 23px;
        line-height: 20px;
        color: rgba(187, 187, 187, 1);
        font-size: 14px;
        margin-top: 7px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        border: 1px solid rgba(237, 235, 237, 1);/*no*/
      }
    }
  }
  // .item{
  //   background: #ccc;
  //   margin-bottom: 20px;
  // }
}
</style>