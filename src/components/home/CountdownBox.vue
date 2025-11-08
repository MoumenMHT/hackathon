<!-- components/CountdownBox.vue -->
<template>
  <div class="bg-white rounded-3xl shadow-md w-[213px] h-[213px]  flex flex-col items-center justify-center">
    <span class="text-3xl md:text-5xl font-bold text-green-600">
      {{ String(value).padStart(2, '0') }}
    </span>
    <span class="text-xs md:text-sm text-gray-600 mt-1 font-medium">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: Number,
  label: String
})
</script>