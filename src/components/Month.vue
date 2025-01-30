<template>
  <div class="relative w-[180px] bg-[#2F2E2E] text-white">
    <button 
      @click="isDropdownOpen = !isDropdownOpen" 
      class="w-full text-[14px] px-4 py-2  rounded-[6px] flex justify-between items-center">
      {{ selectedMonth ? `${selectedMonth}` : "Выберите дату" }}
      <span class="ml-2"><i class='bx bx-chevron-down' ></i></span>
    </button>

    <div 
      v-if="isDropdownOpen" 
      class="absolute mt-1 w-full border rounded-[6px] shadow-lg z-10 bg-[#2F2E2E]">
      
      <select v-model="selectedYear" class="w-full bg-[#2F2E2E] px-4 py-2 border-b outline-none text-center">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>

      <div class="grid gap-2 p-2">
        <button 
          v-for="(month, index) in months" 
          :key="index" 
          @click="selectMonth(month)" 
          class="py-2 px-3 bg-[#2F2E2E] hover:bg-[#B3B3B3] hover:text-black text-left rounded-md">
          {{ month }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDropdownOpen = ref(false);
const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref(null);

const years = ref([]);
const currentYear = new Date().getFullYear();

for (let i = currentYear - 10; i <= currentYear + 10; i++) {
  years.value.push(i);
}

const months = [
  "Апрель", "Март ", "Февраль", "Январь", 
];

const selectMonth = (month) => {
  selectedMonth.value = month;
  isDropdownOpen.value = false;
};
</script>

<style scoped>
button:hover {
  cursor: pointer;
}
</style>
