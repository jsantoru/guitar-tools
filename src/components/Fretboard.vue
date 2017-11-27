<template>
  <div class="fretboard-container">
    <div class="left"></div>
    <div class="fretboard">
        <div class="fret" v-for="fret in fretboardConfig">
          <div class="note" v-for="note in fret">
            {{note}}
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
          ["4",   "m7", "m3", "b6", "r",  "4"],
          ["b5",  "7",  "3",  "6",  "b9", "b5"],
          ["5",   "r",  "4",  "m7", "2",  "5"]
        ]
      }
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
  }

  .note {
    flex:1;
  }

  .r {

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
</style>
