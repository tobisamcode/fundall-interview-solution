<template>
  <div class="flex flex-col justify-center" >
    <div class="card flex flex-col -mt-36">
      <div class="heading">
        <h1 class="mb-2 font-bold">Holla</h1>
        <p class="mb-16">Sign in to the vibe!</p>
      </div>

      <form action="" class="mb-12" @submit="login" >
        <transition name="slide-fade">
          <div v-if="errorMsg" class="flex items-center justify-between mb-3 py-3 px-5 bg-red-400 text-white rounded">
            {{ errorMsg }}
            <span @click="errorMsg = ''" class=" w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover: bg-[rgba(0,0,0,.2)] ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
        </transition>
        <div class="mb-7 input flex flex-col-reverse">
            <input class="w-full" type="text" placeholder="Enter Email or Username" required="" v-model="user.email"/>
            <label for="firstnmae" class="lab block mb-2">Email or Username</label>
        </div>
        <div class="mb-7 input flex flex-col-reverse">
            <input class="w-full" type="password" placeholder="Enter Password" required="" v-model="user.password"/>
            <label class="lab block mb-2">Password</label>
        </div>
        <input type="submit" value="login" class="w-full p-6 uppercase cursor-pointer">
      </form>
      
      <p class="pa-link text-center">Don't have an account? <router-link class="link" to="/register">Register Here</router-link> </p>
      <div class="parag mt-4 flex justify-center">
      <p class='pa-last w-96'>By clicking on Login, you agree to our <span class="text-[#4CE895]">Terms & Conditions and Privacy Policy</span></p>
      </div>
    </div >
  

  </div>
</template>


<script setup>
import store from '../../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const user = {
  email: '',
  password: ''
}
let errorMsg = ref('');


function login(ev) {
  ev.preventDefault();
  store.dispatch('login', user)
  .then(()=> {
    router.push({ name: 'Dashboard'});
    window.location.reload()
  }).catch(err => {
    errorMsg.value = err.response.data.error.message;
  })
}




</script>

<style scoped lang="css">
.card {
  width: 592px;
  height: 635px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
  padding: 75px 93px;
}
.heading h1 {
  font-size: 34px;
  line-height: 43px;
  color: #1B2420;
}

.heading p {
  font-size: 20px;
  line-height: 25px;
  color: #30443C;
}

label {
  font-size: 16px;
  line-height: 20px;
  color: #30443C;
  font-weight: 500;
}
.first {
  width: 180px;
}
.input input {
  padding: 10px;
  background: #FFFFFF;
  border: 1px solid #CAD0C9;
  box-sizing: border-box;
  border-radius: 4px;
  outline: 0;
  transition: .3s ease-in-out;
}
.input > input:focus + label {
  color: #4CE895;
  transform: scaleY(1);
}
.input > input:focus {
  border: 3px solid #4CE895;
}

input[type="submit"] {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.666667px;
  color: #000000;
  background: #4DE897;
  box-shadow: 0px 4px 10px rgba(118, 212, 45, 0.3);
  border-radius: 3px;
}

.pa-link {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}

.link {
  color: #4DE897;
}
.parag {
  padding-inline: 50px;
}
.pa-last {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>