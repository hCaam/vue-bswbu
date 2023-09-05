import { createRouter, createWebHistory } from 'vue-router'
import comment from './comment.vue'
import ceditor from './jsongenerator.vue'

// const manga = {
//   props: {
//     callId: Number
//   }
// }
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/:id',
      name: 'comment',
      component: comment
    },
    {
      path: '/jsoneditor',
      name: 'editor',
      component: ceditor
    },
  ]
})

export default router
