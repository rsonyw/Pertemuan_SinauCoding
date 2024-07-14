<script setup>
import { useCartCounter } from "../stores/cartCounter.js";
import myButton from "./myButton.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const store = useCartCounter();

const props = defineProps({
    isCartPage: {
        type: Boolean,
        default: true,
    },
});

const { product, itemCart } = storeToRefs(store);
const { addItemCart, removeItemCart } = store;

let showItem = computed(() =>
    props.isCartPage ? product.value : itemCart.value
);
let buttonText = computed(() => (props.isCartPage ? "Add" : "Remove"));
</script>


<template>
    <div class="d-flex flex-column gap-3 justify-content-center">
        <div class="card" v-for="data in showItem" :key="data.id">
            <p>{{ data.title }}</p>
            <myButton
                class="myButton"
                @click="isCartPage ? addItemCart(data) : removeItemCart(data)"
            >
                {{ buttonText }}
            </myButton>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 1rem;
    width: 500px;
    max-height: 50vh;
    background: #6f6f6f;
    color: white;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(163, 163, 163);
    align-items: center;
}

myButton:hover {
    background-color: black;
    color: white;
}
</style>