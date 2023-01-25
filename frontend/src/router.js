import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		meta: {
			title: 'Maxwell Muhanda | Portfolio Website',
		},
		component: () => import('./pages/HomePage.vue'),
	},
	{
		path: '/about-me',
		name: 'About ME',
		component: () => import('./pages/AboutPage.vue'),
		meta: {
			title: 'Maxwell Muhanda | About Me',
		},
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () => import('./pages/ProjectsPage.vue'),
		meta: {
			title: 'Maxwell Muhanda | Projects',
		},
	},
	{
		path: '/contact-me',
		name: 'Contact Page',
		component: () => import('./pages/ContactPage.vue'),
		meta: {
			title: 'Maxwell Muhanda | Contact Me',
		},
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	scrollBehavior(_, _2, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		return {
			left: 0,
			top: 0,
		}
	},
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`
	next()
})

export default router
