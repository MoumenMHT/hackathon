<template>
  <footer class="bg-white border-t-2 border-gray-200 py-8 md:py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Navigation Column -->
        <div>
          <h3 class="text-[#39B54A] text-lg md:text-xl font-bold mb-4">Navigation</h3>
          <ul class="space-y-2 text-sm md:text-base">
            <li>
              <a href="#" class="text-gray-700 hover:text-[#39B54A] transition">
                • Home
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-[#39B54A] transition">
                • About
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-[#39B54A] transition">
                • Planning
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-[#39B54A] transition">
                • Inscription
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-[#39B54A] transition">
                • Contact
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-[#39B54A] transition">
                Sponsors & Partenaires
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h3 class="text-[#39B54A] text-lg md:text-xl font-bold mb-4">Contact</h3>
          <ul class="space-y-3 text-sm md:text-base">
            <li class="flex items-start gap-2 text-gray-700">
              <i class="fas fa-map-marker-alt text-[#39B54A] mt-1"></i>
              <span>ISSI Exia CESI Algeria</span>
            </li>
            <li class="flex items-start gap-2 text-gray-700">
              <i class="fas fa-envelope text-[#39B54A] mt-1"></i>
              <a href="mailto:contact@ecohack-cesi.dz" class="hover:text-[#39B54A] transition break-all">
                contact@ecohack-cesi.dz
              </a>
            </li>
            <li class="flex items-start gap-2 text-gray-700">
              <i class="fas fa-phone text-[#39B54A] mt-1"></i>
              <a href="tel:0559922630" class="hover:text-[#39B54A] transition">
                0559922630
              </a>
            </li>
          </ul>
        </div>

        <!-- School Info Column -->
        <div>
          <h3 class="text-[#39B54A] text-lg md:text-xl font-bold mb-4">School: CESI Algerie</h3>
          <div class="flex gap-3 md:gap-4 mt-4 flex-wrap">
            <a href="https://www.tiktok.com/@cesi.event" class="text-gray-700 hover:text-[#39B54A] transition text-xl md:text-2xl" aria-label="TikTok">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/cesi.event/" class="text-gray-700 hover:text-[#39B54A] transition text-xl md:text-2xl" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/cesi-events/" class="text-gray-700 hover:text-[#39B54A] transition text-xl md:text-2xl" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>

          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600 text-sm md:text-base">
        <p>© 2026 EcoHack CESI. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
