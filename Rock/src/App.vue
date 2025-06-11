<template>

  <div class=" w-screen h-screen">
    <Rules v-if="!close" :closed="close" :closeFunction="closeRules"></Rules>
    <Main v-if="close && selecteId === 0" :changeSelectedId="changeSelectedId"></Main>
    <Pick v-if="close && selecteId !== 0" :selecteId="selecteId"></Pick>

  </div>

</template>

<script setup>
import Rules from './components/Rules.vue'
import Main from './components/main.vue'
import Pick from './components/Pick.vue'
import { ref } from 'vue'

const close = ref(true)
const selecteId = ref(0)


function closeRules() {
    close.value = true;
    
}

function changeSelectedId(number) {
  selecteId.value = number
  console.log(number);
  
}

</script>

