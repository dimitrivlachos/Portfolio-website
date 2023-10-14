<template>
    <li>
      <a :href="item.link" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <div class="font-semibold">{{ item.title }}</div>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.description }}</span>
      </a>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
  };
  </script>