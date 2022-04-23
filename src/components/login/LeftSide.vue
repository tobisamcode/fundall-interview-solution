<template>
  <div class="left sm:mb-10">
    <div class="nav ml-0">
      <router-link to="/" ><img class=" sm:ml-3" src="../../../public/logo.png" alt=""></router-link>
    </div>
  <section class="mt-16">
    <div class="flex justify-center">
      <img class="image sm:hidden" src="../../../public/Group01.png" alt="">
    </div>
    <div class="title sm:mt-0 mt-20">
      <h3 class="sm:text-[30px] text-[40px] sm:leading-[45px] leading-[51px] title1 mb-6"><span class="welcome">Welcome back!</span> We miss you.</h3>
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
@media(max-width:480px) {
  .left {
    flex-basis: 20%;
}
  section {
    padding: 0 40px;
  } 
}


img .image{
  width: 220px;
  height: 230px;
}

.title1 {
  max-width: 370px;
  font-weight: 700;
}
.welcome {
  color: #4CE895;
}
</style>