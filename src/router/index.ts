import App from '@/App.vue'
import MainInfoPage from "@/pages/MainInfoPage.vue";

const router = [
  {
    path:'',
    name:'main',
    component:App,
      children:[
          {
              path:'',
              name:'main-info',
              component:MainInfoPage
          }
      ]
  }
]

export default router
