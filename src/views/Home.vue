<template>
  <div class="w-full min-h-screen">
    <!-- Main Content / Hero Section -->
    <div id="home">
      <MainContent @open-registration="openRegistration" />
    </div>
    
    <!-- Timer/Countdown Section -->
    <div id="whene">
      <Timer @open-registration="openRegistration" />
    </div>
    
    <div class="h-20"></div>

    <!-- About Section -->
    <div id="about">
      <AboutSection @open-registration="openRegistration" />
    </div>
    
    <!-- Challenges Section -->
    <div id="challenges">
      <ChallengesSection @open-registration="openRegistration" />
    </div>

    <!-- Planning Section -->
    <div id="location">
      <Planning />
    </div>
    
    <!-- Location Section -->
    <div id="location">
      <LocationSection />
    </div>
    
    <!-- CTA Section -->
    <CTASection @open-registration="openRegistration" />

    <!-- Registration Modal -->
    <RegistrationModal :isOpen="showRegistration" @close="closeRegistration" />
  </div>
</template>

<script>
import MainContent from '../components/home/MainContent.vue'
import Timer from '../components/home/Timer.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ChallengesSection from '../components/home/ChallengesSection.vue'
import LocationSection from '../components/home/LocationSection.vue'
import CTASection from '../components/home/CTASection.vue'
import RegistrationModal from '../components/home/RegistrationModal.vue'
import Planning from '../components/home/planning.vue'


export default {
  name: 'Home',
  components: {
    MainContent,
    Timer,
    AboutSection,
    ChallengesSection,
    LocationSection,
    CTASection,
    RegistrationModal,
    Planning
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
                