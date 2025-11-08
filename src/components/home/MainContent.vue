<template>
  <main class="relative w-full min-h-screen bg-gray-50">
    <div class="w-full">
      <!-- Hero Image Section -->
      <div class="relative w-full">
        <div class="aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6] w-full">
          <img 
            :src="mainPic" 
            alt="Main Picture" 
            class=" object-cover object-center" 
          />
        </div>
      </div>

      <div class="h-4 sm:h-6"></div>

      <!-- Content Section -->
      <div class="relative px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="flex flex-col items-center sm:items-start space-y-4 md:space-y-6">
          <img 
            :src="echohackLogo" 
            alt="EchoHack Logo" 
            class="w-[280px] sm:w-[400px] md:w-[600px] lg:w-[888px] h-auto"
          />

          <img 
            :src="cesi2026Logo" 
            alt="CESI 2026 Logo" 
            class="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[489px] h-auto"
          />
          
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-center sm:text-left ml-0 sm:ml-4 md:ml-8">
            Join hundreds of innovators building sustainable solutions.
          </p>

          <!-- Mobile Register Button -->
          <div class="sm:hidden mt-8 flex justify-center w-full">
            <div class="bg-[#39B54A] text-white rounded-full font-medium font-semibold 
              flex items-center justify-center 
              hover:bg-[#2d8c3a] transition-colors duration-300
              w-[280px] h-[60px]">
              <div class="flex items-center gap-2">
                <i class="fas fa-rocket text-sm" aria-hidden="true"></i>
                <p class="text-sm font-medium text-white">REGISTER NOW !</p>
              </div>
            </div>
          </div>
        </div>
          
        <!-- Desktop Register Button -->
        <div class="hidden sm:flex bg-[#39B54A] text-white absolute 
          sm:top-8 sm:right-8 
          md:top-16 md:right-16 
          lg:top-20 lg:right-20 
          rounded-full font-medium font-semibold 
          items-center justify-center 
          hover:bg-[#2d8c3a] transition-colors duration-300
          sm:w-[250px] sm:h-[70px]
          md:w-[300px] md:h-[80px]
          lg:w-[343.67px] lg:h-[94px]">
          <div class="flex items-center gap-2 sm:gap-3">
            <i class="fas fa-rocket text-sm sm:text-base md:text-lg" aria-hidden="true"></i>
            <p class="text-sm sm:text-base md:text-lg font-medium text-white">REGISTER NOW !</p>
          </div>
        </div>

      </div>
      
    </div>
  </main>
</template>

<script>
import mainPic from '../../assets/main_pic.PNG'
import echohackLogo from '../../assets/images/ecohackLogo.png'
import cesi2026Logo from '../../assets/images/CESi2026.png'

export default {
  name: 'MainContent',
  data() {
    return {
      mainPic,
      echohackLogo,
      cesi2026Logo
    }
  }
}
</script>