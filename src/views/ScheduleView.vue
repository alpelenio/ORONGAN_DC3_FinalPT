<script setup>
import { computed } from "vue";
import CrudList from "../components/CrudList.vue";
import { store, upsert, remove, athleteOptions } from "../store/store";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => ({ v: d, t: d }));
const statuses = ["Upcoming", "Done", "Missed"].map((s) => ({ v: s, t: s }));

const fields = computed(() => [
  { key: "title", label: "Training" },
  { key: "athleteId", label: "Athlete", options: athleteOptions() },
  { key: "day", label: "Day", options: days },
  { key: "time", label: "Time", type: "time" },
  { key: "status", label: "Status", options: statuses },
]);
</script>

<template>
  <div class="wrap page">
    <CrudList title="Schedule" :fields="fields" :items="store.sessions"
      @save="(r) => upsert(store.sessions, r)" @remove="(id) => remove(store.sessions, id)" />
  </div>
</template>