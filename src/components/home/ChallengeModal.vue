<template>
  <!-- Modal Overlay -->
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
    @click.self="closeModal"
  >
    <!-- Modal Content -->
    <div class="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
      <!-- Modal Header -->
      <div class="sticky top-0 bg-white border-b-2 border-gray-100 p-6 flex items-center justify-between rounded-t-3xl z-10">
        <div class="flex items-center gap-4">
          <i :class="challenge.icon" class="text-[#39B54A] text-4xl"></i>
          <h3 class="text-2xl md:text-3xl font-bold text-gray-800">
            {{ challenge.title }}
          </h3>
        </div>
        <button 
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
        >
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 md:p-8 space-y-6">
        <!-- Challenge Image -->
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img 
            :src="challenge.image" 
            :alt="challenge.title" 
            class="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <!-- Short Description -->
        <div>
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Overview</h4>
          <p class="text-gray-700 text-base leading-relaxed">
            {{ challenge.description }}
          </p>
        </div>

        <!-- Detailed Description -->
        <div>
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Challenge Details</h4>
          <p class="text-gray-700 text-base leading-relaxed whitespace-pre-line">
            {{ challenge.detailedDescription }}
          </p>
        </div>

        <!-- Key Objectives -->
        <div v-if="challenge.objectives && challenge.objectives.length > 0">
          <h4 class="text-lg font-semibold text-gray-800 mb-3">Key Objectives</h4>
          <ul class="space-y-2">
            <li 
              v-for="(objective, index) in challenge.objectives" 
              :key="index"
              class="flex items-start gap-3 text-gray-700"
            >
              <i class="fas fa-check-circle text-[#39B54A] mt-1"></i>
              <span class="text-base">{{ objective }}</span>
            </li>
          </ul>
        </div>

        <!-- Technologies/Tags -->
        <div v-if="challenge.tags && challenge.tags.length > 0">
          <h4 class="text-lg font-semibold text-gray-800 mb-3">Relevant Technologies</h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tag, index) in challenge.tags" 
              :key="index"
              class="px-4 py-2 bg-[#39B54A] bg-opacity-10 text-[#39B54A] rounded-full text-sm font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Action Button -->
        <div class="pt-4">
          <button 
            class="w-full bg-[#39B54A] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:bg-[#2d8c3a] transition transform hover:scale-105 flex items-center justify-center gap-2"
            @click="handleRegister"
          >
            <i class="fas fa-rocket text-lg"></i>
            Register for This Challenge
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChallengeModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    challenge: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        description: '',
        detailedDescription: '',
        icon: '',
        image: '',
        objectives: [],
        tags: []
      })
    }
  },
  emits: ['close', 'register'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
    handleRegister() {
      this.$emit('register', this.challenge)
    }
  },
  watch: {
    isOpen(newValue) {
      // Prevent body scroll when modal is open
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeUnmount() {
    // Cleanup: restore body scroll
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #39B54A;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #2d8c3a;
}
</style>
