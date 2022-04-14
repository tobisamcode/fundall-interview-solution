<template>
  <div class="flex flex-col justify-center" >
    <div class="card flex flex-col justify-center -mt-16">

      <form action="" class="mb-12" @submit="register">
        <div class="name flex justify-between gap-4 mb-8">
          <div class="input flex flex-col-reverse">
            <input class="first" type="text" placeholder="Enter First Name" required="" v-model="user.firstname" />
            <label for="firstnmae" class="block mb-2">First Name</label>
          </div>
          <div class="input flex flex-col-reverse">
            <input class="first" type="text" placeholder="Enter Last Name" required="" v-model="user.lastname" />
            <label for="firstnmae" class="lab block mb-2">Last Name </label>
          </div>
        </div>
        <div class="mb-6 input flex flex-col-reverse">
          <input class="w-full" type="text" placeholder="Enter Email" required="" v-model="user.email" />
          <label for="firstnmae" class="lab block mb-2">Email address</label>
        </div>
        <div class="mb-6 input flex flex-col-reverse">
          <input class="w-full" type="password" placeholder="Enter Password" required="" v-model="user.password" />
          <label for="firstnmae" class="lab block mb-2">Password</label>
        </div>
        <div class="mb-7 input flex flex-col-reverse">
          <input class="w-full" type="password" placeholder="Confirm Password" required="" v-model="user.password_confirmation" />
          <label for="firstnmae" class="lab block mb-2">Confirm Password</label>
        </div>
        <input type="submit" value="sign up" class="w-full p-6 uppercase cursor-pointer">
      </form>
      <p class="pa-link text-center">Already have an account? <router-link class="link" to="/login">Login Here</router-link> </p>
    </div >

    <div class="parag mt-10 flex justify-center">
      <p class='pa-last w-96'>By clicking on Login, you agree to our <span class="text-[#4CE895]">Terms & Conditions and Privacy Policy</span></p>
    </div>
  </div>
</template>


<script setup>
import store from "../../store";
import { useRouter } from "vue-router";

const router = useRouter();
const user = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: ''
};

function register(ev) {
  ev.preventDefault();
  store
  .dispatch('register', user)
  .then(()=> {
    router.push({
      name: 'Dashboard'
    });
    window.location.reload()

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
label {
  font-size: 16px;
  line-height: 20px;
  color: #30443C;
  font-weight: 500;
  transition: .3s ease-in-out;
  
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
</style>