import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', component: () => import('./pages/HomePage.vue') },
	{ path: '/about-me', component: () => import('./pages/AboutPage.vue') },
	{ path: '/projects', component: () => import('./pages/ProjectsPage.vue') },
	{ path: '/contact-me', component: () => import('./pages/ContactPage.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
})

export default router
