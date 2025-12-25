<!-- CountdownTimer.vue -->
<template>
  <div style="background-color: #39B54A;" class="py-12 px-6 font-sans ">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">Starting in</h2>

      <div class="flex gap-6 sm:gap-16 justify-center items-center px-4 sm:px-0">
        <CountdownBox :value="days" label="Days" />
        <CountdownBox :value="hours" label="Hours" />
        <CountdownBox :value="minutes" label="Minutes" />
        <CountdownBox :value="seconds" label="Seconds" />
      </div>

      <div class="absolute inset-x-0 mt-6 flex justify-center">
        <button @click="handleRegister" class="border-4 border-[#39B54A] inline-flex items-center gap-2 bg-white text-green-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
          <i class="fas fa-rocket text-sm sm:text-base md:text-lg" aria-hidden="true"></i>
          REGISTER NOW !
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CountdownBox from './CountdownBox.vue'

const emit = defineEmits(['open-registration'])

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let interval = null

const targetDate = new Date('2026-01-28T00:00:00')

const handleRegister = () => {
  emit('open-registration')
}

const updateTime = () => {
  const now = new Date().getTime()
  const target = targetDate.getTime()
  const difference = target - now

  if (difference <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    clearInterval(interval)
    return
  }

  // Convert milliseconds to days, hours, minutes, seconds
  days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateTime() // Initial call
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>