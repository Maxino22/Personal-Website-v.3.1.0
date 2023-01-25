<template>
	<div class="text-center">
		<canvas
			ref="gameBoard"
			height="600"
			width="400"
			class="w-full border rounded-lg border-black"
		>
		</canvas>
		<button
			class="start-button"
			@click="gameStart"
			v-if="!running && !gameOver"
		>
			Start-game
		</button>
		<button
			class="restart-button text-sm"
			@click="restGame"
			v-if="gameOver && !running"
		>
			Restart-game
		</button>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const gameBoard = ref(null)
const ctx = ref(null)
const gameWidth = ref(0)
const gameHeight = ref(0)
const boardBackground = ref('#011627')
const snakeColor = ref('#43D9AD')
const score = ref(0)
const foodColor = ref('#43D9AD')
const unitSize = ref(25)
const running = ref(false)
const gameOver = ref(false)
const xVelocity = ref(unitSize.value)
const yVelocity = ref(0)
const foodX = ref('')
const foodY = ref('')

const snake = ref([
	{ x: unitSize.value * 4, y: 0 },
	{ x: unitSize.value * 3, y: 0 },
	{ x: unitSize.value * 2, y: 0 },
	{ x: unitSize.value, y: 0 },
	{ x: 0, y: 0 },
])

const emit = defineEmits(['update:score'])

onMounted(() => {
	ctx.value = gameBoard.value.getContext('2d')
	gameWidth.value = gameBoard.value.getAttribute('width')
	gameHeight.value = gameBoard.value.getAttribute('height')
	clearBoard()
	window.addEventListener('keydown', changeDirection)

	// createFood()
	// drawFood()
})

function gameStart() {
	running.value = true
	gameOver.value = false
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
		}, 100)
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
		gameOver.value = true
		displayGameOVer()
		// gameOver()
		// return
	}

	// Check if the snake has bitten itself
	for (let i = 1; i < snake.value.length; i++) {
		if (head.x === snake.value[i].x && head.y === snake.value[i].y) {
			running.value = false
			gameOver.value = true
			displayGameOVer()
			return
		}
	}

	snake.value.unshift(head)
	// food is  iten
	if (snake.value[0].x == foodX.value && snake.value[0].y == foodY.value) {
		score.value++
		emit('update:score', score.value)
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

function displayGameOVer() {
	ctx.value.font = '30px MV Boli'
	ctx.value.fillStyle = '#43D9AD'
	ctx.value.textAligh = 'left'
	ctx.value.fillText('GAME OVER!!', gameWidth.value / 4.5, gameHeight.value / 2)
	running.value = false
}
function restGame() {
	score.value = 0
	emit('update:score', score.value)
	xVelocity.value = unitSize.value
	yVelocity.value = 0
	snake.value = [
		{ x: unitSize.value * 4, y: 0 },
		{ x: unitSize.value * 3, y: 0 },
		{ x: unitSize.value * 2, y: 0 },
		{ x: unitSize.value, y: 0 },
		{ x: 0, y: 0 },
	]
	gameStart()
}

// window.addEventListener('keydown', changeDirection)
</script>

<style scoped>
.text-center {
	position: relative;
}
.start-button {
	position: absolute;
	bottom: 1rem;
	left: 50%;
	padding: 5px 10px;
	transform: translateX(-50%);
	background-color: #fea55f;
	color: #01080e;
	border-radius: 0.5em;
	border: none;
}
.start-button:hover {
	color: #01080e;
}
.restart-button {
	position: absolute;
	bottom: 1rem;
	padding: 5px 10px;
	left: 50%;
	transform: translateX(-50%);
	color: #fff;
	background-color: #1c2b3a;
	border-radius: 0.5em;
	border: none;
}
.restart-button:hover {
	color: #fea55f;
}
</style>
