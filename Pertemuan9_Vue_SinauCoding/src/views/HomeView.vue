<script setup>
import { useCartCounter } from "../stores/cartCounter.js";

import { storeToRefs } from "pinia";

import ProductComponent from "../components/ProductComponent.vue";

const { count } = storeToRefs(useCartCounter());
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
    <main>
        <h1>This is the Chart View Page</h1>
        <p>Items For Sale</p>
        <p>Total Items: {{ count }}</p>
        <ProductComponent :isCartPage="true" />
    </main>
</template>
