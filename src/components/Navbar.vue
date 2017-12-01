<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#/">
      <img src="http://agilepartners.com/images/ttk/ttk-icon-large-shad.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Guitar Tools</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
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
            Filter (<b>None</b>)
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
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
            "C","D"
          ]
        }
    },
    computed: {
      rootNote() {
          return this.$root.$data.rootNote;
      }
    },
    methods: {
      selectRootNote(rootNote) {
        this.$root.$data.rootNote = rootNote;
      }
    }
  }
</script>

<style>

  .first {
    padding-left:100px;
  }

  .navbar {
    z-index: 9999;
  }
</style>
