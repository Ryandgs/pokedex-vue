import { createWebHistory, createRouter } from 'vue-router'

import PokemonList from './pages/PokemonList/PokemonList.vue'
import PokemonView from './pages/PokemonView/PokemonView.vue'
import TrainerProfile from './pages/TrainerProfile/TrainerProfile.vue'
import TrainerParty from './pages/TrainerParty/TrainerParty.vue'
import PokemonDex from './pages/PokemonDex/PokemonDex.vue'

const routes = [
  {
    path: '/',
    name: 'pokemon.list',
    component: PokemonList,
  },
  {
    path: '/:id',
    name: 'pokemon.view',
    component: PokemonView,
  },
  {
    path: '/profile',
    name: 'trainer.profile',
    component: TrainerProfile,
  },
  {
    path: '/party',
    name: 'trainer.party',
    component: TrainerParty,
  },
  {
    path: '/dex',
    name: 'pokemon.dex',
    component: PokemonDex,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
