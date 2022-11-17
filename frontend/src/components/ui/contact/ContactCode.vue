<template>
	<div class="flex flex-col md:py-64 px-2">
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">1</span>
			<p class="flex space-x-2">
				<span class="text-accentPink">const</span>
				<span class="text-secondaryPurple">button</span>
				<span class="text-accentPink"> = </span>
				<span class="text-secondaryPurple"
					>document.querySelector(<span class="text-accentOrange"
						>'#sendBtn'</span
					>)</span
				>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">2</span>
			<p></p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">3</span>
			<p class="flex space-x-2">
				<span class="text-accentPink">const</span>
				<span class="text-secondaryPurple">message</span>
				<span class="text-accentPink">
					= <span class="text-secondaryLightBlue">{</span>
				</span>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">4</span>
			<p class="pl-2">
				<span class="text-secondaryPurple"> name:</span>
				<span class="text-accentOrange mr-2">"{{ name }}"</span>
				<span class="text-secondaryLightBlue">,</span>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">5</span>
			<p class="pl-2">
				<span class="text-secondaryPurple"> email:</span>
				<span class="text-accentOrange mr-2">"{{ email }}"</span>
				<span class="text-secondaryLightBlue">,</span>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">6</span>
			<p class="pl-2">
				<span class="text-secondaryPurple"> message:</span>
				<span class="text-accentOrange mr-2">"{{ message }}"</span>
				<span class="text-secondaryLightBlue">,</span>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">7</span>
			<p class="pl-2">
				<span class="text-secondaryPurple"> date:</span>
				<span class="text-accentOrange mr-2">"{{ date }}"</span>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">8</span>
			<p class="pl-2">
				<span class="text-secondaryLightBlue"> }</span>
			</p>
		</div>

		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">9</span>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">10</span>
			<p>
				<span class="text-secondaryPurple"
					>button.addEventListener
					<span class="text-secondaryLightBlue">(</span>
					<span class="text-accentOrange">'click'</span
					><span class="text-secondaryLightBlue">, ()</span>
					<span class="text-accentPink">=></span>
					<span class="text-secondaryLightBlue">{</span>
				</span>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">11</span>
			<p>
				<span class="text-secondaryPurple">
					form.send <span class="text-secondaryLightBlue">(</span>message
					<span class="text-secondaryLightBlue">)</span></span
				>
			</p>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-secondaryLightBlue">12</span>
			<p class="pl-2 text-secondaryLightBlue">})</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	name: String,
	email: String,
	message: String,
	date: String,
})
</script>
