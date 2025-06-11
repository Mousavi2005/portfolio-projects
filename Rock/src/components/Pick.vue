<template>
    <div class="w-full h-full bg-gray-900 flex flex-col items-center gap-8">
        <header class="w-full flex justify-between items-center m-10 p-4">
            <div id="logo" class="bg-[url('/images/logo.svg')] bg-no-repeat bg-cover bg-center w-[162px] h-[100px]"></div>
            <div id="score" class="flex flex-col justify-center items-center gap-3 bg-white h-[100px] w-[100px] rounded-2xl">
                <span>score</span>
                <span>12</span>
            </div>
        </header>

        <section class="w-[313px] h-[278px] flex items-center justify-between">
            <div class='flex flex-col items-center gap-5'>
                <div
                    :class="`bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] cursor-pointer ${props.selecteId === 1 ? 'border-blue-500': (props.selecteId === 2 ? 'border-yellow-500': 'border-red-500')}`"
                    :style="{ backgroundImage: `url(${backGround})` }"
                ></div>
                <p class='text-white'>YOU PICKED</p>
            </div>

            <div class='flex flex-col items-center gap-5'>
                <div v-if='!housePicked' class='w-28 h-28 bg-gray-500 rounded-full'></div>
                <div v-if='housePicked'
                    :class="`bg-no-repeat bg-center w-28 h-28 bg-white rounded-full border-[12px] cursor-pointer ${pickNumber === 1 ? 'border-blue-500': (pickNumber === 2 ? 'border-yellow-500': 'border-red-500')}`"
                    :style="{ backgroundImage: `url(${backGround2})` }"
                ></div>
                <p class='text-white'> THE HOUSE PICKED</p>
            </div>

        </section>
    </div>
</template>

<script setup>
import { defineProps, computed, ref, onMounted, watch } from 'vue'
const props = defineProps(['selecteId'])

const backGround = computed(() => {
    switch(props.selecteId) {
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


onMounted(() => {
    const randomNumber = Math.floor(Math.random() * 3 ) + 1
    setTimeout(() => {
    housePicked.value = true
    pickNumber.value = randomNumber
    console.log(randomNumber);
    

        
    }, 1000);
    // console.log('here');
    
})

watch(pickNumber,() => {
if ((props.selecteId === 1 && pickNumber.value === 3) || (props.selecteId === 2 && pickNumber.value === 1) || (props.selecteId === 3 && pickNumber.value === 2)) {
    winOrLose.value = 'win'
}
else {
    winOrLose.value = 'lose'
}

})

// if ((props.selecteId === 1 && pickNumber.value === 3) || (props.selecteId === 2 && pickNumber.value === 1) || (props.selecteId === 3 && pickNumber.value === 2)) {
//     console.log('Won');
        
// }


</script>