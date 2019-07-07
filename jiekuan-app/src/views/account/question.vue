<template>
  <div>
    <mt-header fixed title="常见问题" class="header">
      <mt-button slot="left" @click="handleBack">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
    常见问题dsfdfdfd
  </div>
</template>
<script>
export default {
  created() {
    // this.$service.post('/queryCardList', {
    //   token: this.$Cookies.get('token')
    // }).then(res => {
    // }).catch(() => {
    //   // console.log(err);
    // });
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    }
  }
}
</script>