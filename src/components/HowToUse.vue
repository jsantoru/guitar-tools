<template>
  <div class="how-to-use"><p>{{msg}}</p></div>
</template>
<script>
  export default {
    name: "HowToUse",
    data: function() {
      return {
        msg: "How to use this thang"
      }
    }
  }
</script>
<style scoped>
  .how-to-use {
    text-align:center;
  }
</style>
