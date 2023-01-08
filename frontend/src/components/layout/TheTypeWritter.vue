<template>
	<h4
		class="sub-head text-accentGreen text-xl md:text-4 xl md:text-secondaryPurple font-bold"
	>
		>
		<span class="typed-text">{{ typeValue }}</span>
		<span class="blinking-cursor">|</span>
		<span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
	</h4>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const typeValue = ref('')
const typeStatus = ref(false)
const displayTextArray = ref([
	'Full-Stack Developer',
	'JavaScript: VueJS',
	'Django & Flask',
	'Digital Marketing',
	'Hire Me',
])
const typingSpeed = 100
const newTextDelay = 2000
const erasingSpeed = 100
const displayTextArrayIndex = ref(0)
const charIndex = ref(0)

function typeText() {
	if (
		charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length
	) {
		if (!typeStatus) typeStatus.value = true
		typeValue.value += displayTextArray.value[
			displayTextArrayIndex.value
		].charAt(charIndex.value)
		charIndex.value += 1
		setTimeout(typeText, typingSpeed)
	} else {
		typeStatus.value = false
		setTimeout(eraseText, newTextDelay)
	}
}
function eraseText() {
	if (charIndex.value > 0) {
		if (!typeStatus) typeStatus.value = true
		typeValue.value = displayTextArray.value[
			displayTextArrayIndex.value
		].substring(0, charIndex.value - 1)
		charIndex.value -= 1
		setTimeout(eraseText, erasingSpeed)
	} else {
		typeStatus.value = false
		displayTextArrayIndex.value += 1
		if (displayTextArrayIndex.value >= displayTextArray.value.length)
			displayTextArrayIndex.value = 0
		setTimeout(typeText, typingSpeed + 1000)
	}
}

onMounted(() => {
	setTimeout(typeText, newTextDelay + 200)
})
</script>

<style scoped>
.blinking-cursor {
	color: #4d5bce;
	-webkit-animation: 1s blink step-end infinite;
	-moz-animation: 1s blink step-end infinite;
	-ms-animation: 1s blink step-end infinite;
	-o-animation: 1s blink step-end infinite;
	animation: 1s blink step-end infinite;
}
@keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #4d5bce;
	}
}
@-moz-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #4d5bce;
	}
}
@-webkit-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #4d5bce;
	}
}
@-ms-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #4d5bce;
	}
}
@-o-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #4d5bce;
	}
}
/* Cursor blinking CSS Ends... */
</style>
