<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onErrorCaptured } from 'vue';
import events from './components/events/events.vue';

const error = ref(null);

onErrorCaptured(e => {
  error.value = e;
  return true;
});
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="error">
      {{ error }}
    </div>
    <Suspense v-else>
      <template #default>
        <events msg="Increase capacity to book on your event and click on Book button" />
      </template>
      <template #fallback>
        <div>Loading... (2 seconds)</div>
      </template>
    </Suspense>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
