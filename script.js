const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const particlesArray = []

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
	for (let i = 0; i < 10; i++) {
		particlesArray.push(new Particle())
	}
})

canvas.addEventListener('mousemove', (e) => {
	mouse.x = e.clientX
	mouse.y = e.clientY
	for (let i = 0; i < 2; i++) {
		particlesArray.push(new Particle())
	}
})

class Particle {
	constructor() {
		this.x = mouse.x
		this.y = mouse.y
		this.size = Math.random() * 12 + 1
		this.speedX = Math.random() * 2 - 1
		this.speedY = Math.random() * 2 - 1
	}

	update() {
		this.x += this.speedX
		this.y += this.speedY
		if (this.size > 0.2) this.size -= 0.1
	}

	draw() {
		ctx.fillStyle = 'white'
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
		ctx.fill()
	}
}

function handleParticles() {
	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update()
		particlesArray[i].draw()
		if (particlesArray[i].size <= 0.3) {
			particlesArray.splice(i, 1)
			i--
		}
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	handleParticles()
	requestAnimationFrame(animate)
}

animate()

