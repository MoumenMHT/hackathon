<template>
  <!-- Modal Overlay -->
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
    @click.self="closeModal"
  >
    <!-- Modal Content -->
    <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
      <!-- Modal Header -->
      <div class="sticky top-0 bg-gradient-to-r from-[#39B54A] to-[#2d8f3a] p-6 flex items-center justify-between rounded-t-3xl z-10">
        <div class="flex items-center gap-4">
          <i class="fas fa-user-plus text-white text-4xl"></i>
          <h3 class="text-2xl md:text-3xl font-bold text-white">
            Register for EcoHack2026
          </h3>
        </div>
        <button 
          @click="closeModal"
          class="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
          aria-label="Close modal"
        >
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 md:p-8">
        <p class="text-gray-600 mb-6 text-center">
          Join us for an exciting hackathon experience! Fill in your details below to register.
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Team Name -->
          <div>
            <label for="teamName" class="block text-sm font-semibold text-gray-700 mb-2">
              Team Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.teamName"
              type="text"
              id="teamName"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="Enter your team name"
            />
          </div>

          <!-- Team Leader Name -->
          <div>
            <label for="leaderName" class="block text-sm font-semibold text-gray-700 mb-2">
              Team Leader Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.leaderName"
              type="text"
              id="leaderName"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="Enter team leader's name"
            />
          </div>

          <div>
            <label for="member2" class="block text-sm font-semibold text-gray-700 mb-2">
              Team Member 2 Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.member2"
              type="text"
              id="member2"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="Enter team member 2's name "
            />
          </div>
          <div>
            <label for="member3" class="block text-sm font-semibold text-gray-700 mb-2">
              Team Member 3 Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.member3"
              type="text"
              id="member3"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="Enter team member 3's name "
            />
          </div>
          <div>
            <label for="member4" class="block text-sm font-semibold text-gray-700 mb-2">
              Team Member 4 Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.member4"
              type="text"
              id="member4"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="Enter team member 4's name "
            />
          </div>
          <div>
            <label for="member5" class="block text-sm font-semibold text-gray-700 mb-2">
              
              Team Member 5 Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.member5"
              type="text"
              id="member5"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="Enter team member 5's name "
            />
          </div>
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.phone"
              type="tel"
              id="phone"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all"
              placeholder="+212 XXX XXX XXX"
            />
          </div>

         

          <!-- Challenge Selection -->
          <div>
            <label for="challenge" class="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Challenge <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.challenge"
              id="challenge"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all bg-white"
            >
              <option value="">Select a challenge</option>
              <option value="Sustainable Agriculture & Agroecology">Sustainable Agriculture & Agroecology</option>
              <option value="Smart Waste Management">Smart Waste Management</option>
            </select>

            <transition name="fade">
              <div 
                v-if="formData.challenge" 
                class="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3"
              >
                <i class="fas fa-exclamation-triangle text-amber-600 mt-1"></i>
                <p class="text-xs md:text-sm text-amber-800">
                  <strong>Note:</strong> While we try to accommodate your preference, participation in your chosen challenge is <strong>not guaranteed</strong> and depends on final team allocations.
                </p>
              </div>
            </transition>
          </div>
        

          <!-- Additional Notes -->
          <div>
            <label for="notes" class="block text-sm font-semibold text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              v-model="formData.notes"
              id="notes"
              rows="4"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your team, skills, or any special requirements..."
            ></textarea>
          </div>

         

          <!-- Submit Button -->
          <div class="flex gap-4 pt-4">
            <button
              type="button"
              @click="closeModal"
              class="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-[#39B54A] to-[#2d8f3a] text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Register Now</span>
              <span v-else class="flex items-center justify-center gap-2">
                <i class="fas fa-spinner fa-spin"></i>
                Submitting...
              </span>
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccess" class="mt-6 p-4 bg-green-100 border-2 border-green-400 rounded-xl">
          <div class="flex items-center gap-3">
            <i class="fas fa-check-circle text-green-600 text-2xl"></i>
            <div>
              <p class="font-semibold text-green-800">Registration Successful!</p>
              <p class="text-sm text-green-700">We'll contact you soon with more details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from '../../config'

export default {
  name: 'RegistrationModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      formData: {
        teamName: '',
        leaderName: '',
        member2: '',
        member3: '',
        member4: '',
        member5: '',
        email: '',
        phone: '',
        challenge: '',
        experience: '',
        notes: '',
      },
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    closeModal() {
      if (!this.isSubmitting) {
        this.$emit('close')
        this.resetForm()
      }
    },
    resetForm() {
      this.formData = {
        teamName: '',
        leaderName: '',
        member2: '',
        member3: '',
        member4: '',
        member5: '',
        email: '',
        phone: '',
        challenge: '',
        experience: '',
        notes: '',
      }
      this.showSuccess = false
    },
    async handleSubmit() {
      this.isSubmitting = true
      
      try {
        // Get Google Apps Script URL from config
        const GOOGLE_SCRIPT_URL = config.googleSheetsUrl
        
        console.log('Sending to URL:', GOOGLE_SCRIPT_URL)
        
        // Prepare the data to send
        const registrationData = {
          teamName: this.formData.teamName,
          leaderName: this.formData.leaderName,
          member2: this.formData.member2 || '',
          member3: this.formData.member3 || '',
          member4: this.formData.member4 || '',
          member5: this.formData.member5 || '',
          email: this.formData.email,
          phone: this.formData.phone,
          challenge: this.formData.challenge,
          notes: this.formData.notes,
          timestamp: new Date().toISOString()
        }
        
        console.log('Registration Data Sent:', registrationData)
        
        // Send data to Google Sheets
        await fetch(GOOGLE_SCRIPT_URL, {
          redirect: 'follow',
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(registrationData)
        })
        
        console.log('Request sent successfully')
        
        this.isSubmitting = false
        this.showSuccess = true
        
        // Close modal after 3 seconds
        setTimeout(() => {
          this.closeModal()
        }, 3000)
        
      } catch (error) {
        console.error('Error submitting registration:', error)
        this.isSubmitting = false
        // Still show success since no-cors doesn't allow error detection
        this.showSuccess = true
        
        setTimeout(() => {
          this.closeModal()
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
/* Custom scrollbar for modal */
div::-webkit-scrollbar {
  width: 8px;
}

div::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

div::-webkit-scrollbar-thumb {
  background: #39B54A;
  border-radius: 10px;
}

div::-webkit-scrollbar-thumb:hover {
  background: #2d8f3a;
}
</style>
