<template>
  <div 
    class="relative flex flex-col items-center"
    :class="[highlighted ? 'col-span-2' : '']"
  >
    <!-- Timeline Card -->
    <div 
      class="relative rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md w-full max-w-[140px]"
      :class="[
        highlighted ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white max-w-[280px]' : 'border-gray-200'
      ]"
    >
      <!-- Time Badge -->
      <div 
        class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
        :class="[highlighted ? 'bg-yellow-400' : 'bg-green-500']"
      >
        {{ time }}
      </div>

      <!-- Content -->
      <div class="mt-3 flex flex-col items-center text-center">
        <!-- Icon -->
        <div 
          class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg"
          :class="[highlighted ? 'bg-yellow-100 text-yellow-600' : 'bg-green-50 text-green-600']"
        >
          <slot name="icon">
            <component :is="iconComponent" class="h-5 w-5" />
          </slot>
        </div>

        <!-- Title -->
        <h4 class="text-sm font-medium text-gray-800">{{ title }}</h4>

        <!-- Description (for highlighted cards) -->
        <p v-if="description" class="mt-1 text-xs text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  time: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'default'
  },
  description: {
    type: String,
    default: ''
  },
  highlighted: {
    type: Boolean,
    default: false
  }
})

const iconComponent = computed(() => props.icon)
</script>
