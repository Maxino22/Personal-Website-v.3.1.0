<template>
	<div class="grid grid-col-1 mx-auto md:min-h-screen md:grid-cols-5">
		<div
			class="flex flex-col md:flex-row justify-start w-full md:border-r border-lines"
		>
			<p class="pt-6 px-6 outline-none group text-white body-text md:hidden">
				_projects
			</p>
			<div class="flex flex-col">
				<ProjectsTab />
			</div>
		</div>
		<div class="md:col-span-4 py-3">
			<div class="flex w-full items-center md:border-b border-lines">
				<div class="px-10 text-white">
					// Projects <span class="text-secondaryLightBlue">/ all</span>
				</div>
			</div>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-center md:mt-24 mx-16"
			>
				<div v-for="project in projects">
					<ProjectCard
						:key="project.id"
						:project-id="project.id"
						:project-title="project.title"
						:project-desc="project.description"
						:git-hub-url="project.github_url"
						:project-url="project.project_url"
						:project-image="project.project_image"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import ProjectsTab from '../components/ui/projects/ProjectsTab.vue'
import ProjectCard from '../components/ui/projects/ProjectCard.vue'
import useProjectStore from '../store/ProjectStore'
import { ref } from 'vue'

const projects = useProjectStore().projectsGetter
</script>
