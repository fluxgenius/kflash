<template>
  <div class="bg-[#161B22] shadow-xl rounded-xl p-6 border border-[#30363D] hover:border-[#58A6FF]/30 transition-all duration-300">
    <!-- Image Section -->
    <div class="relative overflow-hidden rounded-lg group">
      <img
        v-if="project.imageUrl"
        :src="project.imageUrl"
        alt="Project Image"
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        v-else
        class="w-full h-48 bg-[#30363D] flex items-center justify-center rounded-lg"
      >
        <span class="text-[#8B949E]">No image available</span>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-4 space-y-3">
      <!-- Title & Category -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h3 class="text-lg font-semibold text-[#C9D1D9]">{{ project.title }}</h3>
        <span 
          v-if="project.category?.name" 
          class="text-sm bg-[#58A6FF]/10 text-[#58A6FF] px-3 py-1 rounded-full"
        >
          {{ project.category.name }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-sm text-[#8B949E] leading-relaxed">
        {{ truncatedDescription }}
      </p>

      <!-- Links -->
      <div class="flex flex-wrap gap-2">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          class="flex items-center px-3 py-2 text-sm bg-[#58A6FF]/10 text-[#58A6FF] rounded-lg hover:bg-[#58A6FF]/20 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Live Demo
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          class="flex items-center px-3 py-2 text-sm bg-[#30363D] text-[#C9D1D9] rounded-lg hover:bg-[#58A6FF]/10 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
          </svg>
          View Code
        </a>
      </div>

      <!-- Actions -->
      <div class="flex justify-between items-center pt-3 border-t border-[#30363D]">
        <router-link 
          :to="`/dashboard/projects/edit/${project._id}`"
          class="flex items-center text-[#58A6FF] hover:text-[#4090EE] transition-colors"
        >
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
          </svg>
          Edit
        </router-link>
        <button 
          @click="$emit('delete', project._id)"
          class="flex items-center text-[#F85149] hover:text-[#F85149]/80 transition-colors"
        >
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ project: Object })
defineEmits(['delete'])

const maxLength = 120
const truncatedDescription = computed(() => {
  if (!props.project?.description) return ''
  return props.project.description.length > maxLength
    ? props.project.description.slice(0, maxLength) + '...'
    : props.project.description
})
</script>