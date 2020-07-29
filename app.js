const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let numberOfParticles = 200;
let particleArray = [];
let hue = 0;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 10 + 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "hsl(" + hue + ", 100%,50%)";
    ctx.fill();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    //Collision Test
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.speedX -= this.speedX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY -= this.speedY;
    }
    this.draw();
  }
}
function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particleArray.push(new Particle());
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   ctx.fillStyle = "rgba(255,255,255,0.005";
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
  hue += 0.5;
  requestAnimationFrame(animate);
}

init();
animate();
