<template>
  <div class="bg-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Green Separator -->
      <div class="flex justify-center mb-12">
        <div class="h-1 w-32 md:w-48 bg-[#39B54A] rounded-full"></div>
      </div>

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        Join the EcoHack Revolution
      </h2>
      
      <p class="text-gray-600 text-base md:text-lg mb-8 px-4">
        Be part of the sustainable innovation movement.
      </p>

      <button @click="handleRegister" class="bg-[#39B54A] inline-flex items-center gap-2 text-white font-semibold py-3 md:py-4 px-8 md:px-10 rounded-xl shadow-lg hover:bg-[#2d8c3a] transition transform hover:scale-105 text-base md:text-lg">
        <i class="fas fa-rocket text-lg md:text-xl"></i>
        REGISTER NOW
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTASection',
  emits: ['open-registration'],
  methods: {
    handleRegister() {
      this.$emit('open-registration')
    }
  }
}
</script>
