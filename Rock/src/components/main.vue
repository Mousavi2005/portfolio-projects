<template>

<div v-if="!selected" class="w-full h-full bg-gray-900 flex flex-col items-center gap-8">
    <header class="w-full flex justify-between items-center m-10 p-4">
        <div id="logo" class="bg-[url('./images/logo.svg')] bg-no-repeat bg-cover bg-center w-[162px] h-[100px]"></div>
        <div id="score" class="flex flex-col justify-center items-center gap-3 bg-white h-[100px] w-[100px] rounded-2xl">
            <span>score</span>
            <span>12</span>
        </div>
    </header>

    <section class="w-[313px] h-[278px] bg-[url('./images/bg-triangle.svg')] bg-no-repeat bg-center bg-[length:210px] flex flex-col items-center justify-center">
        <div class="w-full h-[50%] flex justify-between items-start">
            <button v-on:click="select(1)" class="bg-[url('./images/icon-paper.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-blue-500 cursor-pointer"></button>
            <button v-on:click="select(2)" class="bg-[url('./images/icon-scissors.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-yellow-500 cursor-pointer"></button>
        </div>
        <div class="w-full h-[50%] flex justify-center items-end">
            <button v-on:click="select(3)" class="bg-[url('./images/icon-rock.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-red-500 cursor-pointer"></button>
        </div>
    </section>

    <button class="text-white border-[1px] w-32 h-14 rounded-[8px] cursor-pointer">RULES</button>
</div>

</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['changeSelectedId'])
const selected = ref(false)

function select(number) {
    selected.value = true
    props.changeSelectedId(number)    
}

</script>