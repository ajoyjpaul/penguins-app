<template>
  <div class="penguins-ai-page">
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
import QuestionBox from '../components/QuestionBox.vue'

// Reactive data
const showResponse = ref(true) 
const aiResponse = ref("")

// Methods
const handleQuestionSubmit = (question) => {
  console.log('Question submitted:', question)
  showResponse.value = true
  aiResponse.value = ""
}
</script>

<style scoped>
.penguins-ai-page {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  padding: 20px 0;
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
}
</style> 