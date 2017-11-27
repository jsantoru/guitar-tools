<template>
  <div class="sidebar">
    <div class="btn-group-vertical btn-group-sm wide" role="group">
      <button type="button" class="btn btn-primary">Root</button>
      <button type="button" class="btn btn-primary">b9</button>
      <button type="button" class="btn btn-secondary">2/9</button>
      <button type="button" class="btn btn-primary">m3/#9</button>
      <button type="button" class="btn btn-secondary">M3</button>
      <button type="button" class="btn btn-primary">4</button>
      <button type="button" class="btn btn-secondary">#4/b5</button>
      <button type="button" class="btn btn-primary">5</button>
      <button type="button" class="btn btn-secondary">#5/b6</button>
      <button type="button" class="btn btn-secondary">6</button>
      <button type="button" class="btn btn-secondary">m7</button>
      <button type="button" class="btn btn-secondary">7</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'

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
