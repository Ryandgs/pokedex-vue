<script setup>
import { onUnmounted, ref } from 'vue'
import useProfileStore from '@/stores/Profile/ProfileStore'
import AppButton from '@/components/AppButton/AppButton.vue'

const profileStore = useProfileStore()

const socket = new WebSocket('ws://localhost:8080')

const battleData = ref(undefined)

const sendMessage = (message) => {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message))
  }
}

socket.onopen = () => {
  sendMessage({ type: 'entry', data: {
    name: profileStore.name,
    dex: profileStore.myPokemons }
  })
}

socket.onmessage = (e) => {
  if (!e.data) return
  const data = JSON.parse(e.data)

  if (data.type === 'sync') {
    battleData.value = data.battleData
  }
}

const updateRooms = () => {
  sendMessage({ type: 'update' })
}

const enterRoom = (roomId) => {
  sendMessage({ type: 'enterRoom', data: {
    roomId: roomId,
    user: profileStore.name
  } })
}

const leaveRoom = (roomId) => {
  sendMessage({ type: 'leaveRoom', data: {
    roomId: roomId,
    user: profileStore.name
  } })
}
</script>

<template>
  <div class="pokebattle">
    <h1>Battle data</h1>
    <AppButton
      label="Reload"
      class="my-4"
      @click="updateRooms"
    />

    <template v-if="battleData">
      <h3 class="text-lg">Rooms</h3>
      <p>
        <div v-for="room in (battleData.rooms)" class="mb-4">
          <h3>{{ room }}</h3>
          <AppButton label="Enter" class="mt-2" @click="enterRoom(room.id)" />
          <AppButton label="Leave" class="mt-2" @click="leaveRoom(room.id)" />
        </div>
      </p>

      <div v-if="battleData.players.length" class="onlineplayers">
        <h3 class="text-lg mt-4">Online players:</h3>
        <p>
          <ul>
            <li v-for="player in (battleData.players)">
              ON - {{ player.name }}
              <span v-if="player.name === profileStore.name" class="font-bold">(YOU)</span>
            </li>
          </ul>
        </p>
      </div>
    </template>
  </div>
</template>
