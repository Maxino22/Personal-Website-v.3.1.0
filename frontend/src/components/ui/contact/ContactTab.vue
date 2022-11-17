<template>
	<!-- Tab 1 -->
	<div class="py-3 px-6 outline-none group divide-y divide-lines" tabindex="1">
		<!-- Tab Flex Container -->
		<div
			class="flex items-center justify-start py-3 space-x-2 text-white transition duration-500 cursor-pointer group ease"
		>
			<div
				class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentGreen"
			>
				<IconUpArrow />
			</div>
			<!-- tab Title -->
			<div class="transistion duration-500 ease group-hover:text-accentGreen">
				contacts
			</div>
			<!-- arrow -->
		</div>
		<!-- Tab Inner Content -->
		<div
			class="flex flex-col overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
		>
			<div class="flex flex-row space-x-2">
				<IconMail />
				<p class="text-secondaryLightBlue text-body">ajaybullec@gmail.com</p>
			</div>
		</div>
	</div>
	<!-- Tab 2 -->
	<div class="py-3 px-6 outline-none group" tabindex="2">
		<!-- Tab Flex Container -->
		<div
			class="flex items-center justify-start py-3 space-x-2 text-white transition duration-500 cursor-pointer group ease"
		>
			<div
				class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentGreen"
			>
				<IconUpArrow />
			</div>
			<!-- tab Title -->
			<div class="transistion duration-500 ease group-hover:text-accentGreen">
				find-me-in
			</div>
			<!-- arrow -->
		</div>
		<!-- Tab Inner Content -->
		<div
			class="flex flex-col space-y-2 overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
		>
			<div class="flex flex-row space-x-2">
				<IconLinkExternal />
				<a
					target="_blank"
					href="https://www.linkedin.com/in/maxwell-muhanda-5563b316b/"
					class="text-secondaryLightBlue text-body"
				>
					linkedin
				</a>
			</div>
			<div class="flex flex-row space-x-2">
				<IconLinkExternal />
				<a
					target="_blank"
					href="https://dev.to/maxino22"
					class="text-secondaryLightBlue text-body"
				>
					DEV
				</a>
			</div>
			<div class="flex flex-row space-x-2">
				<IconLinkExternal />
				<a
					target="_blank"
					href="https://codepen.io/maxino"
					class="text-secondaryLightBlue text-body"
				>
					Codepen
				</a>
			</div>
			<div class="flex flex-row space-x-2">
				<IconLinkExternal />
				<a
					target="_blank"
					href="https://www.instagram.com/muhanda_maxino/"
					class="text-secondaryLightBlue text-body"
				>
					Instagram
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
import IconMail from '../../icons/iconMail.vue'
import IconUpArrow from '../../icons/iconUpArrow.vue'
import IconLinkExternal from '../../icons/iconLinkExternal.vue'
</script>
