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
function openHome() {}
function openAbout() {}
function openProjects() {}
function openContacts() {}
</script>
