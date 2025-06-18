<template>
  <div class="min-h-screen bg-white dark:bg-[#0D1117] py-16 px-4 md:px-16 transition-colors duration-300">
    <!-- Go Back Button -->
    <div class="max-w-6xl mx-auto mb-8">
      <button 
        @click="goBack"
        class="cursor-pointer flex items-center text-[#58A6FF] hover:text-[#4090EE] transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back Home
      </button>
    </div>
    <div v-if="loading" class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#58A6FF] mx-auto"></div>
    </div>
    
    <div v-else-if="error" class="text-center p-6 bg-[#F85149]/10 text-[#F85149] rounded-xl border border-[#F85149]/20 max-w-2xl mx-auto">
      {{ error }}
    </div>

    <div v-else class="max-w-6xl mx-auto">
      <!-- Project Header -->
      <div class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-4 animate-fade-in-up">
          {{ project.title }}
        </h1>
        <div class="inline-flex items-center gap-2 bg-[#58A6FF]/10 text-[#58A6FF] px-4 py-1 rounded-full text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          <span v-if="project.category">{{ project.category.name }}</span>
        </div>
      </div>

      <!-- Project Image -->
      <div class="relative group mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 to-transparent z-10"></div>
        <img 
          :src="project.imageUrl" 
          alt="Project Image" 
          class="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
        >
      </div>

      <!-- Project Content -->
      <div class="max-w-3xl mx-auto">
        <div class="prose dark:prose-invert max-w-none mb-12">
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Project Links -->
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            class="flex items-center px-6 py-3 bg-[#58A6FF]/10 hover:bg-[#58A6FF]/20 text-[#58A6FF] rounded-lg transition-all hover:-translate-y-1"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            Live Demo
          </a>

          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-[#161B22] dark:hover:bg-[#58A6FF]/10 text-gray-700 dark:text-[#C9D1D9] rounded-lg transition-all hover:-translate-y-1"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const project = ref(null)
const loading = ref(true)
const error = ref(null)

const goBack = () => {
  router.go(-1) 
}

const fetchProject = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects/${route.params.id}`)
    project.value = res.data
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to load project'
  } finally {
    loading.value = false
  }
}

onMounted(fetchProject)
</script>

<style>


.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>