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
	},
	actions: {
		async submitForm() {
			try {
				await axios.post('http://localhost:8000/contacts/', {
					name: this.name,
					email: this.email,
					message: this.message,
				})
				this.name = ''
				this.email = ''
				this.message = ''
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
