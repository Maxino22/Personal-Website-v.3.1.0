<template>
	<div
		class="flex flex-col justify-start md:flex-row md:space-x-24 h-screen px-12"
	>
		<div class="flex flex-col space-y-4 mt-40">
			<h6 class="sub-head text-white">Hi all. I am</h6>
			<h3 class="heading text-white">Maxwell Muhanda</h3>

			<TheTypeWritter />
			<div>
				<p class="hidden lg:block mt-10 body-text text-secondaryLightBlue">
					// play snake Game
				</p>
				<p class="body-text mt-10 lg:mt-0 text-secondaryLightBlue">
					// you can find my github profile at
				</p>
				<p class="body-text">
					<span class="text-secondaryPurple mr-3">const</span>
					<span class="text-accentGreen">githubUrl</span>
					<span class="text-white mx-3">=</span>

					<a class="text-accentOrange mx-3" href="https://github.com/Maxino22"
						>"https://<br class="md:hidden" />github.com/Maxino22"</a
					>
				</p>
			</div>
		</div>

		<snake-game></snake-game>
	</div>
</template>

<script setup>
import TheTypeWritter from '../components/layout/TheTypeWritter.vue'
import SnakeGame from '../components/ui/snake-game/SnakeGame.vue'
</script>
