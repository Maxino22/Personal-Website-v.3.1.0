<template>
	<div
		class="grid grid-col-1 mx-auto pb-10 md:min-h-screen md:grid-cols-3 xl:grid-cols-5"
	>
		<div
			class="md:pr-12 flex flex-col w-full justify-start md:border-r border-lines"
		>
			<p
				class="pt-6 px-6 outline-none group divide-y divide-lines text-white body-text md:hidden"
			>
				_contact-me
			</p>
			<div class="flex flex-col">
				<ContactTab />
			</div>
		</div>
		<div class="col-span-2 md:border-r border-lines">
			<contactSubmitted v-if="contactStore.messageRecieved" />
			<ContactForm v-else />
		</div>
		<div class="hidden xl:flex lg:col-span-2">
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

<style lang="scss" scoped></style>
