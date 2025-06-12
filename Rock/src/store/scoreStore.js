import { defineStore } from "pinia";

const useScoreStore = defineStore('scoreStore', {
    state: () => ({
        score: 0
    }),
    actions: {
        increament(number) {
            this.score += number
        },
        decremeant(number) {
            if (this.score >= number) {
                this.score -= number
            }
            else {
                this.score = 0
            }
        }
    }
})

export default useScoreStore