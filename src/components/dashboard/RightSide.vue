<template>
  <div class="card">
    <div class="head flex align-center relative mb-6">
      <div class="title">
        <h2 class="text-[22px] leading-[28px] font-[600] mb-[9px]"><span class="text-[#4DE897]">Welcome back, </span>Babatunde</h2>
        <p class="text-[13px] leading-[18px] text-[#30443C]">Now, let’s get your expenses for this month</p>
      </div>
      <div class="absolute -top-8 right-2">
        <img src="../../../public/Group.png" alt="">
      </div>
    </div>

    <form action="" class="p-4 ">
      <div class="input flex flex-col-reverse mb-4">
        <input type="text" required="" placeholder="Enter Amount">
        <label class="mb-1">Target Monthly Expenses</label>
      </div>
      <div class="mb-6">
        <label class="font-[600]">Date</label>
        <Datepicker class="date mt-2" v-model="date" />
      </div>
      <div>
        <label class="font-[600]">Today's Expenses</label>
        <div class="flex w-full mt-3 justify-between">
          <div class="input mr-4 flex">
            <input class="w-[330px]" type="text" placeholder="Enter item" />
          </div>
          <div class="input">
            <input class="w-[250px]" type="text" placeholder="Enter Amount" />
          </div>
        </div>
        <div class="flex gap-1 w-full mt-3 justify-between">
          <div class="input mr-4 flex ">
            <input class="w-[330px]" type="text" placeholder="Enter item"  />
          </div>
          <div class="input">
            <input class="w-[250px]" type="text" placeholder="Enter Amount" />
          </div>
        </div>
        <div class="flex gap-3  mt-3 justify-between">
          <div class="input mr-2 flex">
            <input class="w-[330px]" type="text" placeholder="Enter item"  />
          </div>
          <div class="input">
            <input class="w-[250px]" type="text" placeholder="Enter Amount" />
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-3 align-center">
        <p class="mt-4 mr-2 font-[600]">Total Actual Expenses: ₦</p>
        <div class="input">
          <input class="w-[125px] p-3" type="text" placeholder="" />
        </div>
      </div>
      <div class="flex justify-center">
        <input type="submit" value="SAVE TODAY’S EXPENSES" class="mt-6 p-4 uppercase cursor-pointer">
      </div>

    </form>
      
  </div>
</template>




<script>
import { ref } from "vue";
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

export default {
  name: "Demo",
  components: {
    Datepicker,
  },
  setup() {
    const date = ref(new Date());

    return {
      date,
    };
  },
};

</script>

<style scoped lang="css">
.card {
  width: 700px;
  height: 700px;
  padding: 40px 30px;
  background: #F2F3F7;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
}

.head {
  padding: 25px 16px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  border-radius: 6px;
}

label {
  font-size: 12px;
  line-height: 20px;
  color: #30443C;
  font-weight: 500;
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
  background: #4DE897;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 6px;
}



</style>