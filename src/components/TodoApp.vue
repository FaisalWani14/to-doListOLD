<template>
  <div>
    <h6>To Do List</h6>
    <TodoForm />
    <NewTodo />
  </div>
</template>

<script>
import TodoForm from "../components/TodoForm.vue";
import NewTodo from "../components/NewTodo.vue";

export default {
  name: "TodoApp",
  components: { TodoForm, NewTodo },
};
</script>

<style></style>
