<template>
	<div
		class="container bg-primaryBlue border border-lines my-4 mx-auto rounded-lg overflow-x-hidden"
	>
		<the-header></the-header>
		<slot></slot>
		<the-footer></the-footer>
	</div>
</template>

<script>
import TheHeader from '../layout/TheHeader.vue'
import TheFooter from '../layout/TheFooter.vue'
export default {
	components: { TheHeader, TheFooter },
	setup() {},
}
</script>
