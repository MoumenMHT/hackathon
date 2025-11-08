<template>
  <div class="bg-white py-16 px-6">
    <div class="max-w-5xl mx-auto">
      <!-- Green Separator -->
      <div class="flex justify-center mb-12">
        <div class="h-1 w-32 md:w-48 bg-[#39B54A] rounded-full"></div>
      </div>

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
        Lieu de l'événement
      </h2>

      <!-- Map Container -->
      <div class="border-4 border-[#39B54A] rounded-3xl overflow-hidden mb-8">
        <div class="relative w-full h-64 md:h-96">
          <!-- Embedded Map -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2825893034087!2d3.0398888!3d36.7538889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb266000f0c17%3A0x5d1e9e4ff4c0c9d8!2sEcole%20d&#39;Ing%C3%A9nieurs%20du%20Monde%20Num%C3%A9rique!5e0!3m2!1sen!2sdz!4v1234567890"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
          ></iframe>
        </div>
        
        <!-- Location Details -->
        <div class="bg-white p-6 md:p-8 text-center">
          <div class="mb-4">
            <i class="fas fa-map-marker-alt text-[#39B54A] text-2xl md:text-3xl"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            ISSI.Exia.Cési.Algérie
          </h3>
          <p class="text-gray-600 text-base md:text-lg mb-2">
            École d'Ingénieurs du Monde Numérique
          </p>
          <p class="text-gray-600 flex items-center justify-center gap-2 text-sm md:text-base">
            <i class="fas fa-location-dot"></i>
            Alger, Algérie
          </p>
          <div class="flex items-center justify-center gap-4 mt-4 text-xs md:text-sm text-gray-500">
            <span class="flex items-center gap-1 cursor-pointer hover:text-[#39B54A]">
              <i class="fas fa-route"></i>
              Itinéraire
            </span>
            <span class="flex items-center gap-1 cursor-pointer hover:text-[#39B54A]">
              <i class="fas fa-share-nodes"></i>
              Partager
            </span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-[#39B54A] inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 md:px-8 rounded-xl shadow-lg hover:bg-[#2d8c3a] transition transform hover:scale-105 text-sm md:text-base">
          <i class="fas fa-route text-base md:text-lg"></i>
          Itinéraire
        </button>
        
        <button class="border-2 border-[#39B54A] inline-flex items-center justify-center gap-2 bg-white text-[#39B54A] font-semibold py-3 px-6 md:px-8 rounded-xl shadow-lg hover:bg-gray-50 transition transform hover:scale-105 text-sm md:text-base">
          <i class="fas fa-share-nodes text-base md:text-lg"></i>
          Partager
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationSection'
}
</script>
