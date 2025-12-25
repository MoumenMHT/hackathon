<template>
  <main class="relative w-full min-h-screen bg-white overflow-hidden">
    <!-- Background Image with Blur -->
    <div class="absolute inset-0">
      <img 
        src="/bg.jpg" 
        alt="Background" 
        class="w-full h-full object-cover opacity-30 blur-sm"
      />
      <div class="absolute inset-0 bg-white/60"></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse-slowest"></div>
      
      <!-- Animated Grid -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0">
        <div v-for="i in 20" :key="i" 
             :class="`absolute w-1 h-1 md:w-2 md:h-2 bg-green-500/20 rounded-full animate-float-${(i % 3) + 1}`"
             :style="{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`
             }"></div>
      </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
      <div class="max-w-7xl w-full mx-auto">
        
        <!-- Hero Content -->
        <div class="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          
          <!-- Badge -->
          <div class="animate-fade-in-down mt-8 sm:mt-12 md:mt-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
              <span class="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
              </span>
              <span class="text-xs sm:text-sm md:text-base font-semibold text-green-600 tracking-wide">REGISTRATION ARE OPEN</span>
            </div>
          </div>

          <!-- Main Logo with Enhanced Animation -->
          <div class="animate-fade-in-up animation-delay-200 w-full max-w-5xl">
            <img
              :src="echohackLogo"
              alt="EchoHack Logo"
              class="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] h-auto mx-auto drop-shadow-[0_0_50px_rgba(57,181,74,0.3)] hover:drop-shadow-[0_0_80px_rgba(57,181,74,0.5)] transition-all duration-500 hover:scale-105"
            />
          </div>

          <!-- CESI 2026 Logo -->
          <div class="animate-fade-in-up animation-delay-400">
            <img
              :src="cesi2026Logo"
              alt="CESI 2026 Logo"
              class="w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[450px] h-auto mx-auto drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <!-- Hero Text -->
          <div class="animate-fade-in-up animation-delay-600 max-w-4xl">
            <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Join <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Hundreds of Innovators</span>
              <br class="hidden sm:block" />
              Building Sustainable Solutions
            </h1>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Shape the future with cutting-edge technology. Network with industry leaders. Win amazing prizes.
            </p>
          </div>

          <!-- Stats Bar -->
          <div class="animate-fade-in-up animation-delay-800 w-full max-w-3xl">
            <div class="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 bg-gray-50 backdrop-blur-md border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
              <div class="text-center transform hover:scale-110 transition-transform duration-300">
                <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 mb-1 sm:mb-2">+40</div>
                <div class="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Participants</div>
              </div>
              <div class="text-center transform hover:scale-110 transition-transform duration-300">
                <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600 mb-1 sm:mb-2">48h</div>
                <div class="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Non-Stop</div>
              </div>
              <div class="text-center transform hover:scale-110 transition-transform duration-300">
                <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-1 sm:mb-2">+30K</div>
                <div class="text-xs sm:text-sm md:text-base text-gray-600 font-medium">DZD Prizes</div>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="animate-fade-in-up animation-delay-1000 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <!-- Primary Button -->
            <button @click="handleRegister" 
                    class="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 shadow-2xl shadow-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-green-500/70">
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span class="relative flex items-center justify-center gap-3">
                <i class="fas fa-rocket text-lg sm:text-xl md:text-2xl animate-bounce-subtle"></i>
                <span class="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide">REGISTER NOW</span>
                <i class="fas fa-arrow-right text-lg sm:text-xl md:text-2xl group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </button>

            <!-- Secondary Button -->
            <button @click="handleLearnMore"
                    class="group w-full sm:w-auto bg-gray-100 hover:bg-gray-200 backdrop-blur-md border border-gray-300 hover:border-gray-400 text-gray-900 font-semibold rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 transition-all duration-300 hover:scale-105 shadow-lg">
              <span class="flex items-center justify-center gap-3 text-base sm:text-lg md:text-xl">
                <i class="fas fa-info-circle group-hover:rotate-12 transition-transform duration-300"></i>
                <span>Learn More</span>
              </span>
            </button>
          </div>

          <!-- Social Proof -->
          <div class="animate-fade-in-up animation-delay-1200 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-8">
            <div class="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
              <i class="fas fa-check-circle text-green-500"></i>
              <span>Mentors Available</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
              <i class="fas fa-check-circle text-green-500"></i>
              <span>Free Food & Drinks</span>
            </div>
            <div class="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
              <i class="fas fa-check-circle text-green-500"></i>
              <span>Networking Events</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import echohackLogo from '../../assets/images/ecohackLogo.png'
import cesi2026Logo from '../../assets/images/CESi2026.png'

const emit = defineEmits(['open-registration'])

const handleRegister = () => {
  emit('open-registration')
}

const handleLearnMore = () => {
  // Add your learn more logic here
  console.log('Learn more clicked')
}
</script>

<style scoped>
/* Custom Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-25px, 25px) rotate(120deg);
  }
  66% {
    transform: translate(25px, -25px) rotate(240deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(20px, 30px) rotate(120deg);
  }
  66% {
    transform: translate(-30px, -20px) rotate(240deg);
  }
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

@keyframes pulseSlower {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.08);
  }
}

@keyframes pulseSlowest {
  0%, 100% {
    opacity: 0.15;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

@keyframes bounceSubtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

.animation-delay-800 {
  animation-delay: 0.8s;
  opacity: 0;
}

.animation-delay-1000 {
  animation-delay: 1s;
  opacity: 0;
}

.animation-delay-1200 {
  animation-delay: 1.2s;
  opacity: 0;
}

.animate-float-1 {
  animation: float1 10s ease-in-out infinite;
}

.animate-float-2 {
  animation: float2 12s ease-in-out infinite;
}

.animate-float-3 {
  animation: float3 14s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 8s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulseSlower 10s ease-in-out infinite;
}

.animate-pulse-slowest {
  animation: pulseSlowest 12s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s ease-in-out infinite;
}

/* Responsive Utilities */
@media (max-width: 640px) {
  .animate-float-1,
  .animate-float-2,
  .animate-float-3 {
    animation-duration: 8s;
  }
}
</style>