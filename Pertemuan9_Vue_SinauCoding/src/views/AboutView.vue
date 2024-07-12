<script setup>
import { useCounterStoreComposition } from "../stores/counterComposition.js";
import { storeToRefs } from "pinia";

const { count, name } = storeToRefs(useCounterStoreComposition());
</script>

<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p>My Name is {{ name }}</p>
        <p>My Count: {{ count }}</p>
    </div>
</template>

<style>
</style>
