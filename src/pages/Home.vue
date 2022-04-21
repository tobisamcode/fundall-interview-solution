<template>
  <div class="main">
    <header>
      <div class="flex justify-between align-center">
        <div class="logo">
          <img src="../../public/logo.png" alt="">
        </div>
        <div class="nav flex sm:gap-1 md:gap-4 ">
          <button class="btn uppercase "><router-link to="/login">Log in</router-link></button>
          <button class="btn uppercase active-link"><router-link to="/register">sign up</router-link></button>
        </div>
      </div>
    </header>

    <section class="mt-16">
      
        <div class="image flex justify-center items-center">
          <img src="../../public/Group8.png" alt="">
        </div>
      
        <div class="title mt-12 mb-20">
          <h1 class="title1 mb-4">Fundall Expense Tracker</h1>
          <h2 class="sm:text-[35px]">Mini Project Frontend</h2>
        </div>
        
        <div class="author">
         
            <p class="sm:text-[20px]">by Babatunde Fashola</p>  
          
            
        </div>
        


    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="css">
.logo {
  margin-top: 20px;
}

@media only screen and (max-width: 480px) {
  .logo {
    margin-top: 0px;
    /* width: 60px; */
    margin-left: 10px;
  }
}
.btn {
  font-size: 18px;
  line-height: 23px;
  border: 0;
  padding: 5px 20px; 
  border-radius: 10px;
  /* letter-spacing: 1px; */
  font-weight: 600;
}

@media only screen and (max-width: 480px) {

  .btn {
    font-size: 18px;
    padding: 4px 10px;
    line-height: 16px;
    border-radius: 3px;
  }
}
.active-link {
  background: #4CE895;
}

section {
  align-content: center;
  text-align: center;
}

.title {
  font-size: 40px;
  line-height: 51px;
}

@media only screen and (max-width: 480px) {
  .title {
    font-size: 35px;
  } 
}
.title1 {
  font-weight: 700;
}

.author {
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
}


</style>