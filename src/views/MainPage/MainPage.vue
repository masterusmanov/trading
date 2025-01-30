<template>
    <div class="bg-[#191919] border-t-4 border-t-[#2F2E2E] h-[89.9vh] bgtable ">
        <div class="container mx-auto ">
            <MainPageCom/>
            <MainTable class=""/>
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