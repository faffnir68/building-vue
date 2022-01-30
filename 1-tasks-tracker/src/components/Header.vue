<template>
    <div class="topbar">
        <h1>{{ title }}</h1>
        <Button />
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'Header',
    components: {
        Button,
    },
    props: {
        title: {
            type: String,
            default: "Hello world"
        }
    }
}
</script>

<style scoped>
    .topbar {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 15px 10px 15px 10px;
    }
</style>