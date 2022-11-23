import { defineStore } from 'pinia'

const useProjectStore = defineStore('ProjectStore', {
	state() {
		return {
			projects: [
				{
					id: 2,
					title: 'Pong Agencies',
					description:
						'Managed IT Services company landing page built with best practices of SEO and  Branding',
					category: {
						title: 'Wordpress',
					},
					project_url: 'https://pongafrica.com/',
					github_url: null,
					project_image:
						'https://res.cloudinary.com/maxino/image/upload/v1/projects/pong_agencies_hsl6yo',
				},
				{
					id: 3,
					title: 'Kilimani Project ',
					description:
						'Kilimani  community neighborhood association works to make kilimani better',
					category: {
						title: 'Vue',
					},
					project_url: 'https://kilimani.org/',
					github_url: null,
					project_image:
						'https://res.cloudinary.com/maxino/image/upload/v1/projects/kilimani_Project_Foundation_cu8dxl',
				},
			],
		}
	},

	getters: {
		projectsGetter() {
			return this.projects
		},
	},
})

export default useProjectStore
