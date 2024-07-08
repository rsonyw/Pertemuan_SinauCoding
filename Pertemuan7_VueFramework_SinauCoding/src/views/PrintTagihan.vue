

<template>
    <div class="payment">
        <h1>Payment</h1>
        <p>
            Total pembayaran yang harus dibayarkan {{ namaCustomer }} dari
            {{ totalAmount }} items sebesar
        </p>
        <p>Rp. {{ totalPrice }},00</p>
        <MyButton @click="router.back()">Back</MyButton>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import MyButton from "../components/MyButton.vue";

const route = useRoute();
const router = useRouter();
const totalAmount = route.query.totalAmount;
const totalPrice = route.query.totalPrice;
const namaCustomer = route.query.customer;

console.log(route.query.totalPrice);
</script>

<style scoped>
.payment {
    border: 3px solid #484848;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 3rem;
}

h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 50px;
}
</style>