const particlArray = [];

class Particle {
  constructor() {
    this.x = bird.x;
    this.y = bird.y;
    this.size = Math.random() * 10 + 0;
    this.spaceY = Math.random() * 1 - 0.5;
    this.color = "hsla(" + hue + ",100%, 50%, 0.8)";
  }
  update() {
    this.x -= gamespeed;
    this.y += this.spaceY;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  particlArray.unshift(new Particle());
  for (var i = 0; i < particlArray.length; i++) {
    particlArray[i].update();
    particlArray[i].draw();
  }

  // if more than 200 particle remove 20 particles
  if (particlArray.length > 200) {
    for (var i = 0; i < 20; i++) {
      particlArray.pop(particlArray[i]);
    }
  }
}
