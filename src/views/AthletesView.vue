<script setup>
import CrudList from "../components/CrudList.vue";
import { store, upsert, remove } from "../store/store";

const fields = [
  { key: "name", label: "Name" },
  { key: "sport", label: "Sport" },
  { key: "age", label: "Age", type: "number" },
];
</script>

<template>
  <div class="wrap page">
    <CrudList title="Athletes" :fields="fields" :items="store.athletes"
      @save="(r) => upsert(store.athletes, r)" @remove="(id) => remove(store.athletes, id)" />
  </div>
</template>