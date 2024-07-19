<script>
import axios from 'axios';
import { reactive, onMounted } from 'vue';
// import { apiPost, apiAuthor } from "../api";

export default {
    setup() {
        const data = reactive([]);

        onMounted(async () => {
            getData();
        });

        async function getData() {
            const response = await apiPost({
                method: 'get',
            });
        }

        return { getData, data, postData };
    },
};
</script>

<template>
    <main>
        <div class="border-sm my-2" v-for="value in data" :key="value.id">
            <p>{{ value.name }}</p>
            <p>{{ value.body }}</p>
            <p>{{ value.email }}</p>
        </div>

        <button @click="postData">Post Data</button>
        <button @click="putData">Put Data</button>
    </main>
</template>

<style>
.border-sm {
    border: 1px solid black;
}

.my-2 {
    margin: 2px 0px;
}
</style>
