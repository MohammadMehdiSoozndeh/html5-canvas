const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

ctx.fillStyle = 'red'
ctx.strokeStyle = 'red'
ctx.beginPath()
ctx.arc(100, 100, 50, 0, Math.PI * 2)
ctx.stroke()