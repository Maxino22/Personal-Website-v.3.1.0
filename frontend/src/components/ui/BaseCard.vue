<template>
	<div
		class="container bg-primaryBlue border border-lines mx-auto rounded-lg overflow-x-hidden"
	>
		<the-header></the-header>
		<slot></slot>
		<the-footer></the-footer>
	</div>
</template>

<script setup>
import TheHeader from '../layout/TheHeader.vue'
import TheFooter from '../layout/TheFooter.vue'
</script>
