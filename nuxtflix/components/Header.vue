<template>
  <div
    class="relative max-w-7xl mx-auto bg-transparent p-4 flex justify-between top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75"
  >
    <div class="">
      <img class="h-10" src="logo.png" />
    </div>
    <div class="flex items-center">
      <select
        class="px-3 py-1 mr-5 form-select block font-normal bg-transparent text-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        <option>English</option>
        <option>Otarianos</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HeaderComponent',
  setup() {},
})
</script>
