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
          
          <p class="text-gray-600 text-sm md:text-base mb-4 flex-grow">
            Revolutionize agriculture with smart technologies that optimize yields while preserving biodiversity and natural resources.
          </p>
          
          <!-- Image Container -->
          <div class="relative rounded-2xl overflow-hidden h-40 md:h-48 mb-4">
            <img 
              :src="SustainableAgriculture" 
              alt="Sustainable Agriculture" 
              class="absolute inset-x-0 bottom-0 w-full h-auto object-cover object-bottom"
            />
          </div>

          <!-- See More Button -->
          <button 
            @click="openModal(challenges[0])"
            class="w-full bg-[#39B54A] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#2d8c3a] transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <i class="fas fa-info-circle"></i>
            See More
          </button>
        </div>

        <!-- Challenge 2: Smart Waste Management -->
        <div class="border-4 border-[#39B54A] rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
          <div class="mb-4 md:mb-6">
            <i class="fas fa-recycle text-[#39B54A] text-4xl md:text-5xl"></i>
          </div>
          
          <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            Smart Waste Management
          </h3>
          
          <p class="text-gray-600 text-sm md:text-base mb-4 flex-grow">
            Transform the waste challenge into opportunity with circular economy solutions.
          </p>
          
          <div class="relative rounded-2xl overflow-hidden h-40 md:h-48 mb-4">
            <img 
              :src="SmartWasteManagement"
              alt="Smart Waste Management" 
              class="absolute inset-x-0 bottom-0 w-full h-auto object-cover object-bottom"
            />
          </div>

          <!-- See More Button -->
          <button 
            @click="openModal(challenges[1])"
            class="w-full bg-[#39B54A] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#2d8c3a] transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <i class="fas fa-info-circle"></i>
            See More
          </button>
        </div>

        <!-- Challenge 3: Smart Energy Management -->
        <div class="border-4 border-[#39B54A] rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
          <div class="mb-4 md:mb-6">
            <i class="fas fa-bolt text-[#39B54A] text-4xl md:text-5xl"></i>
          </div>
          
          <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            Smart Energy Management
          </h3>
          
          <p class="text-gray-600 text-sm md:text-base mb-4 flex-grow">
            Create tomorrow's energy networks with smart grid solutions, intelligent storage, and consumption optimization.
          </p>
          
          <div class="relative rounded-2xl overflow-hidden h-40 md:h-48 mb-4">
            <img 
              :src="SmartEnergyManagement"
              alt="Smart Energy Management" 
              class="absolute inset-x-0 bottom-0 w-full h-auto object-cover object-bottom"
            />
          </div>

          <!-- See More Button -->
          <button 
            @click="openModal(challenges[2])"
            class="w-full bg-[#39B54A] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#2d8c3a] transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <i class="fas fa-info-circle"></i>
            See More
          </button>
        </div>
      </div>
    </div>

    <!-- Challenge Modal -->
    <ChallengeModal 
      :isOpen="modalOpen"
      :challenge="selectedChallenge"
      @close="closeModal"
      @register="handleRegister"
    />
  </div>
</template>

<script>
import SustainableAgriculture from '../../assets/images/sustainableAgriculture.png'
import SmartWasteManagement from '../../assets/images/smartWasteManagement.png'
import SmartEnergyManagement from '../../assets/images/smartEnergyManagement.png'
import ChallengeModal from './ChallengeModal.vue'

export default {
  name: 'ChallengesSection',
  emits: ['open-registration'],
  components: {
    ChallengeModal
  },
  data() {
    return {
      SustainableAgriculture,
      SmartWasteManagement,
      SmartEnergyManagement,
      modalOpen: false,
      selectedChallenge: {},
      challenges: [
        {
          id: 1,
          title: 'Sustainable Agriculture & Agroecology',
          icon: 'fas fa-seedling',
          description: 'Revolutionize agriculture with smart technologies that optimize yields while preserving biodiversity and natural resources.',
          detailedDescription: `Agriculture faces unprecedented challenges: climate change, soil degradation, water scarcity, and the need to feed a growing global population. This challenge calls for innovative solutions that combine traditional agricultural wisdom with cutting-edge technology.

We're looking for solutions that can help farmers make data-driven decisions, optimize resource usage, reduce environmental impact, and increase crop yields sustainably. Your innovations could range from IoT sensors for precision farming to AI-powered crop disease detection systems.

The goal is to create a more resilient, efficient, and sustainable agricultural ecosystem that benefits both farmers and the environment while ensuring food security for future generations.`,
          objectives: [
            'Develop smart irrigation systems that minimize water waste',
            'Create precision farming tools using IoT and sensors',
            'Build AI models for crop disease detection and prevention',
            'Design solutions for soil health monitoring and improvement',
            'Implement blockchain for supply chain transparency',
            'Develop apps for farmer education and best practices'
          ],
          tags: ['IoT', 'AI/ML', 'Precision Farming', 'Sensors', 'Data Analytics', 'Mobile Apps', 'Blockchain'],
          image: SustainableAgriculture
        },
        {
          id: 2,
          title: 'Smart Waste Management',
          icon: 'fas fa-recycle',
          description: 'Transform the waste challenge into opportunity with circular economy solutions.',
          detailedDescription: `Waste management is one of the most pressing environmental challenges of our time. With increasing urbanization and consumption, cities are struggling to handle the growing volume of waste efficiently and sustainably.

This challenge seeks innovative solutions that reimagine waste management through the lens of circular economy principles. We need smart systems that can optimize collection routes, improve sorting and recycling processes, reduce landfill usage, and convert waste into valuable resources.

Your solutions could involve smart bins with fill-level sensors, AI-powered waste sorting systems, gamification to encourage recycling, or platforms that connect waste generators with recyclers. The key is to make waste management more efficient, cost-effective, and environmentally friendly.`,
          objectives: [
            'Design smart waste collection systems with optimized routes',
            'Create AI-powered sorting and recycling solutions',
            'Build platforms for waste-to-resource conversion',
            'Develop community engagement apps for recycling',
            'Implement sensor networks for real-time waste monitoring',
            'Design incentive systems to promote waste reduction'
          ],
          tags: ['Smart Bins', 'Route Optimization', 'Computer Vision', 'Circular Economy', 'IoT', 'Gamification', 'Community Engagement'],
          image: SmartWasteManagement
        },
        {
          id: 3,
          title: 'Smart Energy Management',
          icon: 'fas fa-bolt',
          description: 'Create tomorrow\'s energy networks with smart grid solutions, intelligent storage, and consumption optimization.',
          detailedDescription: `The transition to sustainable energy requires more than just renewable energy generation—it demands intelligent systems that can efficiently manage, store, and distribute energy. As renewable sources like solar and wind become more prevalent, we need smart solutions to handle their intermittent nature.

This challenge focuses on creating innovative energy management systems that optimize consumption, integrate renewable sources, improve grid stability, and reduce carbon footprint. We're looking for solutions that leverage AI, IoT, and blockchain to create more resilient and efficient energy networks.

Your innovations could include smart home energy management systems, predictive maintenance for power infrastructure, peer-to-peer energy trading platforms, or AI algorithms for demand forecasting and load balancing.`,
          objectives: [
            'Develop smart home energy management systems',
            'Create AI-powered demand forecasting models',
            'Build peer-to-peer energy trading platforms',
            'Design battery storage optimization solutions',
            'Implement predictive maintenance for energy infrastructure',
            'Develop real-time monitoring and analytics dashboards'
          ],
          tags: ['Smart Grid', 'Renewable Energy', 'AI Forecasting', 'Blockchain', 'Energy Storage', 'IoT', 'Analytics'],
          image: SmartEnergyManagement
        }
      ]
    }
  },
  methods: {
    openModal(challenge) {
      this.selectedChallenge = challenge
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
      setTimeout(() => {
        this.selectedChallenge = {}
      }, 300)
    },
    handleRegister(challenge) {
      console.log('Registering for challenge:', challenge.title)
      // Emit event to parent to open registration modal
      this.$emit('open-registration')
      this.closeModal()
    }
  }
}
</script>
