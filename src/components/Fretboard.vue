<template>
  <div class="fretboard-container">
    <div class="left"></div>
    <div class="fretboard">
      <br/>
        <div class="fret" v-for="fret in fretboardConfig">
          <div class="note" :class="{fullborder: !note.isLast}" v-for="note in fret">
            <span class="badge badge-pill badge-primary notebadge" :class="note.n">{{note.n}}</span>
          </div>
        </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default {
    name: 'Fretboard',

    data () {
      return {
        /*
         r
         b9
         2
         m3
         3
         4
         b5
         5
         b6
         6
         m7
         7
         */
        fretboardConfig : [
          [{n:"4"},   {n:"m7"}, {n:"m3"}, {n:"b6"}, {n:"r"},  {n:"4", isLast:true}],
          [{n:"b5"},  {n:"7"},  {n:"3"},  {n:"6"},  {n:"b9"}, {n:"b5", isLast:true}],
          [{n:"5"},   {n:"r"},  {n:"4"},  {n:"m7"}, {n:"2"},  {n:"5", isLast:true}],
          [{n:"4"},   {n:"m7"}, {n:"m3"}, {n:"b6"}, {n:"r"},  {n:"4", isLast:true}],
          [{n:"b5"},  {n:"7"},  {n:"3"},  {n:"6"},  {n:"b9"}, {n:"b5", isLast:true}],
          [{n:"5"},   {n:"r"},  {n:"4"},  {n:"m7"}, {n:"2"},  {n:"5", isLast:true}],
          [{n:"4"},   {n:"m7"}, {n:"m3"}, {n:"b6"}, {n:"r"},  {n:"4", isLast:true}],
          [{n:"b5"},  {n:"7"},  {n:"3"},  {n:"6"},  {n:"b9"}, {n:"b5", isLast:true}],
          [{n:"5"},   {n:"r"},  {n:"4"},  {n:"m7"}, {n:"2"},  {n:"5", isLast:true}],
          [{n:"4"},   {n:"m7"}, {n:"m3"}, {n:"b6"}, {n:"r"},  {n:"4", isLast:true}],
          [{n:"b5"},  {n:"7"},  {n:"3"},  {n:"6"},  {n:"b9"}, {n:"b5", isLast:true}],
          [{n:"5"},   {n:"r"},  {n:"4"},  {n:"m7"}, {n:"2"},  {n:"5", isLast:true}]
        ]
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fretboard-container {
    display:flex;
    flex-direction:row;
  }

  .left, .right {
    flex:2;
  }

  .fretboard {
    flex:8;
    display:flex;
    flex-direction:column;
  }

  .fret {
    flex:10;

    display: flex;
    flex-direction:row;

    height:50px;
  }

  .note {
    flex:1;
  }

  .notebadge {
    position: relative;
    top:15px;
    left:-10px;
  }

  .circle {
    border-radius: 50%;
    width: 20px;
    height: 20px;

    background: red;

    position: relative;
    top:15px;
    left:-10px;

    text-align:center;
  }

  .r {
    background-color:green;
  }
  .b9 {

  }
  .two {

  }
  .m3 {

  }
  .three {

  }
  .four {

  }
  .b5 {

  }
  .five {

  }
  .b6 {

  }
  .six {

  }
  .m7 {

  }
  .seven {

  }

  .fullborder {
    border: solid black 1px;
  }

</style>
