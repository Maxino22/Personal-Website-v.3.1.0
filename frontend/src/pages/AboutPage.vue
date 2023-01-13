<template>
	<div class="grid grid-col-1 mx-auto md:min-h-screen md:grid-cols-5">
		<div
			class="flex flex-col md:flex-row justify-start w-full md:border-r border-lines"
		>
			<p class="pt-6 px-6 outline-none group text-white body-text md:hidden">
				_about_me
			</p>
			<div class="flex flex-col w-full">
				<AboutSideTab />
			</div>
		</div>
		<div class="md:col-span-4 py-3">
			<div class="flex w-full items-center md:border-b border-lines">
				<div class="px-10 text-white">
					// Projects <span class="text-secondaryLightBlue">/ all</span>
				</div>
			</div>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-center md:mt-24 mx-16"
			></div>
		</div>
	</div>
</template>

<script setup>
import AboutSideTab from '../components/ui/about/AboutSideTab.vue'
</script>
