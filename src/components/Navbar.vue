<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#/">
      <!-- https://cdn4.iconfinder.com/data/icons/rock-music-instruments/154/acoustic-guitar-music-round-128.png -->
      <img src="../assets/acoustic-guitar-music-round-128.png" width="35" height="35" class="d-inline-block align-top" alt="">
      Guitar Tools</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- TUNING -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownTuning" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tuning (<b>Standard | E A D G B E</b>)
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" >Standard - E A D G B E</a>
          </div>
        </li>

        <!-- ROOT NOTE -->
        <li class="nav-item dropdown first">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownRootNote" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Root Note (<b>{{rootNote}}</b>)
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a v-for="rootNoteOption in rootNoteOptions" class="dropdown-item" @click="selectRootNote(rootNoteOption)">{{rootNoteOption}}</a>
          </div>
        </li>

        <!-- FILTER -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownFilter" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter (<b>{{filterName}}</b>)
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a v-for="filterOption in filterOptions" class="dropdown-item" @click="selectFilter(filterOption)">{{filterOption.name}}</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#/howtouse">How to Use</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
        return {
          rootNoteOptions: [
            "C", "D", "E"
          ],

          filterOptions: [
            {
              name:"None",
              intervalIds:["r","b9", "2", "m3", "3","4", "b5", "5", "b6", "6", "m7", "7"]
            },
            {
              name:"Major",
              intervalIds:["r","3","5"]
            },
            {
              name:"Major 7",
              intervalIds:["r","3","5", "7"]
            },
            {
              name:"Minor",
              intervalIds:["r","m3","5"]
            },
            {
              name:"Minor 7",
              intervalIds:["r","m3","5", "m7"]
            },
            {
              name:"Altered Dominant",
              intervalIds:["r","b9","m3","3","b5","b6","m7"]
            }
          ]
        }
    },
    computed: {
      rootNote() {
          return this.$root.$data.rootNote;
      },
      filterName() {
          return this.$root.$data.filterName;
      }
    },
    methods: {
      selectRootNote(rootNote) {
        this.$root.$data.rootNote = rootNote;
      },
      selectFilter(filter) {
        this.$root.$data.filterName = filter.name;

        console.log(filter);

        // update the selected intervals based on the filter
        this.$root.$data.intervals.forEach(function(item) {
            if(filter.intervalIds.includes(item.id)) {
                item.isSelected = true;
            }
            else {
                item.isSelected = false;
            }
        });

      }
    }
  }
</script>

<style>

  /*.first {
    padding-left:100px;
  }*/

  .navbar {
    z-index: 9999;
  }
</style>
