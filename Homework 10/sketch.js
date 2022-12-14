//right eye var
var x = 110;
var y = 135;
var diameter = 30;
var d2 = 12;
//left eye var
var x2 = 170;
var y2 = 140;
var diameter2 = 25;
var d3 = 12;
var eyeMovement = 0.5;
//ear var
var ex1 = 59;
var ey = 140;
var ex2 = 221;
var earMovement = 2.5;
//lips var
var Lx = 140;
var Ly = 205;
var lipsMovement = 1.5;
//text var
var lrgtxt = 33;
var ovrsize = 12;
var textMovement = 2;
var count = 0;
//head var
var hw = 160;
var hh = 215;
var headSize = 1;
//hair var
var hrw = 120;
var hrh = 74;



function setup()
  {
      createCanvas(300,500);
      movement = Math.floor(Math.random() * 2) + 1;
  }
  
  function draw() 
  {
    background(220);

//body
    fill(198, 18, 168);
    rect(51,220,178,250);
    fill(199, 147, 180);
    triangle(50,220,140,450,230,220);
//ears
    fill(229, 193, 177);
    ellipse(ex1,ey,10,40);
    fill(229, 193, 177);
    ellipse(ex2,ey,10,40);
    if (ey >= 165 || ey <= 125)
    {
        earMovement *= -1;
    }
    ey += earMovement;
//head
    fill(229, 193, 177);
    ellipse(140,140,hw,hh);
    hw += headSize;
    hh += headSize;
    if (hw >= 170 && hh >= 225 || hw <= 150 && hw <= 205)
    {
        headSize *= -1;
    }

//hair
    fill(113, 96, 73);
    ellipse(140,70,hrw,hrh);
    hrw += headSize;
    hrh += headSize;
    if (hrh >= 130 && hrh >= 84 || hrw <= 110 && hrw <= 64)
    {
        headSize *= -1;
    }
//right eye
    fill(255, 255, 255);
    ellipse(110,140,40,80);
    fill(12, 94, 145);
    circle(x,y,diameter);
    fill(44, 42, 42);
    circle(x,y,d2);
    if (x >= 115 || x <= 105)
    {
        eyeMovement *= -1;
    }
    x += eyeMovement;
//left eye
    fill(255, 255, 255);
    ellipse(170,140,40,25);
    fill(12, 94, 145);
    circle(x2,y2,diameter2);
    fill(44, 42, 42);
    circle(x2,y2,d3);
    fill(165, 42, 42);
    point(200,130);
    if (x2 >= 177.5 || x2 <= 162.5)
    {
        eyeMovement *= -1;
    }
    x2 += eyeMovement;
//glasses
    line(59,138,90,140);
    fill(162, 216, 233, 0.725);
    rect(90,130,40,25);
    line(129,140,150,140);
    fill(162, 216, 233, 0.725);
    rect(150,100,40,80);
    line(190,150,217,115);
//nose
    fill(229, 193, 177);
    triangle(120,180,140,140,160,180);
    fill(158, 79, 67);
    circle(135,170,10);
    fill(158, 79, 67);
    circle(146,170,10);
    
//septum
    fill(185, 189, 189);
    rect(136,173,8,2);
    fill(83, 224, 249);
    circle(136,175,4);
    fill(83, 224, 249);
    circle(145,175,4);
//lips
    fill(199, 147, 180);
    ellipse(Lx,Ly,60,25);
    line(110,205,135,202);
    line(145,202,170,205);
    line(135,202,140,205);
    line(140,205,145,202);
    if (Lx >= 150 && Ly >= 213 || Lx <= 130 && Ly <= 193)
    {
        lipsMovement *= -1;
    }
    Lx += lipsMovement;
    Ly += lipsMovement;
//title

    fill(0,0,0);
    textSize(lrgtxt);
    text('Mind',105,448);
    textSize(ovrsize);
    text('OVER',122,465);
    textSize(lrgtxt);
    text('Perception',62,494)
    textSize(10);
    text('Isabelle Pape',235,485);
    lrgtxt += textMovement;
    ovrsize += textMovement;
    count++;
    if (count > 5)
    {
        textMovement *= -1;
        count = 0;
    }


  }