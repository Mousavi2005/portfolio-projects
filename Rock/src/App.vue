<template>

  <div class=" w-screen h-screen bg-gradient-to-b from-[rgb(28_45_73)] to-[rgb(19_21_54)]">
    <Rules v-if="!rulesStore.closed" :closed="close" :closeFunction="closeRules"></Rules>
    <Main v-if="(width >= 1280) || (rulesStore.closed && !selectStore.selected)" :changeSelectedId="changeSelectedId"></Main>
    <Pick v-show="rulesStore.closed && selectStore.selected" :selecteId="selecteId"></Pick>

  </div>

</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import Rules from './components/Rules.vue'
import Main from './components/main.vue'
import Pick from './components/Pick.vue'
import useSelecteStore from './store/selectStore'
import useRulesStore from './store/rulesStore'
import { ref } from 'vue'

const selectStore = useSelecteStore()
const rulesStore = useRulesStore()
const { width } = useWindowSize()
const selecteId = ref(0)


// function closeRules() {
//     close.value = true;
    
// }

function changeSelectedId(number) {
  selecteId.value = number
  console.log(number);
  
}

</script>

