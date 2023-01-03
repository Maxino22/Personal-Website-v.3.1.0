import { defineStore } from 'pinia'

const useSnakeStore = defineStore('snakeStore', {
	state() {
		return {
			score: 0,
		}
	},
	getters: {
		snakeScore() {
			return this.score
		},
	},
	actions: {
		addScore() {
			this.score++
		},
		reset() {
			this.score = 0
		},
	},
})

export default useSnakeStore
