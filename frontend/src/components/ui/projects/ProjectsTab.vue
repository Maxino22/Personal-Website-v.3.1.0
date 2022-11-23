<template>
	<div id="accordion-collapse" data-accordion="collapse">
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="openAccordion"
				type="button"
				class="flex items-center space-x-3 justify-between w-full p-5 font-medium text-left text-white"
			>
				<span :class="classObject">projects</span>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
			</button>
		</h2>
		<div class="flex flex-col items-start pl-8" v-if="active">
			<div class="flex space-x-2 items-center mb-4">
				<input
					type="checkbox"
					value=""
					class="w-4 h-4 text-secondaryLightBlue accent-secondaryLightBlue bg-primaryBlue rounded focus:ring-secondaryLightBlue"
				/>
				<iconWordpress />
				<label
					for="default-checkbox"
					class="ml-2 text-body font-medium text-gray-900 dark:text-gray-300"
					>Wordpress</label
				>
			</div>
			<div class="flex space-x-2 items-center mb-4">
				<input
					type="checkbox"
					value=""
					class="w-4 h-4 text-secondaryLightBlue accent-secondaryLightBlue bg-primaryBlue rounded focus:ring-secondaryLightBlue"
				/>
				<iconDjango />
				<label
					for="default-checkbox"
					class="ml-2 text-body font-medium text-gray-900 dark:text-gray-300"
					>Django</label
				>
			</div>
			<div class="flex space-x-2 items-center mb-4">
				<input
					type="checkbox"
					value=""
					class="w-4 h-4 text-secondaryLightBlue accent-secondaryLightBlue bg-primaryBlue rounded focus:ring-secondaryLightBlue"
				/>
				<iconVue />
				<label
					for="default-checkbox"
					class="ml-2 text-body font-medium text-gray-900 dark:text-gray-300"
					>Vue js</label
				>
			</div>
			<div class="flex space-x-2 items-center mb-4">
				<input
					type="checkbox"
					value=""
					class="w-4 h-4 text-secondaryLightBlue accent-secondaryLightBlue bg-primaryBlue rounded focus:ring-secondaryLightBlue"
				/>
				<iconPython />
				<label
					for="default-checkbox"
					class="ml-2 text-body font-medium text-gray-900 dark:text-gray-300"
					>Python</label
				>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import iconUpArrow from '../../icons/iconUpArrow.vue'
import iconWordpress from '../../icons/iconWordpress.vue'
import iconVue from '../../icons/iconVue.vue'
import iconDjango from '../../icons/iconDjango.vue'
import iconPython from '../../icons/iconPython.vue'
const active = ref(false)
function openAccordion() {
	active.value = !active.value
}

const classObject = computed(() => ({
	'text-accentGreen': active.value,
}))
const arrowClick = computed(() => ({
	'-rotate-180': active.value,
}))
</script>
