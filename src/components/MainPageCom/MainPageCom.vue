<template>
    <div class="container mx-auto flex items-center justify-center gap-[22px] py-[18px]">
        <div class="cardone w-[527px] rounded-[32px] border-[1.5px] border-[#262626] py-[24px] px-[30px] flex items-center gap-[12px]">
            <div class="">
                <p class="text-[#CAFF33] leading-[17.6px] font-[500] ">BEST TRADER</p>
                <div class="text-white flex items-center gap-[12px] my-[15px]">
                    <img src="../../assets/images/bg/user.svg" alt="">
                    <div>
                        <p>Abdulaziz Ketmonov</p>
                        <div class="flex items-center gap-[12px]">
                            <p class="text-[#B3B3B3] text-[14px]">@marketsniper</p>
                            <div class="flex items-center gap-[6px]">
                                <i class='bx bxs-circle text-[#CAFF33]'></i>
                                <i class='bx bxs-circle text-[#CAFF33]'></i>
                                <i class='bx bxs-circle text-[#868686]'></i>
                                <i class='bx bxs-circle text-[#868686]'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-[1.5px] border-[#505050]"></div>
                <div class="flex items-center justify-between my-[17.75px]">
                    <div class="grid gap-[8px]">
                        <p class="font-[500] leading-[17.6px] text-[#B3B3B3]">профит:</p>
                        <p class="flex items-center gap-[6px] font-[500] leading-[17.6px] text-white">+45%
                            <img src="../../assets/images/bg/chart.svg" alt="">
                        </p>
                    </div>
                    <div class="grid gap-[8px]">
                        <p class="font-[500] leading-[17.6px] text-[#B3B3B3]">Риск/профит:</p>
                        <p class="flex items-center gap-[6px] font-[500] leading-[17.6px] text-white">1/4</p>
                    </div>
                </div>
                <button class="bg-[#2E2D2D] mt-[18px] rounded-full py-[8px] pl-[16px] pr-[10px] font-[500] leading-[16.94px] text-[#CAFF33] flex items-center text-[14px]">Просмотр инвест.идея <i class='bx bx-chevron-right ml-[6px]'></i></button>
            </div>
            <div class="flex items-center">
                <div class="grid gap-[8px] mt-[70px] ml-[30px]">
                        <p class="font-[500] leading-[17.6px] text-[#B3B3B3]">Coin:</p>
                        <p class="flex items-center gap-[6px] font-[500] leading-[17.6px] text-white">150
                            <img src="../../assets/images/bg/coin.svg" alt="">
                        </p>
                </div>
                <img src="../../assets/images/bg/kubok.svg" alt="" class="absolute ml-[20px]">
            </div>
        </div>
         <div class="cardtwo w-[527px] rounded-[32px] border-[1.5px] border-[#262626] py-[24px] px-[30px] flex items-center gap-[12px]">
            <div class="">
                <p class="text-[#CAFF33] leading-[17.6px] font-[500] ">BEST IDEA</p>
                <div class="text-white flex items-center gap-[12px] my-[15px]">
                    <img src="../../assets/images/bg/user2.svg" alt="">
                    <div>
                        <p>Narimon Samadov</p>
                        <div class="flex items-center gap-[12px]">
                            <p class="text-[#B3B3B3] text-[14px]">@marketsniper</p>
                        </div>
                    </div>
                </div>
                <div class="border-[1.5px] border-[#505050]"></div>
                <div class="flex items-center justify-between my-[17.75px]">
                    <div class="grid gap-[8px]">
                        <p class="font-[500] leading-[17.6px] text-[#B3B3B3]">AAPL:</p>
                        <p class="flex items-center gap-[6px] font-[500] leading-[17.6px] text-white">Apple Inc</p>
                    </div>
                    <div class="grid gap-[8px]">
                        <p class="font-[500] leading-[17.6px] text-[#B3B3B3]">профит (%):</p>
                        <p class="flex items-center gap-[6px] font-[500] leading-[17.6px] text-white">+45%
                            <img src="../../assets/images/bg/chart.svg" alt="">
                        </p>
                    </div>
                </div>
                <button class="bg-[#2E2D2D] mt-[18px] rounded-full py-[8px] pl-[16px] pr-[10px] font-[500] leading-[16.94px] text-[#CAFF33] flex items-center text-[14px]">Просмотр инвест.идея <i class='bx bx-chevron-right ml-[6px]'></i></button>
            </div>
            <div class="flex items-center">
                <img src="../../assets/images/bg/trade.svg" alt="" class="absolute ml-[20px]">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .cardone{
        background-image: url("../../assets/images/bg/animalone.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .cardtwo{
        background-image: url("../../assets/images/bg/animaltwo.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>