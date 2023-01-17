<template>
	<div
		class="hidden xl:block relative w-1/2 bg-secondaryGreen rounded-lg shadow-lg shadow-accentGreen border h-[70%] mt-10 border-lines"
	>
		<snake-game-screw></snake-game-screw>
		<div class="grid grid-cols-5 gap-4 space-x-4 p-10">
			<GameContainer v-on:update:score="updateScore" class="col-span-3" />
			<GameControls :score="score" class="col-span-2" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import GameContainer from './GameContainer.vue'
import GameControls from './GameControls.vue'
import SnakeGameScrew from './SnakeGameScrew.vue'

const score = ref(0)

function updateScore(newscore) {
	score.value = newscore
}
</script>
