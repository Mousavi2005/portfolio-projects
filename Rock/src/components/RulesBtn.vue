<template>

    <div class="w-full h-fit flex justify-center mt-6 xl:justify-end xl:pr-20">
        <button v-on:click="rulesStore.openRules()" class="text-white border-[1px] w-32 h-14 rounded-[8px] cursor-pointer">RULES</button>
    </div>

</template>

<script setup>
import useRulesStore from '../store/rulesStore';

const rulesStore = useRulesStore()
</script>