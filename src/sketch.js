/* Galactia
* Player:
  - shoots
  - moves up/down/left/right
  - can have multiple entity attached - performs same functionality.
  - secret weapon?
  - receive damages

  Enemies:
  - Can shoot
  - Moves in a formation
  - can hit player
  - receive damages
  - moves all directions (We can customize this later - abstract class?)
  - can pull player
  - can mimic player functionality but cannot pick up items/powerup

  GameManager:
    tracks
    - score
    - player lives
    - bonus point earn
    - number of hit (enemy hits?)
    - stage

    shows results
    shot fired
    number of hits
    hit/miss ratio

    show top 5 score/name (txt? database?)
    ask user to input name three char max

    handle menu effect
*/


function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  drawCircle();
}

function drawCircle() {
  if( mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 80,80);
}

