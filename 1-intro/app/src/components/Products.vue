<script setup>
import { ref } from 'vue'
import ReviewForm from './ReviewForm.vue'
import ReviewList from './ReviewList.vue'

defineProps({
  product: String,
  description: String,
  premium: {
    type: Boolean,
    required: true
  }
})

</script>

<template>

      <div class="product-image">
          <img :class="[inventory === 0 ? 'out-of-stock' : '']" v-bind:src="image">
      </div>
      <div class="product">
        <h1>{{ title }}</h1>
        <p v-if="onSale">{{ saleMessage }}</p>
        <!-- <p v-show="!onSale">Not on sale</p>  -->
        <p>Shipping : {{ shipping }}</p>
        <p v-if="inStock">In stock</p>
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock</p> -->
        <p v-else>Out of stock</p>
        <h5>Details</h5>
        <ul>
          <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
        <h5>Colors</h5>
        <ul>
          <li class="color-circle" :style="{backgroundColor: variant.color }" v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"></li>
        </ul>
        <button class="add-cart-btn" :class="{ disabledButton: inStock === false }" :disabled="inStock === false" @click="addToCart">Add to cart</button>  
        <button class="remove-cart-btn" @click="removeFromCart">Remove from cart</button>
        <review-form @review-submitted="addReview"></review-form>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      </div>
</template>

<script>
export default {
  components: { ReviewForm, ReviewList },
  data() {
    return {
      products: "Socks",
      selectedVariant: 0,
      inventory: 1,
      brand: "Vue Mastery",
      title: "Socks",
      onSale: true,
      details: ["50% cotton", "70% polyester", "100% wool"],
      variants: [
        {id: 2291, color: "blue", image: "../src/assets/images/socks_blue.jpg", quantity: 0},
        {id: 2292, color: "green", image: "../src/assets/images/socks_green.jpg", quantity: 8},
      ],
      reviews: []
    }
  },  
  methods: {
    addToCart () {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id)
    },
    removeFromCart () {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id)
    },
    updateVariant (index) {
      this.selectedVariant = index
    },
    addReview (review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title () {
      return this.brand + ' ' + this.title
    },
    image () {
      return this.variants[this.selectedVariant].image
    },
    inStock () {
      return this.variants[this.selectedVariant].quantity
    },
    saleMessage () {
      if(this.onSale === true) {
        return this.brand + ' ' + this.title + ' is on sale'
      }
      return ''
    },
    shipping () {
      if(this.premium) {
        return "Free delivery"
      }
      return "2.99 euros"
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
ul {
  margin: 0;
  padding: 0 0 0 15px;
  list-style: none;
}
a {
  color: #42b983;
}
button {
  cursor: pointer;
}
.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}
.disabledButton {
  background-color: red;
  cursor: not-allowed;
}
.active-class {
  background: blue;
  color: #fff;
}

.product-image {
  width: 50%;
  border: 1px solid #ddd;
  padding: 15px;
  background: #d8d8d8;
}
.product {
  width: 50%;
  border: 1px #ccc dotted;
  text-align: left;
  padding: 15px;
}
.add-cart-btn {
  margin-top: 20px;
  height: 40px;
  width: 200px;
  border: 1px solid #ccc;
  background: darkgoldenrod;
  color: #fff;
  font-size: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.color-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-top: 8px;
}
</style>
