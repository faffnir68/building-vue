<script setup>
</script>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<template>
    <div class="slide">
        <transition name="slide">
            <slot></slot>
        </transition>
    </div>
</template>

<style scoped>
    .slide-enter-from, 
    .slide-leave-to {
        opacity: 0;
        /* transform: translateX(0) */
    }
    .slide-leave-from, 
    .slide-enter-to {
        opacity: 1;
        /* transform: translateX(-100%) */
    }
    .slide-enter-active,
    .slide-leave-active {
        /* transition: all 0.8s ease-out; */
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
</style>