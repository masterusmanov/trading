<template>
    <div class="bg-[#191919] ">
        <div class="container mx-auto h-[96px] flex items-center justify-between">
            <div class="flex items-center gap-[24px]">
                <img src="../assets/logo.svg" alt="">
                <router-link to="/"><h1 class="text-white font-[20px] leading-[30px] tracking-[0.27px]">Trading Platform</h1></router-link>
            </div>
            <div class="flex items-center gap-[8px] ">
                <div v-for="link in navLinks" :key="link.id" >
                    <router-link :to="link.link" class="hover:bg-[#2A2929] hover:text-[#CAFF33] text-[#B3B3B3] flex items-center gap-[8px] py-[4px] px-[12px] bg-[#1C1C1C] border border-[#262626] rounded-[12px]">
                        <img :src="link.icon" :alt="link.icon">
                        <p class="leading-[17.6px]">{{link.title}}</p>
                    </router-link>
                </div>
            </div>
            <div class="flex items-center gap-[17px]">
                <div class="relative">
                    <p class="absolute right-[2px] py-[2px] px-[4px] text-[9.78px] leading-[10.76px] bg-[#CAFF33] text-black rounded-full">2</p>
                    <img src="../assets/images/icons/alert.svg" alt="">
                </div>
                <div class="flex items-center gap-[12px] border rounded-full p-[3px]">
                    <img src="../assets/images/icons/account.svg" alt="account">
                    <p class="text-white">75 / 100</p>
                    <div @click="toggleMenu" class="fixed-menu">
                        <i class='bx bxs-down-arrow text-[#B3B3B3] px-[5px]'></i>
                        <nav v-if="isOpen" class="menu">
                            <div class="flex items-center">
                                <img src="../assets/images/icons/account2.svg" alt="account" class="w-[80px]">
                                <div>
                                    <p class="text-[#FFFFFF] leading-[17.6px] font-semibold">Sarvar Erkinjonov</p>
                                    <p class="text-[#B3B3B3] text-[14px]">+998(50) 074 20-00</p>
                                </div>
                            </div>
                            <div class="grid gap-[12px]">
                                <router-link to="#" class="text-[#B3B3B3] font-[500] flex items-center gap-[12px]">
                                    <img src="../assets/images/icons/one.svg" alt="" class="w-[16px]">
                                    Мой профиль</router-link>
                                <router-link to="#" class="text-[#B3B3B3] font-[500] flex items-center gap-[12px]">
                                    <img src="../assets/images/icons/two.svg" alt="" class="w-[16px]">
                                    Мои инвест.идеи</router-link>
                                <router-link to="#" class="text-[#B3B3B3] font-[500] flex items-center gap-[12px]">
                                    <img src="../assets/images/icons/three.svg" alt="" class="w-[16px]">
                                    Моя подписка</router-link>
                                <router-link to="#" class="text-[#B3B3B3] font-[500] flex items-center gap-[12px]">
                                    <img src="../assets/images/icons/four.svg" alt="" class="w-[16px]">
                                    Сменить язык</router-link>
                                <router-link to="#" class="text-[#FF3B30] font-[500] flex items-center gap-[12px]">
                                    <img src="../assets/images/icons/five.svg" alt="" class="w-[16px]">
                                    Выйти</router-link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { navLinks } from "../constants/navlinks";

     const isOpen = ref(false);

    const toggleMenu = () => {
        isOpen.value = !isOpen.value;
    };
</script>

<style lang="scss" scoped>

    .fixed-menu {
    z-index: 1000;
    color: white;
    cursor: pointer;
}

.menu {
    background-color: #2A2929;
    position: fixed;
    top: 80px;
    right: 190px;
    width: 262px;
    border-radius: 21px;
    padding: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>