<template>
  <div class="max-w-3xl mx-auto p-6 bg-[#161B22] rounded-xl border border-[#30363D]">
    <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-[#58A6FF] to-[#F85149] bg-clip-text text-transparent">
      Edit Project
    </h2>

    <form @submit.prevent="updateProject" enctype="multipart/form-data" class="space-y-6">
      <!-- Title -->
      <div>
        <label class="block mb-2 text-sm font-medium text-[#C9D1D9]">Title</label>
        <input 
          v-model="form.title" 
          type="text" 
          class="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#C9D1D9] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] transition-all"
          required 
        />
      </div>

      <!-- Description -->
      <div>
        <label class="block mb-2 text-sm font-medium text-[#C9D1D9]">Description</label>
        <textarea 
          v-model="form.description" 
          class="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#C9D1D9] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] transition-all"
          rows="5" 
          required
        ></textarea>
      </div>

      <!-- URLs -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block mb-2 text-sm font-medium text-[#C9D1D9]">Live Demo URL</label>
          <input 
            v-model="form.liveUrl" 
            type="url" 
            class="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#C9D1D9] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] transition-all"
            placeholder="https://example.com"
          />
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-[#C9D1D9]">GitHub URL</label>
          <input 
            v-model="form.githubUrl" 
            type="url" 
            class="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#C9D1D9] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] transition-all"
            placeholder="https://github.com/username/repo"
          />
        </div>
      </div>

      <!-- Category -->
      <div>
        <label class="block mb-2 text-sm font-medium text-[#C9D1D9]">Category</label>
        <select 
          v-model="form.category" 
          class="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#C9D1D9] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] transition-all"
          required
        >
          <option value="" disabled class="text-[#8B949E]">Select a category</option>
          <option v-for="cat in categories" :key="cat._id" :value="cat._id" class="bg-[#161B22]">
            {{ cat.name }}
          </option>
        </select>
      </div>

      <!-- Existing Image -->
      <div v-if="form.imageUrl">
        <label class="block mb-2 text-sm font-medium text-[#C9D1D9]">Current Image</label>
        <div class="relative group">
          <img 
            :src="form.imageUrl" 
            alt="Current project image" 
            class="w-full max-w-xs rounded-lg border-2 border-[#30363D] group-hover:opacity-75 transition-opacity"
          />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-sm text-[#C9D1D9] bg-[#0D1117]/90 px-3 py-1 rounded-md">Current Image</span>
          </div>
        </div>
      </div>

      <!-- Image Upload -->
      <div>
        <label class="block mb-2 text-sm font-medium text-[#C9D1D9]">Update Image</label>
        <div class="flex items-center justify-center w-full">
          <label class="flex flex-col w-full cursor-pointer">
            <div class="px-4 py-6 bg-[#0D1117] border-2 border-dashed border-[#30363D] rounded-lg hover:border-[#58A6FF] transition-colors">
              <div class="text-center">
                <p class="text-sm text-[#8B949E]">Click to upload or drag and drop</p>
                <p class="text-xs text-[#8B949E] mt-2">PNG, JPG up to 5MB</p>
              </div>
              <input 
                type="file" 
                @change="handleImageUpload" 
                accept="image/*" 
                class="hidden" 
              />
            </div>
          </label>
        </div>
      </div>

      <!-- Submit -->
      <button 
      type="submit" 
      :disabled="isSubmitting"
      class="w-full px-6 py-3 bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/90 text-white font-semibold rounded-lg transition-all duration-300 transform shadow-md"
      :class="isSubmitting 
        ? 'opacity-75 cursor-not-allowed' 
        : 'hover:-translate-y-0.5 hover:from-[#4090EE] hover:to-[#4090EE]/90'"
    >
      <div class="flex items-center justify-center gap-2">
        <svg 
          v-if="isSubmitting" 
          class="animate-spin h-5 w-5 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>{{ isSubmitting ? 'Updating...' : 'Update Project' }}</span>
      </div>
    </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const router = useRouter()
const isSubmitting = ref(false)

const form = ref({
  title: '',
  description: '',
  liveUrl: '',
  githubUrl: '',
  category: '',
  image: null,
  imageUrl: '',
})

const categories = ref([])

const fetchCategories = async () => {
  try {
    const res = await api.get('/categories')
    categories.value = res.data
  } catch (err) {
    console.error(err)
  }
}

const fetchProject = async () => {
  try {
    const res = await api.get(`/projects/${route.params.id}`)
    const project = res.data

    form.value = {
      title: project.title,
      description: project.description,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      category: project.category?._id,
      imageUrl: project.image,
      image: null
    }
  } catch (err) {
    console.error(err)
  }
}

const handleImageUpload = (e) => {
  form.value.image = e.target.files[0]
}

const updateProject = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('description', form.value.description)
    formData.append('liveUrl', form.value.liveUrl || '')
    formData.append('githubUrl', form.value.githubUrl || '')
    formData.append('category', form.value.category)
    if (form.value.image) {
      formData.append('image', form.value.image)
    }

    await api.put(`/projects/${route.params.id}`, formData)
    router.push('/dashboard/projects')
  } catch (err) {
    const errData = err.response?.data;
    console.error('🚨 updateProject error:', errData || err);
    alert(errData?.message || 'Server error updating project');
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  fetchCategories()
  fetchProject()
})
</script>