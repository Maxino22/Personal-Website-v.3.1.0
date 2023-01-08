<template>
	<div>
		<div class="w-full h-44 rounded-lg bg-primaryBlack bg-opacity-30 py-4 px-1">
			<p class="text-white text-sm">// use keyboard</p>
			<p class="text-white text-sm">// keys w, s, a , d</p>
			<p class="text-white text-sm">// to play</p>
			<div class="grid grid-cols-3 my-1">
				<div class="col-start-2 col-span-1">
					<div
						class="rounded-lg px-2 py-2 bg-primaryBlack text-white text-center"
					>
						w
					</div>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-1">
				<div
					class="rounded-lg px-2 py-2 bg-primaryBlack text-white text-center"
				>
					A
				</div>
				<div
					class="rounded-lg px-2 py-2 bg-primaryBlack text-white text-center"
				>
					S
				</div>
				<div
					class="rounded-lg px-2 py-2 bg-primaryBlack text-white text-center"
				>
					D
				</div>
			</div>
		</div>

		<div class="mt-3 flex flex-col align-center">
			<p class="text-white text-sm">// play to safisfaction</p>
			<div
				class="rounded-lg w-10 px-2 py-2 bg-primaryBlack mx-auto text-white text-center"
			>
				{{ score }}
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	score: {
		type: Number,
		required: true,
	},
})
</script>
