<template>
	<div id="accordion-collapse" data-accordion="collapse">
		<!-- personal info -->
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="openPersonalInfo"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span>personal-info</span>
			</button>
		</h2>
		<!-- preofesiona -->
		<h2 id="accordion-collapse-heading-2">
			<button
				@click="openPersonalInfo"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span>professional-info</span>
			</button>
		</h2>
		<!-- blog -->
		<h2 id="accordion-collapse-heading-3">
			<button
				@click="openPersonalInfo"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span>Blog</span>
			</button>
		</h2>
		<!-- contact -->
		<h2 id="accordion-collapse-heading-4">
			<button
				@click="openPersonalInfo"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span>Contact</span>
			</button>
		</h2>

		<div class="flex flex-col items-start pl-8 mt-5" v-if="active">
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
import iconUpArrow from '../../icons/iconUpArrow.vue'
</script>
