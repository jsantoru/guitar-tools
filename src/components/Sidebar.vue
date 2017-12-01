<template>
  <div class="sidebar">
    <div class="btn-group-vertical btn-group-sm wide" role="group">
      <button type="button" class="btn btn-primary"><span class="badge badge-pill badge-primary r">Root</span></button>
      <button type="button" class="btn btn-primary"><span class="badge badge-pill badge-primary b9">b9</span></button>
      <button type="button" class="btn btn-secondary"><span class="badge badge-pill badge-primary two">2/9</span></button>
      <button type="button" class="btn btn-primary"><span class="badge badge-pill badge-primary m3">m3/#9</span></button>
      <button type="button" class="btn btn-secondary"><span class="badge badge-pill badge-primary three">3</span></button>
      <button type="button" class="btn btn-primary"><span class="badge badge-pill badge-primary four">4</span></button>
      <button type="button" class="btn btn-secondary"><span class="badge badge-pill badge-primary b5">#4/b5</span></button>
      <button type="button" class="btn btn-primary"><span class="badge badge-pill badge-primary five">5</span></button>
      <button type="button" class="btn btn-secondary"><span class="badge badge-pill badge-primary b6">#5/b6</span></button>
      <button type="button" class="btn btn-secondary"><span class="badge badge-pill badge-primary six">6</span></button>
      <button type="button" class="btn btn-secondary"><span class="badge badge-pill badge-primary m7">m7</span></button>
      <button type="button" class="btn btn-secondary"><span class="badge badge-pill badge-primary seven">7</span></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar {
    text-align:center;
  }
  .wide {
    width:100%;
  }
  .r {
    background-color:green;
  }
</style>
