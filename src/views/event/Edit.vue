<template>
    <Layout />
  <div class="event-edit">
      <p>This is the event edit page</p>
  </div>
</template>

<script>
import Layout from "./Layout.vue";
export default {
    name: "EventEdit",
    props: ['event'],
    components: { Layout }
}
</script>

<style>

</style>