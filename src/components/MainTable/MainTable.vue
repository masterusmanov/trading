<template>
    <div class="mt-[18px] w-[1076px] mx-auto ">
        <img src="../../assets/images/bg/bgtable.svg" alt="" class="absolute ml-[910px]">
        <div class="w-[1076px] flex items-center justify-between p-[24px] ">
            <div>
                <Month/>
            </div>
            <div class="flex items-center  bg-[#212020] rounded-full">
                <router-link to="#" class="text-[#B3B3B3] py-[20px] px-[40px] hover:bg-[#2A2929] hover:text-[#CAFF33] rounded-full">Top Traders</router-link>
                <router-link to="#" class="text-[#B3B3B3] py-[20px] px-[40px] hover:bg-[#2A2929] hover:text-[#CAFF33] rounded-full">Top Traders</router-link>
            </div>
            <router-link to="#" class="bg-[#212020] text-[#B3B3B3] py-[7px] px-[12px] rounded-[6px] relative"><i class='bx bx-question-mark rounded-full border border-[#B3B3B3] mr-[6px]'></i>Правила и требования</router-link>
        </div>
        <div class="w-[100%] mt-[24px]">
            <div class="w-[259px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[45px] rounded-bl-[45px] bg-[#282828] fixed top-[620px] left-[1460px]">
                <div class="flex items-center gap-[6px] text-[12px] px-[48px] py-[16px] text-[#B3B3B3]">
                    <i class='bx bx-timer text-[28px]' ></i>
                    <p>Оставшееся время до конца челлендж:</p>
                </div>
                <p class="text-white leading-[19.36px] font-[700] px-[20px]">19 
                    <span class="text-[#B3B3B3] font-[500]">День</span> : 23 
                    <span class="text-[#B3B3B3] font-[500]">Час</span> : 44
                    <span class="text-[#B3B3B3] font-[500]">Минут</span>
                </p>
                <div class="flex items-center gap-[12px] bg-[#CAFF33] rounded-full p-[6px] mt-[20px]">
                    <i class='bx bx-plus text-[#CAFF33] text-[48px] bg-[#282828] rounded-full p-[12px]'></i>
                    <p class="text-[#1A1A1A] font-[600] text-[14px] ">Создать инвест.идею</p>
                </div>
            </div>
            <Table/>
        </div>
    </div>
</template>

<script setup>
    import Month from "../Month.vue"
    import Table from "../Table.vue"

</script>

<style lang="scss" scoped>

</style>