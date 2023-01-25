<template>
	<div
		class="container bg-primaryBlue border border-lines mx-auto rounded-lg overflow-x-hidden"
	>
		<the-header @open-mobile-menu="DisplayMobileMenu"></the-header>
		<the-mobile-menu v-if="showMobileMenu"></the-mobile-menu>
		<slot v-else></slot>
		<the-footer></the-footer>
	</div>
</template>

<script setup>
import TheHeader from '../layout/TheHeader.vue'
import TheFooter from '../layout/TheFooter.vue'
import TheMobileMenu from '../layout/TheMobileMenu.vue'
import useMobileMenu from '../../store/mobileMenu'

import { ref, computed } from 'vue'
const mobileStore = useMobileMenu()
const showMobileMenu = computed(() => mobileStore.isActive)

function DisplayMobileMenu() {
	mobileStore.openMobileMenu()
}
</script>
