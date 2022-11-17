import { defineStore } from 'pinia'

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
		submitForm() {
			this.name = ''
			this.email = ''
			this.message = ''
			this.messageRecieved = true
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
