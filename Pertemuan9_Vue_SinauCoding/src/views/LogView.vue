<script setup>
import { useCartCounter } from "../stores/cartCounter.js";
import ProductComponent from "../components/ProductComponent.vue";
import { storeToRefs } from "pinia";

import { computed } from "vue";

const store = useCartCounter();
const { count } = storeToRefs(store);

const message = computed(() => {
    return count.value > 0 ? "" : "There is nothing in your cart";
});
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img
                    src="../assets/Logo.png"
                    alt="Logo"
                    width="70"
                    height="70"
                    class="d-inline-block align-text-top"
                />
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/"
                            ><a class="nav-link" href="">Cart</a></router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/log"
                            ><a class="nav-link" href=""
                                >Cart Log</a
                            ></router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="cartLog">
        <h1>This Cart Log Page</h1>
        <p>Total item in Cart : {{ count }}</p>
        <p class="message">{{ message }}</p>
        <ProductComponent :isCartPage="false" />
    </div>
</template>

<style>
</style>
