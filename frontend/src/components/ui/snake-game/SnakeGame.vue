<template>
	<div
		class="hidden xl:block relative w-1/2 bg-secondaryGreen rounded-lg shadow-lg shadow-accentGreen border border-lines -mt-10"
	>
		<snake-game-screw></snake-game-screw>
		<div class="flex space-x-4 p-10">
			<GameContainer />
			<GameControls />
		</div>
	</div>
</template>

<script>
import GameContainer from './GameContainer.vue'
import GameControls from './GameControls.vue'
import SnakeGameScrew from './SnakeGameScrew.vue'
export default {
	components: {
		SnakeGameScrew,
		GameContainer,
		GameControls,
	},
	setup() {},
}
</script>
