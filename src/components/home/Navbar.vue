<template>
  <div class="w-full">
    <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
                  scrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">

          <!-- Logo + EXIA Text -->
          <div class="flex items-center flex-shrink-0">
            <div class="flex items-center space-x-2">
              <img
                :src="echohackLogo"
                alt="EchoHack Logo"
                class="h-8 sm:h-9 md:h-10 lg:h-12 w-auto transition-all duration-300"
              />
              <div class="flex items-end">
                <span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tighter transition-colors duration-300">
                  EXIA
                </span>
                <span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ml-1 mb-1 transition-colors duration-300">
                  _
                </span>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button - ONLY below md (768px) -->
          <div class="flex md:hidden">
            <button
              @click="isOpen = !isOpen"
              class="p-2 rounded-md text-gray-600 hover:text-[#76c248] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#76c248] transition-colors duration-300"
              aria-label="Open menu"
            >
              <svg class="h-6 w-6" :class="{'hidden': isOpen, 'block': !isOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" :class="{'block': isOpen, 'hidden': !isOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Desktop Navigation - starts at md (768px) -->
          <div class="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#" class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-sm lg:text-base whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105">
              Home
            </a>
            <a href="#" class="text-gray-700 font-medium hover:text-[#76c248] transition-colors text-sm lg:text-base whitespace-nowrap">
              A propos
            </a>
            <a href="#" class="text-gray-700 font-medium hover:text-[#76c248] transition-colors text-sm lg:text-base whitespace-nowrap">
              Programme
            </a>
            <a href="#" class="text-gray-700 font-medium hover:text-[#76c248] transition-colors text-sm lg:text-base whitespace-nowrap">
              Partenaires
            </a>
            <a href="#" class="text-gray-700 font-medium hover:text-[#76c248] transition-colors text-sm lg:text-base whitespace-nowrap">
              Inscription
            </a>
          </div>

        </div>

        <!-- Mobile Dropdown Menu -->
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 transform -translate-y-2"
          enter-to-class="opacity-100 transform translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="isOpen" class="md:hidden">
            <div class="px-2 pt-3 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-lg">
              <a href="#" class="block px-4 py-3 rounded-md text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">Home</a>
              <a href="#" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#76c248] hover:bg-gray-50">A propos</a>
              <a href="#" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#76c248] hover:bg-gray-50">Programme</a>
              <a href="#" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#76c248] hover:bg-gray-50">Partenaires</a>
              <a href="#" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#76c248] hover:bg-gray-50">Inscription</a>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Spacer -->

    <!-- Main Content -->
  
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import echohackLogo from '../../assets/images/ecohackLogo.png'

const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Smooth transitions */
nav {
  transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}
</style>