import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStoreComposition = defineStore('counterComposition', () => {
    const count = ref(0)
    const name = ref("Bejo")

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }
    function decrement() {
        count.value--
    }
    function changeName() {
        name.value = "Anton"
    }

    return { count, name, doubleCount, increment, decrement, changeName }
})