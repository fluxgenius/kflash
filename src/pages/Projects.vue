<template>
  <div class="p-6 bg-[#0D1117] min-h-screen">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 class="text-3xl font-bold bg-gradient-to-r from-[#58A6FF] to-[#F85149] bg-clip-text text-transparent">
          Projects
        </h2>
        <router-link 
          to="/dashboard/projects/new" 
          class="flex items-center px-6 py-3 bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/90 text-white font-semibold rounded-lg hover:from-[#4090EE] hover:to-[#4090EE]/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Add Project
        </router-link>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#58A6FF] mx-auto"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="projects.length === 0" class="text-center p-8 rounded-xl bg-[#161B22] border border-[#30363D]">
        <p class="text-[#8B949E]">No projects found. Start by adding a new project!</p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project._id"
          :project="project"
          @delete="handleDelete"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import api from '../services/api'

const projects = ref([])
const loading = ref(false)

const fetchProjects = async () => {
  loading.value = true
  try {
    const { data } = await api.get('/projects')
    projects.value = data.projects    
  } catch (err) {
    console.error('fetchProjects error:', err.response?.data || err)
  } finally {
    loading.value = false
  }
}

const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this project?')) {
    await api.delete(`/projects/${id}`)
    fetchProjects()
  }
}

onMounted(fetchProjects)
</script>