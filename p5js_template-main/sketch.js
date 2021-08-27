var ball = {
 x:50,
 y:60,
 r:12,
 xspeed:0,
 yspeed:0,
 colour:["red","blue","green"]

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.colour[2])
  ball.xspeed = 1
  ball.x = ball.x +ball.xspeed
}