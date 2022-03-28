<template>
  <Layout />
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import Layout from './Layout.vue'
export default {
  name: "EventDetails",
  components: { Layout },
  props: ['event']
}
</script>

<style scoped>
.nav-in {
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin: auto; 
}
.nav-in a {
  color: #42B983;
  font-weight: bold;
}
.nav-in a:hover {
  color: #333;
}
</style>