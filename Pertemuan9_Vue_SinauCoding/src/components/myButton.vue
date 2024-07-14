<template>
    <button
        class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "myButton",
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