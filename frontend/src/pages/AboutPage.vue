<template>
	<div
		class="grid grid-col-1 mx-auto pb-10 md:min-h-screen md:grid-cols-3 xl:grid-cols-5"
	>
		<div
			class="md:pr-12 flex flex-col w-full justify-start md:border-r border-lines"
		>
			<p
				class="pt-6 px-6 outline-none group divide-y divide-lines text-white body-text md:hidden"
			>
				_about-me
			</p>
			<div class="flex flex-col">
				<AboutSideTab />
			</div>
		</div>
	</div>
</template>

<script setup>
import AboutSideTab from '../components/ui/about/AboutSideTab.vue'
</script>
