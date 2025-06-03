<!-- filepath: theme-classic/src/App.vue -->
<template>
  <main>
    <h1>{{ resume.basics.name }}</h1>
    <p>{{ resume.basics.label }}</p>
    <section v-if="resume.work && resume.work.length">
      <h2>Expérience</h2>
      <ul>
        <li v-for="job in resume.work" :key="job.company">
          <strong>{{ job.position }}</strong> chez {{ job.company }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
defineProps<{ resume: any }>();
</script>