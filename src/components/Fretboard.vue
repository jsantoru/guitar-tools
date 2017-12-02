<template>
  <div class="fretboard-container">
    <div class="left"></div>
    <div class="fretboard">
      <br/>
        <div class="fret" v-for="(fret, fretIndex) in fretboard">
          <!-- show a full border for all rows except the first and all columns except the last, show a nut on the first -->
          <!-- add styling for strings/borders that do and dont overlap-->
          <div class="note"
               v-for="(note, stringIndex) in fret"
               :class="{fullborder: fretIndex != 0 && stringIndex != 5,
                        nut: fretIndex == 1 && stringIndex != 5,
                        leftstring: fretIndex != 0 && stringIndex == 0,
                        rightstring: fretIndex != 0 && stringIndex == 4}">
            <div :class="{hide:shouldHide(note.intervalId)}">
              <span class="badge badge-pill badge-primary notebadge" :class="getClass(note.intervalId)">{{note.intervalId}}</span>
            </div>
            <div class="dotWrapper">
              <div v-if="shouldShowDot(stringIndex, fretIndex)" class="dot">&nbsp;</div>
            </div>
          </div>
          <div class="fretNum" :class="{nutFretNum:fretIndex == 1}">
            <span v-if="fretIndex == 0">Open</span>
            <span v-if="shouldShowFret(fretIndex)">({{fretIndex}})</span>
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
        numFrets: 22,
        fretboard : [],

        rootOpen: {
          "C": [{intervalId:"3"},{intervalId:"6"},{intervalId:"2"},{intervalId:"5"},{intervalId:"7"},{intervalId:"3"}],
          "D": [{intervalId:"2"},{intervalId:"5"},{intervalId:"r"},{intervalId:"4"},{intervalId:"6"},{intervalId:"2"}],
          "E": [{intervalId:"r"},{intervalId:"4"},{intervalId:"m7"},{intervalId:"m3"},{intervalId:"5"},{intervalId:"r"}]
          // TODO: remaining keys
        },

        fretNumsToShow: [3,5,7,9,12,15,17,19,21],
        fretNumsOneDot: [3,5,7,9,15,17,19,21],
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
        var filtered = this.intervals.filter(item => item.id == intervalId)[0];
        if(filtered) {
          return filtered.class;
        }
        return "";
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
    /* fret */
    border-top: solid black 2px;
    border-bottom: solid black 2px;

    /* string */
    border-left: solid darkgray 1px;
    border-right: solid darkgray 1px;
  }

  .leftstring {
    border-left: solid dimgray 2px;
  }

  .rightstring {
    border-right: solid dimgray 2px;
  }

  .nut {
    border-top: solid black 10px;
  }

  /* fretboard colors defined in App.vue style */

</style>
