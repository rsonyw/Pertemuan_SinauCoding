<script setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";

const ingredient = ref([]);
const count = reactive({
    ingredient: "",
    amount: 0,
    price: 0,
});

const customer = ref("");

const addIngredient = () => {
    ingredient.value.push({ ...count });
    count.customer = "";
    count.ingredient = "";
    count.amount = 0;
    count.price = 0;

    console.log(ingredient.value);
};

const deleteIngredient = (index) => {
    ingredient.value.splice(index, 1);
};

const totalPrice = computed(() => {
    return ingredient.value.reduce((sum, item) => {
        return sum + item.amount * item.price;
    }, 0);
});

const totalAmount = computed(() => {
    return ingredient.value.reduce((sum, data) => {
        return sum + data.amount;
    }, 0);
});

const router = useRouter();

const cetakTagihan = () => {
    if (totalAmount.value === 0) {
        alert("Tidak ada pesanan yang bisa diprint");
    } else if (customer.value === "") {
        alert("Nama Customer Harus Diisi");
    } else {
        router.push({
            path: "/print",
            query: {
                totalAmount: totalAmount.value,
                totalPrice: totalPrice.value,
                customer: customer.value,
            },
        });
    }
};
</script>

<template>
    <div class="countIngredients">
        <h1>List Ingredient</h1>
        <label for="customer"> Customer </label>
        <input type="text" id="customer" v-model="customer" /> <br />
        <span>
            <label for="ingredient">
                Ingredient:
                <input type="text" id="ingredient" v-model="count.ingredient" />
            </label>
            <label for="amount">
                Amount:
                <input type="number" id="amount" v-model="count.amount" />
            </label>
            <label for="price">
                Price:
                <input type="number" id="price" v-model="count.price" />
            </label>
            <button type="submit" @click="addIngredient()">Submit</button>
        </span>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Ingredient</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="totalPrice == 0 && totalAmount == 0">
                <tr>
                    <td colspan="6" align="center">Tidak ada data</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="(data, index) in ingredient" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ data.ingredient }}</td>
                    <td>Rp. {{ data.price }},00</td>
                    <td>{{ data.amount }}</td>
                    <td>Rp. {{ data.amount * data.price }},00</td>
                    <td>
                        <button type="button" @click="deleteIngredient(index)">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">Total</td>
                    <td>{{ totalAmount }}</td>
                    <td>Rp. {{ totalPrice }},00</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <p>Total Data : {{ ingredient.length }}</p>
        <button type="button" @click="cetakTagihan()">Cetak Tagihan</button>
    </div>
</template>

<style scoped>
.countIngredients {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    text-align: center;
    margin-bottom: 50px;
}
table {
    margin-top: 10px;
    border: 1px solid #dddddd;
    width: 100%;
}

th,
td {
    padding: 5px 15px;
    border: 1px solid #dddddd;
    text-align: center;
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
