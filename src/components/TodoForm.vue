<template>
  <q-select
    v-model="lang"
    :options="langoptions"
    label="Choose Language"
    filled
  />
  <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
    <div>
      <q-input v-model="todo" type="text" :label="$t('inputLabel')" />
    </div>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input v-model="desc" filled type="textarea" :label="$t('descLabel')" />
    </div>
    <div>
      <q-btn :label="$t('addBtn')" type="submit" color="primary" />
      <q-btn
        :label="$t('resetBtn')"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm"
      />
    </div>
  </q-form>
</template>

<script>
import { useTodoStore } from "../stores/todoList";

const langoptions = [
  { value: "en-US", label: "English" },
  { value: "th", label: "Thai" },
];

export default {
  name: "TodoForm",
  data() {
    return {
      todo: "",
      desc: "",
      store: useTodoStore(),
      langoptions,
      lang: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.todo.length == 0) return;
      this.store.addToDo(this.todo, this.desc);
      this.todo = "";
      this.desc = "";
    },
    onReset() {
      this.todo = "";
      this.desc = "";
    },
  },
  watch: {
    lang() {
      this.$i18n.locale = this.lang.value;
      import(`src/i18n/${this.lang.value}`).then((language) => {
        this.$q.lang.set(language.default);
      });
    },
  },
};
</script>

<style></style>
