<template>
    <div class="flex flex-col gap-6">
        <p class="text-white text-5xl font-bold">YOU {{ winOrLose.toUpperCase() }}</p>
        <button v-on:click="playAgain" class="bg-white text-xl text-gray-900 w-full h-14 rounded-xl">PLAY AGAIN</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import useSelecteStore from '../store/selectStore';
import useScoreStore from '../store/scoreStore';

const selectStore = useSelecteStore()
const scoreStore = useScoreStore()
const props = defineProps(['winOrLose','resetHousePicked'])

if (props.winOrLose === 'win') {
    scoreStore.increament(2)
}
else if (props.winOrLose === 'draw') {
    scoreStore.increament(1)
    
}
else if (props.winOrLose === 'lose') {
    scoreStore.decremeant(2)
}

function playAgain() {
    selectStore.unselect()
    props.resetHousePicked()
    
}

</script>