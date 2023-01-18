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
		<div class="col-span-2 md:border-r border-lines">
			<p
				class="text-secondaryLightBlue border-b w-full pl-5 border-lines py-[6px]"
			>
				Text
			</p>
		</div>
		<div class="hidden lg:block lg:col-span-2">
			<p class="text-primaryBlue border-b w-full pl-5 border-lines py-[6px]">
				test
			</p>
		</div>
	</div>
</template>

<script setup>
import AboutSideTab from '../components/ui/about/AboutSideTab.vue'
</script>
