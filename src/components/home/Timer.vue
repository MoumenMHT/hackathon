<!-- CountdownTimer.vue -->
<template>
  <div style="background-color: #39B54A;" class=" py-12 px-6 font-sans">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">Starting in</h2>

      <div class="flex justify-center items-center gap-16 flex-nowrap overflow-x-auto pb-2">
        <CountdownBox :value="days" label="Days" />
        <CountdownBox :value="hours" label="Hours" />
        <CountdownBox :value="minutes" label="Minutes" />
        <CountdownBox :value="seconds" label="Seconds" />
      </div>

     <div class="absolute inset-x-0 mt-6  flex justify-center">
        <button class=" border-4 border-[#39B54A] inline-flex items-center gap-2 bg-white text-green-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
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

// Start from: 80 days, 10 hours, 50 minutes, 33 seconds
const totalSeconds = ref(80 * 24 * 3600 + 10 * 3600 + 50 * 60 + 33)

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let interval = null

const updateTime = () => {
  if (totalSeconds.value <= 0) {
    clearInterval(interval)
    return
  }

  totalSeconds.value--

  days.value = Math.floor(totalSeconds.value / (24 * 3600))
  hours.value = Math.floor((totalSeconds.value % (24 * 3600)) / 3600)
  minutes.value = Math.floor((totalSeconds.value % 3600) / 60)
  seconds.value = totalSeconds.value % 60
}

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>