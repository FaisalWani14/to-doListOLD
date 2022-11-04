<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md bg-image">
      <TodoApp />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TodoApp from "../components/TodoApp.vue";

export default defineComponent({
  name: "IndexPage",
  components: { TodoApp },
});
</script>

<style>
.bg-image {
  background-image: url(https://png.pngtree.com/background/20210709/original/pngtree-fully-simple-watercolor-background-picture-image_916053.jpg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.yellow {
  background-color: white;
}
</style>
