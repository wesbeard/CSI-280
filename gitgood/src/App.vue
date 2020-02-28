<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100&display=swap" rel="stylesheet">
    
    <router-link to="/Home">
      <button id="nav-buttons" class="hvr-underline-from-center"><i class="fas fa-home"></i> Home</button>
    </router-link>
    <router-link to="/Dogs">
      <button id="nav-buttons" class="hvr-underline-from-center"><i class="fas fa-dog"></i> Dogs</button>
    </router-link>
    <router-link to="/Cats">
      <button id="nav-buttons" class="hvr-underline-from-center"><i class="fas fa-cat"></i> Cats</button>
    </router-link>
    <router-link to="/About">
      <button id="nav-buttons" class="hvr-underline-from-center"><i class="fas fa-info"></i> About</button>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    padding:0;
    margin:0;
  }
</style>
