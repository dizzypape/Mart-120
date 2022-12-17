//snow variables
var snowX = 0;
var snowY = 50;

var snowXs = [];
var snowYs = [];
var snowDia = [];

var snowXspeed = [];
var snowYspeed = [];

function setup()
{
    createCanvas(600,800);

    //snow array
    for (var i = 0; i < getRandomNumber(150); i++)
    {
        snowXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        snowYspeed[i] = Math.floor(Math.random() * (Math.floor (Math.random() * 6)) + 1);
        snowXs[i] = getRandomNumber (600);
        snowYs[i] = getRandomNumber (800);
        snowDia[i] = getRandomNumber (8); 
    }

}

function draw()
{
    background(0, 70, 192);

    fill(251, 219, 171);

    createSun();

    mountainBack();

    //snow ground
    stroke(0);

    fill(240, 248, 255);

    rect(0,575,600);


    makeTrees();


    //snow falling
    for (var i = 0; i < snowXs.length; i++)
    {
        stroke(0);
        fill(240, 248, 255);
        circle(snowXs[i], snowYs[i], snowDia[i]);
        snowXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
        snowYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);

        snowYs[i] += snowYspeed[i];

        if(snowYs[i] > 800)
        {
            snowYs[i] = 20;
        }
        if(snowYs[i] < 20)
        {
            snowYs[i] = 800;
        }
    }
}

//sun function
function createSun()
{
//light rays
    triangle(-100,0,312,350,50,0);

    triangle(400,0,312,350,500,0);

    triangle(600,300,312,350,600,400);

    fill(254, 188, 89);
//rays
    triangle(0,150,312,350,0,250);

    triangle(100,0,312,350,200,0);

    triangle(600,150,312,350,600,250);

//dark rays
    fill(247, 149, 2);
    
    triangle(0,300,312,350,0,400);

    triangle(250,0,312,350,350,0);

    triangle(550,0,312,350,700,0);


//sun
    fill(255, 195, 106);

    circle(312,350,230);
}

//mountains function
function mountainBack()
{ 
    //bckgrnd mtn 1
    fill(240, 248, 255);
    triangle(-50,575,110,340,275,575);

    //bckgrnd mtn 2
    fill(100,70,225);
    triangle(300,575,525,340,625,575);

    fill(240, 248, 255);
    triangle(396,475,525,340,583,475);

    //mtn 2
    fill(100,70,225);
    triangle(50,575,225,280,350,575);

    fill(240, 248, 255);
    triangle(132,435,225,280,292,435);

    //mtn 3
    fill(100,70,225);
    triangle(250,575,400,270,515,575);

    fill(240, 248, 255);
    triangle(327,415,400,270,456,415);

    //mtn 4
    fill(100,70,225);
    triangle(450,575,590,280,600,575);

    fill(240, 248, 255);
    triangle(499,470,590,280,598,470);

    //front mtn
    fill(100,70,225);
    triangle(215,575,315,350,405,575);

    fill(240, 248, 255);
    triangle(233,530,315,350,388,530);

    //mtn 1
    fill(100,70,225);
    triangle(0,575,5,294,150,575);

    fill(240, 248, 255);
    triangle(0,520,5,294,123,520);
}

//trees function
function makeTrees()
{   
    //tree 1
    fill(79, 55, 20);

    rect(100,620,30,70);

    fill(22, 136, 7);

    triangle(70,660,115,550,160,660);

    triangle(70,630,115,520,160,630);

    triangle(70,590,115,510,160,590);

    fill(240, 248, 255);
    triangle(86,560,115,510,144,560);

    //tree 2
    fill(79, 55, 20);

    rect(310,580,15,45);

    fill(22, 136, 7);

    triangle(300,610,317,540,335,610);

    triangle(300,593,317,530,335,593);

    triangle(300,575,317,525,335,575);

    fill(240, 248, 255);
    triangle(307,555,317,525,328,555);

    //tree 3
    fill(79, 55, 20);

    rect(500,700,50,90);

    fill(22, 136, 7);

    triangle(450,750,525,630,600,750);

    triangle(450,710,525,590,600,710);

    triangle(450,670,525,530,600,670);

    fill(240, 248, 255);
    triangle(468,635,525,530,582,635);
}

//Random # function
function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 12;
}