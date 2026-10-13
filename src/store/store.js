import { reactive, watch } from "vue";

const load = () => {
  try { return JSON.parse(localStorage.getItem("athletetrack")); } catch (e) { return null; }
};

export const store = reactive(load() || {
  athletes: [
    { id: 1, name: "Juan Dela Cruz", sport: "Sprinting", age: 19 },
    { id: 2, name: "Maria Santos", sport: "Swimming", age: 21 },
  ],
  sessions: [
    { id: 1, athleteId: 1, title: "Sprint Intervals", day: "Mon", time: "16:00", status: "Upcoming" },
  ],
  logs: [
    { id: 1, athleteId: 1, date: "2026-10-10", metric: "100m time (s)", value: "11.4" },
  ],
});

watch(store, (v) => {
  try { localStorage.setItem("athletetrack", JSON.stringify(v)); } catch (e) {}
}, { deep: true });

// CREATE + UPDATE
export function upsert(list, rec) {
  const i = list.findIndex((x) => x.id === rec.id);
  if (i >= 0) list[i] = rec;
  else list.push({ ...rec, id: Date.now() });
}

// DELETE
export function remove(list, id) {
  const i = list.findIndex((x) => x.id === id);
  if (i >= 0) list.splice(i, 1);
}

export const athleteOptions = () =>
  store.athletes.map((a) => ({ v: a.id, t: a.name }));