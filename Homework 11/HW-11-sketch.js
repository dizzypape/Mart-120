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
    stroke(0);
    fill(225);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0,height-10,width,10);
    rect(width-10,50,10,height-50);

    textSize(18);
    fill(0);
    text("Escape", width-75,height-565);
    
    fill(33, 36, 196);
    triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);

    if(keyIsDown(w))
    {
        triangleY1 -= 5;
        triangleY2 -= 5;
        triangleY3 -= 5;
    }
    if(keyIsDown(s))
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
    }
    if(keyIsDown(d))
    {
        triangleX1 += 5;
        triangleX2 += 5;
        triangleX3 += 5;
    }

    fill(240, 23, 150);
    circle(circX,circY, 45);

    circXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    circYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);

    circY += circYspeed;

    if(circY > height)
    {
        circY = 20;
    }
    if(circY < 20)
    {
        circY = height;
    }

    fill(225, 169, 4);
    square(x,y,20);
    
    if(x >= 370 || x <= 10)
    {
        movement *= -1;
    }
    x += movement;

    if(triangleX2 > width && triangleY2 > width-400)
    {
        fill(0);
        stroke(4);
        textSize(32);
        text("Good job, you made it!", width/2-150, height/2);
    }

    fill(19, 136, 19);
    ellipse(mouseEllipseX,mouseEllipseY,40,20);
}
    function mouseClicked()
    {
        mouseEllipseX = mouseX;
        mouseEllipseY = mouseY;
    }
