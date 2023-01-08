<template>
	<nav
		class="flex items-center justify-between border-b border-lines py-1 mx-2"
	>
		<div class="flex space-x-14 xl:space-x-28">
			<div class="group">
				<router-link
					to="/"
					class="flex space-x-1 items-center hover:text-white group-hover:border-b group-hover:border-b-accentOrange active:boder-b focus:border-b-accentOrange"
				>
					<img src="../../assets/cool.png" class="h-6" alt="" />
					<span class="body-text text-secondaryLightBlue hover:text-white"
						>maxwell_muhanda</span
					>
				</router-link>
			</div>

			<div id="nav" class="hidden lg:flex lg:items-center">
				<router-link
					to="/"
					class="px-4 border-x text-secondaryLightBlue border-lines text-center hover:border-b hover:border-b-accentOrange hover:text-white"
					>_hello
				</router-link>
				<router-link
					to="/about-me"
					class="px-4 border-r text-secondaryLightBlue border-lines text-center hover:border-b hover:border-b-accentOrange hover:text-white"
				>
					_about-me</router-link
				>
				<router-link
					to="/projects"
					class="px-4 border-r text-secondaryLightBlue border-lines text-center hover:border-b hover:border-b-accentOrange hover:text-white"
					>_projects</router-link
				>
			</div>
		</div>
		<div>
			<div id="nav">
				<router-link
					to="/contact-me"
					class="hidden lg:block border-l px-4 border-lines text-center text-secondaryLightBlue hover:border-b-accentOrange hover:text-white"
					>_contact-me</router-link
				>
				<!--  Hamburger button -->
				<div class="lg:hidden px-5">
					<button
						@click="openButton"
						:class="{ open: isActive }"
						type="button"
						class="z-40 block hamburger lg:hidden focus:outline-none"
					>
						<span class="hamburger-top"></span>
						<span class="hamburger-middle"></span>
						<span class="hamburger-bottom"></span>
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from '@vue/reactivity'

const isActive = ref(false)
function openButton() {
	isActive.value = !isActive.value
}
</script>
