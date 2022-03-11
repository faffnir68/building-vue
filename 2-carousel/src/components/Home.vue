<template>
  <div class="home">
    <Carousel :pagination="true" :navigation="true" :autoplayInterval="5000" :startAutoplay="true" class="carousel" v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index+1" class="slide-info">
                <img :src="`../src/assets/${slide}.jpg`" alt="" srcset="">
            </div>
        </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from './carousel/Carousel.vue'
import Slide from './carousel/Slide.vue'

export default {
    name: "Home",
    components: {
        Carousel,
        Slide
    },
    setup() {
        const carouselSlides = ["bg-1", "bg-2", "bg-3"]
        return { carouselSlides }
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .carousel {
        max-height: 100vh;
        height: 100vh;
        position: relative;
    }
    .slide-info {
        position: absolute;
        top: 0;
        left: 0;    
        width: 100%;
        height: 100%;
        max-height: 100%;
    }
    img {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
        max-width: 100vw;
    }
</style>