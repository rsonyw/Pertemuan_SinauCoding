<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const totalAmount = route.query.totalAmount;
const totalPrice = route.query.totalPrice;
const namaCustomer = route.query.customer;

console.log(route.query.totalPrice);
</script>

<template>
    <div class="payment">
        <h1>Payment</h1>
        <p>
            Total pembayaran yang harus dibayarkan {{ namaCustomer }} dari
            {{ totalAmount }} items sebesar
        </p>
        <p>Rp. {{ totalPrice }},00</p>
        <button type="button" @click="router.back()">Back</button>
    </div>
</template>

<style scoped>
.payment {
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 3rem;
}

button {
    padding: 5px 15px;
    margin-left: 10px;
    cursor: pointer;
    border: 1px solid #dddddd;
    border-radius: 5px;
    font-size: 20px;
}
</style>