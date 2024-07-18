import { createMemoryHistory, createRouter } from 'vue-router'

import Sub from '@/components/sub/index.vue'
import Drag from '@/components/drag/index.vue'
import Drag2 from '@/components/drag2/index.vue'
import Dnd from '@/components/dnd/index'
import Draggable from '@/components/draggable/index.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/about', name: 'about', component: Sub },
    { path: '/drag', name: 'drag', component: Drag },
    { path: '/drag2', name: 'drag2', component: Drag2 },
    { path: '/drag3', name: 'drag3', component: Dnd },
    { path: '/draggable', name: 'draaggable', component: Draggable }

  ],
});

export default router;