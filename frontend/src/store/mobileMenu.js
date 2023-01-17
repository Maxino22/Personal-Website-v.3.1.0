import { defineStore } from 'pinia'

const useMobileMenu = defineStore('mobileMenu', {
	state() {
		return {
			theState: false,
			openButton: false,
		}
	},
	getters: {
		isActive() {
			return this.theState
		},
		isOpenButton() {
			return this.openButton
		},
	},
	actions: {
		openMobileMenu() {
			this.theState = !this.theState
		},
		openMobileButton() {
			this.openButton = !this.openButton
		},
	},
})

export default useMobileMenu
