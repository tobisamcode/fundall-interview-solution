<template>
  <div class="main flex sm:flex-col gap-5 sm:gap-0">
    <LeftSide/>
    <RightSide/>
  </div>
</template>

<script>
import LeftSide from "../components/login/LeftSide.vue";
import RightSide from '../components/login/RightSide.vue'
export default {
  name: 'Register',
  components: {
    LeftSide,
    RightSide
  }

}
</script>


