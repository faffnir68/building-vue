<template>
    <form action="" class="review-form" @submit.prevent="onSubmit"> 
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name"> 

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select name="" id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <p>Would you recommend this product ?</p>
        <input type="radio" id="reco" name="recommend" v-model="recommend" value="Yes">
        <label for="reco">Yes</label>
        <br/>
        <input type="radio" id="noreco" name="recommend" v-model="recommend" value="No">
        <label for="noreco">No</label>
        <br/>
        <input type="submit" class="submit" value="Submit">

    </form>
</template>

<script>
export default {
    data () {
        return {
            name: "",
            review: "",
            rating: null,
            recommend: null
        }
    },
    methods: {
        onSubmit () {
            if(this.name === "" || this.review === "" || this.rating === null || this.recommend === null) {{
                alert("Please fill out all the review informations before submitting.")
            }}
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit("review-submitted", productReview)
            this.name = ""
            this.review = ""
            this.rating = null
            this.recommend = null
        }
    }
}
</script>