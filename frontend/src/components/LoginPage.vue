<template>
    <div class="container d-flex align-items-center justify-content-center vh-100">
      <div class="card p-4 shadow-lg w-100" style="max-width: 400px;">
        <h3 class="text-center mb-4">Penguins App Login</h3>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>
  
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
  
          <button type="submit" class="btn btn-primary w-100">Log In</button>
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