<template>
	<div
		class="hidden xl:block relative w-1/2 bg-secondaryGreen rounded-lg shadow-lg shadow-accentGreen border border-lines -mt-10"
	>
		<snake-game-screw></snake-game-screw>
		<div class="grid grid-cols-5 gap-4 space-x-4 p-10">
			<GameContainer class="col-span-3" />
			<GameControls :score="score" class="col-span-2" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import useSnakeStore from '../../../store/snakeStore'
import GameContainer from './GameContainer.vue'
import GameControls from './GameControls.vue'
import SnakeGameScrew from './SnakeGameScrew.vue'

const { snakeScore } = useSnakeStore()

const score = computed(() => snakeScore)
</script>
