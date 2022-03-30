<template>
  <div v-if="event">
    <nav class="nav-in">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue';
export default {
    name: 'EventLayout',
    props: ['id'],
    data() {
        return {
            event: null
        };
    },
    created() {
      watchEffect(() => {
        EventService.getEvent(this.id)
            .then(response => {
            this.event = response.data
          })
            .catch(error => {
              if(error.response && error.response.status === 404) {
                this.$router.push({ name: "ResourceNotFound", params: { resource: 'event' } })
              }
              else {
                this.$router.push({ name: "NetworkError" })
              }
        })
      })
    },
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