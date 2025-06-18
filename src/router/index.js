import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Projects from '../pages/Projects.vue'
import NewProject from '../pages/NewProject.vue'
import EditProject from '../pages/EditProject.vue'
import Categories from '../pages/Categories.vue'
import Index from '../pages/Index.vue'
import ProjectDetails from '../pages/ProjectDetails.vue'
import { authGuard } from '../utils/authGuard'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/project/:id', name: 'ProjectDetails', component: ProjectDetails },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: authGuard,
    children: [
      { path: '', redirect: '/dashboard/projects' },
      { path: 'projects', name: 'Projects', component: Projects },
      { path: 'projects/new', name: 'NewProject', component: NewProject },
      { path: 'projects/edit/:id', name: 'EditProject', component: EditProject, props: true },
      { path: 'categories', name: 'Categories', component: Categories }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
