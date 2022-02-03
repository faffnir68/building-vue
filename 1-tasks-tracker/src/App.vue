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
      tasks: [] as any[],
      showAddTask: false
    }
  },
  async created () {
    this.tasks = await this.fetchTasks()
  },
  methods: {
    deleteTask (id: number) {
      this.tasks = this.tasks.filter((task: any) => task.id !== id)
    },
    toggleReminder (id: number) {
      this.tasks = this.tasks.map((task: any) => task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    async addTask (task: any[]) {
      const res = await fetch("/api/tasks", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()


      this.tasks = [...this.tasks, data]
    },
    toggleAddTask () {
      this.showAddTask = !this.showAddTask
    },
    async fetchTasks() {
      const res = await fetch("/api/tasks", {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      return data
    },
    async fetchTask(id: number) {
      const res = await fetch(`/api/tasks/${id}`);
      const data = await res.json();
      return data;
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
