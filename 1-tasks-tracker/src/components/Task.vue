<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{ task.text }}</h3>
        <i class="fas fa-times" @click="$emit('delete-task', task.id)"></i>
        <p>{{ task.date }}</p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    // methods: {
    //     deleteTask (id) {
    //         this.$emit('delete-task', id)
    //     }
    // },
}
</script>

<style>
    .task {
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 5px;
        position: relative;
    }
    h3 {
        font-weight: bold;
    }
    p {
        font-size: 14px;
    }
    i {
        position: absolute;
        left: auto;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #ff0000;
        font-size: 24px;
        cursor: pointer;
    }
    .reminder {
        border-left: 3px solid green;
    }
</style>