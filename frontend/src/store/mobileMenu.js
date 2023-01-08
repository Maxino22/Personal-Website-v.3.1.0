import { defineStore } from 'pinia'

const useMobileMenu = defineStore('mobileMenu', {
	state() {
		return {
			theState: false,
		}
	},
	getters: {
		isActive() {
			return this.theState
		},
	},
	actions: {
		openMobileMenu() {
			this.theState = !this.theState
		},
	},
})

export default useMobileMenu
