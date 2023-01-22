import { defineStore } from 'pinia'
import axios from 'axios'

const useProjectStore = defineStore('ProjectStore', {
	state() {
		return {
			projects: [],
			loadprojects: false,
		}
	},

	getters: {
		setProjects() {
			return this.projects
		},
	},
	actions: {
		async projectAction() {
			this.loadprojects = true
			try {
				const response = await axios.get('/projects')

				if (response.status != 200) {
					const error = new Error('something went wrong')
					throw error
				}
				this.projects = response.data
			} catch (error) {
				console.log(error)
				throw error
			} finally {
				this.loadprojects = true
			}
		},
	},
})

export default useProjectStore
