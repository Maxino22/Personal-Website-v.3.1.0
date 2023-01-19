<template>
	<div class="grid grid-cols-1 mx-auto md:min-h-screen md:grid-cols-5">
		<div
			class="flex flex-col md:flex-row justify-start w-full md:border-r border-lines"
		>
			<p class="pt-6 px-6 outline-none group text-white body-text md:hidden">
				_about_me
			</p>
			<div class="flex-1 flex flex-col">
				<AboutSideTab
					@activateBio="BioActive"
					@activateTech="TechActive"
					@activateMore="ArsenalActive"
				/>
			</div>
		</div>
		<div class="col-span-2 md:border-r border-lines">
			<p
				class="text-secondaryLightBlue border-b border-r w-full pl-5 border-lines py-[6px]"
			>
				{{ BioVue ? 'Bio' : TechVue ? 'Tech Stacks' : 'More Info' }}
			</p>
			<AboutBio v-if="BioVue" />
			<AboutTechStacks v-if="TechVue" />
			<AboutArsenal v-if="ArsenalVue" />
		</div>
		<div class="lg:col-span-2">
			<p class="text-primaryBlue border-b w-full pl-5 border-lines py-[6px]">
				test
			</p>
			<AboutCodeSnippet />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import AboutArsenal from '../components/ui/about/AboutArsenal.vue'
import AboutBio from '../components/ui/about/AboutBio.vue'
import AboutCodeSnippet from '../components/ui/about/AboutCodeSnippet.vue'
import AboutSideTab from '../components/ui/about/AboutSideTab.vue'
import AboutTechStacks from '../components/ui/about/AboutTechStacks.vue'

const BioVue = ref(true)
const TechVue = ref(false)
const ArsenalVue = ref(false)

function BioActive() {
	BioVue.value = true
	TechVue.value = false
	ArsenalVue.value = false
}
function TechActive() {
	TechVue.value = true
	BioVue.value = false
	ArsenalVue.value = false
}
function ArsenalActive() {
	ArsenalVue.value = true
	TechVue.value = false
	BioVue.value = false
}
</script>
