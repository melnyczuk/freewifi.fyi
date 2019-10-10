var football, cricketball;

function setup() {
  var myCanvas = createCanvas(960, 720);
  myCanvas.parent("p5");

  football = Object.create(ball);
  football.colour = [0, 255, 0];
  football.pos = [100, 200];
  football.velocity = [8, 10];

  cricketball = Object.create(ball);
  cricketball.width = 75;
  cricketball.pos = [500, 700];
}

function draw() {
  background(0, 0, 255);
  football.shape();
  cricketball.shape();
  // console.log(cricketball.pos.x + ' ' + football.pos.x);
  if (football.on) football.move();
  else cricketball.move();
}