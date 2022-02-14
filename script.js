const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

const mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener('click', (e) => {
	mouse.x = e.clientX
	mouse.y = e.clientY
})

canvas.addEventListener('mousemove', (e) => {
	mouse.x = e.clientX
	mouse.y = e.clientY
})

function drawCircle() {
	ctx.fillStyle = 'blue'
	ctx.beginPath()
	ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2)
	ctx.fill()
}

function animate() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	requestAnimationFrame(animate)
	drawCircle()
}

animate()

