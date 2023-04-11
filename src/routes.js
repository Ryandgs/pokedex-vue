import { createWebHistory, createRouter } from 'vue-router';

import PokemonList from './pages/PokemonList/PokemonList.vue';
import PokemonView from './pages/PokemonView/PokemonView.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
