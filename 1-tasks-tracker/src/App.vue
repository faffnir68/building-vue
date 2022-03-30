<template>
  <div class="main-container">
      <Header @toggle-add-task="toggleAddTask" title="Task Tracker"  :showAddTask="showAddTask" />
      <router-view :showAddTask="showAddTask"></router-view>
      <Footer />
  </div>
</template>

<script>
// import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import Task from './components/Task.vue';



export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      showAddTask: false
    }
  },

  methods: {
    toggleAddTask () {
      this.showAddTask = !this.showAddTask
    },
  }
};
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-container {
  width: 600px;
  border: 1px solid #ccc;
  padding: 15px 0;
}
.tasks-container {

}
</style>
