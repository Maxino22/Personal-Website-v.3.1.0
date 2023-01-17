<template>
	<div class="bg-primaryBlue text-white min-h-screen md:hidden">
		<div class="grid grid-col-1 divide-y divide-lines max-w-sm">
			<div @click="openHome" class="p-4">_hello</div>
			<div @click="openAbout" class="p-4">_about-me</div>
			<div @click="openProjects" class="p-4">_projects</div>
			<div @click="openContacts" class="p-4 divide-b divide-lines">
				_contact-me
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useMobileMenu from '../../store/mobileMenu'
const mobileMenu = useMobileMenu()
const router = useRouter()
function openHome() {
	router.push('/')
	mobileMenu.openMobileButton()
	mobileMenu.openMobileMenu()
}
function openAbout() {
	router.push('/about-me')
	mobileMenu.openMobileButton()
	mobileMenu.openMobileMenu()
}
function openProjects() {
	router.push('/projects')
	mobileMenu.openMobileButton()
	mobileMenu.openMobileMenu()
}
function openContacts() {
	router.push('/contact-me')
	mobileMenu.openMobileButton()
	mobileMenu.openMobileMenu()
}
</script>
