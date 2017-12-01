<template>
  <div class="fretboard-container">
    <div class="left"></div>
    <div class="fretboard">
      <br/>
        <div class="fret" v-for="fret in fretboard">
          <div class="note" :class="{fullborder: !note.isLast}" v-for="note in fret">
            <span class="badge badge-pill badge-primary notebadge" :class="getClass(note.interval)">{{note.interval}}</span>
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
        numFrets: 12,
        intervals : ["r", "b9", "2", "m3", "3", "4", "b5", "5", "b6", "6", "m7", "7"],
        firstFret : [{interval:"4"},{interval:"m7"},{interval:"m3"},{interval:"b6"},{interval:"r"},{interval:"4", isLast:true}],
        fretboard : [],
        intervalClass :
          {
            "r":"r",
            "b9":"b9",
            "2":"two",
            "m3":"m3",
            "3":"three",
            "4":"four",
            "b5":"b5",
            "5":"five",
            "b6":"b6",
            "6":"six",
            "m7":"m7",
            "7":"seven"
          }
      }
    },

    methods: {
      getClass(interval) {
        return this.intervalClass[interval];
      },
      getNextInterval(interval) {
        let index = this.intervals.indexOf(interval);
        if(index == 11) {
          return this.intervals[0];
        }
        return this.intervals[index+1];
      },

      buildFretboard() {
        this.fretboard = [this.firstFret];
        let prevFret = this.firstFret;
        for(let i=0; i<this.numFrets-1; i++) {
            let fret = this.buildNextFret(prevFret);
            this.fretboard.push(fret);
            prevFret = fret;
        }
        console.log(this.fretboard);
      },

      buildNextFret(prevFret) {
        let nextFret = [];
        // build the next fret
        for(let i=0; i<prevFret.length; i++) {
          let currInterval = prevFret[i].interval;
          let nextIntervalObj = {}
          nextIntervalObj.interval = this.getNextInterval(currInterval);
          if(i == prevFret.length-1) {
            nextIntervalObj.isLast = true;
          }

          nextFret[i] = nextIntervalObj
        }
        //console.log(nextFret);
        return nextFret;
      }
    },

    created: function() {
      // build the fretboard
      this.buildFretboard();
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

  .fullborder {
    border: solid black 1px;
  }

  /* fretboard colors defined in App.vue style */

</style>
