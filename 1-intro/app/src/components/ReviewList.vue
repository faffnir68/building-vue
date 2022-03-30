<script setup>
    defineProps({
        reviews: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <div class="review-container">
        <h3>Reviews</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">{{ review.name }} gave this {{ review.rating }} stars.
                <br/>
                {{ review.review }}
                <br/>
                Does {{ review.name }} recommends this product ? {{ review.recommend }}
            </li>   
        </ul>
    </div>    
</template>
 

 <script>
 export default {
    data () {
        return {

        }
    }    
 }
 </script>