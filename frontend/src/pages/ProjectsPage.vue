<template>
	<div class="grid grid-col-1 mx-auto md:min-h-screen md:grid-cols-5">
		<div
			class="flex flex-col md:flex-row justify-start w-full md:border-r border-lines"
		>
			<p class="pt-6 px-6 outline-none group text-white body-text md:hidden">
				_projects
			</p>
			<div class="flex flex-col w-full">
				<ProjectsTab
					@change-active-box="toggleCheckbox"
					:django="checkBoxes.django"
					:flask="checkBoxes.flask"
					:wordpress="checkBoxes.wordpress"
					:vue="checkBoxes.vue"
				/>
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
				<div v-for="project in filteredProjects">
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
import { onBeforeMount, computed, ref } from 'vue'

const store = useProjectStore()

const checkBoxes = ref({
	django: true,
	flask: true,
	vue: true,
	wordpress: true,
	tailwindcss: true,
})

function toggleCheckbox(value) {
	if (value === 'django') {
		checkBoxes.value.django = !checkBoxes.value.django
	}
	if (value === 'wordpress') {
		checkBoxes.value.wordpress = !checkBoxes.value.wordpress
	}
	if (value === 'vue') {
		checkBoxes.value.vue = !checkBoxes.value.vue
	}
	if (value === 'flask') {
		checkBoxes.value.flask = !checkBoxes.value.flask
	}
}
// const loading = store.loading

// // filter logic for projects
const filteredProjects = computed(() => {
	const projects = store.setProjects
	return projects.filter((project) => {
		if (checkBoxes.value.django && project.categories.includes('Django')) {
			return true
		}
		if (checkBoxes.value.vue && project.categories.includes('Vue')) {
			return true
		}
		if (checkBoxes.value.flask && project.categories.includes('Flask')) {
			return true
		}
		if (
			checkBoxes.value.wordpress &&
			project.categories.includes('Wordpress')
		) {
			return true
		}
		if (
			checkBoxes.value.tailwindcss &&
			project.categories.includes('tailwindcss')
		) {
			return true
		}
	})
})

onBeforeMount(() => {
	store.projectAction()
})
</script>
