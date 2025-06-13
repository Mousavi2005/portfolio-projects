<template>

    <header class="w-full max-w-[90%] flex justify-between items-center m-10 p-4 border-2 border-[rgb(99_110_133)] rounded-xl xl:max-w-[700px]">
        <div id="logo" class="bg-[url('./images/logo.svg')] bg-no-repeat bg-cover bg-center w-[162px] h-[100px]"></div>
        <div id="score" class="flex flex-col justify-center items-center gap-3 bg-white h-[90px] w-[100px] rounded-2xl">
            <span class="text-[rgb(84_90_182)] font-bold">score</span>
            <span class="text-[rgb(40_48_78)] text-2xl font-bold">{{ scoreStore.score }}</span>
        </div>
    </header>

</template>

<script setup>
import useScoreStore from '../store/scoreStore';

const scoreStore = useScoreStore()
</script>