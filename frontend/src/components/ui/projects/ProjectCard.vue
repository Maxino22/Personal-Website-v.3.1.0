<template>
	<div class="flex flex-col">
		<!-- card top title -->
		<div class="flex space-x-2 items-center">
			<p class="text-body text-secondaryPurple">
				Project {{ projectId }}
				<span class="text-secondaryLightBlue">//</span>
				<span class="text-secondaryLightBlue break-normal"
					>_{{ projectTitle }}</span
				>
			</p>
		</div>
		<!-- card -->
		<div
			class="relative w-full border border-lines rounded-lg shadow-md bg-primaryBlue"
		>
			<a :href="projectUrl">
				<img class="rounded-t-lg" :src="projectImage" alt="" />
			</a>
			<div class="p-5">
				<p class="mb-3 text-body text-secondaryLightBlue">
					{{ projectDesc }}
				</p>
				<div class="flex items-center space-x-4">
					<a
						:href="projectUrl"
						class="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-secondaryLightBlue rounded-lg hover:bg-accentOrange focus:ring-4 focus:outline-none focus:ring-blue-300"
					>
						view-project
						<iconLinkExternal class="w-4 h-4 ml-2 -mr-1" />
					</a>
					<a v-if="gitHubUrl" :href="gitHubUrl" class="cursor-pointer">
						<iconGithub />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import iconLinkExternal from '../../icons/iconLinkExternal.vue'
import iconGithub from '../../icons/iconGithub.vue'
const props = defineProps({
	gitHubUrl: String,
	projectUrl: String,
	projectDesc: String,
	projectImage: String,
	projectTitle: String,
	projectId: Number,
})
</script>
