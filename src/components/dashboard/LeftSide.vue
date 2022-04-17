<template>
  <div class="left">
    <div class="nav flex justify-between ">
      <router-link to="/" ><img src="../../../public/logo.png" alt=""></router-link>
      <router-link to='/'> <button class="uppercase bg-[#4DE897] font-[700] mt-2 text-[600] rounded-[5px] p-3">sign out</button></router-link>
    </div>
  <section class="mt-16 flex flex-col justify-center gap-8">
    <div class="details flex gap-6">
      <div class="capture relative">
        <input type="file" class="absolute
                                    left-0
                                    top-0
                                    right-0
                                    bottom-0
                                    opacity-0
                                    cursor-pointer" >
        <img src="../../../public/Vector.png" alt="">
      </div>
      <div class="account flex flex-col justify-center align-center">
        <h3 class="text-[28px] leading-[35px] text-[#30443C] font-bold mb-2">Babatunde Fashola</h3>
        <p class="text-[21px] leading-[27px] text-[#30443C] ">baba2@gmail.com</p>
      </div>
    </div>
    
    <div class="expenses">
      <p class="text-[21px] leading-[27px] text-[#30443C] mb-2" >Target Monthly Expenses</p>
      <p class="text-[28px] leading-[35px] text-[#30443C] font-[600] mb-4">₦596,000</p>
      <div class="bg-[#EFEFEF] w-[370px] h-[7px] rounded-[10px] ">
        <div class="bg-[#4DE897] w-[90px] h-[7px] rounded-[10px]"></div>
      </div>
    </div>

    <div class="table flex justify-center align-center">
      <h4 class="ml-6 text-[14px] text-[#30443C] font-[500] mb-4">Daily Expenses Summary</h4>
      <table class="w-full text-sm  text-[#30443C] dark:text-gray-400 text-center" >
        <thead class="text-xs text-gray-700 ">
            <tr>
                <th scope="col" class="px-16  py-3 text-[16px] leading-[22px]">
                    Date
                </th>
                <th scope="col" class="px-6 py-3 text-[16px] leading-[22px]">
                    Amount
                </th>             
            </tr>
        </thead>
        <tbody>
            
                <th scope="row" class="px-6 py-8 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <span class="w-12 h-12 px-[8px] mr-5 rounded-[50%] bg-[#4DE897]"></span> 30 Nov, 2018
                </th>
                <td class="px-6 py-4 text-[#4DE897]">
                    ₦30,000
                </td>
         
            <tr class="bg-white">
                <th scope="row" class="px-6 py-8 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                   <span class="w-12 h-12 px-[8px] mr-5 rounded-[50%] bg-[#4DE897]"></span> 25 Nov, 2018
                </th>
                <td class="px-6 py-4 text-[#4DE897]">
                    ₦30,000
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-8 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <span class=" px-[8px] mr-5 rounded-[50%] bg-[#4DE897]"></span> 28 Oct, 2018
                </th>
                <td class="px-6 py-4 text-[#4DE897]">
                    ₦30,000
                </td>
            </tr>
        </tbody>
      </table>
      <div class="flex justify-center gap-4 align-center">
        <p> <span class="border px-2 rounded-full">1</span> of 5 </p>
        <div class="flex justify-center align-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 bg-[#4DE897] rounded-full text-[#fff]" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 bg-[#4DE897] rounded-full text-[#fff]" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
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
  flex-basis: 40%;
}

section {
  padding: 0 10px;
  align-content: center;
  margin-top: 40px;
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

.capture {
  background: #C4C4C4;
  border-radius: 20px;
  padding: 1.75rem;
}
.table {
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
  border-radius: 10px;
  width: 390px;
  padding-bottom: 20px;
  padding-top: 10px;
}

</style>