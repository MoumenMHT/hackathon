<template>
  <div class="w-full min-h-screen bg-gray-50">
    <!-- Navigation Bar -->
    <Navbar />
    
    <!-- Main Content -->
    <MainContent />
    
    <div class="h-20"></div>

    <!-- Timer/Countdown Section -->
    <Timer />
    
    <div class="h-20"></div>

    <!-- About Section -->
    <AboutSection />
    
    <!-- Challenges Section -->
    <ChallengesSection />
    
    <!-- Location Section -->
    <LocationSection />
    
    <!-- CTA Section -->
    <CTASection />
    
    <!-- Footer -->
    <Footer />
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
    Footer
  }
}
</script>
                