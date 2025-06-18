<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0D1117] dark:to-gray-900">
    <form @submit.prevent="handleLogin" class="bg-white dark:bg-[#161B22] p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold bg-gradient-to-r from-[#58A6FF] to-[#F85149] bg-clip-text text-transparent">
          Admin Login
        </h2>
        <div class="mt-2 w-32 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F85149] mx-auto rounded-full"></div>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-[#C9D1D9] mb-2">Email</label>
          <input 
            v-model="email" 
            type="email" 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#30363D] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] dark:focus:ring-[#58A6FF]/30 bg-transparent dark:text-[#C9D1D9] transition-all"
            required 
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-[#C9D1D9] mb-2">Password</label>
          <input 
            v-model="password" 
            type="password" 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#30363D] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] dark:focus:ring-[#58A6FF]/30 bg-transparent dark:text-[#C9D1D9] transition-all"
            required 
          />
        </div>

        <div v-if="error" class="p-3 bg-[#F85149]/10 text-[#F85149] rounded-lg text-sm border border-[#F85149]/20">
          {{ error }}
        </div>
        

        <button 
          type="submit" 
          :disabled="loading"
          class="cursor-pointer w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/90 text-white font-semibold rounded-lg hover:from-[#4090EE] hover:to-[#4090EE]/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
        >
          <template v-if="!loading">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Sign In
          </template>
          
          <template v-else>
            <svg class="animate-spin w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Logging in...
          </template>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()
const error = ref(null)
const loading = ref(false)

const handleLogin = async () => {
  try {
    loading.value = true
    error.value = null
    await auth.login(email.value, password.value)
    
    if (auth.token) {
      router.push('/dashboard/projects')
    } else {
      error.value = auth.error || 'Invalid email or password'
    }
  } catch (err) {
    error.value = 'An error occurred during login'
  } finally {
    loading.value = false
  }
}
</script>