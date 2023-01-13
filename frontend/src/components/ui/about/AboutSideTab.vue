<template>
	<div id="accordion-collapse" data-accordion="collapse">
		<!-- personal info -->
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="openAccordion"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span :class="classObject">personal-info</span>
			</button>
		</h2>
		<!-- preofesional -->
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="openAccordion"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span :class="classObject">blog</span>
			</button>
		</h2>
		<!-- preofesional -->
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="openAccordion"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span :class="classObject">blog</span>
			</button>
		</h2>

		<div class="flex flex-col items-start pl-8 mt-5">
			<div class="flex space-x-3 items-center mb-4 text-gray-200">
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<img src="../../../assets/folder-green.png" alt="" class="w-5" />
				<p
					for="default-checkbox"
					class="ml-2 text-body font-mediumtext-gray-300"
				>
					bio
				</p>
			</div>
			<div class="flex space-x-3 items-center mb-4 text-gray-200">
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<img src="../../../assets/folder-purple.png" alt="" class="w-5" />
				<p
					for="default-checkbox"
					class="ml-2 text-body font-mediumtext-gray-300"
				>
					Tech Stacks
				</p>
			</div>
			<div class="flex space-x-3 items-center mb-4 text-gray-200">
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<img src="../../../assets/folder-orange.png" alt="" class="w-5" />
				<p
					for="default-checkbox"
					class="ml-2 text-body font-mediumtext-gray-300"
				>
					education
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import iconUpArrow from '../../icons/iconUpArrow.vue'
</script>
