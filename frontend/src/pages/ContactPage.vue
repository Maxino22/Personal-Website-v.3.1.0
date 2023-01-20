<template>
	<div class="grid grid-cols-1 mx-auto md:min-h-screen md:grid-cols-5">
		<div
			class="flex flex-col md:flex-row justify-start w-full md:border-r border-lines"
		>
			<p class="pt-6 px-6 outline-none group text-white body-text md:hidden">
				_about_me
			</p>
			<div class="flex-1 flex flex-col">
				<ContactTab />
			</div>
		</div>

		<div class="col-span-2 md:border-r border-lines mt-10 md:mt-0">
			<contactSubmitted v-if="contactStore.messageRecieved" />
			<ContactForm v-else />
		</div>
		<div class="hidden lg:block lg:col-span-2">
			<ContactCode
				:name="contactStore.userName"
				:email="contactStore.userEmail"
				:message="contactStore.userMessage"
				:date="contactStore.messageTime"
			/>
		</div>
	</div>
</template>

<script setup>
import ContactForm from '../components/ui/contact/ContactForm.vue'
import ContactTab from '../components/ui//contact/ContactTab.vue'
import ContactCode from '../components/ui/contact/ContactCode.vue'
import contactSubmitted from '../components/ui/contact/contactSubmitted.vue'
import useContactStore from '../store/ContactStore'

const contactStore = useContactStore()
</script>
