<script setup>
const props = defineProps({
    dataTable: {
        type: Object,
    },
});
</script>

<template>
    <thead>
        <tr>
            <th v-for="(data, index) in dataTable" :key="index">
                {{ data }}
            </th>
        </tr>
    </thead>
</template>

<style scoped>
th {
    text-align: center;
}
</style>