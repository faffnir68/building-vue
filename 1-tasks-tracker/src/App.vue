<template>
  <div class="main-container">
      <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
      <div class="add-task-container" v-show="showAddTask">
        <AddTask @add-task="addTask" />
      </div>
    <div class="tasks-container">
        <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tasks from './components/Tasks.vue';
import Header from './components/Header.vue';
import AddTask from './components/AddTask.vue';
// import Task from './components/Task.vue';



export default defineComponent({
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
    // Task
  },
  data () {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  created () {
    this.tasks = [
        {
          id: 1,
          text: 'test 1',
          date: "Jeudi 3 janvier a 20h30",
          reminder: true
        },
        {
          id: 2,
          text: 'test 2',
          date: "Jeudi 3 janvier a 20h30",
          reminder: true
        },
        {
          id: 3,
          text: 'test 3',
          date: "Jeudi 3 janvier a 20h30",
          reminder: false
        },
      ]
  },
  methods: {
    deleteTask (id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    toggleReminder (id) {
      this.tasks = this.tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    addTask (task) {
      this.tasks = [...this.tasks, task]
    },
    toggleAddTask () {
      this.showAddTask = !this.showAddTask
    }
  }
});
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
