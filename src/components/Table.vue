<template>
  <div class="overflow-x-auto">
    <table class="min-w-full table-auto">
      <thead class="bg-[#212020] text-[#B3B3B3] rounded-[8px]">
        <tr class="">
          <th class="p-[12px]">Ранг</th>
          <th class="p-[12px] text-left">Трейдер</th>
          <th class="p-[12px] text-left">Риск/профит</th>
          <th class="p-[12px] text-left">профит (%)</th>
          <th class="p-[12px] text-left">Coin</th>
        </tr>
      </thead>
      <tbody class="text-white">
        <tr v-for="(user, index) in users" :key="user.id" class="border-b border-[#2F2E2E]">
          <td class="px-4 py-2 text-center">{{ index + 1 }}.</td>
          <td class="px-4 py-2 flex items-center gap-[12px]"><img :src="user.img" alt="">{{ user.name }}</td>
          <td class="px-4 py-2 ">{{ user.risk }}</td>
          <td class="px-4 py-2 flex items-center gap-[6px]">{{ user.profit }} <img src="../assets/images/bg/chart.svg" alt=""></td>
          <td  @click="toggleMenu" class="px-4 py-2">{{ user.coin }} <i class='bx bx-question-mark rounded-full border border-[#B3B3B3] mr-[6px] cursor-pointer'></i>
             <nav v-if="isOpen" class="menu">
               <table class="w-full table-auto">
                  <thead class="text-[#B3B3B3] rounded-[8px]">
                    <tr class="text-[14px]">
                      <th class="p-[12px]">тикет/компания:</th>
                      <th class="p-[12px] text-left">профит (%):</th>
                      <th class="p-[12px] text-left">Заработано coinт</th>
                    </tr>
                  </thead>
                  <tbody class="text-white">
                    <tr v-for="user in modals" :key="user.id" class="border-b border-[#2F2E2E] text-[14px]">
                      <td class="px-4 py-2">{{ user.name }} <br> <span class="text-[#B3B3B3]">{{user.name2}}</span></td>
                      <td class="px-4 py-2 flex items-center gap-[6px]">{{user.profit}}<img :src="user.chart" alt=""></td>
                      <td class="px-4 py-2">
                        <div class="flex items-center gap-[6px]">
                          {{ user.risk }} <img :src="user.coin" alt="">
                        </div>
                      </td>
                    </tr>
                    </tbody>  
               </table>
               <div class="bg-[#2A2929] w-[30px] h-[30px] absolute mt-[225px] ml-[190px] rotate-45"></div>
            </nav>
          </td>
        </tr>
        <tr class="border-b  border-[#2F2E2E] bg-gradient-to-t from-[#2F2E2E] via-[#2F2E2E] to-[#B3B3B3] p-[20px] rounded-lg cursor-pointer">
          <td class="px-4 py-2 text-center">18.</td>
          <td class="px-4 py-2 flex items-center gap-[12px]"><img src="./assets/images/table/tableuserone.svg" alt="">Sarvar Erkinjonov</td>
          <td class="px-4 py-2 ">23</td>
          <td class="px-4 py-2 flex items-center gap-[6px]">+35%<img src="../assets/images/bg/chart.svg" alt=""></td>
          <td class="px-4 py-2">700 <i class='bx bx-question-mark rounded-full border border-[#B3B3B3] mr-[6px] cursor-pointer'></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {users} from '../constants/users'
  import {modals} from '../constants/modals'

  const isOpen = ref(false);

    const toggleMenu = () => {
        isOpen.value = !isOpen.value;
    };
</script>

<style scoped>
.fixed-menu {
    z-index: 1000;
    color: white;
    cursor: pointer;
}

.menu {
    background-color: #2A2929;
    position: fixed;
    top: 330px;
    right: 305px;
    width: 445px;
    border-radius: 21px;
    padding: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>
../constants/modals