<template>
    <div class="bg-[#191919] ">
        <div class="w-[1076px] mx-auto py-[24px] ">
        <div class="flex items-center gap-[6px] text-[#B3B3B3]">
            <i class='bx bx-home-smile' ></i>
            <p>Главная</p>
            <i class='bx bx-chevron-right'></i>
            <p class="text-[#CAFF33]">Создать инвест.идею</p>
        </div>
    </div>
    </div>
    <div class="bg-[#191919] border-t-4 border-t-[#2F2E2E] h-[82.4vh] bgtable ">
        <div class="w-[1076px] mx-auto ">
            <div class="flex items-center gap-[75px] border-b-4 border-[#2F2E2E] h-[70px] ">
                <p class="text-white text-[20px] hover:border-b-4 hover:border-[#CAFF33] pt-[12px] transition-all mt-[19px] h-[60px]">Создать инвест.идею</p>
                <p class="text-white text-[20px] hover:border-b-4 hover:border-[#CAFF33] pt-[12px] transition-all mt-[19px] h-[60px]">Создать инвест.идею</p>
            </div>
            <div class="mt-[18px] flex gap-[94px]">
                <div class="w-[241px] h-[380px] bg-[#2F2E2E] py-[24px] px-[28px] rounded-[12px]">
                    <div class="flex items-center justify-between border-b border-[#454545] py-[18px]">
                        <i class='bx bxs-circle text-[#CAFF33]'></i>
                        <div>
                            <p class="text-[14px] text-white font-[500]">AAPL</p>
                            <p class="text-[14px] text-[#B3B3B3]">Apple Inc</p>
                        </div>
                        <p class="text-[14px] text-white font-[500]">135$</p>
                    </div>
                    <div class="flex items-center justify-between border-b border-[#454545] py-[18px]">
                        <i class='bx bxs-circle text-[#FF3B30]'></i>
                        <div>
                            <p class="text-[14px] text-white font-[500]">AAPL</p>
                            <p class="text-[14px] text-[#B3B3B3]">Apple Inc</p>
                        </div>
                        <p class="text-[14px] text-white font-[500]">135$</p>
                    </div>
                    <div class="flex items-center justify-between border-b border-[#454545] py-[18px]">
                        <i class='bx bxs-circle text-[#B3B3B3]'></i>
                        <div>
                            <p class="text-[14px] text-white font-[500]">AAPL</p>
                            <p class="text-[14px] text-[#B3B3B3]">Apple Inc</p>
                        </div>
                        <p class="text-[14px] text-white font-[500]">135$</p>
                    </div>
                    <div class="flex items-center justify-between border-b border-[#454545] py-[18px]">
                        <i class='bx bxs-circle text-[#CAFF33]'></i>
                        <div>
                            <p class="text-[14px] text-white font-[500]">AAPL</p>
                            <p class="text-[14px] text-[#B3B3B3]">Apple Inc</p>
                        </div>
                        <p class="text-[14px] text-white font-[500]">135$</p>
                    </div>
                </div>
                <div class="w-[100%]">
                    <form action="" class="text-[#B3B3B3]">
                        <div class="grid gap-[12px]">
                            <label for="company">Тикер, компания <span class="text-[#FF3B30]">*</span></label>
                            <input type="text" name="company" id="company" placeholder="AAPL" required class="w-[100%] outline-none border-none bg-[#2F2E2E] rounded-[8px] p-[16px]">
                        </div>
                        <div class="flex items-center gap-[36px] w-[100%] my-[38px]">
                            <div class="w-[100%] grid gap-[12px]">
                                <label for="company">Точка входа <span class="text-[#FF3B30]">*</span></label>
                                <input type="text" name="company" id="company" placeholder="240 $" required class="w-[100%] outline-none border-none bg-[#2F2E2E] rounded-[8px] p-[16px]">
                            </div>
                            <div class="w-[100%] grid gap-[12px]">
                                <label for="company">Точка выхода<span class="text-[#FF3B30]">*</span></label>
                                <input type="text" name="company" id="company" placeholder="255 $" required class="w-[100%] outline-none border-none bg-[#2F2E2E] rounded-[8px] p-[16px]">
                            </div>
                        </div>
                        <div class="flex items-center gap-[36px] w-[100%] my-[38px]">
                            <div class="w-[100%] grid gap-[12px]">
                                <label for="company">Стоп-лосс<span class="text-[#FF3B30]">*</span></label>
                                <input type="text" name="company" id="company" placeholder="236 $" required class="w-[100%] outline-none border-none bg-[#2F2E2E] rounded-[8px] p-[16px]">
                            </div>
                            <div class="w-[100%] grid gap-[12px]">
                                <label for="company">Купон<span class="text-[#FF3B30]">*</span></label>
                                <input type="text" name="company" id="company" placeholder="40" required class="w-[100%] outline-none border-none bg-[#2F2E2E] rounded-[8px] p-[16px]">
                            </div>
                        </div>
                         <div class="flex items-center justify-end gap-[36px] w-[100%] my-[64px]">
                            <button class="bg-[#2F2E2E] py-[18px] px-[47px] rounded-[8px] text-[#B3B3B3] hover:bg-[#CAFF33] hover:text-black">Сохранить как черновик</button>
                            <button class="bg-[#2F2E2E] py-[18px] px-[47px] rounded-[8px] text-[#B3B3B3] hover:bg-[#CAFF33] hover:text-black">Создать</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import MainPageCom from '../../components/MainPageCom/MainPageCom.vue'
    import MainTable from '../../components/MainTable/MainTable.vue'
</script>

<style lang="scss" scoped>
   .bgtable{
    background-image: url("../../assets/images/bg/bgend.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   }
</style>