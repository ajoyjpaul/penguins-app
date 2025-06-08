<template>
  <div class="question-box-container mb-5">
    <div class="search-wrapper position-relative">
      <input
        type="text"
        class="form-control search-input"
        :placeholder="placeholder"
        v-model="question"
        @keyup.enter="handleSubmit"
      />
      <button 
        class="btn search-btn position-absolute"
        @click="handleSubmit"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442 1.05a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  placeholder: {
    type: String,
    default: ""
  }
})

// Emits
const emit = defineEmits(['submit'])

// Reactive data
const question = ref('')

// Methods
const handleSubmit = () => {
  if (question.value.trim()) {
    emit('submit', question.value.trim())
  }
}
</script>

<style scoped>
.question-box-container {
  max-width: 800px;
  margin: 0 auto;
}

.search-wrapper {
  width: 100%;
}

.search-input {
  background-color: #2a2a2a;
  border: 2px solid #404040;
  border-radius: 12px;
  padding: 18px 60px 18px 24px;
  font-size: 16px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.search-input:focus {
  background-color: #2a2a2a;
  border-color: #FCB900;
  box-shadow: 0 0 0 0.2rem rgba(252, 185, 0, 0.25);
  color: #ffffff;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-btn {
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #9ca3af;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.search-btn:hover {
  color: #FCB900;
  background: rgba(252, 185, 0, 0.1);
}

.search-btn:focus {
  box-shadow: none;
  color: #FCB900;
}
</style> 