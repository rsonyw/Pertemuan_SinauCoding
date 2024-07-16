<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import api from "../api";

export default {
    setup() {
        const data = reactive([]);

        onMounted(async () => {
            getData();
            postData();
        });

        async function getData() {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/comments"
            );
            data.push(...response.data.slice(0, 3));
            console.log(data);
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