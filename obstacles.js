const obstaclesArray = [];
class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20;
    this.bottom = (Math.random() * canvas.height) / 3 + 20;
    this.x = canvas.width;
    this.width = 20;
    this.color = "hsla(" + hue + ",100%,50%,1)";
    this.counted = false;
  }
  draw() {
    ctx.fillStyle = this.color;
    //top pipe drawing
    ctx.fillRect(this.x, 0, this.width, this.top);
    //bottom pipe drawing
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }
  update() {
    this.x -= gamespeed;
    if (!this.counted && this.x < bird.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }
}
function handlleObstacle() {
  if (frame % 150 === 0) {
    obstaclesArray.unshift(new Obstacle());
  }
  for (var i = 0; i < obstaclesArray.length; i++) {
    obstaclesArray[i].update();
  }
  if (obstaclesArray.length > 20) {
    obstaclesArray.pop(obstaclesArray[0]);
  }
}
