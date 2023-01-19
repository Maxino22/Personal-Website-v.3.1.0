<template>
	<!-- personal info -->
	<h2 id="accordion-collapse-heading-1">
		<button
			@click="togglePersonalInfo"
			type="button"
			class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
		>
			<div class="transition duration-500 ease" :class="arrowClick">
				<iconUpArrow />
			</div>
			<span>personal-info</span>
		</button>
	</h2>
	<!-- contact-body -->
	<div class="flex flex-col items-start pl-8 mt-5" v-if="contactsActive">
		<div class="flex space-x-3 items-center cursor-pointer mb-4 text-gray-200">
			<div class="transition duration-500 ease"></div>
			<iconMail />
			<p class="ml-2 text-body font-mediumtext-gray-300">
				ajaybullec@gmail.com
			</p>
		</div>
	</div>

	<!-- Tab 1 -->
	<div class="py-3 px-6 outline-none group divide-y divide-lines">
		<!-- Tab Flex Container -->
		<div
			@click="openAccordion"
			class="flex items-center justify-start py-3 space-x-2 text-white transition duration-500 cursor-pointer group ease"
		>
			<div
				class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentGreen"
			>
				<IconUpArrow :class="arrowClick" />
			</div>
			<!-- tab Title -->
			<div class="transistion duration-500 ease group-hover:text-accentGreen">
				contacts
			</div>
			<!-- arrow -->
		</div>
		<!-- Tab Inner Content -->
		<div
			v-if="active"
			class="flex flex-col overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
		>
			<div class="flex flex-row space-x-2">
				<IconMail />
				<p class="text-secondaryLightBlue text-body">ajaybullec@gmail.com</p>
			</div>
		</div>
	</div>
	<!-- Tab 2 -->
	<div class="py-3 px-6 outline-none group">
		<!-- Tab Flex Container -->
		<div
			class="flex items-center justify-start py-3 space-x-2 text-white transition duration-500 cursor-pointer group ease"
		>
			<div
				class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentGreen"
			>
				<IconUpArrow :class="arrowClick" />
			</div>
			<!-- tab Title -->
			<div class="transistion duration-500 ease group-hover:text-accentGreen">
				find-me-in
			</div>
			<!-- arrow -->
		</div>
		<!-- Tab Inner Content -->
		<div
			class="flex flex-col space-y-2 overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
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
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import IconMail from '../../icons/iconMail.vue'
import IconUpArrow from '../../icons/iconUpArrow.vue'
import IconLinkExternal from '../../icons/iconLinkExternal.vue'
import { ref } from 'vue'

const active = ref(false)

function openAccordion() {
	active.value = !active.value
}

const arrowClick = computed(() => ({
	'-rotate-180': active.value,
}))
</script>
