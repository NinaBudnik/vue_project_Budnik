import { createRouter, createWebHistory } from 'vue-router';
import List from '@/views/List.vue'; // Імпортуємо компонент для списку
import MyGroup from '@/views/MyGroup.vue'; // Імпортуємо компонент для групи

const routes = [
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/my-group',
    name: 'MyGroup',
    component: MyGroup
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
