import { defineStore } from "pinia";

const useRulesStore = defineStore('rulesStore', {
    state: () => ({
        closed: false
    }),

    actions: {
        closeRules() {
            this.closed = true
        },
        openRules() {
            this.closed = false
        }
    }
})

export default useRulesStore