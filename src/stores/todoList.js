import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoList", {
  state: () => {
    return {
      id: 0,
      todoList: useStorage("todoList", []),
    };
  },

  actions: {
    addToDo(item, desc) {
      this.todoList.push({
        item,
        desc,
        id: this.id++,
        completed: false,
      });
    },
    deleteToDo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id != itemID;
      });
    },
    toggleComplete(itemID) {
      const todo = this.todoList.find((obj) => obj.id == itemID);
      if (todo) todo.completed = !todo.completed;
    },
  },
});
