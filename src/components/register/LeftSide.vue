<template>
  <div class="left">
    <div class="nav ml-0">
    <router-link to="/" ><img src="../../../public/logo.png" alt=""></router-link>
    </div>
    <section class="mt-16">
      <div class="flex justify-center">
        <img class="image" src="../../../public/Group 8.png" alt="">
      </div>
      <div class="title mt-20">
        <h3 class="title1 mb-6"><span class="welcome">Welcome!</span> Let's get to know you.</h3>
        <p class="text-[20px] leading-[27px]">Your first step toward a better financial lifestyle starts here</p>
      </div>
    </section>
  </div>
  
</template>


<script>
export default {

}
</script>

<style scoped>
.left{
  flex-basis: 50%;
}

section {
  padding: 0 80px;
  align-content: center;
  
}

img .image{
  width: 220px;
  height: 230px;
}

.title1 {
  font-size: 40px;
  line-height: 51px;
  max-width: 370px;
  font-weight: 700;
}
.welcome {
  color: #4CE895;
}
</style>