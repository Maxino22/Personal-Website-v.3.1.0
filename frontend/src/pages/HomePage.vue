<template>
	<div
		class="flex flex-col justify-start md:flex-row md:space-x-24 min-h-screen px-12 py-24 md:pt-64 md:pb-32"
	>
		<div class="flex flex-col space-y-4">
			<h6 class="sub-head text-white">Hi all. I am</h6>
			<h1 class="heading text-white">Maxwell Muhanda</h1>
			<h4 class="sub-head text-accentGreen md:text-secondaryPurple">
				> Full-Stack Developer
			</h4>
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

<script>
import SnakeGame from '../components/ui/SnakeGame.vue'
export default {
	components: { SnakeGame },
	setup() {},
}
</script>
