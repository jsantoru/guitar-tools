<template>
    <div class="container">
      <div class="top"><navbar></navbar></div>
      <div class="middle">
        <div class="middle-sidebar">
          <div class="middle-sidebar-top">
            <sidebar></sidebar>
          </div>
        </div>
        <div class="middle-content">
          <router-view></router-view>
        </div>
      </div>
      <div class="bottom">
        BOTTOM
      </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Fretboard from './components/Fretboard'
import Navbar from './components/Navbar'
import HowToUse from './components/HowToUse'
export default {
  name: 'app',
  components: {
    'sidebar': Sidebar,
    'fretboard': Fretboard,
    'navbar': Navbar,
    'howtouse': HowToUse
  }
}
</script>

<style>

body {
  margin: 0; /* puts the body all the way to the edge, avoids an outer scrollbar */
}

html, body, .container {
  height: 100%; /* fill up the available space */
}

.container {
  display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
  flex-direction: column; /* stack divs vertically - this allows the top bar to be on top instead of on the left */
}

.top {
  height: 75px; /* static height nav */
  /*flex:1;*/ /* relative size to divs at the same level */
}

.middle {
  display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
  flex: 9; /* relative size to divs at the same level */
}

.middle-sidebar {
  flex: .5; /* relative size to divs at the same level */
  overflow: auto; /* enable scroll bar */

  /* needed for its child divs */
  display: flex; /* needed at the parent level, so child divs can use 'flex: n' */
  flex-direction: column; /* child divs stack vertically */
}

.middle-sidebar-top {
  flex: 9; /* 90% of the sidebar */
  overflow: auto; /* vertical scrollbar */
}

.middle-content {
  flex: 4; /* relative size to divs at the same level */
  overflow: auto; /* vertical scrollbar */
}

.bottom {
  /*height:20px;*/
  flex:.5; /* relative size to divs at the same level */
}


/* COLORS */
.r {
  background-color:blue;
}
.b9 {
  background-color:orange;
}
.two {
  background-color:yellowgreen;
}
.m3 {
  background-color:darkred;
}
.three {
  background-color:red;
}
.four {
  background-color:blueviolet;
}
.b5 {
  background-color:orangered;
}
.five {
  background-color:green;

}
.b6 {
  background-color:lightblue;
}
.six {
  background-color:hotpink;
}
.m7 {
  background-color:darkturquoise;
}
.seven {
  background-color:lightgreen;
}
</style>
