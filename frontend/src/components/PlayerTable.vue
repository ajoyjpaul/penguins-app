<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Player</th>
          <th>Pos</th>
          <th>GP</th>
          <th>G</th>
          <th>A</th>
          <th>Pts</th>
          <th>+/-</th>
          <th>TOI</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.playerId" class="align-middle">
          <td>
            <div class="d-flex align-items-center">
              <img 
                :src="player.headshot" 
                :alt="player.firstName.default + ' ' + player.lastName.default"
                class="rounded-circle me-3"
                style="width: 50px; height: 50px; object-fit: cover;"
                @error="handleImageError"
              >
              <div>
                <div class="fw-bold">{{ player.firstName.default }} {{ player.lastName.default }}</div>
              </div>
            </div>
          </td>
          <td>{{ player.positionCode }}</td>
          <td>{{ player.gamesPlayed }}</td>
          <td>{{ player.goals }}</td>
          <td>{{ player.assists }}</td>
          <td class="fw-bold">{{ player.points }}</td>
          <td :class="getPlusMinusClass(player.plusMinus)">
            {{ formatPlusMinus(player.plusMinus) }}
          </td>
          <td>{{ formatTOI(player.avgTimeOnIcePerGame) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
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

interface Props {
  players: Player[]
}

defineProps<Props>()

// Helper functions
const formatTOI = (avgTimeOnIcePerGame: number): string => {
  const minutes = Math.floor(avgTimeOnIcePerGame / 60)
  const seconds = Math.round(avgTimeOnIcePerGame % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const formatPlusMinus = (plusMinus: number): string => {
  if (plusMinus === 0) return '0'
  return plusMinus > 0 ? `+${plusMinus}` : `${plusMinus}`
}

const getPlusMinusClass = (plusMinus: number): string => {
  if (plusMinus === 0) return 'text-dark'
  return plusMinus > 0 ? 'text-success' : 'text-danger'
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://via.placeholder.com/50x50/cccccc/666666?text=N/A'
}
</script>

<style scoped>
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

.text-success {
  color: #198754 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.text-dark {
  color: #000 !important;
}

img {
  border: 2px solid #fcb514;
}
</style> 