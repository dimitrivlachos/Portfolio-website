<template>
  <!-- <div class="flex flex-col h-screen bg-white dark:bg-gray-900"> -->
  <div class="bg-gray-800">
    <NavigationComp />

    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavigationComp from './components/NavigationComp.vue'
</script>