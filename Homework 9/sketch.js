function setup() {
    createCanvas(400,400);
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
    ellipse(59,140,10,40);
    fill(229, 193, 177);
    ellipse(221,140,10,40);
//head
    fill(229, 193, 177);
    ellipse(140,140,160,215);
//hair
    fill(113, 96, 73);
    ellipse(140,70,120,74);
//right eye
    fill(255, 255, 255);
    ellipse(110,140,40,80);
    fill(12, 94, 145);
    circle(110,135,30);
    fill(44, 42, 42);
    circle(110,135,12);
//left eye
    fill(255, 255, 255);
    ellipse(170,140,40,25);
    fill(12, 94, 145);
    circle(170,140,25);
    fill(44, 42, 42);
    circle(170,140,12);
    fill(165, 42, 42);
    point(200,130);
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
    fill(185, 189, 189);
//septum
    rect(136,173,8,2);
    fill(83, 224, 249);
    circle(136,175,4);
    fill(83, 224, 249);
    circle(145,175,4);
//lips
    fill(199, 147, 180);
    ellipse(140,203,60,25);
    line(110,205,135,202);
    line(145,202,170,205);
    line(135,202,140,205);
    line(140,205,145,202);
//title

    fill(0,0,0);
    textSize(33);
    text('Mind',105,448);
    textSize(12);
    text('OVER',122,465);
    textSize(33);
    text('Perception',62,494)
    textSize(10);
    text('Isabelle Pape',235,485);
  }
  function setup()
  {
      createCanvas(300,500);
  }