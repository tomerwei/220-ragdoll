// A reference to our box2d world
var world;
// A list for all of our boxes
var box;

var boundaries = [];
//var bg;
var spring;

<<<<<<< Updated upstream
let worldPos = {
    x: 0,
    y: 0,
    mouseX: 0,
    mouseY: 0
};

//function preload() {
//  bg = loadImage("backgrounds/skyone.jpg");
//}
=======
var body;
>>>>>>> Stashed changes

function setup() {

    createCanvas(windowWidth, windowHeight);


    // Initialize box2d physics and create the world
    world = createWorld();
    //world.SetGravity(new box2d.b2Vec2(0, 10)); < this didn't even do anything

<<<<<<< Updated upstream
    //limb = new Limb (width / 2, height / 2);

    spring = new Spring();
=======
     spring = new Spring();
     springBod = new Spring();
     body = new Body(width/2, height/2);
     box = new Box(width / 2, height / 2, 30, 30);
>>>>>>> Stashed changes

    box = new Box(width / 2, height / 2, 30, 30);

    boundaries.push(new Boundary(width / 2, height / 2 + 100, 100, 10));
    boundaries.push(new Boundary(3 * width / 4, height - 50, width / 2 - 50, 10));
    boundaries.push(new Boundary(width / 2 - 100, height * (2 / 3), width / 2 - 100, 10));
}


function draw() {
<<<<<<< Updated upstream

    background(0);

    // We must always step through time!
    var timeStep = 1.0 / 30;
    world.Step(timeStep, 10, 10);


    /* CREATE CAMERA SANBOX */
    push();
    worldPos = findCenter(box);
    translate(-worldPos.x, -worldPos.y);
    worldPos.mouseX = mouseX + worldPos.x;
    worldPos.mouseY = mouseY + worldPos.y;


    box.display();


    spring.update(worldPos.mouseX, worldPos.mouseY);
    spring.display();

    //limb.display();



    // boundary sandbox



    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].display();
        boundaries[i].move();
        boundaries[i].reset();
    }


    /* END CAMERA SANBOX */
    pop();

=======
     background('pink');

     // We must always step through time!
     var timeStep = 1.0 / 30;
     world.Step(timeStep, 10, 10);
     noStroke();
     box.display();

     body.display();

     spring.update(mouseX,mouseY);
     springBod.update(mouseX,mouseY);

     spring.display();
     springBod.display();
>>>>>>> Stashed changes

}

function mouseReleased() {
<<<<<<< Updated upstream
    spring.destroy();
}

function mousePressed() {
    if (box.contains(worldPos.mouseX, worldPos.mouseY)) {
        spring.bind(worldPos.mouseX, worldPos.mouseY, box);
    }
=======
     spring.destroy();
     springBod.destroy();
}

function mousePressed() {
// Box mouse control
     if (box.contains(mouseX, mouseY)) {
          spring.bind(mouseX, mouseY, box);
     }

     if (body.torso.contains(mouseX, mouseY)) {
          springBod.bind(mouseX, mouseY, body.torso);
     }
     if (body.leftArm.contains(mouseX, mouseY)) {
          springBod.bind(mouseX, mouseY, body.leftArm);
     }
     if (body.leftArm.contains(mouseX, mouseY)) {
          springBod.bind(mouseX, mouseY, body.rightArm);
     }
>>>>>>> Stashed changes
}
