<template>
	<div class="text-center">
		<canvas
			ref="gameBoard"
			height="600"
			width="300"
			class="w-full border rounded-lg border-black"
		>
		</canvas>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const gameBoard = ref(null)
const ctx = ref(null)
const gameWidth = ref(0)
const gameHeight = ref(0)
const boardBackground = ref('#011627')
const snakeColor = ref('43D9AD')
const foodColor = ref('#43D9AD')
const unitSize = ref(25)
const running = ref(false)
const xVelocity = ref(unitSize.value)
const yVelocity = ref(0)
const foodX = ref('')
const foodY = ref('')
const score = ref(0)
const snake = ref([
	{ x: unitSize.value * 4, y: 0 },
	{ x: unitSize.value * 3, y: 0 },
	{ x: unitSize.value * 2, y: 0 },
	{ x: unitSize.value, y: 0 },
	{ x: 0, y: 0 },
])

onMounted(() => {
	ctx.value = gameBoard.value.getContext('2d')
	gameWidth.value = gameBoard.value.getAttribute('width')
	gameHeight.value = gameBoard.value.getAttribute('height')
	window.addEventListener('keydown', changeDirection)
	gameStart()

	// createFood()
	// drawFood()
})

function gameStart() {
	running.value = true
	createFood()
	drawFood()
	nextTick()
	moveSnake()
}

function nextTick() {
	if (running.value) {
		setTimeout(() => {
			clearBoard()
			drawFood()
			moveSnake()
			drawSnake()
			// checkGameOVer()
			nextTick()
		}, 75)
	}
}

function clearBoard() {
	ctx.value.fillStyle = boardBackground.value
	ctx.value.fillRect(0, 0, gameWidth.value, gameHeight.value)
}

function createFood() {
	function randomFood(min, max) {
		const randNum =
			Math.round((Math.random() * (max - min) + min) / unitSize.value) *
			unitSize.value
		return randNum
	}

	foodX.value = randomFood(0, gameWidth.value - unitSize.value)
	foodY.value = randomFood(0, gameWidth.value - unitSize.value)
}
function drawFood() {
	ctx.value.fillStyle = foodColor.value
	ctx.value.fillRect(foodX.value, foodY.value, unitSize.value, unitSize.value)
}

function moveSnake() {
	const head = {
		x: snake.value[0].x + xVelocity.value,
		y: snake.value[0].y + yVelocity.value,
	}

	// Check if the snake has gone off the screen
	if (
		head.x < 0 ||
		head.x > gameWidth.value ||
		head.y < 0 ||
		head.y > gameHeight.value
	) {
		running.value = false
		// gameOver()
		// return
	}

	// Check if the snake has bitten itself
	for (let i = 1; i < snake.value.length; i++) {
		if (head.x === snake.value[i].x && head.y === snake.value[i].y) {
			running.value = false
			return
		}
	}

	snake.value.unshift(head)
	// food is  iten
	if (snake.value[0].x == foodX.value && snake.value[0].y == foodY.value) {
		score.value += 1
		createFood()
	} else {
		snake.value.pop()
	}
}
function drawSnake() {
	ctx.value.fillStyle = snakeColor.value
	snake.value.forEach((snakePart) => {
		ctx.value.fillRect(snakePart.x, snakePart.y, unitSize.value, unitSize.value)
	})
}

function changeDirection(event) {
	const keyPressed = event.keyCode

	const LEFT = 65
	const UP = 87
	const RIGHT = 68
	const DOWN = 83

	const goingUp = yVelocity.value == -unitSize.value
	const goingDown = yVelocity.value == unitSize.value
	const goingRight = xVelocity.value == unitSize.value
	const goingLeft = xVelocity.value == -unitSize.value

	switch (true) {
		case keyPressed == LEFT && !goingRight:
			xVelocity.value = -unitSize.value
			yVelocity.value = 0
			break
		case keyPressed == UP && !goingDown:
			xVelocity.value = 0
			yVelocity.value = -unitSize.value
			break
		case keyPressed == RIGHT && !goingLeft:
			xVelocity.value = unitSize.value
			yVelocity.value = 0
			break
		case keyPressed == DOWN && !goingUp:
			xVelocity.value = 0
			yVelocity.value = unitSize.value
			break
	}
}

// function checkGameOVer() {
// 	switch (true) {
// 		case snake.value[0].x < 0:
// 			running.value = false
// 			break
// 		case snake.value[0].x >= gameWidth.value:
// 			running.value = false
// 			break
// 		case snake.value[0].y < 0:
// 			running.value = false
// 			break
// 		case snake.value[0].y >= gameHeight.value:
// 			running.value = false
// 			break
// 	}
// 	for (let i = 1; i < snake.value.length; i += 1) {
// 		if (
// 			snake.value[i].x == snake.value[0].x &&
// 			snake.value[i].y == snake.value[0].y
// 		) {
// 			running.value = false
// 		}
// 	}
// }
function displayGameOVer() {}
function restGame() {}

// window.addEventListener('keydown', changeDirection)
</script>
