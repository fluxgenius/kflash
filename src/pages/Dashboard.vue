<template>
  <div class="min-h-screen flex bg-[#0D1117] text-[#C9D1D9]">
    <!-- Sidebar -->
    <aside
      :class="`bg-[#161B22] border-r border-[#30363D] p-4 space-y-4 transition-all duration-300 overflow-hidden ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      }`"
    >
      <div class="flex items-center justify-between mb-4">
        <h2 v-if="!isSidebarCollapsed" class="text-xl font-bold text-[#58A6FF]">Admin Panel</h2>
        <button
          @click="toggleSidebar"
          class="text-[#8B949E] hover:text-[#58A6FF] p-1 rounded-lg hover:bg-[#58A6FF]/10 transition-colors"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="isSidebarCollapsed"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>

      <nav class="space-y-2">
        <router-link
          to="/dashboard/projects"
          class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-[#58A6FF]/10 hover:text-[#58A6FF] group"
          :class="{ 'justify-center': isSidebarCollapsed }"
          active-class="bg-[#58A6FF]/10 text-[#58A6FF]"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
          <span v-if="!isSidebarCollapsed" class="transition-opacity">Projects</span>
        </router-link>

        <router-link
          to="/dashboard/categories"
          class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-[#58A6FF]/10 hover:text-[#58A6FF] group"
          :class="{ 'justify-center': isSidebarCollapsed }"
          active-class="bg-[#58A6FF]/10 text-[#58A6FF]"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
          </svg>
          <span v-if="!isSidebarCollapsed" class="transition-opacity">Categories</span>
        </router-link>
      </nav>

      <div class="mt-8 border-t border-[#30363D] pt-4">
        <button
          @click="logout"
          class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-[#F85149] hover:bg-[#F85149]/10 transition-colors"
          :class="{ 'justify-center': isSidebarCollapsed }"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span v-if="!isSidebarCollapsed" class="transition-opacity">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 bg-[#0D1117] overflow-auto">
      <div class="max-w-7xl mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const isSidebarCollapsed = ref(false)

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>

<style>
/* Smooth transition for sidebar contents */
.router-link-active {
  background-color: rgba(88, 166, 255, 0.1);
  color: #58A6FF;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #161B22;
}

::-webkit-scrollbar-thumb {
  background: #30363D;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #58A6FF;
}
</style>