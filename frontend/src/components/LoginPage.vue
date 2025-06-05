<template>
  <div class="login-container">
    <div class="login-form">
      <div class="text-center mb-4">
        <div class="login-icon mb-3">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2 class="login-title text-white mb-4">Sign in</h2>
      </div>
      
      <form @submit.prevent="login">
        <div class="form-group mb-3">
          <input
            v-model="email"
            type="email"
            class="form-control login-input"
            placeholder="Email"
            required
          />
        </div>

        <div class="form-group mb-4">
          <input
            v-model="password"
            type="password"
            class="form-control login-input"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" class="btn btn-gold w-100 mb-3">Sign in</button>
        
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

function login() {
  console.log('Login attempt:', { email: email.value, password: password.value });
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
</style>

<style scoped>
.login-container {
  background-color: #000000;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
}

.login-form {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.login-icon {
  width: 80px;
  height: 80px;
  background-color: #2a2a2a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.login-title {
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
}

.login-input {
  background-color: #2a2a2a;
  border: 1px solid #404040;
  color: #ffffff;
  padding: 15px 16px;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.login-input:focus {
  background-color: #2a2a2a;
  border-color: #ffd700;
  box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25);
  color: #ffffff;
  outline: none;
}

.login-input::placeholder {
  color: #999999;
}

.btn-gold {
  background-color: #ffd700;
  border: none;
  color: #000000;
  font-weight: 600;
  padding: 15px;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-gold:hover {
  background-color: #ffed4e;
  color: #000000;
  transform: translateY(-1px);
}

.btn-gold:focus {
  background-color: #ffd700;
  color: #000000;
  box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.5);
}

.forgot-password {
  color: #999999;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #ffffff;
  text-decoration: none;
}

.form-group {
  margin-bottom: 1rem;
}

.w-100 {
  width: 100%;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.text-center {
  text-align: center;
}

.text-white {
  color: white;
}

@media (max-width: 576px) {
  .login-form {
    padding: 30px 20px;
    margin: 0 10px;
  }
}
</style>