<template>
  <div class="p_setup_page">
    <mt-header fixed title="系统设置" class="header">
      <mt-button slot="left" @click="handleBack">
        <img src="@/assets/back.png" alt="" style="width:20px;height:20px;"/>
      </mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  methods: {
    handleBack() {
      this.$router.go(-1);
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
  background: #fff;
}
</style>
