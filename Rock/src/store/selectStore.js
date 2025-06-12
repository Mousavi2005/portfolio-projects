import { defineStore } from 'pinia'

const useSelecteStore = defineStore('selectStore', {
    state: () => ({
        selected: false,
        selecteId: 0
    }),
    actions:{
        select(number) {
            this.selected = true
            this.selecteId = number
            // console.log('changed');
            
        },
        unselect() {
            this.selected = false
            this.selecteId = 0
        }
    }
})

export default useSelecteStore