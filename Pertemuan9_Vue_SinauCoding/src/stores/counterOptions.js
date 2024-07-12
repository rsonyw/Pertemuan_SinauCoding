import { defineStore } from "pinia";

export const useCounterStoreOptions = defineStore("counterOptions", {
    state: () => ({
        count: 0,
        name: "Bejo",
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        changeName() {
            this.name = "Anton"
        }
    },
})