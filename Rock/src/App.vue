<template>

  <div class=" w-screen h-screen bg-gradient-to-b from-[rgb(28_45_73)] to-[rgb(19_21_54)]">
    
    <Rules v-if="!rulesStore.closed" :closed="close" :closeFunction="closeRules" class=" z-50 absolute top-0 left-0"></Rules>
    <Main v-if="(width >= 180)||(rulesStore.closed && !selectStore.selected)" :changeSelectedId="changeSelectedId"></Main>
    <Pick v-show="rulesStore.closed && selectStore.selected" :selecteId="selecteId"></Pick>

  </div>

</template>

<script setup>
import Rules from './components/Rules.vue'
import Main from './components/main.vue'
import Pick from './components/Pick.vue'
import useSelecteStore from './store/selectStore'
import useRulesStore from './store/rulesStore'
import { useWindowSize } from '@vueuse/core'
import { ref, watch } from 'vue'

const selectStore = useSelecteStore()
const rulesStore = useRulesStore()
const selecteId = ref(0)
const { width } = useWindowSize()

watch(width, (newWidth) => {
  console.log(newWidth)
})

function changeSelectedId(number) {
  selecteId.value = number
}

</script>

