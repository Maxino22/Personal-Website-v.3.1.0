<template>
	<div
		class="hidden xl:flex justify-center relative w-1/2 bg-secondaryGreen rounded-lg shadow-lg shadow-accentGreen border border-lines -mt-10"
	>
		<snake-game-screw></snake-game-screw>
	</div>
</template>

<script>
import SnakeGameScrew from './SnakeGameScrew.vue'
export default {
	components: {
		SnakeGameScrew,
	},
	setup() {},
}
</script>
