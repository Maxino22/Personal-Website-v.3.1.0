import { defineStore } from 'pinia'
import axios from 'axios'

const useContactStore = defineStore('ContactStore', {
	state() {
		return {
			name: '',
			email: '',
			message: '',
			date: '',
			messageRecieved: false,
			preloaderStatus: false,
		}
	},
	getters: {
		userName() {
			return this.name
		},
		userEmail() {
			return this.email
		},
		userMessage() {
			return this.message
		},
		userMessageRecieved() {
			return this.messageRecieved
		},
		messageTime() {
			return this.date
		},
		preloader() {
			return this.preloaderStatus
		},
	},
	actions: {
		async submitForm() {
			this.preloaderStatus = true
			try {
				await axios.post('https://api.maxino.xyz/contacts/', {
					name: this.name,
					email: this.email,
					message: this.message,
				})
				this.name = ''
				this.email = ''
				this.message = ''
				this.preloaderStatus = false
				this.messageRecieved = true
			} catch (error) {
				console.log(error)
			}
		},
		setDate(formDate) {
			this.date = formDate
		},
		sendNewMessage() {
			this.messageRecieved = false
		},
	},
})

export default useContactStore
