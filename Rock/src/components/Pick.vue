<template>
    <div class="w-full h-full flex flex-col items-center">
        <header class="w-full max-w-[90%] flex justify-between items-center m-10 p-4 border-2 border-[rgb(99_110_133)] rounded-xl">
            <div id="logo" class="bg-[url('./images/logo.svg')] bg-no-repeat bg-cover bg-center w-[162px] h-[100px]"></div>
            <div id="score" class="flex flex-col justify-center items-center gap-3 bg-white h-[90px] w-[100px] rounded-2xl">
                <span class="text-[rgb(84_90_182)] font-bold">score</span>
                <span class="text-[rgb(40_48_78)] text-2xl font-bold">{{ scoreStore.score }}</span>
            </div>
        </header>

        <section class="w-[313px] h-[278px] flex items-center justify-between">
            <div class='flex flex-col items-center gap-5'>
                <div
                    :class="`bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] cursor-pointer ${selectStore.selecteId === 1 ? 'border-blue-500': (selectStore.selecteId === 2 ? 'border-yellow-500': 'border-red-500')}`"
                    :style="{ backgroundImage: `url(${backGround})` }"
                ></div>
                <p class='text-white'>YOU PICKED</p>
            </div>

            <div class='flex flex-col items-center gap-5'>
                <div v-if='!housePicked' class='w-28 h-28 bg-gray-500 rounded-full'></div>
                <div v-if='housePicked'
                    :class="`bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] cursor-pointer ${pickNumber === 1 ? 'border-[rgb(101_112_255)]': (pickNumber === 2 ? 'border-[rgb(242_167_53)]': 'border-[rgb(223_64_94)]')}`"
                    :style="{ backgroundImage: `url(${backGround2})` }"
                ></div>
                <p class='text-white'> THE HOUSE PICKED</p>
            </div>

        </section>

        <WinLose v-if="housePicked" :winOrLose="winOrLose" :resetHousePicked="resetHousePicked"></WinLose>

        <button v-on:click="rulesStore.openRules()" class="text-white mt-8 border-[1px] w-32 h-14 rounded-[8px] cursor-pointer">RULES</button>

    </div>
</template>

<script setup>
import { defineProps, computed, ref, onMounted, watch, inject, onUpdated } from 'vue'
import WinLose from './WinLose.vue'
import useSelecteStore from '../store/selectStore'
import useRulesStore from '../store/rulesStore'
import useScoreStore from '../store/scoreStore'

const selectStore = useSelecteStore()
const rulesStore = useRulesStore()
const scoreStore = useScoreStore()
// const props = defineProps(['selecteId'])


const backGround = computed(() => {
    switch(selectStore.selecteId) {
        case 1: return '/images/icon-paper.svg'
        case 2: return '/images/icon-scissors.svg'
        case 3: return '/images/icon-rock.svg'
        default: return ''
    }
})


const backGround2 = computed(() => {
    switch(pickNumber.value) {
        case 1: return '/images/icon-paper.svg'
        case 2: return '/images/icon-scissors.svg'
        case 3: return '/images/icon-rock.svg'
        default: return ''
    }
})

const housePicked = ref(false)
const pickNumber = ref(0)
const winOrLose = ref('')

function resetHousePicked() {
    housePicked.value = false
    console.log(housePicked.value);
    
}


// onMounted(() => {
//     const randomNumber = Math.floor(Math.random() * 3 ) + 1
//     setTimeout(() => {
//     housePicked.value = true
//     pickNumber.value = randomNumber
//     console.log(randomNumber);
    

        
//     }, 1000);
    
// })

watch(() => selectStore.selected,(newVal) => {
    if (newVal) {
        // console.log('changed');
        const randomNumber = Math.floor(Math.random() * 3 ) + 1
        setTimeout(() => {
        housePicked.value = true
        console.log('picked');
        
        // pickNumber.value = 0
        pickNumber.value = randomNumber
        // console.log(randomNumber, 'here');
            
        }, 1000);
        
    }
    // console.log('changed');
    // const randomNumber = Math.floor(Math.random() * 3 ) + 1
    // setTimeout(() => {
    // housePicked.value = true
    // pickNumber.value = 0
    // pickNumber.value = randomNumber
    // console.log(randomNumber, 'here');
        
    // }, 2000);
})

watch([ selectStore.selecteId, pickNumber],() => {
    console.log(selectStore.selecteId, pickNumber.value);
    
    if ((selectStore.selecteId === 1 && pickNumber.value === 3) || (selectStore.selecteId === 2 && pickNumber.value === 1) || (selectStore.selecteId === 3 && pickNumber.value === 2)) {
        winOrLose.value = 'win'
    }
    else if (selectStore.selecteId === pickNumber.value) {
     winOrLose.value = 'draw'   
    }
    else {
        winOrLose.value = 'lose'
    }
})


</script>