<template>
  <div class="penguins-ai-page overflow-auto">
    <!-- Back Button -->
    <button class="back-button" @click="goBack">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Back to Home
    </button>
    
    <div class="container-fluid h-100">
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-12 col-lg-10 col-xl-8">
          
          <!-- Penguins Logo -->
          <div class="text-center mb-4">
            <img 
              src="/penguins.svg" 
              alt="Pittsburgh Penguins" 
              class="penguins-logo"
            />
          </div>
          
          <!-- Title -->
          <div class="text-center mb-5">
            <h1 class="page-title">Ask Penguins AI</h1>
          </div>
          
          <!-- Question Box Component -->
          <QuestionBox 
            @submit="handleQuestionSubmit"
            :placeholder="''"
          />
          
          <!-- AI Response Section -->
          <div v-if="showResponse" class="ai-response-section text-center">
            <div class="response-header mb-3">
              <h6 class="response-label">PENGUINS AI RESPONSE</h6>
            </div>
            <div class="response-content">
              <p class="response-text">{{ aiResponse }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import QuestionBox from '../components/QuestionBox.vue'

// Router instance
const router = useRouter()

// Reactive data
const showResponse = ref(true) 
const aiResponse = ref("")

// Methods
const handleQuestionSubmit = (question) => {
  console.log('Question submitted:', question)
  showResponse.value = true
  aiResponse.value = ""
}

const goBack = () => {
  router.push('/home')
}
</script>

<style scoped>
.penguins-ai-page {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  padding: 20px 0;
  position: relative;
}

.back-button {
  position: fixed;
  top: 30px;
  left: 30px;
  background: rgba(42, 42, 42, 0.9);
  border: 1px solid rgba(64, 64, 64, 0.5);
  color: #e5e7eb;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(10px);
}

.back-button:hover {
  background: rgba(52, 52, 52, 0.95);
  border-color: rgba(252, 181, 20, 0.5);
  color: #fcb514;
  transform: translateY(-1px);
}

.back-button svg {
  width: 18px;
  height: 18px;
}

.penguins-logo {
  height: 200px;
  width: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.page-title {
  font-size: 3rem;
  font-weight: 400;
  color: #e5e7eb;
  margin: 0;
  letter-spacing: -0.025em;
}

.ai-response-section {
  margin-top: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.response-header {
  margin-bottom: 20px;
}

.response-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
}

.response-content {
  background: rgba(42, 42, 42, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid rgba(64, 64, 64, 0.3);
}

.response-text {
  font-size: 1.5rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  font-weight: 300;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .penguins-logo {
    height: 150px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .response-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .penguins-logo {
    height: 120px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .response-text {
    font-size: 1.1rem;
  }
  
  .response-content {
    padding: 20px;
  }
  
  .back-button {
    top: 20px;
    left: 20px;
    padding: 10px 16px;
    font-size: 0.9rem;
  }
  
  .back-button svg {
    width: 16px;
    height: 16px;
  }
}
</style> 