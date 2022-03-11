<script>
// import { ref, onMounted } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
export default {
  props: {
    'startAutoplay': Boolean,
    'autoplayInterval': Number,
    'navigation': Boolean,
    'pagination': Boolean
  },
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(props.startAutoplay === undefined ? true : props.startAutoplay)
    const AUTOPLAY_INTERVAL = ref(props.autoplayInterval === undefined ? 3000 : props.autoplayInterval)
    const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination)
    const navigationEnabled = ref(props.navigation === undefined ? true : props.navigation)
    
    const prevSlide = () => {
      if(currentSlide.value <= 1) {
        currentSlide.value = getSlideCount.value
        return
      }
      currentSlide.value = currentSlide.value -= 1
    };

    const nextSlide = () => {
      if(currentSlide.value > getSlideCount.value-1) {
        currentSlide.value = 1
        return
      }
      currentSlide.value = currentSlide.value += 1
    };

    const goToSlide = (slideIndex) => {
      currentSlide.value = slideIndex += 1
    }

    const autoPlay = () => {
      setInterval(nextSlide, AUTOPLAY_INTERVAL.value);
    }
    if(autoPlayEnabled.value === true) {
      autoPlay()
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length
    });

    return { currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide, autoPlay, navigationEnabled, paginationEnabled }
  },
}
</script>

<template>
  <div class="carousel">
      <slot :currentSlide="currentSlide"></slot>
      <!-- Navigation -->
      <div class="navigation" v-if="navigationEnabled">
        <div class="toggle-page">
          <div class="left">
            <i class="fa fa-chevron-left" aria-hidden="true" @click="prevSlide"></i>
          </div>
          <div class="right">
            <i class="fa fa-chevron-right" aria-hidden="true" @click="nextSlide"></i>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination" v-if="paginationEnabled">
        <span v-for="(slide, index) in getSlideCount" :key="index" 
                :class="[currentSlide === slide ? 'is-active' : '']" 
                @click="goToSlide(index)">
        </span>
      </div>
  </div>  
</template>

<style scoped>
  .navigation {
    height: 100%;
    width: 100%;
    padding: 0 10px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toggle-page {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  .left, .right {
    height: 50px;
    width: 50px;
    color: coral;
  }
  i {
    width: 50px;
    height: 50px;
    font-size: 50px;
    cursor: pointer;
  }
  .pagination {
    position: relative;
    top: calc(100% - 30px);
    left: 0;
    /* background: red; */
    width: 100%;
    height: 15px;
    display: flex;
    justify-content: center;
    z-index: 10;
  }
  span {
    width: 15px;
    height: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 0 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 15;
  }
  span.is-active {
    border: 1px solid #fff;
    background-color: coral;
  }
</style>