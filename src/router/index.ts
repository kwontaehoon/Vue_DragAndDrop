import { createMemoryHistory, createRouter } from 'vue-router'

import Sub from '@/components/sub/index.vue'
import Drag from '@/components/drag/index.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/about', name: 'about', component: Sub },
    { path: '/drag', name: 'drag', component: Drag },
  ],
});

export default router;