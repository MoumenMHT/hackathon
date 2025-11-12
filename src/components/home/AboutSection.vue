<template>
  <div class="bg-white py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
        What is EcoHack?
      </h2>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Column - Text -->
        <div class="space-y-6">
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            EcoHack CESI is much more than just a hackathon. It's an innovation catalyst that brings together the brightest minds to tackle the most pressing environmental challenges of our time.
          </p>
          
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            In 48 intensive hours, we create a unique ecosystem where creativity, technology, and environmental consciousness meet to give birth to concrete and sustainable solutions. Our mission is to demonstrate that technological innovation can be a powerful lever for ecological transition.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3 md:gap-4 mt-8">
            <div class="bg-[#39B54A] rounded-xl md:rounded-2xl p-4 md:p-6 text-center text-white shadow-lg">
              <i class="fas fa-users text-2xl md:text-3xl mb-2"></i>
              <div class="text-2xl md:text-3xl font-bold">40</div>
              <div class="text-xs md:text-sm font-medium mt-1">Participants</div>
            </div>
            
            <div class="bg-[#39B54A] rounded-xl md:rounded-2xl p-4 md:p-6 text-center text-white shadow-lg">
              <i class="fas fa-project-diagram text-2xl md:text-3xl mb-2"></i>
              <div class="text-2xl md:text-3xl font-bold">3</div>
              <div class="text-xs md:text-sm font-medium mt-1">Projects</div>
            </div>
            
            <div class="bg-[#39B54A] rounded-xl md:rounded-2xl p-4 md:p-6 text-center text-white shadow-lg">
              <i class="fas fa-clock text-2xl md:text-3xl mb-2"></i>
              <div class="text-2xl md:text-3xl font-bold">48</div>
              <div class="text-xs md:text-sm font-medium mt-1">Hours</div>
            </div>
          </div>
        </div>

        <!-- Right Column - 3D Graphic -->
        <div class="flex justify-center">
          <div class="relative w-full max-w-sm md:max-w-md">
            <img 
              :src= "mainPic"
              alt="EcoHack 3D Graphic" 
              class="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <!-- Register Button -->
      <div class="flex justify-center mt-12">
        <button class="bg-[#39B54A] inline-flex items-center gap-2 text-white font-semibold py-3 px-6 md:px-8 rounded-xl shadow-lg hover:bg-[#2d8c3a] transition transform hover:scale-105 text-sm md:text-base">
          <i class="fas fa-rocket text-base md:text-lg" aria-hidden="true"></i>
          REGISTER NOW
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mainPic from '../../assets/images/ecohack.png'

export default {
  name: 'AboutSection',
  data() {
    return {
      mainPic,
      
    }
  }
}
</script>
