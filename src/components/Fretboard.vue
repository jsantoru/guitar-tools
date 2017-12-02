<template>
  <div class="fretboard-container">
    <div class="left"></div>
    <div class="fretboard">
      <br/>
        <div class="fret" v-for="(fret, index) in fretboard">
          <!-- show a full border for all rows except the first and all columns except the last -->
          <div class="note" :class="{fullborder: index != 0 && noteIndex != 5}" v-for="(note, noteIndex) in fret">
            <div :class="{hide:shouldHide(note.intervalId)}">
              <span class="badge badge-pill badge-primary notebadge" :class="getClass(note.intervalId)">{{note.intervalId}}</span>
            </div>
            <div class="dotWrapper">
              <div v-if="shouldShowDot(noteIndex, index)" class="dot">&nbsp;</div>
            </div>
          </div>
          <div class="fretNum">
            <span v-if="shouldShowFret(index)">({{index}})</span>
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
        intervals: this.$root.$data.intervals,
        numFrets: 21,
        fretboard : [],

        rootOpen: {
          "C": [{intervalId:"3"},{intervalId:"6"},{intervalId:"2"},{intervalId:"5"},{intervalId:"7"},{intervalId:"3"}],
          "D": [{intervalId:"2"},{intervalId:"5"},{intervalId:"r"},{intervalId:"4"},{intervalId:"6"},{intervalId:"2"}],
          "E": [{intervalId:"r"},{intervalId:"4"},{intervalId:"m7"},{intervalId:"m3"},{intervalId:"5"},{intervalId:"r"}]
          // TODO: remaining keys
        },

        intervalIdClass :
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
          },
        fretNumsToShow: [1,3,5,7,9,12,15,17,19,21],
        fretNumsOneDot: [1,3,5,7,9,15,17,19,21],
        fretNumsTwoDots: [12]
      }
    },

    computed: {
      rootNote() {
          return this.$root.$data.rootNote;
      },
      open() {
        return this.rootOpen[this.rootNote];
      }
    },

    watch: {
      rootNote(newRootNote) {
        this.buildFretboard();
      }
    },

    methods: {
      shouldShowDot(noteIndex, fretNum) {
        return this.isSingleDotSpace(noteIndex, fretNum) || this.isDoubleDotSpace(noteIndex, fretNum);
      },
      isSingleDotSpace(noteIndex, fretNum) {
        return noteIndex == 2 && this.fretNumsOneDot.includes(fretNum);
      },
      isDoubleDotSpace(noteIndex, fretNum) {
        return (noteIndex == 1 || noteIndex == 3) && this.fretNumsTwoDots.includes(fretNum);
      },

      shouldShowFret(fretNum) {
        if(this.fretNumsToShow.includes(fretNum)) {
            return true;
        }
        return false;
      },

      shouldHide(intervalId) {
        var filtered = this.intervals.filter(item => item.id == intervalId)[0];
        if(filtered && filtered.isSelected) {
            return false;
        }
        return true;
      },

      getClass(intervalId) {
        return this.intervalIdClass[intervalId];
      },

      getNextIntervalId(intervalId) {
        let index = this.intervals.map((e) => e.id).indexOf(intervalId);
        if(index == 11) {
          return this.intervals[0].id;
        }
        return this.intervals[index+1].id;
      },

      buildFretboard() {
        this.fretboard = [this.open];
        let prevFret = this.open;
        for(let i=0; i<this.numFrets; i++) {
            let fret = this.buildNextFret(prevFret);
            this.fretboard.push(fret);
            prevFret = fret;
        }
        //console.log(this.fretboard);
      },

      buildNextFret(prevFret) {
        let nextFret = [];
        // build the next fret
        for(let i=0; i<prevFret.length; i++) {
          let currInterval = prevFret[i].intervalId;
          let nextIntervalObj = {};
          nextIntervalObj.intervalId = this.getNextIntervalId(currInterval);

          nextFret[i] = nextIntervalObj;
        }
        //console.log(nextFret);
        return nextFret;
      }
    },

    created: function() {
      this.buildFretboard();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shaded {
    background-color:gray;
  }

  .dotWrapper {
    width:100%;
    text-align:center;
  }

  .dot {
    display:inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;

    background-color:black;
  }

  .fretNum {
    width:10%;
    border-bottom: solid black 2px;
    padding-top:12px;
    text-align: center;
  }

  .hide {
    /*display:none;*/
    visibility:hidden;
  }

  .fretboard-container {
    display:flex;
    flex-direction:row;
  }

  .left, .right {
    flex:2;
  }

  .fretboard {
    flex:4;
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
    position:relative;
    width:30px;
  }

  .notebadge {
    position: relative;
    top:12px;
    left:-10px;
  }

  .fullborder {
    border: solid black 1px;
  }

  /* fretboard colors defined in App.vue style */

</style>
