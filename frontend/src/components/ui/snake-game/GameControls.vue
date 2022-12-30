<template>
	<div class="w-1/2">
		<div class="text-black">{{ score }}</div>
	</div>
</template>

<script setup>
const props = defineProps({
	score: Number,
})
</script>
