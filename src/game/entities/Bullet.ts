export default class Bullet {
  x: number
  y: number
  vx: number
  vy: number
  radius: number = 4
  lifetime: number = 10 // seconds
  age: number = 0

  constructor(x: number, y: number, vx: number, vy: number) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
  }

  update(deltaTime: number) {
    this.x += this.vx * deltaTime
    this.y += this.vy * deltaTime
    this.age += deltaTime
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#ffff00'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}
