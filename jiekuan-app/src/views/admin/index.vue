<template>
  <div class="router_main">
    <transition >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  created(){
    var window = global || this,
    docEl = window.document.documentElement,
    resizeEvt = 'resize',
    resizeCall = (function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) {
        docEl.style.fontSize = 100 + 'px';
      } else {
        docEl.style.fontSize = 100 + 'px';
      }
    })();
  
    window.addEventListener && window.addEventListener(resizeEvt, resizeCall, false);
  }
}
</script>
<style>
.router_main{
  font-size: 12px;/*no*/
}
</style>


