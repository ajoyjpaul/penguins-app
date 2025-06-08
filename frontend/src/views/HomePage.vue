<template>
  <div class="overflow-auto">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center mb-4">Roster</h1>
          
          <!-- Forwards Section -->
          <div class="mb-5">
            <h2 class="mb-3">Forwards</h2>
            <PlayerTable :players="forwards" />
          </div>

          <!-- Defensemen Section -->
          <div class="mb-5">
            <h2 class="mb-3">Defensemen</h2>
            <PlayerTable :players="defensemen" />
          </div>

          <!-- Goalies Section -->
          <div class="mb-5">
            <h2 class="mb-3">Goalies</h2>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-dark">
                  <tr>
                    <th>Player</th>
                    <th>Pos</th>
                    <th>GP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>OTL</th>
                    <th>GAA</th>
                    <th>SV%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="goalie in goalies" :key="goalie.playerId" class="align-middle">
                    <td>
                      <div class="d-flex align-items-center">
                        <img 
                          :src="goalie.headshot" 
                          :alt="goalie.firstName.default + ' ' + goalie.lastName.default"
                          class="rounded-circle me-3"
                          style="width: 50px; height: 50px; object-fit: cover;"
                          @error="handleImageError"
                        >
                        <div>
                          <div class="fw-bold">{{ goalie.firstName.default }} {{ goalie.lastName.default }}</div>
                        </div>
                      </div>
                    </td>
                    <td>G</td>
                    <td>{{ goalie.gamesPlayed }}</td>
                    <td>{{ goalie.wins }}</td>
                    <td>{{ goalie.losses }}</td>
                    <td>{{ goalie.overtimeLosses }}</td>
                    <td>{{ goalie.goalsAgainstAverage.toFixed(2) }}</td>
                    <td>{{ goalie.savePercentage.toFixed(3) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PlayerTable from '../components/PlayerTable.vue'

// Import the roster data
import rosterData from '../../../shared/data/2024_2025_penguins_roster.json'

// Define interfaces for type safety
interface Player {
  playerId: number
  headshot: string
  firstName: { default: string }
  lastName: { default: string }
  positionCode: string
  gamesPlayed: number
  goals: number
  assists: number
  points: number
  plusMinus: number
  avgTimeOnIcePerGame: number
}

interface Goalie {
  playerId: number
  headshot: string
  firstName: { default: string }
  lastName: { default: string }
  gamesPlayed: number
  wins: number
  losses: number
  overtimeLosses: number
  goalsAgainstAverage: number
  savePercentage: number
}

// Computed properties to filter players by position
const forwards = computed(() => {
  return rosterData.skaters.filter((player: Player) => 
    ['C', 'L', 'R', 'LW', 'RW'].includes(player.positionCode)
  ).sort((a, b) => a.lastName.default.localeCompare(b.lastName.default))
})

const defensemen = computed(() => {
  return rosterData.skaters.filter((player: Player) => 
    player.positionCode === 'D'
  ).sort((a, b) => a.lastName.default.localeCompare(b.lastName.default))
})

const goalies = computed(() => {
  return rosterData.goalies.sort((a: Goalie, b: Goalie) => 
    a.lastName.default.localeCompare(b.lastName.default)
  )
})

// Helper functions
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/penguins-logo.png'
}
</script>

<style scoped>
.container-fluid {
  background-color: #f8f9fa;
}

h1 {
  color: #000;
  font-weight: bold;
  margin-bottom: 2rem;
}

h2 {
  color: #000;
  font-weight: 600;
  border-bottom: 3px solid #fcb514;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.table {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.table-dark {
  background-color: #000 !important;
}

.table-striped > tbody > tr:nth-of-type(odd) > td {
  background-color: rgba(0,0,0,0.05);
}

.fw-bold {
  font-weight: 600 !important;
}

img {
  border: 2px solid #fcb514;
}
</style>
