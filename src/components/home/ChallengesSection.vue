<template>
  <div class="bg-white py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Green Separator -->
      <div class="flex justify-center mb-12">
        <div class="h-1 w-32 md:w-48 bg-[#39B54A] rounded-full"></div>
      </div>

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
        Three Challenges, Thousand Possibilities
      </h2>
      
      <p class="text-center text-gray-600 text-base md:text-lg mb-12 max-w-3xl mx-auto px-4">
        Explore our three main themes and discover how your creativity can contribute to a more sustainable future.
      </p>

      <!-- Challenges Grid -->
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
  <!-- Challenge 1: Sustainable Agriculture -->
  <div class="border-4 border-[#39B54A] rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
    <div class="mb-4 md:mb-6">
      <i class="fas fa-seedling text-[#39B54A] text-4xl md:text-5xl"></i>
    </div>
    
    <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
      Sustainable Agriculture & Agroecology
    </h3>
    
    <p class="text-gray-600 text-sm md:text-base mb-6 flex-grow">
      Revolutionize agriculture with smart technologies that optimize yields while preserving biodiversity and natural resources.
    </p>
    
    <!-- Image Container - Fixed height, relative, overflow hidden -->
    <div class="relative rounded-2xl overflow-hidden h-40 md:h-48 mt-auto">
      <img 
        :src="SustainableAgriculture" 
        alt="Sustainable Agriculture" 
        class="absolute inset-x-0 bottom-0 w-full h-auto object-cover object-bottom"
      />
    </div>
  </div>

  <!-- Challenge 2: Smart Waste Management -->
  <div class="border-4 border-[#39B54A] rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
    <div class="mb-4 md:mb-6">
      <i class="fas fa-recycle text-[#39B54A] text-4xl md:text-5xl"></i>
    </div>
    
    <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
      Smart Waste Management
    </h3>
    
    <p class="text-gray-600 text-sm md:text-base mb-6 flex-grow">
      Transform the waste challenge into opportunity with circular economy solutions.
    </p>
    
    <div class="relative rounded-2xl overflow-hidden h-40 md:h-48 mt-auto">
      <img 
        :src="SmartWasteManagement"
        alt="Smart Waste Management" 
        class="absolute inset-x-0 bottom-0 w-full h-auto object-cover object-bottom"
      />
    </div>
  </div>

  <!-- Challenge 3: Smart Energy Management -->
  <div class="border-4 border-[#39B54A] rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
    <div class="mb-4 md:mb-6">
      <i class="fas fa-bolt text-[#39B54A] text-4xl md:text-5xl"></i>
    </div>
    
    <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
      Smart Energy Management
    </h3>
    
    <p class="text-gray-600 text-sm md:text-base mb-6 flex-grow">
      Create tomorrow's energy networks with smart grid solutions, intelligent storage, and consumption optimization.
    </p>
    
    <div class="relative rounded-2xl overflow-hidden h-40 md:h-48 mt-auto">
      <img 
        :src="SmartEnergyManagement"
        alt="Smart Energy Management" 
        class="absolute inset-x-0 bottom-0 w-full h-auto object-cover object-bottom"
      />
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
import SustainableAgriculture from '../../assets/images/sustainableAgriculture.png'
import SmartWasteManagement from '../../assets/images/smartWasteManagement.png'
import SmartEnergyManagement from '../../assets/images/smartEnergyManagement.png'

export default {
  name: 'ChallengesSection',
  data() {
    return {
      SustainableAgriculture,
      SmartWasteManagement,
      SmartEnergyManagement
    }
  }

}
</script>
