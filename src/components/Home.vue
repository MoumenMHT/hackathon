<template>
  <div class="w-full min-h-screen bg-gray-50">
    <!-- Navigation Bar -->
    <Navbar />
    
    <!-- Spacer for fixed navbar -->
    
    <!-- Main Content -->
    <MainContent />
  </div>
</template>

<script>
import Navbar from './layout/home/Navbar.vue'
import MainContent from './layout/home/MainContent.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    MainContent
  }
}
</script>
                