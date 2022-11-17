<template>
	<div class="flex md:py-64 justify-center">
		<form @submit.prevent="submitForm" class="flex flex-col space-y-8 w-96">
			<div>
				<label
					for="name"
					class="block mb-2 text-sm font-medium text-secondaryLightBlue"
					>_name</label
				>
				<input
					@keyup="setDate"
					v-model="contactStore.name"
					type="text"
					class="bg-primaryLightBlue border border-lines outline-none text-white text-sm rounded-lg focus:ring-secondaryLightBlue focus:border-secondaryLightBlue block w-full p-2.5"
					placeholder="name"
					required
				/>
			</div>
			<div>
				<label
					for="email"
					class="block mb-2 text-sm font-medium text-secondaryLightBlue"
					>_email</label
				>
				<input
					v-model="contactStore.email"
					type="email"
					class="bg-primaryLightBlue border border-lines text-white text-sm rounded-lg outline-none focus:ring-secondaryLightBlue focus:border-secondaryLightBlue block w-full p-2.5"
					placeholder="email"
					required
				/>
			</div>
			<div>
				<label
					for="message"
					class="block mb-2 text-sm font-medium text-secondaryLightBlue"
					>_message</label
				>
				<textarea
					v-model="contactStore.message"
					id="message"
					rows="4"
					class="block p-2.5 w-full text-sm text-white bg-primaryLightBlue rounded-lg border border-secondaryLightBlue focus:ring-secondaryLightBlue focus:border-secondaryLightBlue outline-none"
					placeholder="Leave a comment..."
					required
				></textarea>
			</div>
			<button
				type="submit"
				class="text-white bg-secondaryLightBlue hover:bg-accentOrange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center outline-none"
			>
				submit-message
			</button>
		</form>
	</div>
</template>

<script setup>
import useContactStore from '../../../store/ContactStore'

const contactStore = useContactStore()

const date = new Date()

function setDate() {
	contactStore.setDate(date.toDateString())
}

function submitForm() {
	contactStore.submitForm()
}
</script>
