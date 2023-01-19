<template>
	<div class="px-8 py-5">
		<div class="flex space-x-4">
			<!-- number Array -->
			<div class="hidden md:flex flex-col space-y-1">
				<p
					v-for="number in numbers"
					:key="number"
					class="text-lg text-white md:text-secondaryLightBlue"
				>
					{{ number }}
				</p>
			</div>
			<!-- About bio -->
			<div class="text-secondaryLightBlue flex-flex-col space-y-1">
				<p>/**</p>
				<p>* About-me</p>
				<p>*</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const numbers = ref(Array.from({ length: 20 }, (_, i) => i + 1))
</script>

<style lang="scss" scoped></style>
