<template>
	<!-- contact Infor -->
	<h2>
		<button
			@click="toggleContacts"
			type="button"
			class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
		>
			<div class="transition duration-500 ease" :class="arrowClick">
				<iconUpArrow />
			</div>
			<span>contacts</span>
		</button>
	</h2>
	<!-- contact-body -->
	<div class="flex flex-col items-start pl-8 mt-5" v-if="ContactActive">
		<div class="flex space-x-3 items-center cursor-pointer mb-4 text-gray-200">
			<div class="transition duration-500 ease"></div>
			<IconMail />
			<p class="ml-2 text-body font-mediumtext-gray-300">
				ajaybullec@gmail.com
			</p>
		</div>
	</div>

	<!-- preofesional -->
	<h2>
		<button
			@click="toggleMore"
			type="button"
			class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
		>
			<div class="transition duration-500 ease">
				<iconLeftArrow />
			</div>
			<span>find-me-in</span>
		</button>
	</h2>
	<div
		v-if="infoMore"
		class="flex flex-col items-start pl-8 mt-5 transition ease"
	>
		<div class="flex flex-row space-x-2">
			<IconLinkExternal />
			<a
				target="_blank"
				href="https://www.linkedin.com/in/maxwell-muhanda-5563b316b/"
				class="text-secondaryLightBlue text-body"
			>
				linkedin
			</a>
		</div>
		<div class="flex flex-row space-x-2">
			<IconLinkExternal />
			<a
				target="_blank"
				href="https://dev.to/maxino22"
				class="text-secondaryLightBlue text-body"
			>
				DEV
			</a>
		</div>
		<div class="flex flex-row space-x-2">
			<IconLinkExternal />
			<a
				target="_blank"
				href="https://codepen.io/maxino"
				class="text-secondaryLightBlue text-body"
			>
				Codepen
			</a>
		</div>
		<div class="flex flex-row space-x-2">
			<IconLinkExternal />
			<a
				target="_blank"
				href="https://www.instagram.com/muhanda_maxino/"
				class="text-secondaryLightBlue text-body"
			>
				Instagram
			</a>
		</div>
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import IconMail from '../../icons/iconMail.vue'
import IconUpArrow from '../../icons/iconUpArrow.vue'
import IconLinkExternal from '../../icons/iconLinkExternal.vue'
import IconLeftArrow from '../../icons/iconLeftArrow.vue'
import { ref } from 'vue'

const ContactActive = ref(false)
const infoMore = ref(false)

function toggleContacts() {
	ContactActive.value = !ContactActive.value
}
function toggleMore() {
	infoMore.value = !infoMore.value
}

const arrowClick = computed(() => ({
	'-rotate-180': ContactActive.value,
}))
</script>
