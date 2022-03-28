<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Products from './components/Products.vue'
</script>

<template>
  <div class="product-display">
    <div class="product-container">
  <Products :premium="premium" product="Socks" description="Ce sont des chaussettes." @add-to-cart="updateCart" @remove-from-cart="removeById" />
  <Products :premium="premium" product="Tshirts" description="Ce sont des tshirts." @add-to-cart="updateCart" />
  <Products :premium="premium" product="Cars" description="Ce sont des voiture." @remove-from-cart="removeById" />
        <div class="cart">Cart {{ cart }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [],
      premium: true,
    }
  },
  methods: {
    updateCart (id) {
      this.cart.push(id)
    },
    removeById (id) {
      const index = this.cart.indexOf(id)
      if(index > -1) {
        this.cart.splice(index, 1)
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.product-display {
  display: flex;
  justify-content: center;
}
.product-container {
  display: flex;
  gap: 15px;
  width: 1280px;
  padding: 0 40px;
  margin: auto;
}
</style>
