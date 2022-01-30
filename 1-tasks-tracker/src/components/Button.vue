<template>
    <button :style="{backgound: color}" @click="$emit('btn-click')">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    },
    methods: {

    }
}
</script>

<style scoped>
    button {
        color: white;
        background: lightseagreen;
        padding: 5px 10px;
        text-align: center;
        outline: none;
        font-size: 18px;
        letter-spacing: 1px;
        border: 1px solid lightseagreen;
        transition: all 0.3s ease;
        cursor: pointer;
        max-height: 40px;
    }
    button:hover {
        color: lightseagreen;
        background: white;
        border: 1px solid lightseagreen;
    }
</style>