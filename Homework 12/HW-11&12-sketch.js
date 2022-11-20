//character var
var triangleX1 = 45;
var triangleY1 = 550;
var triangleX2 = 62;
var triangleY2 = 525;
var triangleX3 = 80;
var triangleY3 = 550;

// key var
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// circle var
var circX = 200;
var circY = 550;
var circXspeed;
var circYspeed;

//square var
var x = 60;
var y = 200;
var movement = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);;

// mouse click shape
var mouseEllipseX;
var mouseEllipseY; 


function setup()
{
    createCanvas(400, 600);
    circXspeed = Math.floor(Math.random() * (Math.floor(Math.random() *6)) + 1);
    circYspeed = Math.floor(Math.random() * (Math.floor (Math.random() * 6)) + 1);
}

function draw()
{
    background(149, 252, 228);

    //call create triangle character function
    createTriplayer();

    //call character movement function
    triangleKeys();

    //call mouse click shape function
    ellipseMouseclick();

    //call create obstacles function
    createObstacles();

    //call obstacle movement function
    obstacleMovement();

    //call create boarders function
    createBoarders();

    //call exit function
    createExit();

    //call "congrats" function
    winningText();

}

//create triangle character function
function createTriplayer()
    {
        fill(33, 36, 196);
        triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
    }

//character movement function
function triangleKeys() 
    {
        if(keyIsDown(w))
        {
            triangleY1 -= 5;
            triangleY2 -= 5;
            triangleY3 -= 5;
        } else if(keyIsDown(s))
        {
            triangleY1 += 5;
            triangleY2 += 5;
            triangleY3 += 5;
        }
        if(keyIsDown(a))
        {
            triangleX1 -= 5;
            triangleX2 -= 5;
            triangleX3 -= 5;
        } else if(keyIsDown(d))
        {
            triangleX1 += 5;
            triangleX2 += 5;
            triangleX3 += 5;
        }
    }

//mouse click shape function
function ellipseMouseclick()
    {
        fill(19, 136, 19);
        ellipse(mouseEllipseX, mouseEllipseY, 40, 20);
    }

function mouseClicked()
    {
        mouseEllipseX = mouseX;
        mouseEllipseY = mouseY;
    }

//create obstacles function
function createObstacles()
    {
        fill(240, 23, 150);
        circle(circX,circY, 45);
    
        fill(225, 169, 4);
        square(x,y,20);
    }

//obstacle movement function
function obstacleMovement()
    {
        //circle movement
        circXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        circYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    
        circY += circYspeed;
    
        if(circY > 600)
        {
            circY = 20;
        }
        if(circY < 20)
        {
            circY = 600;
        }
        //square movement
        if(x >= 370 || x <= 10)
        {
            movement *= -1;
        }
        x += movement;
    }

//create boarders function
function createBoarders()
    {
        //color
        stroke(0);
        fill(225);
        //top rect
        rect(0, 0, 400, 10);
        //left rect
        rect(0, 0, 10, 600);
        //bottom rect
        rect(0, 590, 400, 10);
    }

//create exit function
function createExit()
    {
        //right rect
        rect(390, 50, 10, 550);
        textSize(18);
        fill(0);
        text("Escape", 325, 35);
    }

//"Congrats" function
function winningText()
    {
        if(triangleX2 > 400 && triangleY2 > 0)
        {
            fill(0);
            stroke(4);
            textSize(32);
            text("Good job, you made it!", 50, 300);
        }
    }