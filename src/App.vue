<template>
  <!-- <div class="flex flex-col h-screen bg-white dark:bg-gray-900"> -->
    <div class="bg-gray-900">
  <div class="flex flex-col h-screen bg-gradient-to-t from-purple-900 to-blue-800">
    <NavigationComp />

    <div>
      <router-view />
    </div>
  </div>
</div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavigationComp from './components/NavigationComp.vue'
</script>