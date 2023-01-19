<template>
	<div>
		<!-- personal info -->
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="togglePersonalInfo"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease" :class="arrowClick">
					<iconUpArrow />
				</div>
				<span>personal-info</span>
			</button>
		</h2>
		<!-- personal-body -->
		<div class="flex flex-col items-start pl-8 mt-5" v-if="personInfoActive">
			<div
				@click="toggleBio"
				class="flex space-x-3 items-center cursor-pointer mb-4 text-gray-200"
			>
				<div class="transition duration-500 ease">
					<iconLeftArrow />
				</div>
				<img src="../../../assets/folder-green.png" alt="" class="w-5" />
				<p class="ml-2 text-body font-mediumtext-gray-300">bio</p>
			</div>
			<div
				@click="toggleTech"
				class="flex space-x-3 items-center cursor-pointer mb-4 text-gray-200"
			>
				<div class="transition duration-500 ease">
					<iconLeftArrow />
				</div>
				<img src="../../../assets/folder-purple.png" alt="" class="w-5" />
				<p class="ml-2 text-body font-mediumtext-gray-300">Tech Stacks</p>
			</div>
			<div
				@click="toggleMoreInfo"
				class="flex space-x-3 items-center cursor-pointer mb-4 text-gray-200"
			>
				<div class="transition duration-500 ease">
					<iconLeftArrow />
				</div>
				<img src="../../../assets/folder-orange.png" alt="" class="w-5" />
				<p class="ml-2 text-body font-mediumtext-gray-300">more about me</p>
			</div>
			<div v-if="moreAboutActive">
				<div
					class="flex space-x-3 items-center cursor-pointer mb-4 ml-12 text-gray-200"
				>
					<img src="../../../assets/icon-m.png" alt="" class="w-5" />
					<a
						href="https://resume.maxino.xyz"
						class="ml-2 text-body font-mediumtext-gray-300"
						>resume</a
					>
				</div>
				<div
					class="flex space-x-3 items-center cursor-pointer mb-4 ml-12 text-gray-200"
				>
					<img src="../../../assets/icon-m.png" alt="" class="w-5" />
					<a
						href="https://dev.to/maxino22"
						class="ml-2 text-body font-mediumtext-gray-300"
						>blog</a
					>
				</div>
			</div>
		</div>

		<!-- preofesional -->
		<h2 id="accordion-collapse-heading-1">
			<button
				@click="toggleContacts"
				type="button"
				class="flex items-center pl-6 py-3 md:py-0 mt-3 border-b border-b-lines bg-lines md:bg-inherit space-x-3 w-full font-medium text-left text-white"
			>
				<div class="transition duration-500 ease">
					<iconLeftArrow />
				</div>
				<span>Contacts</span>
			</button>
		</h2>
		<!-- contact-body -->
		<div class="flex flex-col items-start pl-8 mt-5" v-if="contactsActive">
			<div
				class="flex space-x-3 items-center cursor-pointer mb-4 text-gray-200"
			>
				<div class="transition duration-500 ease"></div>
				<iconMail />
				<p class="ml-2 text-body font-mediumtext-gray-300">
					ajaybullec@gmail.com
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import iconLeftArrow from '../../icons/iconLeftArrow.vue'
import iconUpArrow from '../../icons/iconUpArrow.vue'
import iconPhone from '../../icons/iconPhone.vue'
import iconMail from '../../icons/iconMail.vue'
import { ref, computed } from 'vue'

const personInfoActive = ref(false)
const contactsActive = ref(false)
const moreAboutActive = ref(false)

const emit = defineEmits(['activateBio', 'activateTech', 'activateMore'])
function togglePersonalInfo() {
	personInfoActive.value = !personInfoActive.value
}
function toggleBio() {
	emit('activateBio')
}
function toggleTech() {
	emit('activateTech')
}
function toggleMoreInfo() {
	moreAboutActive.value = !moreAboutActive.value
	emit('activateMore')
}
function toggleContacts() {
	contactsActive.value = !contactsActive.value
}

const arrowClick = computed(() => ({
	'-rotate-180': personInfoActive.value,
}))
</script>
