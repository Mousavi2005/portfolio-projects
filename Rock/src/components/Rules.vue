<template>

    <div class="w-full h-full flex flex-col items-center justify-between py-18">
        <p class=" text-3xl">RULES</p>
        <div class="bg-[url('./images/image-rules.svg')] w-[304px] h-[270px] bg-no-repeat bg- bg-center"></div>
        <button v-on:click="closeFunction()" class="cursor-pointer">
            <div class="bg-[url('./images/icon-close.svg')] w-5 h-5"></div>
        </button>

    </div>

</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['closed', 'closeFunction'])


</script>