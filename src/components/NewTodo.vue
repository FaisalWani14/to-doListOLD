<template>
  <span>
    <q-list bordered class="bg-white text-black">
      <q-item v-for="todo in store.todoList" :key="todo.id">
        <q-item-section avatar>
          <q-checkbox :id="todo.id" v-model="todo.completed" color="primary" />
        </q-item-section>
        <q-item-section
          class="text-body1 text-wrap"
          :style="todo.completed ? { textDecoration: 'line-through' } : {}"
        >
          <q-item-label>{{ todo.item }}</q-item-label>
          <q-item-label caption class="text-grey-8">{{
            todo.desc
          }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            icon="delete"
            round
            flat
            color="red"
            @click.stop="store.deleteToDo(todo.id)"
          ></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </span>
</template>

<script>
import { defineComponent } from "vue";
import { useTodoStore } from "../stores/todoList";

const todos = [
  {
    id: 1,
    completed: false,
    todo: "Task Item 1",
    todo_desc: "Task Item 1 Desc",
  },
];
export default defineComponent({
  name: "NewTodo",
  setup() {
    return {
      todos,
      store: useTodoStore(),
    };
  },
});
</script>

<style scoped></style>
