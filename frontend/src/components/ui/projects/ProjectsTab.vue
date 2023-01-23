<template>
	<div id="accordion-collapse" data-accordion="collapse">
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="openAccordion"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span :class="classObject">projects</span>
			</button>
		</h2>
		<div class="flex flex-col items-start pl-8 mt-5" v-if="active">
			<div class="flex space-x-2 items-center mb-4">
				<input
					type="checkbox"
					:value="wordpress"
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
					:value="django"
					class="w-4 h-4 text-secondaryLightBlue accent-secondaryLightBlue bg-primaryBlue rounded focus:ring-secondaryLightBlue"
					checked
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
					:value="vue"
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
					:value="flask"
					class="w-4 h-4 text-secondaryLightBlue accent-secondaryLightBlue bg-primaryBlue rounded focus:ring-secondaryLightBlue"
				/>
				<img
					class="w-6 h-6"
					src="../../../assets/tech-stacks/flask.png"
					alt=""
				/>
				<label
					for="default-checkbox"
					class="ml-2 text-body font-medium text-gray-900 dark:text-gray-300"
					>Flask</label
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
const active = ref(false)
function openAccordion() {
	active.value = !active.value
}

const classObject = computed(() => ({
	'text-white': active.value,
}))
const arrowClick = computed(() => ({
	'-rotate-180': active.value,
}))

const props = defineProps({
	wordpress: Boolean,
	django: Boolean,
	flask: Boolean,
	vue: Boolean,
})
</script>
