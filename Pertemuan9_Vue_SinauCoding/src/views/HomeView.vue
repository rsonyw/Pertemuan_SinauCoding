<script setup>
import { useCounterStoreComposition } from "../stores/counterComposition.js";

import { storeToRefs } from "pinia";

const { count, name, doubleCount } = storeToRefs(useCounterStoreComposition());

const { increment, decrement, changeName } = useCounterStoreComposition();
</script>

<template>
    <main>
        <p>My Name is {{ name }}</p>
        <p>My Count: {{ count }}</p>
        <p>Double Count: {{ doubleCount }}</p>

        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="changeName">Change Name</button>
    </main>
</template>
