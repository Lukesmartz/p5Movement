var x, y , d, speed; 

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    x = width/2;
    y = height/2 // assigning the position
    d = 200;
    speed = 5;
}

function draw() {
    background(220);

    //y++;1  //everytime the draw function runs increase by 1. 1 frame is the only speed you can use.
    console.log(y);

    speed = map (mouseY, 0 , height, 5 ,50); //mouse increases speed

    y = y + speed;

    if(y > height + d/2){  //if the centre point is greater than height, 
        //return to zero. Then new variable halfs the center point again so it goes off screen.

        y = 0 - d/2;
    }

    fill(255, 255, 255);
    ellipse(x, y, d);
}