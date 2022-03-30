<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev" class="prev" v-if="page > 1">Previous</router-link>
      <router-link :to="{ name: 'EventList', query: { page: page } }" v-for="page in pagesNb" :key="page">{{ page }}</router-link>
      <router-link :to="{ name: 'EventList', query: { page: page + 1 } }" rel="next" class="next" v-if="hasMoreEvents">Next</router-link>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      perPage: 2,
      eventNb: null,
      pagesNb: null
    }
  },
  created() {
    watchEffect(() => {
      EventService.getEvents(this.perPage, this.page)
      .then(response => {
        this.events = response.data 
        this.eventNb = response.headers['x-total-count']
        this.pagesNb = Math.ceil(this.eventNb / this.perPage)
      })
      .catch((error) => {
        if(error.response && error.response.status == 404) {
          this.$router.push({ name: "ResourceNotFound", params: { resource: 'event' } })
        }
        else {
          this.$router.push({ name: "NetworkError" })
        }
    })
  })
  },
  computed: {
    hasMoreEvents () {
      return Math.ceil(this.eventNb / this.perPage) > this.page
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: space-between;
  width: 250px;
  flex: 1;
}
.prev {
  text-align: left;
}
.next {
  text-align: right;
}
</style>
