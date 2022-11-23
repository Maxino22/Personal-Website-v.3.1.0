<template>
	<footer class="flex items-center border-t border-lines py-1 mx-2 lg:hidden">
		<div
			class="flex-1 px-4 border-r text-secondaryLightBlue border-lines text-center"
		>
			find me in:
		</div>
		<div class="flex items-center">
			<a
				href="https://www.linkedin.com/in/maxwell-muhanda-5563b316b/"
				class="px-4 border-r text-secondaryLightBlue border-lines"
			>
				<iconLinkedIn />
			</a>
			<a
				href="https://twitter.com/MaxwellMuhanda"
				class="px-4 border-r text-secondaryLightBlue border-lines"
			>
				<icon-twitter></icon-twitter>
			</a>
			<a
				href="https://github.com/Maxino22"
				class="px-4 text-secondaryLightBlue"
			>
				<IconGithub />
			</a>
		</div>
	</footer>
	<footer
		class="hidden lg:flex justify-between border-lines items-center py-1 mx-2 border-t"
	>
		<div class="flex items-center">
			<p
				class="flex-1 px-4 border-r text-secondaryLightBlue border-lines text-center"
			>
				find me in:
			</p>

			<a
				target="_blank"
				href="https://www.linkedin.com/in/maxwell-muhanda-5563b316b/"
				class="px-4 border-r text-secondaryLightBlue border-lines"
			>
				<iconLinkedIn />
			</a>
			<a
				target="_blank"
				href="https://twitter.com/MaxwellMuhanda"
				class="px-4 border-r text-secondaryLightBlue border-lines"
			>
				<icon-twitter></icon-twitter>
			</a>
		</div>
		<div>
			<a
				target="_blank"
				href="https://github.com/Maxino22"
				class="flex items-center space-x-1 px-4 border-l border-lines text-center"
			>
				<span class="text-secondaryLightBlue hover:text-accentOrange"
					>Maxino22</span
				>
				<IconGithub />
			</a>
		</div>
	</footer>
</template>

<script setup>
import IconGithub from '../icons/iconGithub.vue'
import iconLinkedIn from '../icons/iconLinkedIn.vue'
import IconTwitter from '../icons/iconTwitter.vue'
</script>
