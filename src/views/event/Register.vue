<template>
    <Layout />
  <div class="event-register">
      <p>This is the event register page</p>
      <button @click="register">Register me !</button>
  </div>
</template>

<script>
import Layout from "./Layout.vue";
export default {
    name: "EventRegister",
    props: ['event'],
    inject: ['GStore'],
    components: { Layout },
    methods: {
        register () {

            this.GStore.flashMessage = "You are succefully registered for " + this.event.title

            setTimeout(() => {
                this.GStore.flashMessage = ""
            }, 3000)

            this.$router.push({ name: 'EventDetails', params: { id: this.event.id } })
        }
    }
}
</script>

<style>

</style>