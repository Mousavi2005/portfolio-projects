<template>

    <div class="w-full h-full flex flex-col items-center justify-between xl:justify-center py-18">
        <div class="xl:w-[370px] xl:h-[420px] bg-white flex flex-col items-center gap-10 p-8">
            <div class="w-full xl:flex xl:justify-between hidden">
                <p class=" text-3xl">RULES</p>
                <button v-on:click="rulesStore.closeRules()" class="cursor-pointer hidden xl:block">
                    <div class="bg-[url('./images/icon-close.svg')] w-5 h-5"></div>
                </button>
            </div>
            
            <p class=" text-3xl xl:hidden">RULES</p>
            <div class="bg-[url('./images/image-rules.svg')] w-[304px] h-[270px] bg-no-repeat bg- bg-center"></div>
            <button v-on:click="rulesStore.closeRules()" class="cursor-pointer xl:hidden">
                <div class="bg-[url('./images/icon-close.svg')] w-5 h-5"></div>
            </button>
        </div>
        <!-- <p class=" text-3xl">RULES</p>
        <div class="bg-[url('./images/image-rules.svg')] w-[304px] h-[270px] bg-no-repeat bg- bg-center"></div>
        <button v-on:click="rulesStore.closeRules()" class="cursor-pointer">
            <div class="bg-[url('./images/icon-close.svg')] w-5 h-5"></div>
        </button> -->

    </div>

</template>

<script setup>
import { defineProps } from 'vue'
import useRulesStore from '../store/rulesStore';

const rulesStore = useRulesStore()
// const props = defineProps(['closed', 'closeFunction'])


</script>