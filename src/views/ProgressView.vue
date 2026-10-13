<script setup>
import { computed } from "vue";
import CrudList from "../components/CrudList.vue";
import { store, upsert, remove, athleteOptions } from "../store/store";

const fields = computed(() => [
  { key: "metric", label: "Metric" },
  { key: "athleteId", label: "Athlete", options: athleteOptions() },
  { key: "value", label: "Value" },
  { key: "date", label: "Date", type: "date" },
]);
</script>

<template>
  <div class="wrap page">
    <CrudList title="Progress" :fields="fields" :items="store.logs"
      @save="(r) => upsert(store.logs, r)" @remove="(id) => remove(store.logs, id)" />
  </div>
</template>