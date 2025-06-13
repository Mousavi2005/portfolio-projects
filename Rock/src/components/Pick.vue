<template>
    <div class="w-full h-full flex flex-col items-center">

        <Header></Header>

        <section class="w-[313px] h-[278px] xl:w-[500px] flex items-center justify-between">
            <div class='flex flex-col items-center gap-5'>
                <div
                    :class="`bg-no-repeat bg-center w-28 h-28 xl:w-46 xl:h-46 bg-white rounded-full border-[12px] xl:border-[15px] cursor-pointer ${selectStore.selecteId === 1 ? 'border-[rgb(101_112_255)]': (selectStore.selecteId === 2 ? 'border-[rgb(242_167_53)]': 'border-[rgb(223_64_94)]')}`"
                    :style="{ backgroundImage: `url(${backGround})` }"
                ></div>
                <p class='text-white'>YOU PICKED</p>
            </div>

            <div class='flex flex-col items-center gap-5'>
                <div v-if='!housePicked' class='w-28 h-28 bg-gray-500 rounded-full'></div>
                <div v-if='housePicked'
                    :class="`bg-no-repeat bg-center w-28 h-28 xl:w-46 xl:h-46 bg-white rounded-full border-[12px] xl:border-[15px] cursor-pointer ${pickNumber === 1 ? 'border-[rgb(101_112_255)]': (pickNumber === 2 ? 'border-[rgb(242_167_53)]': 'border-[rgb(223_64_94)]')}`"
                    :style="{ backgroundImage: `url(${backGround2})` }"
                ></div>
                <p class='text-white'> THE HOUSE PICKED</p>
            </div>

        </section>

        <WinLose v-if="housePicked" :winOrLose="winOrLose" :resetHousePicked="resetHousePicked"></WinLose>

        <RulesBtn></RulesBtn>

    </div>
</template>

<script setup>
import { defineProps, computed, ref, onMounted, watch, inject, onUpdated } from 'vue'
import WinLose from './WinLose.vue'
import useSelecteStore from '../store/selectStore'
import Header from './Header.vue'
import RulesBtn from './RulesBtn.vue'

const selectStore = useSelecteStore()


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
    console.log('House pick value : ',housePicked.value);
    
}

watch(() => selectStore.selected,(newVal) => {
    if (newVal) {
        const randomNumber = Math.floor(Math.random() * 3 ) + 1
        setTimeout(() => {
        housePicked.value = true
        // console.log('picked');
        pickNumber.value = randomNumber
        console.log('pickedNumber : ', pickNumber.value );
            
    }, 1000);
        
}})

watch([ () => selectStore.selected, pickNumber],() => {
    console.log('selected id : ',selectStore.selecteId, 'picked id : ',pickNumber.value);
    
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