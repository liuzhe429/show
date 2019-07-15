<template>
  <div class="p_bankcard_page">
    <div class="p_bankcard_page_container">
      <mt-header fixed title="我的银行卡">
        <mt-button @click="$router.go(-1)" slot="left">
          <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
        </mt-button>
        <mt-button @click="edit" slot="right" style="font-size:0.14rem;">
        {{ editStatus ? '取消' : '编辑'}}
        </mt-button>
      </mt-header>
      <div class="p_bankcard_page_content">
        <ul class="card_list">
          <li class="card_item" v-for="(item, index) in bankList" :key="index">
            <div class="left">
              <img src="@/assets/bankcard_red.png" alt="" style="width:56px;"/>
            </div>
            <div class="right">
              <mt-field label="银行名称" placeholder="" readonly>{{item.bank_code}}</mt-field>
              <mt-field label="银行卡号" placeholder="" readonly>{{item.card_no}}</mt-field>
            </div>
            <div class="right" @click="deleteCard(item.card_no)" v-if="editStatus">
              <img src="@/assets/delete.png" alt="" style="width:20px;"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <cube-button @click="addCard"  class="add_btn">添加银行卡</cube-button>
  </div>
</template>
<script>
import { showToastOnly } from '@/libs/utils';
export default {
  data() {
    return {
      bankList: [],
      editStatus: false
    }
  },
  created() {
    this.getList();
  },
  methods: {
    deleteCard(cardNo){
      this.$service.post('/delCard',{
        token: this.$Cookies.get('token'),
        cardNo: cardNo
      }, true).then(res => {
        if (res.code === 0) {
          showToastOnly({
            that: this,
            msg: '删除成功',
            time: 2000
          });
          this.getList();
        }
      });
    },
    edit() {
      this.editStatus = !this.editStatus;
    },
    getList() {
      this.$service.post('/queryCardList',{
        token: this.$Cookies.get('token')
      }, true).then(res => {
        if (res.code === 0) {
          this.bankList = res.data.cardList;
        }
      });
    },
    addCard() {
      this.$router.push('/add-bankcard');
    }
  }
}
</script>
<style lang="less" scoped>
.p_bankcard_page{
  // position: absolute;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  // padding:45px 0px 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .add_btn{
    background:#F56968;
    width: 350px;
    margin:30px auto 30px;
    border-radius: 10px;
  }
  &_container{
    background: #fff;
  }
  &_content{
    /deep/ .cube-btn-outline::after {
      border: 1px solid #F56968;
      background: #fff;
    }
    .card_list{
      padding-top: 50px;
      background: #fff;
      .card_item{
        display: flex;
        align-items: center;
        height: 120px;
        border-bottom: 1px solid #ddd;
        .left{
          padding: 0 20px;
        }
        .right{
          padding-right: 20px;
          /deep/ .mint-cell:nth-child(2n+1){
            border-bottom: 1px solid #ddd;
          }
          /deep/ .mint-cell:last-child{
            background: transparent;
          }
          /deep/ .mint-cell-title{
            text-align: left;
            color:#bbb;
          }
          /deep/ .mint-field .mint-cell-value{
            text-align: left;
          }
        }
      }
    }
  }
}
</style>

