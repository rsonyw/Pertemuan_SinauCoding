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
        async function postData() {
            const params = {};
            const auth =
                "9690fb8196780608aa1199cadbf3901b8d6679995f2667a259a1f07fb7617cd";

            params.name = "ojan";
            params.email = "ojan@mail.com";
            params.gender = "male";
            params.status = "active";

            const response = await axios.post(
                "https://gorest.co.in/public/v2/users",
                params,
                {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                }
            );

            console.log(response);
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