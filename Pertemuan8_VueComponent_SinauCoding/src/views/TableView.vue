<script setup>
import TableHead from "../components/TableHead.vue";
import TableBody from "../components/TableBody.vue";

import { reactive } from "vue";

import Header from "../assets/json/Header.json";
import User from "../assets/json/User.json";

const header = reactive(Header);
const user = reactive(User);

function showUser(value) {
    alert(
        header[0] +
            ": " +
            value.id +
            ", " +
            header[1] +
            ": " +
            value.nama +
            ", " +
            header[2] +
            ": " +
            value.position +
            ", " +
            header[3] +
            ": " +
            value.no_telp +
            ", " +
            header[4] +
            ": " +
            value.email
    );
}
</script>

<template>
    <main>
        <table>
            <TableHead :dataTable="header" />
            <TableBody :dataTable="user" @showData="showUser" />
        </table>
    </main>
</template>