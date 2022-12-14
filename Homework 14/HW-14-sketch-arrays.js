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

var circleXs = [];
var circleYs = [];
var circleDia = [];

var circXspeed = [];
var circYspeed = [];



//square var
var x = 60;
var y = 200;

var squareXmovement = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
var squareXs = [];
var squareYs = [];
var squareLeng = [];
var squareXspeed = [];
var squareYspeed = [];

// mouse click shape
var mouseEllipseX;
var mouseEllipseY; 


function setup()
{
    createCanvas(400, 600);
//circle obstacles
    for (var i = 0; i < 4; i++)
    {
        circXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        circYspeed[i] = Math.floor(Math.random() * (Math.floor (Math.random() * 6)) + 1);
        circleXs[i] = getRandomNumber (400);
        circleYs[i] = getRandomNumber (600);
        circleDia[i] = getRandomNumber (24); 
    }
//square obstacles
    for (var s = 0; s < 1; s++)
    {
        squareXspeed[s] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        squareYspeed[s] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        squareXs[s] = getRandomNumber (400);
        squareYs[s] = getRandomNumber (600);
        squareLeng[s] = getRandomNumber (24);
    }
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

    fill(240, 23, 150);

for (var i = 0; i < circleXs.length; i++)
    {
        circle(circleXs[i], circleYs[i], circleDia[i]);
        circXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        circYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);

        circleYs[i] += circYspeed[i];

        if(circleYs[i] > 600)
        {
            circleYs[i] = 20;
        }
        if(circleYs[i] < 20)
        {
            circleYs[i] = 600;
        }
    }

    fill(140,20,244);

for (var s = 0; s < squareXs.length; s++)
{
    square(squareXs[s], squareYs[s], squareLeng[s]);
    squareXspeed[s] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    squareYspeed[s] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);

    if(squareXs[s] >= 370 || squareXs[s] <= 10)
        {
            squareXmovement *= -1;
        }

        squareXs[s] += squareXmovement;
}

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
        //right rect
        rect(390, 50, 10, 550);
    }

//create exit function
function createExit()
    {
        //right rect
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

//Random # function
function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 12;
}