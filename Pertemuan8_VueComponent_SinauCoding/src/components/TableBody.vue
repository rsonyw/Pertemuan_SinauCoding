<script setup>
import myButton from "./myButton.vue";
const props = defineProps({
    dataTable: {
        type: Object,
    },
});

const emit = defineEmits(["showData"]);

function showData(data) {
    emit("showData", data);
}
</script>

<template>
    <tbody>
        <tr v-for="data in dataTable" :key="data.id">
            <td>{{ data.id }}</td>
            <td>{{ data.nama }}</td>
            <td>{{ data.position }}</td>
            <td>{{ data.no_telp }}</td>
            <td>{{ data.email }}</td>
            <td>
                <myButton type="button" @click="showData(data)"
                    >Show Data</myButton
                >
            </td>
        </tr>
    </tbody>
</template>

<style scoped>
td {
    text-align: center;
}
</style>