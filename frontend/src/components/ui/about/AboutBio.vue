<template>
	<div class="px-8 py-5">
		<div class="flex space-x-4">
			<!-- number Array -->
			<div class="hidden md:flex flex-col space-y-1">
				<p
					v-for="number in numbers"
					:key="number"
					class="text-lg text-white md:text-secondaryLightBlue"
				>
					{{ number }}
				</p>
			</div>
			<!-- About bio -->
			<div class="text-secondaryLightBlue flex-flex-col space-y-1">
				<p>/**</p>
				<p>* About-me</p>
				<p>
					* Hi I am <span class="text-secondaryPurple">Maxwell Muhanda</span>, a
					Freelance Web Developer
				</p>
				<p>* and Digital Marketing Expert based in Nairobi,</p>
				<p>* Kenya. Currently I am working on a Startup</p>
				<p>
					*
					<a
						href="https://instruct.co.ke"
						target="_blank"
						class="text-accentOrange underline"
						>Instruct</a
					>
					and other side projects. Most of my work
				</p>
				<p>
					* is available on my
					<a
						href="https://github.com/Maxino22"
						target="_blank"
						class="text-accentOrange underline"
						>Github</a
					>
					while active are
					<router-link to="/projects" class="text-accentOrange"
						>here.</router-link
					>
				</p>

				<p class="pt-4">* Programming is my passion, especially developing</p>
				<p>* complex business applications both in the frontend</p>
				<p>* and backend. I enjoy working on personal projects</p>
				<p>* and growing my skills but am also open to new</p>
				<p>
					* opportunities.<a
						href="https://resume.maxino.xyz"
						target="_blank"
						class="text-accentOrange underline hover:animate-bounce"
						>Resume</a
					>
				</p>
				<p class="pt-4">* Outside programming & spending time with Family</p>
				<p>* I enjoy Travelling , Video Games and supporting</p>
				<p>* Arsenal</p>
				<p class="pt-4">
					*
					<router-link to="/contact-me" class="text-accentOrange underline"
						>Get in Touch</router-link
					>
					if you would like me to work
				</p>
				<p>* for you</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const numbers = ref(Array.from({ length: 18 }, (_, i) => i + 1))
</script>

<style lang="scss" scoped></style>
