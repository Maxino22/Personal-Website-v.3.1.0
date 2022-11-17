<template>
	<div
		class="flex flex-col space-y-6 text-center md:py-64 justify-center items-center"
	>
		<h2 class="sub-head text-white">
			Thank you! <span class="text-3xl">🤘</span>
		</h2>
		<p class="body-text text-secondaryLightBlue break-normal">
			Your message has been accepted. You will receive an answer soon cheers!
		</p>
		<button
			@click="sendNewMessage"
			type="button"
			class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-secondaryLightBlue rounded-lg border border-gray-200 hover:bg-accentOrange hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200"
		>
			send-new-message
		</button>
	</div>
</template>

<script setup>
import useContactStore from '../../../store/ContactStore'

const contactStore = useContactStore()

function sendNewMessage() {
	contactStore.sendNewMessage()
}
</script>
