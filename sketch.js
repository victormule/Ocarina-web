let img;// Declare variable 'img'.
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

let Img5;//Tree
let bg;
let ch;
let sky;
let sea;
let mapping = 2;
let o = 0;
let u = 0;
let t = 0;
let x = 260;
let y = 590;
let a = 1;
let M = 0;
let N =-400;


function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/plaine.png');
  ch = loadImage("assets/chambre.png")
  sky = loadImage('assets/skyy.gif')
  sea = loadImage("assets/skyWater.png")
  img1 = loadImage('assets/Player.gif');
  img2 = loadImage('assets/PlayerL.gif');
  img3 = loadImage('assets/PlayerR.gif');
  img4 = loadImage('assets/PlayerU.gif');
  img5 = loadImage('assets/player.png');
  img6 = loadImage('assets/playerL.png');
  img7 = loadImage('assets/playerR.png');
  img8 = loadImage('assets/playerU.png');
  Img5 = loadImage('assets/Tree.png');



}

  
function draw() {
  let cnv = createCanvas(960, 3400);
  cnv.position( 0, N, 'relative');
  if(mapping==1){
  if(a==1){
  clear()
  image(sky,o,u);
  image(sea,o,t);
  background(bg);
  image(img5, x , y);
  image(Img5,0,0);
  }  
  if(a==2){
  clear()
  image(sky,o,u);
  image(sea,o,t);
  background(bg);
  image(img6, x , y);
  image(Img5,0,0);
  }
  if(a==3){
  clear()
  image(sky,o,u); 
  image(sea,o,t);  
  background(bg);
  image(img7, x , y);
   image(Img5,0,0);
  }
  if(a==4){
  clear()
  image(sky,o,u);
  image(sea,o,t);
  background(bg);
  image(img8, x , y);
  image(Img5,0,0);  
  }



  
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
    N +=5;
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
    N -=5;
} 

    
    //---CADRE LIMITE---//
if (x <=64) {
 x+=5
}
  if (x >=868) {
 x-=5
}
  if ( y<=340) {
 y+=5 
 N -=5;
}
   if ( y>=2800) {
 y-=5
 N +=5;
} 
  
  
  //-------Falaise-------//
  
    if ( y<=370 && x>=500) {
 y+=5
 N -=5;      
}
    if ( y<=374 && x>=510) {
 y+=5
 N -=5;     
}
      if ( y<=400 && x>=628) {
 y+=5
 N -=5;        
}
    if ( y<=404 && x>=636) {
 y+=5
 N -=5;     
}
    if ( y<=430 && x>=750) {
 y+=5
 N -=5;     
}
    if ( y<=434 && x>=760) {
 y+=5
 N -=5;     
}
      if ( y<=460 && x>=800) {
 y+=5
 N -=5;       
}
    if ( y<=464 && x>=810) {
 y+=5
 N -=5;     
}
            //---//
    if ( y<=370 && x<=360) {
 y+=5
 N -=5;     
}
    if ( y<=374 && x<=350) {
 y+=5
 N -=5;     
}
      if ( y<=400 && x<=230) {
 y+=5
 N -=5;       
}
    if ( y<=404 && x<=220) {
 y+=5
 N -=5;     
}
    if ( y<=430 && x<=140) {
 y+=5
 N -=5;     
}
    if ( y<=434 && x<=130) {
 y+=5
 N -=5;     
}
      if ( y<=460 && x<=80) {
 y+=5
 N -=5;       
}
    if ( y<=464 && x<=70) {
 y+=5
 N -=5;     
}
 
    
    //----Tree Gauche----//
    
    

    if (  y>=400 && y<=2300 && x<=94) {
 x+=5
}
    if (  y>=900 && y<=1100 && x<=120) {
 x+=5
}  
    if (  y>=940 && y<=1100 && x<=136) {
 x+=5
}    
    if (  y>=1030 && y<=1184 && x<=370) {
 y-=5
 N +=5;     
}  
    if (  y>=1032 && y<=1184 && x<=374) {
 x+=5
} 
    if (  y>=1028 && y<=1186 && x<=370) {
 y+=5
 N -=5;     
} 
    if (  y>=1100 && y<=1240 && x<=256) {
 x+=5
} 
    
    if (  y>=1235 && y<=1300 && x<=306) {
 y-=5
 N +=5;
}  
    if (  y>=1240 && y<=1300 && x<=312) {
 x+=5
} 
    if (  y>=1268 && y<=1300 && x<=408) {
 y-=5
 N +=5;     
} 
    if (  y>=1270 && y<=1352 && x<=410) {
 x+=5
} 
    if (  y>=1280 && y<=1355 && x<=408) {
 y+=5
 N -=5;     
}    
    if (  y>=1280 && y<=1400 && x<=372) {
 x+=5
} 
    if (  y>=1398 && y<=1400 && x<=408) {
 y-=5
 N +=5;
} 
    if (  y>=1400 && y<=1478 && x<=412 && x>=362) {
 x+=5
} 
    if (  y>=1400 && y<=1482 && x<=408 && x>=362) {
 y+=5
 N -=5;      
}  
    if (  y>=1400 && y<=1480 && x<=408 && x>=356) {
 x-=5
}  
    if (  y>=1400 && y<=1455 && x<=408 && x>=280) {
 y+=5
 N -=5;      
}  
    if (  y>=1400 && y<=1478 && x<=288) {
 x+=5 
}  
    if (  y>=1400 && y<=1482 && x<=284) {
 y+=5
 N -=5;     
}  
    if (  y>=1400 && y<=1508 && x<=254) {
 x+=5   
}  
    if (  y>=1400 && y<=1512 && x<=248) {
 y+=5   
 N -=5;     
} 
    if (  y>=1400 && y<=1538 && x<=224) {
 x+=5   
}  
     if (  y>=1400 && y<=1542 && x<=220) {
 y+=5
 N -=5;      
} 
    if (  y>=1538 && y<=1598 && x<=212) {
 x+=5   
}  
     if (  y>=1538 && y<=1602 && x<=208) {
 y+=5  
 N -=5;       
}    
    if (  y>=1538 && y<=2000 && x<=160) {
 x+=5   
}     
    if (  y>=1706 && y<=1738 && x<=220) {
 y-=5 
 N +=5;      
}  
    if (  y>=1710 && y<=1740 && x<=226) {
 x+=5   
} 
    if (  y>=1710 && y<=1748 && x<=220) {
 y+=5
 N -=5;     
} 
    if (  y>=1740 && y<=1804 && x<=196) {
 x+=5    
} 
    if (  y>=1740 && y<=1810 && x<=190) {
 y+=5
 N -=5;     
} 
    if (  y>=1800 && y<=1880 && x<=188) {
 x+=5   
} 
    if (  y>=1872 && y<=1900 && x<=214) {
 y-=5
 N +=5;      
} 
    if (  y>=1878 && y<=1920 && x<=220) {
 x+=5   
} 
    if (  y>=1910 && y<=1982 && x<=248) {
 y-=5
 N +=5;      
}     
    if (  y>=1916 && y<=1982 && x<=254) {
 x+=5   
}    
    if (  y>=1974 && y<=2100 && x<=302) {
 y-=5
 N +=5;      
}         
    if (  y>=1980 && y<=2020 && x<=308) {
 x+=5   
}      
    if (  y>=2006 && y<=2100 && x<=348) {
 y-=5
 N +=5;      
}  
    if (  y>=2012 && y<=2104 && x<=356) {
 x+=5   
}  
    
    
                                   //-panneau3-//
    
    if (  y>=2104 && y<=2140 && x<=348) {
 x+=5   
}      
    if (  y>=2120 && y<=2146 && x<=348) {
 y+=5
 N -=5;      
}    
                                  //--//
    
    
    
    
    if (  y>=2120 && y<=2172 && x<=314) {
 x+=5   
}      
    if (  y>=2166 && y<=2206 && x<=380) {
 y-=5
 N +=5;      
}     
    if (  y>=2172 && y<=2212 && x<=384) {
 x+=5     
}     
    if (  y>=2172 && y<=2218 && x<=380) {
 y+=5
 N -=5;      
}    
    if (  y>=2150 && y<=2244 && x<=224) {
 x+=5     
}    
    if (  y>=2150 && y<=2246 && x<=218) {
 y+=5
 N -=5;      
}   
    if (  y>=2150 && y<=2280 && x<=192) {
 x+=5     
}  
    if (  y>=2150 && y<=2280 && x<=186) {
 x+=5     
}  
    if (  y>=2150 && y<=2306 && x<=180) {
 y+=5
 N -=5;      
}    
    if (  y>=2150 && y<=2332 && x<=102) {
 x+=5     
}     
    if (  y>=2150 && y<=2340 && x<=96) {
 y+=5
 N -=5;      
}     
   if (  y>=2386 && y<=2460 && x<=86) {
 y-=5
 N +=5;      
}     
    if (  y>=2392 && y<=2460 && x<=92) {
 x+=5    
}     
    if (  y>=2460 && y<=2470 && x<=96) {
 x+=5     
}      
    if (  y>=2470 && y<=2480 && x<=100) {
 x+=5     
}      
    if (  y>=2480 && y<=2490 && x<=106) {
 x+=5     
}     
    if (  y>=2500 && y<=2510 && x<=112) {
 x+=5     
}       
    if (  y>=2510 && y<=2516 && x<=118) {
 x+=5     
}       
    if (  y>=2510 && y<=2560 && x<=126) {
 x+=5     
}      
    if (  y>=2530 && y<=2566 && x<=120) {
 y+=5
 N -=5;      
}   
    if (  y>=2560 && y<=2800 && x<=96) {
 x+=5     
}     
  
    
    
    
    
 //------MAISON-------//
  
  
  
if (x >=240 && x<=368 && y >= 668 && y <= 774){
 x+=5   
 }
 if (x >=230 && x<=360 && y >=668 && y <= 774){
 x-=5   
 }
 if (x >=200 && x<=364 && y >= 680 && y <= 769){
 y+=5
 N -=5;  
  }
   if (x >=240 && x<=364 && y >= 670 && y <= 760){
 y-=5 
 N +=5;    
  }
  
  
   //------BASSIN-------//
  
  
  
if (x >=70 && x<=248 && y >= 668 && y <= 864){
 x+=5   
 }
 if (x >=80 && x<=240 && y >=668 && y <= 864){
 x-=5   
 }
 if (x >=80 && x<=244 && y >= 680 && y <= 870){
 y+=5   
 N -=5;  
 }
   if (x >=90 && x<=244 && y >= 669 && y <= 860){
 y-=5
 N +=5;
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
  //---MAP TRANSFER--/
      
      if ( x >=255 && x<=270 && y >= 680 && y <= 770){
 y=744
 N-=26       
 mapping = 2
}
     
  //--End--//

    
    
    
    
    
  }   
    
    
    
//------------ENDMAP1-------// 
    
    
    
    
 
  if(mapping==2){
  if(a==1 ){
  clear()
  background(ch);
  image(img5, x , y);
  }
  if(a==2){
  clear()
  background(ch);
  image(img6, x , y);
  }
  if(a==3){
  clear()  
  background(ch);
  image(img7, x , y);
  }
  if(a==4){
  clear()
  background(ch);
  image(img8, x , y); 
  }


  if (keyIsDown(LEFT_ARROW)){
    clear();
    background(ch);
    image(img2, x , y); 
    x -= 5 ;
    a = 2;

}

  
  if (keyIsDown(RIGHT_ARROW)) {
    clear();
    background(ch);
    image(img3, x , y);
    x += 5;
    a = 3;

}

  if (keyIsDown(UP_ARROW)) {
    clear();
    background(ch);
    image(img4, x , y);
    y -= 5;
    a = 4;
}

  if (keyIsDown(DOWN_ARROW)) {
    clear();
    background(ch);
    image(img1, x , y);
    y += 5;
    a = 1;
} 

    
  //---MAP 1---//
         
       
if (x <=98) {
 x+=5
}
  if (x >=424) {
 x-=5
}
  if ( y<=510) {
 y+=5    
}
   if ( x>=88 && x<=240 && y>=742) {
 y-=5
} 
   if ( x>=290 && x<=424 && y>=742) {
 y-=5
} 
  if (y>=752) {
 y=780
 x=256   
mapping=1

} 

         //---MAP TRANSFER--/


            
  }


  
  
}
