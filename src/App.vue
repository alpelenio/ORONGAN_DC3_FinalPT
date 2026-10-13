<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="site">
    <NavBar />
    <main><router-view /></main>
    <footer>
      <div class="wrap">© 2026 AthleteTrack · Athlete Training Routine Scheduling and Monitoring System</div>
    </footer>
  </div>
</template>