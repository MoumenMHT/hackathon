<template>
  <div class="w-full min-h-screen bg-gray-50">
    <!-- Navigation Bar -->
    <Navbar />
    
    <!-- Spacer for fixed navbar -->
    
    <!-- Main Content -->
    <MainContent />
          <div class="h-20"></div>

    <timer />
              <div class="h-20"></div>

  </div>
</template>

<script>
import Navbar from '../components/home/Navbar.vue'
import MainContent from '../components/home/MainContent.vue'
import Timer from '../components/home/Timer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    MainContent,
    Timer
  }
}
</script>
                