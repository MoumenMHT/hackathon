<template>
  <main class="relative w-full  bg-gray-50 overflow-hidden ">
    <!-- Hero Image -->
    <div class="relative w-full">
      <div class="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[21/9] lg:aspect-[16/6] xl:aspect-[21/8]">
        <img
          :src="mainPic"
          alt="Hackathon hero background"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </div>

    <div class="h-10 sm:h-24"></div>

    <!-- Content -->
    <div class="relative  ">
      <div class="max-w-7xl ml-2 mx-auto">

        <!-- MAIN CONTENT: CENTER on mobile, RIGHT on desktop -->
        <div class="flex flex-col  
                    items-center sm:items-start
                    pl- sm:pl-8 md:pl-16 lg:pl-20 xl:pl-24
                    gap-6 md:gap-8 lg:gap-10
                    text-center sm:text-left
                    ">

          <!-- EchoHack Logo -->
          <img
            :src="echohackLogo"
            alt="EchoHack Logo"
            class="w-64 sm:w-[26rem] md:w-[28rem] lg:w-[42rem] xl:w-[55rem] h-auto drop-shadow-2xl"
          />

          <!-- CESI 2026 Logo -->
          <img
            :src="cesi2026Logo"
            alt="CESI 2026 Logo"
            class="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[30rem] h-auto drop-shadow-xl"
          />

          <!-- Text -->
          <p class="text-center 
                    text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                    font-medium text-gray-800 max-w-3xl leading-relaxed">
            Join hundreds of innovators building sustainable solutions.
          </p>

          <!-- Mobile Button — centered on mobile -->
          <div class="sm:hidden mt-12">
            <button class="group flex items-center gap-3 bg-[#39B54A] hover:bg-[#2d8c3a] 
                           text-white font-bold rounded-full px-12 py-6 shadow-2xl 
                           transition-all duration-300 hover:scale-105">
              <i class="fas fa-rocket text-2xl"></i>
              <span class="text-xl tracking-wider">REGISTER NOW !</span>
            </button>
          </div>
        </div>

        <!-- Desktop Floating Button — safe position, no overlap -->
        <div class="hidden sm:block absolute 
            top-20 sm:top-20 md:top-24 lg:top-26 xl:top-44 
            right-4 sm:right-6 md:right-10 lg:right-16 xl:right-20 
            z-30 
            transition-all duration-700 ease-out
            scale-100          <!-- default size -->
            sm:scale-95        <!-- on tablet: shrink to 95% -->
            md:scale-90        <!-- on small laptop: shrink to 90% -->
            lg:scale-100       <!-- on big laptop: back to 100% -->
            xl:scale-105">     <!-- on huge screen: even bigger! -->
          <button class="group flex items-center gap-4 bg-[#39B54A] hover:bg-[#2d8c3a] 
                         text-white font-bold rounded-full shadow-2xl 
                         transition-all duration-300 hover:scale-110 
                         px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 lg:px-14 lg:py-8">
            <i class="fas fa-rocket text-xl sm:text-2xl md:text-3xl lg:text-4xl"></i>
            <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
              REGISTER NOW !
            </span>
          </button>
        </div>

      </div>
    </div>    <div class="h-10 sm:h-24"></div>

  </main>
</template>

<script setup>
import mainPic from '../../assets/main_pic.png'
import echohackLogo from '../../assets/images/ecohackLogo.png'
import cesi2026Logo from '../../assets/images/CESi2026.png'
</script>