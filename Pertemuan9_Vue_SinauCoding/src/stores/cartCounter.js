import { ref } from 'vue'
import { defineStore } from 'pinia'
import Product from '../assets/json/Product.json'

export const useCartCounter = defineStore('cartCounter', () => {
    const count = ref(0)
    const product = ref(Product)
    const itemCart = ref([])

    const addItemCart = (data) => {
        const findItem = itemCart.value.find((item) => item.id === data.id)

        if (!findItem) {
            itemCart.value.push(data)
            count.value++
        } else {
            alert("Item sudah ada di keranjang dan hanya bisa 1 barang setiap jenisnya")
        }
    }

    const removeItemCart = (data) => {
        const popItem = itemCart.value.findIndex((item) => item.id !== data.id)
        if (popItem.length !== 1) {
            itemCart.value.splice(popItem, 1)
            count.value--
        }
    }

    return { count, product, itemCart, addItemCart, removeItemCart }

})