<template>
  <div class="max-w-xl mx-auto p-6 bg-[#161B22] rounded-xl border border-[#30363D]">
    <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-[#58A6FF] to-[#F85149] bg-clip-text text-transparent">
      Project Categories
    </h2>

    <!-- New category form -->
    <form @submit.prevent="addCategory" class="flex gap-3 mb-8">
      <input
        v-model="newCategory"
        type="text"
        placeholder="New category name"
        class="flex-1 px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#C9D1D9] placeholder-[#8B949E] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] transition-all"
        required
      />
      <button 
        class="cursor-pointer px-6 py-3 bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/90 text-white font-semibold rounded-lg hover:from-[#4090EE] hover:to-[#4090EE]/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
      >
        Add Category
      </button>
    </form>

    <!-- Category list -->
    <div v-if="loading" class="text-center text-[#8B949E]">Loading categories...</div>
    <ul v-else class="space-y-3">
      <li
        v-for="category in categories"
        :key="category._id"
        class="flex justify-between items-center px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg group hover:border-[#58A6FF]/50 transition-colors"
      >
        <span class="text-[#C9D1D9] font-medium">{{ category.name }}</span>
        <div class="flex items-center gap-4">
          <button 
            @click="openEditModal(category)" 
            class="cursor-pointer text-[#58A6FF] hover:text-[#4090EE] transition-colors"
          >
            Edit
          </button>
          <button 
            @click="deleteCategory(category._id)" 
            class="cursor-pointer text-[#F85149] hover:text-[#E03D35] transition-colors"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>

    <!-- Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-[#161B22] p-8 rounded-xl border border-[#30363D] w-full max-w-md mx-4">
        <h3 class="text-xl font-bold mb-6 text-[#C9D1D9]">Edit Category</h3>
        <input
          v-model="editCategoryName"
          type="text"
          class="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#C9D1D9] placeholder-[#8B949E] focus:ring-2 focus:ring-[#58A6FF] focus:border-[#58A6FF] mb-6"
          placeholder="Category name"
        />
        <div class="flex justify-end gap-4">
          <button 
            @click="closeModal" 
            class="px-4 py-2 text-[#8B949E] hover:text-[#C9D1D9] transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="updateCategory" 
            class="px-6 py-2 bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/90 text-white font-semibold rounded-lg hover:from-[#4090EE] hover:to-[#4090EE]/90 transition-all duration-300 shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const newCategory = ref('')
const categories = ref([])
const loading = ref(false)

// Edit modal state
const showModal = ref(false)
const selectedCategoryId = ref(null)
const editCategoryName = ref('')

const fetchCategories = async () => {
  loading.value = true
  try {
    const res = await api.get('/categories')
    categories.value = res.data
  } catch (err) {
    console.error('🚨 Failed to fetch categories:', err)
  } finally {
    loading.value = false
  }
}

const addCategory = async () => {
  try {
    await api.post('/categories', { name: newCategory.value })
    newCategory.value = ''
    fetchCategories()
  } catch (err) {
    console.error('🚨 Failed to create category:', err)
    alert(err.response?.data?.message || 'Error creating category')
  }
}

const deleteCategory = async (id) => {
  if (confirm('Are you sure you want to delete this category? This action cannot be undone.')) {
    try {
      await api.delete(`/categories/${id}`)
      fetchCategories()
    } catch (err) {
      console.error('🚨 Failed to delete category:', err)
      alert(err.response?.data?.message || 'Error deleting category')
    }
  }
}

// Modal controls
const openEditModal = (category) => {
  selectedCategoryId.value = category._id
  editCategoryName.value = category.name
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedCategoryId.value = null
  editCategoryName.value = ''
}

const updateCategory = async () => {
  try {
    await api.put(`/categories/${selectedCategoryId.value}`, {
      name: editCategoryName.value,
    })
    closeModal()
    fetchCategories()
  } catch (err) {
    console.error('🚨 Failed to update category:', err)
    alert(err.response?.data?.message || 'Error updating category')
  }
}

onMounted(fetchCategories)
</script>