<template>
  <div class="sidebar">
    <div class="btn-group-vertical btn-group-sm wide" role="group">
      <button type="button" class="btn"
        v-for="interval in intervals"
        :class="{'btn-primary': interval.isSelected, 'btn-secondary': !interval.isSelected}"
        @click="toggle(interval)">
        <span class="badge badge-pill" :class="interval.class">{{interval.name}}</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data () {
      return {
          intervals: this.$root.$data.intervals
      }
    },
    methods: {
      toggle(interval) {
        interval.isSelected = !interval.isSelected;
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
