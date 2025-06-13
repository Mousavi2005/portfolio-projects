<template>

<div v-if="!SelectStore.selected" class="w-full h-full flex flex-col items-center gap-8">

    <Header></Header>

    <section class="w-[313px] h-[278px] bg-[url('./images/bg-triangle.svg')] bg-no-repeat bg-center bg-[length:210px] flex flex-col items-center justify-center xl:w-[450px] xl:h-[350px]">
        <div class="w-full h-[50%] flex justify-between items-start">
            <button v-on:click="SelectStore.select(1)" class="bg-[url('./images/icon-paper.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-[rgb(101_112_255)] cursor-pointer xl:w-40 xl:h-40 xl:border-[15px]"></button>
            <button v-on:click="SelectStore.select(2)" class="bg-[url('./images/icon-scissors.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-[rgb(242_167_53)] cursor-pointer xl:w-40 xl:h-40 xl:border-[15px]"></button>
        </div>
        <div class="w-full h-[50%] flex justify-center items-end">
            <button v-on:click="SelectStore.select(3)" class="bg-[url('./images/icon-rock.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-[rgb(223_64_94)] cursor-pointer xl:w-40 xl:h-40 xl:border-[15px]"></button>
        </div>
    </section>

    <RulesBtn></RulesBtn>

</div>

</template>


<script setup>
import useSelecteStore from '../store/selectStore'
import Header from './Header.vue'
import RulesBtn from './RulesBtn.vue'

const SelectStore = useSelecteStore()

</script>