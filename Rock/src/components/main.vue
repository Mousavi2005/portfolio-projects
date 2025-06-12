<template>

<div v-if="!SelectStore.selected" class="w-full h-full flex flex-col items-center gap-8">
    <header class="w-full max-w-[90%] flex justify-between items-center m-10 p-4 border-2 border-[rgb(99_110_133)] rounded-xl xl:max-w-[750px]">
        <div id="logo" class="bg-[url('./images/logo.svg')] bg-no-repeat bg-cover bg-center w-[162px] h-[100px]"></div>
        <div id="score" class="flex flex-col justify-center items-center gap-3 bg-white h-[90px] w-[100px] rounded-2xl">
            <span class="text-[rgb(84_90_182)] font-bold">score</span>
            <span class="text-[rgb(40_48_78)] text-2xl font-bold">{{ scoreStore.score }}</span>
        </div>
    </header>

    <section class="w-[313px] h-[278px] bg-[url('./images/bg-triangle.svg')] bg-no-repeat bg-center bg-[length:210px] flex flex-col items-center justify-center xl:w-[450px] xl:h-[350px]">
        <div class="w-full h-[50%] flex justify-between items-start">
            <button v-on:click="SelectStore.select(1)" class="bg-[url('./images/icon-paper.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-[rgb(101_112_255)] cursor-pointer xl:w-40 xl:h-40 xl:border-[15px]"></button>
            <button v-on:click="SelectStore.select(2)" class="bg-[url('./images/icon-scissors.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-[rgb(242_167_53)] cursor-pointer xl:w-40 xl:h-40 xl:border-[15px]"></button>
        </div>
        <div class="w-full h-[50%] flex justify-center items-end">
            <button v-on:click="SelectStore.select(3)" class="bg-[url('./images/icon-rock.svg')] bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] border-[rgb(223_64_94)] cursor-pointer xl:w-40 xl:h-40 xl:border-[15px]"></button>
        </div>
    </section>

    <button v-on:click="rulesStore.openRules()" class="text-white border-[1px] w-32 h-14 rounded-[8px] cursor-pointer">RULES</button>
</div>

</template>

<script setup>
import { ref, defineProps } from 'vue'
import useSelecteStore from '../store/selectStore'
import useRulesStore from '../store/rulesStore'
import useScoreStore from '../store/scoreStore'

const SelectStore = useSelecteStore()
const rulesStore = useRulesStore()
const scoreStore = useScoreStore()

// const props = defineProps(['changeSelectedId'])
// const selected = ref(false)


// function select(number) {
//     selected.value = true
//     props.changeSelectedId(number)    
// }

</script>