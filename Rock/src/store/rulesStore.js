import { defineStore } from "pinia";

const useRulesStore = defineStore('rulesStore', {
    state: () => ({
        closed: true
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