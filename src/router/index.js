import { createRouter, createWebHistory } from 'vue-router'
import comment from './comment.vue'


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
  ]
})

export default router
