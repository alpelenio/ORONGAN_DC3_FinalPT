<script setup>
import { store } from "../store/store";
</script>

<template>
  <div>
    <section class="hero">
      <div class="wrap">
        <h1>Plan, schedule and monitor every athlete's training.</h1>
        <p>AthleteTrack is the Athlete Training Routine Scheduling and Monitoring System — one place for coaches to manage athletes, weekly routines and progress.</p>
        <div class="row">
          <router-link class="btn light" to="/schedule">View Schedule</router-link>
          <router-link class="btn ghost" to="/athletes">Manage Athletes</router-link>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="wrap">
        <h2 class="sec">Features</h2>
        <p class="sub">Everything you need to run a training program.</p>
        <div class="grid">
          <div class="card"><div class="ic">👤</div><h3>Athlete Profiles</h3><p>Keep athlete names, sports and ages organized.</p></div>
          <div class="card"><div class="ic">📋</div><h3>Training Schedule</h3><p>Assign sessions by day and time, and track their status.</p></div>
          <div class="card"><div class="ic">📈</div><h3>Progress Monitoring</h3><p>Log performance metrics and review improvement.</p></div>
        </div>
      </div>
    </section>

    <section class="block" style="padding-top: 0">
      <div class="wrap">
        <div class="grid">
          <div class="card stat"><b>{{ store.athletes.length }}</b><span>Athletes</span></div>
          <div class="card stat"><b>{{ store.sessions.length }}</b><span>Training sessions</span></div>
          <div class="card stat"><b>{{ store.logs.length }}</b><span>Progress logs</span></div>
        </div>
      </div>
    </section>
  </div>
</template>