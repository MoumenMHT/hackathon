<template>
  <div class="w-full min-h-screen">
    <!-- Navigation Bar -->
    <Navbar />
    
    <!-- Main Content / Hero Section -->
    <MainContent @open-registration="openRegistration" />
    
    <!-- Timer/Countdown Section -->
    <Timer @open-registration="openRegistration" />
    
    <div class="h-20"></div>

    <!-- About Section -->
    <AboutSection @open-registration="openRegistration" />
    
    <!-- Challenges Section -->
    <ChallengesSection @open-registration="openRegistration" />
    
    <!-- Location Section -->
    <LocationSection />
    
    <!-- CTA Section -->
    <CTASection @open-registration="openRegistration" />
    
    <!-- Footer -->
    <Footer />

    <!-- Registration Modal -->
    <RegistrationModal :isOpen="showRegistration" @close="closeRegistration" />
  </div>
</template>

<script>
import Navbar from '../components/home/Navbar.vue'
import MainContent from '../components/home/MainContent.vue'
import Timer from '../components/home/Timer.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ChallengesSection from '../components/home/ChallengesSection.vue'
import LocationSection from '../components/home/LocationSection.vue'
import CTASection from '../components/home/CTASection.vue'
import Footer from '../components/home/Footer.vue'
import RegistrationModal from '../components/home/RegistrationModal.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    MainContent,
    Timer,
    AboutSection,
    ChallengesSection,
    LocationSection,
    CTASection,
    Footer,
    RegistrationModal
  },
  data() {
    return {
      showRegistration: false
    }
  },
  methods: {
    openRegistration() {
      this.showRegistration = true
    },
    closeRegistration() {
      this.showRegistration = false
    }
  }
}
</script>
                