<template>
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        onclick: {
            type: Function,
            required: true,
        },
    },
    methods: {
        onClick() {
            this.onclick();
        },
    },
};
</script>

<style scoped>
button {
    padding: 5px 15px;
    margin-left: 10px;
    cursor: pointer;
    border: 1px solid #dddddd;
    border-radius: 5px;
    font-size: 20px;
}
</style>