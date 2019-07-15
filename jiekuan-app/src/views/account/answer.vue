<template>
  <div class="p_question_page">
    <mt-header fixed :title="question" class="header">
      <mt-button slot="left" @click="handleBack">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    <div class="">
      <ul class="question_list">
        <li class="question_item">{{answer}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {showToastOnly} from '@/libs/utils';
export default {
  data(){
    return {
      question: this.$route.query.question,
      answer: ''
    }
  },
  created() {
    this.$service.post('/answer', {
      token: this.$Cookies.get('token'),
      id: this.$route.query.id
    }, true).then(res => {
      if (res.data.answer) {
        this.answer = res.data.answer;
      } else {
        showToastOnly({
          that: this,
          msg: res.msg
        })
      }
    }).catch(() => {
      // console.log(err);
    });
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="less" scoped>
.p_question_page{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding:50px 0px 10px;
  box-sizing: border-box;
  background: #fff;
  .question_list{
    padding: 0 25px;
    text-align: left;
    font-size: 16px;
    height: 23px;
    line-height: 30px;
    color: rgba(16, 16, 16, 1);
    text-align: left;
  }
}
</style>