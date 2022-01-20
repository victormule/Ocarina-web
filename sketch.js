let img;
let img2;
let img3;
let img4;// Declare variable 'img'.
let Img5;//Tree
let bg;
let sky;
let sea;
let o = 0;
let u = 0;
let t = 0;
let x = 480;
let y = 500;
let a = 1;



function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/Plaine.png');
  sky = loadImage('assets/skyy.gif')
  sea = loadImage("assets/skyWater.png")
  img1 = loadImage('assets/Player.gif');
  img2 = loadImage('assets/PlayerL.gif');
  img3 = loadImage('assets/PlayerR.gif');
  img4 = loadImage('assets/PlayerU.gif');
  Img5 = loadImage('assets/Tree.png');
  createCanvas(960, 1150);

}

function draw() {
  clear()
  image(sky,o,u);
  image(sea,o,t);
  background(bg);
  image(img1, x , y);
  image(Img5,0,0);
  if(a==2){
  clear()
  image(sky,o,u);
  image(sea,o,t);
  background(bg);
  image(img2, x , y);
  image(Img5,0,0);
  }
  if(a==3){
  clear()
  image(sky,o,u); 
  image(sea,o,t);  
  background(bg);
  image(img3, x , y);
   image(Img5,0,0);
  }
  if(a==4){
  clear()
  image(sky,o,u);
  image(sea,o,t);
  background(bg);
  image(img4, x , y);
  image(Img5,0,0);  
  }

  
if (x >=55 && x<=868 && y>=340 && y<=1030) {

  
if (keyIsDown(LEFT_ARROW)){
  clear();
  image(sky,o,u);
  image(sea,o,t);
  background(bg);
  image(img2, x , y); 
  image(Img5,0,0);
  x -= 5 ;
  a = 2;

}

  
  if (keyIsDown(RIGHT_ARROW)) {
    clear();
    image(sky,o,u);
    image(sea,o,t);
    background(bg);
    image(img3, x , y);
    image(Img5,0,0);
    x += 5;
    a = 3;

}

  if (keyIsDown(UP_ARROW)) {
    clear();
    image(sky,o,u);
    image(sea,o,t);
    background(bg);
    image(img4, x , y);
    image(Img5,0,0);
    y -= 5;
    u -=1.5;
    t -=2;
    a = 4;
}

  if (keyIsDown(DOWN_ARROW)) {
    clear();
    image(sky,o,u);
    image(sea,o,t);
    background(bg);
    image(img1, x , y);
    image(Img5,0,0);
    y += 5;
    u +=1.5;
    t +=2;
    a = 1;
} 
}
  //---CADRE LIMITE---//
if (x <=55) {
 x+=5
}
  if (x >=868) {
 x-=5
}
  if ( y<=340) {
 y+=5    
}
   if ( y>=1030) {
 y-=5
} 
  
  
  //-------Falaise-------//
  
    if ( y<=370 && x>=500) {
 y+=5
}
    if ( y<=374 && x>=510) {
 y+=5
}
      if ( y<=400 && x>=628) {
 y+=5
}
    if ( y<=404 && x>=636) {
 y+=5
}
    if ( y<=430 && x>=750) {
 y+=5
}
    if ( y<=434 && x>=760) {
 y+=5
}
      if ( y<=460 && x>=800) {
 y+=5
}
    if ( y<=464 && x>=810) {
 y+=5
}
            //---//
    if ( y<=370 && x<=360) {
 y+=5
}
    if ( y<=374 && x<=350) {
 y+=5
}
      if ( y<=400 && x<=230) {
 y+=5
}
    if ( y<=404 && x<=220) {
 y+=5
}
    if ( y<=430 && x<=140) {
 y+=5
}
    if ( y<=434 && x<=130) {
 y+=5
}
      if ( y<=460 && x<=80) {
 y+=5
}
    if ( y<=464 && x<=70) {
 y+=5
}
  
  
 //------MAISON-------//
  
  
  
if (x >=240 && x<=368 && y >= 668 && y <= 774){
 x+=5   
 }
 if (x >=230 && x<=360 && y >=668 && y <= 774){
 x-=5   
 }
 if (x >=240 && x<=364 && y >= 680 && y <= 770){
 y+=5   
  }
   if (x >=240 && x<=364 && y >= 670 && y <= 760){
 y-=5   
  }
  
  
   //------BASSIN-------//
  
  
  
if (x >=100 && x<=240 && y >= 668 && y <= 864){
 x+=5   
 }
 if (x >=80 && x<=240 && y >=668 && y <= 864){
 x-=5   
 }
 if (x >=100 && x<=244 && y >= 680 && y <= 870){
 y+=5   
 }
   if (x >=100 && x<=244 && y >= 670 && y <= 860){
 y-=5   
 }
  
  //------SKY-----//
  
  if (u <= -120){
  u+=1.5   
 }   
  if (u >= 120){
  u-=1.5   
 }  
  
  //------SEA-----//
  
  if (t <= -120){
  t+=2   
 }   
  if (t >= 120){
  t-=2   
 }  
  
  //--End--//
}