<template>
  <div class="main">
    <router-view></router-view>
  </div>          
</template>

<script>

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main {
    scroll-behavior: smooth;
    width: 100%;
    height: 100vh;
    max-width: 1100px;
    margin-inline:auto;
    margin-top: 1rem;
    font-family: 'Montserrat', sans-serif;
  }
  @media (max-width: 480px) {
    .main {
      width: 100%;
      max-width: 400px;
      margin-inline: auto;
      
    }
  }

</style>
