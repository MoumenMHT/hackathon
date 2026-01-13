<template>
  <div 
    class="flex flex-col items-center justify-center rounded-xl bg-green-500 p-6 text-center text-white shadow-lg transition-transform hover:scale-105"
    role="article"
    :aria-label="`${value} ${label}`"
  >
    <!-- Icon -->
    <div class="mb-3 flex h-12 w-12 items-center justify-center">
      <slot name="icon" />
    </div>

    <!-- Value -->
    <div class="text-2xl font-bold md:text-3xl">{{ value }}</div>

    <!-- Label -->
    <div class="mt-1 text-sm font-medium opacity-90">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>
