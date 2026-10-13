<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  title: String,
  fields: Array,
  items: Array,
});
const emit = defineEmits(["save", "remove"]);

const q = ref("");
const form = ref(null);

const show = (f, r) =>
  f.options ? (f.options.find((o) => o.v == r[f.key]) || {}).t || "—" : r[f.key];

const filtered = computed(() =>
  props.items.filter((r) =>
    props.fields.some((f) => String(show(f, r)).toLowerCase().includes(q.value.toLowerCase()))
  )
);

function add() {
  form.value = {};
  props.fields.forEach((f) => (form.value[f.key] = f.options ? f.options[0].v : ""));
}
const edit = (r) => (form.value = { ...r });

function save() {
  const ok = props.fields.every((f) => String(form.value[f.key]).trim() !== "");
  if (!ok) return alert("Please fill in all fields.");
  emit("save", form.value);
  form.value = null;
}
function del(r) {
  if (confirm("Delete this record?")) emit("remove", r.id);
}
</script>

<template>
  <div>
    <div class="head">
      <h2>{{ title }}</h2>
      <button class="btn" @click="add">＋ Add New</button>
    </div>
    <input class="in" v-model="q" placeholder="🔍 Search..." />

    <div class="tbl">
      <table>
        <thead>
          <tr>
            <th v-for="f in fields" :key="f.key">{{ f.label }}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in filtered" :key="r.id">
            <td v-for="f in fields" :key="f.key">{{ show(f, r) }}</td>
            <td class="acts">
              <button class="btn sm ghost" @click="edit(r)">Edit</button>
              <button class="btn sm del" @click="del(r)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!filtered.length" class="empty">No records found.</div>
    </div>

    <div class="modal" v-if="form" @click.self="form = null">
      <div class="sheet">
        <h3 style="margin-bottom: 14px">{{ form.id ? "Edit" : "Add" }} {{ title }}</h3>
        <div v-for="f in fields" :key="f.key">
          <label>{{ f.label }}</label>
          <select v-if="f.options" class="in" v-model="form[f.key]">
            <option v-for="o in f.options" :key="o.v" :value="o.v">{{ o.t }}</option>
          </select>
          <input v-else class="in" :type="f.type || 'text'" v-model="form[f.key]" />
        </div>
        <div class="row">
          <button class="btn ghost" @click="form = null">Cancel</button>
          <button class="btn" @click="save">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>