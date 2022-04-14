<template>
  <div class="main flex gap-5">
    <LeftSide/>
    <RightSide/>
  </div>
</template>

<script>
import LeftSide from "../components/dashboard/LeftSide.vue";
import RightSide from '../components/dashboard/RightSide.vue'
export default {
  name: 'Register',
  components: {
    LeftSide,
    RightSide
  }

}
</script>