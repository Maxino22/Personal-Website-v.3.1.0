<template>
	<div
		class="container m-auto bg-primaryBlue border border-lines rounded-lg h-full"
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
