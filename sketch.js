let img;// Declare variable 'img'.
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let shadow;
let flagEN;
let flagFR;
let FR = 255;
let EN = 150;
let song;
let fr = 60; //starting FPS




let Img5;//Tree
let bg;
let ch;
let sky;
let cloud1;
let cloud2;
let sea;
let bird1;
let mapping = 2;
let g =-600;
let e =-100;
let f = 800;
let o =-400;
let u = 0;
let t = 0;
let x = 260;
let y = 590;
let a = 1;
let M = 0;
let N =-400;
let font 
fontsize = 28;



function preload() {
  font = loadFont('font/pkmndp.ttf');
  song = loadSound('assets/littleroot.mp3');
  bg = loadImage('assets/plaine.gif');
  ch = loadImage("assets/chambre.png");
  sky = loadImage('assets/sky.png');
  cloud1 = loadImage('assets/cloud1.png');
  cloud2 = loadImage('assets/cloud2.png');
  sea = loadImage("assets/skyWater.png");
  bird1 = loadImage("assets/bird1.gif");
  shadow = loadImage('assets/shadow.png');
  img1 = loadImage('assets/Player.gif');
  img2 = loadImage('assets/PlayerL.gif');
  img3 = loadImage('assets/PlayerR.gif');
  img4 = loadImage('assets/PlayerU.gif');
  img5 = loadImage('assets/player.png');
  img6 = loadImage('assets/playerL.png');
  img7 = loadImage('assets/playerR.png');
  img8 = loadImage('assets/playerU.png');
  img9 = loadImage('assets/windowskin.png');
  img10 = loadImage('assets/mouton.gif');
  img11 = loadImage('assets/moine1.gif');
  img12 = loadImage('assets/moine2.gif');
  img13 = loadImage('assets/kyoka1.png');
  img14 = loadImage('assets/kyoka2.png');
  img15 = loadImage('assets/kyoka3.png');
  img16 = loadImage('assets/windowskin2.png');
  img17 = loadImage('assets/dameKiyoka1.gif');
  Img5 = loadImage('assets/Tree.png');
  flagEN = loadImage('assets/flagEN.png');
  flagFR = loadImage('assets/flagFR.png');
  frameRate(fr); 
}

function setup() {
 
textFont(font);
textSize(fontsize);
textAlign(CENTER, CENTER);

} 


function draw() {
   
  let cnv = createCanvas(960,3400);
  cnv.position( 0, N, 'relative');
  if(mapping==1){
  if(a==1){
  clear()
  noTint();
  image(sky,0,u);
  image(sea,0,t); 
  image(cloud2,g,u);
  image(cloud1,o,u);  
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img13, 474, 330);
  image(shadow,e+4,f+200);  
  image(img5, x , y);
  image(img11, 300, 1600);   
  image(Img5,0,0);
  image(bird1,e,f)
  image(img10,600,856);
  tint(FR);  
  image(flagFR,0,y-342);
  tint(EN);    
  image(flagEN,60,y-342); 
  }  
  if(a==2){
  clear()
  noTint();  
  image(sky,0,u);
  image(sea,0,t); 
  image(cloud2,g,u);
  image(cloud1,o,u);  
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img13, 474, 330);   
  image(img6, x , y);
  image(img11, 300, 1600); 
  image(shadow,e+4,f+200);    
  image(Img5,0,0);
  image(bird1,e,f)
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);
  image(flagEN,60,y-342); 
  }
  if(a==3){
  clear()
  noTint();  
  image(sky,0,u);
  image(sea,0,t);
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img13, 474, 330);   
  image(img7, x , y);
  image(img11, 300, 1600); 
  image(shadow,e+4,f+200);    
  image(Img5,0,0);
  image(bird1,e,f)
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);
  image(flagEN,60,y-342);   
  }
  if(a==4){
  clear()
  noTint();
  image(sky,0,u);
  image(sea,0,t); 
  image(cloud2,g,u);
  image(cloud1,o,u);  
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600); 
  image(img13, 474, 330);   
  image(img8, x , y);
  image(img11, 300, 1600);
  image(shadow,e+4,f+200);    
  image(Img5,0,0);
  image(bird1,e,f)
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);  
  image(flagEN,60,y-342);   
  }



  
if (keyIsDown(LEFT_ARROW)){
  clear();
  noTint();
  image(sky,0,u);
  image(sea,0,t); 
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img13, 474, 330); 
  image(img2, x , y);
  image(img11, 300, 1600);
  image(shadow,e+4,f+200);  
  image(Img5,0,0);
  image(bird1,e,f)
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);
  image(flagEN,60,y-342); 
  x -= 5 ;
  a = 2;

}

  
  if (keyIsDown(RIGHT_ARROW)) {
    clear();
    noTint();
    image(sky,0,u);
    image(sea,0,t); 
    image(cloud2,g,u);
    image(cloud1,o,u);
    background(bg);
    image(shadow,x+2,y+34); 
    image(img12, 300, 1600);
    image(img13, 474, 330); 
    image(img3, x , y);
    image(img11, 300, 1600)  
    image(shadow,e+4,f+200);  
    image(Img5,0,0); 
    image(bird1,e,f);
    image(img10,600,856) 
    tint(FR);
    image(flagFR,0,y-342);
    tint(EN);
    image(flagEN,60,y-342); 
    x += 5;
    a = 3;

}

  if (keyIsDown(UP_ARROW)) {
    clear();
    noTint();
    image(sky,0,u);
    image(sea,0,t); 
    image(cloud2,g,u);
    image(cloud1,o,u);
    background(bg);
    image(shadow,x+2,y+34); 
    image(img12, 300, 1600);
    image(img13, 474, 330); 
    image(img4, x , y);
    image(img11, 300, 1600);
    image(shadow,e+4,f+200);  
    image(Img5,0,0);
    image(bird1,e,f)
    image(img10,600,856);
    tint(FR);
    image(flagFR,0,y-342);
    tint(EN);
    image(flagEN,60,y-342); 
    y -= 5;
    u -=1.5;
    t -=2;
    a = 4;
    N +=5;
}

  if (keyIsDown(DOWN_ARROW)) {
    clear();
    noTint();
    image(sky,0,u);
    image(cloud2,g,u);
    image(cloud1,o,u);
    image(sea,0,t);
    background(bg);
    image(shadow,x+2,y+34); 
    image(img12, 300, 1600); 
    image(img13, 474, 330); 
    image(img1, x , y);
    image(img11, 300, 1600) ;
    image(shadow,e+4,f+200);  
    image(Img5,0,0);
    image(bird1,e,f)
    image(img10,600,856);
    tint(FR);
    image(flagFR,0,y-342);
    tint(EN);
    image(flagEN,60,y-342); 
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
   if ( y>=2810) {
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
    if (  y>=1270 && y<=1346 && x<=410) {
 x+=5
} 
    if (  y>=1280 && y<=1350 && x<=408) {
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
  
  
    
    
                        //----Tree Droite----// 
    
    
    
    
    if (  y>=0 && y<=762 && x>=842) {
 x-=5     
}  
    if (  y>=0 && y<=768 && x>=848) {
 y+=5
 N -=5;      
}     
    if (  y>=500 && y<=624 && x>=800) {
 y-=5
 N +=5;      
} 
     if (  y>=506 && y<=624 && x>=792) {
 x-=5     
}    
     if (  y>=500 && y<=630 && x>=800) {
 y+=5
 N -=5;      
}    
    if (  y>=842 && y<=3000 && x>=848) {
 y-=5
 N +=5;      
} 
    if (  y>=842 && y<=3000 && x>=842) {
 x-=5     
} 
    if (  y>=1030 && y<=1184 && x>=560) {
 y-=5
 N +=5;     
} 
    if (  y>=1036 && y<=1184 && x>=554) {
 x-=5     
}     
    if (  y>=1036 && y<=1190 && x>=560) {
 y+=5
 N -=5;      
}     
    if (  y>=1100 && y<=1210 && x>=704) {
 x-=5     
}     
    if (  y>=1204 && y<=1220 && x>=666) {
 y-=5
 N +=5;     
}     
    if (  y>=1210 && y<=1280 && x>=658) {
 x-=5     
}      
    if (  y>=1235 && y<=1300 && x>=568) {
 y-=5
 N +=5;     
}   
    if (  y>=1240 && y<=1300 && x>=562) {
 x-=5     
}    
    if (  y>=1266 && y<=1300 && x>=522) {
 y-=5
 N +=5;     
}   
    if (  y>=1270 && y<=1344 && x>=516) {
 x-=5     
}    
    if (  y>=1300 && y<=1350 && x>=522) {
 y+=5
 N -=5;      
} 
    if (  y>=1270 && y<=1380 && x>=548) {
 x-=5     
}      
    if (  y>=1300 && y<=1386 && x>=554) {
 y+=5
 N -=5;      
}   
    if (  y>=1300 && y<=1450 && x>=584) {
 x-=5     
}     
    if (  y>=1398 && y<=1410 && x>=522) {
 y-=5
 N +=5;
}  
     if (  y>=1404 && y<=1474 && x>=516) {
 x-=5     
}   
    if (  y>=1450 && y<=1480 && x>=522) {
 y+=5
 N -=5;      
}      
    if (  y>=1450 && y<=1492 && x>=552) {
 x-=5     
} 
    if (  y>=1450 && y<=1500 && x>=558) {
 y+=5
 N -=5;      
}    
    if (  y>=1450 && y<=1564 && x>=600) {
 x-=5     
}    
    if (  y>=1532 && y<=1564 && x>=586) {
 y-=5
 N +=5;
}     
    if (  y>=1540 && y<=1564 && x>=580) {
 x-=5     
}    
   if (  y>=1550 && y<=1570 && x>=586) {
 y+=5
 N -=5;      
}    
    if (  y>=1540 && y<=1600 && x>=644) {
 x-=5     
}     
   if (  y>=1550 && y<=1606 && x>=650) {
 y+=5
 N -=5;      
}      
    if (  y>=1540 && y<=1634 && x>=680) {
 x-=5     
}      
    if (  y>=1550 && y<=1640 && x>=686) {
 y+=5
 N -=5;      
}    
    if (  y>=1540 && y<=1678 && x>=704) {
 x-=5     
}       
    if (  y>=1550 && y<=1684 && x>=710) {
 y+=5
 N -=5;      
}        
    if (  y>=1540 && y<=1800 && x>=750) {
 x-=5     
} 
    if (  y>=1742 && y<=1900 && x>=716) {
 y-=5
 N +=5;
}     
    if (  y>=1748 && y<=1900 && x>=710) {
 x-=5     
}     
    if (  y>=1826 && y<=1900 && x>=660) {
 y-=5
 N +=5;
}    
    if (  y>=1832 && y<=1900 && x>=654) {
 x-=5     
}     
    if (  y>=1890 && y<=1920 && x>=630) {
 y-=5
 N +=5;
} 
    if (  y>=1896 && y<=1940 && x>=624) {
 x-=5     
} 
    if (  y>=1930 && y<=2000 && x>=554) {
 y-=5
 N +=5;
}
    if (  y>=1936 && y<=2100 && x>=550) {
 x-=5     
}     
    if (  y>=1974 && y<=2100 && x>=524) {
 y-=5
 N +=5;
} 
    if (  y>=1980 && y<=2100 && x>=518) {
 x-=5     
}     
    if (  y>=2012 && y<=2100 && x>=414) {
 y-=5
 N +=5;
}  
    if (  y>=2016 && y<=2104 && x>=408) {
 x-=5     
} 
    if (  y>=2104 && y<=2112 && x>=416) {
 x-=5     
}     
    if (  y>=2100 && y<=2118 && x>=408) {
 y+=5
 N -=5;
}     
    if (  y>=2104 && y<=2144 && x>=460) {
 x-=5     
}  
    if (  y>=2100 && y<=2150 && x>=466) {
 y+=5
 N -=5;
}  
    if (  y>=2104 && y<=2190 && x>=492) {
 x-=5     
} 
    if (  y>=2170 && y<=2190 && x>=460) {
 y-=5
 N +=5;
}     
    if (  y>=2176 && y<=2190 && x>=454) {
 x-=5     
} 
    if (  y>=2190 && y<=2215 && x>=460) {
 y+=5
 N -=5;
} 
    if (  y>=2176 && y<=2324 && x>=544) {
 x-=5     
}     
    if (  y>=2190 && y<=2330 && x>=550) {
 y+=5
 N -=5;
}    
    if (  y>=2100 && y<=2380 && x>=592) {
 x-=5     
}      
    if (  y>=2362 && y<=2390 && x>=554) {
 y-=5
 N +=5;
}     
    if (  y>=2368 && y<=2402 && x>=548) {
 x-=5     
}  
    if (  y>=2368 && y<=2410 && x>=554) {
 y+=5
 N -=5;
} 
    if (  y>=2390 && y<=2468 && x>=578 && x<=694) {
 x-=5     
}    
   if (  y>=2450 && y<=2474 && x>=584 && x<=694) {
 y+=5
 N -=5;
}     
    if (  y>=2420 && y<=2590 && x>=782 ) {
 x-=5     
} 
   if (  y>=2450 && y<=2596 && x>=788 ) {
 y+=5
 N -=5;
}     
   if (  y>=2638 && y<=2655 && x>=816 ) {
 y-=5
 N +=5;
}             
    if (  y>=2644 && y<=2682 && x>=810 ) {
 x-=5     
}     
   if (  y>=2650 && y<=2688 && x>=816 ) {
 y+=5
 N -=5;
}     
   if (  y>=2724 && y<=2900 && x>=812 ) {
 y-=5
 N +=5;
}    
    if (  y>=2730 && y<=2900 && x>=806 ) {
 x-=5     
}     
    
       //----panneau 1----//
    
if ( y>=770 && y<=800 && x>=328 && x<=372){
  x-=5
}    
if ( y>=770 && y<=800 && x>=334 && x<=378){
  x+=5
}     
if ( y>=770 && y<=806 && x>=334 && x<=372){
  y+=5
  N -=5;
}  
 if ( y>=764 && y<=800 && x>=334 && x<=372){
  y-=5
  N +=5;
}    
    
     ///panneau1 Affichage///
    
   if ( y>=782 && y<=818 && x>=318 && x<=388){
  noTint()
  image(img9,0,y+150);  
  fill(255,150);
     if (FR==255){
  text("Observez, étudiez et attrapez des Pokémon", 484,y+ 226);
  text("sauvages durant une période révolue de ", 484,y+ 252);
  text("l'Histoire du Japon, afin de compléter le ", 484,y+ 278);  
  text("tout premier Pokédex de la région.", 484,y+ 304);  
   }  
        if (EN==255){
  text("Survey, catch, and research wild Pokémon", 484,y+ 234);
  text("in a long-gone era of Japan", 484,y+ 260);
  text("to complete the region’s first Pokédex. ", 484,y+ 286);    
   }   
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
    //----panneau 4 -----///
    
    
    
    
    if (  y>=2420 && y<=2560 && x>=738 ) {
 x-=5     
}     
    if (  y>=2450 && y<=2566 && x>=744 ) {
 y+=5
 N -=5;
}     
    
    //----//
    
    
    
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
 if (x >=270 && x<=364 && y >= 680 && y <= 774){
 y+=5
 N -=5;  
  }    
    
    
    
      //------Maison 2 ------///   
    
    
    
    if (  y>=2420 && y<=2530 && x>=612 && x<=694) {
 x-=5     
} 
   if (  y>=2450 && y<=2536 && x>=620 && x<=694) {
 y+=5
 N -=5;
}    
    if (  y>=2420 && y<=2530 && x>=620 && x<=700) {
 x+=5     
}  
    if (  y>=2420 && y<=2530 && x>=712 ) {
 x-=5     
}      
    if (  y>=2450 && y<=2536 && x>=718 ) {
 y+=5
 N -=5;
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
    
    
    
     
                    //---arbres----//
       
    if (y>=564 && y<=624 && x<=120){
 y-=5
 N +=5;
 }   
    if (y>=570 && y<=624 && x<=126){
 x+=5
 }      
     if (y>=564 && y<=630 && x<=120){
 y+=5
 N -=5;
 }     
    //
    
    if (y>=646 && y<=720 && x>=136 && x<=176) {
 y-=5
 N +=5;
 }   
    if (y>=652 && y<=720 && x>=130 && x<=176){
 x-=5
 }      
     if (y>=652 && y<=720 && x>=136 && x<=182){
 x+=5
 } 
    
    //
    
    if (y>=544 && y<=590 && x>=516 && x<=572) {
 y-=5
 N +=5;
 }   
    if (y>=550 && y<=590 && x>=510 && x<=572){
 x-=5
 }      
     if (y>=550 && y<=590 && x>=516 && x<=578){
 x+=5
 }     
     if (y>=550 && y<=596 && x>=516 && x<=572) {
 y+=5
 N -=5;
 }   
    
    //
    if (y>=672 && y<=716 && x>=708 && x<=762) {
 y-=5
 N +=5;
 }   
    if (y>=678 && y<=716 && x>=702 && x<=762){
 x-=5
 }      
     if (y>=678 && y<=716 && x>=708 && x<=768){
 x+=5
 }     
     if (y>=678 && y<=722 && x>=708 && x<=762) {
 y+=5
 N -=5;
 }  
    
    //
    
    if (y>=740 && y<=782 && x>=772 && x<=828) {
 y-=5
 N +=5;
 }   
    if (y>=746 && y<=782 && x>=766 && x<=828){
 x-=5
 }      
     if (y>=746 && y<=782 && x>=772 && x<=834){
 x+=5
 }     
     if (y>=746 && y<=788 && x>=772 && x<=828) {
 y+=5
 N -=5;
 } 
    
    //
    
    if (y>=854 && y<=910 && x>=740 && x<=798) {
 y-=5
 N +=5;
 }   
    if (y>=860 && y<=910 && x>=734 && x<=798){
 x-=5
 }      
     if (y>=860 && y<=910 && x>=740 && x<=804){
 x+=5
 }     
     if (y>=860 && y<=916 && x>=740 && x<=798) {
 y+=5
 N -=5;
 } 
    
    //
    
        if (y>=928 && y<=960 && x>=240 && x<=272) {
 y-=5
 N +=5;
 }   
    if (y>=934 && y<=960 && x>=234 && x<=272){
 x-=5
 }      
     if (y>=934 && y<=960 && x>=240 && x<=278){
 x+=5
 }     
     if (y>=934 && y<=966 && x>=240 && x<=272) {
 y+=5
 N -=5;
 } 
    //
    
    
    //-------enclo--------//
    
      if (y>=820 && y<=930 && x>=556 && x<=724) {
 y-=5
 N +=5;
 }   
    if (y>=826 && y<=930 && x>=550 && x<=724){
 x-=5
 }      
     if (y>=826 && y<=930 && x>=556 && x<=730){
 x+=5
 }     
     if (y>=826 && y<=936 && x>=556 && x<=724) {
 y+=5
 N -=5;
 } 
    
    //---------moine1--------//
      if (y>=1592 && y<=1630 && x>=282 && x<=328) {
 y-=5
 N +=5;
 }   
    if (y>=1598 && y<=1630 && x>=276 && x<=328){
 x-=5
 }      
     if (y>=1598 && y<=1630 && x>=282 && x<=334){
 x+=5
 }     
     if (y>=1598 && y<=1636 && x>=282 && x<=328) {
 y+=5
 N -=5;
 }     
    
        //-------Dame Kyoka------//
    
    
    if (y>=0 && y<=360 && x>=444 && x<=500){
 x-=5
 }      
     if (y>=0 && y<=360 && x>=450 && x<=500){
 x+=5
 }     
     if (y>=0 && y<=366 && x>=450 && x<=500) {
 y+=5
 N -=5;
 } 
    
    //----Kyoka affichage---//
    
       if ( y>=0 && y<=354 && x>=432 && x<=500){
if(a==1){
  clear()
  noTint();
  image(sky,0,u);
  image(sea,0,t);
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img14, 474, 330);   
  image(img5, x , y);
  image(img11, 300, 1600);   
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);  
  image(flagFR,0,y-342);
  tint(EN);    
  image(flagEN,60,y-342); 
  }  
  if(a==2){
  clear()
  noTint();  
  image(sky,0,u);
  image(sea,0,t); 
  image(cloud2,g,u); 
  image(cloud1,o,u);  
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img14, 474, 330);   
  image(img6, x , y);
  image(img11, 300, 1600);  
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);
  image(flagEN,60,y-342); 
  }
  if(a==3){
  clear()
  noTint();  
  image(sky,0,u); 
  image(sea,0,t); 
  image(cloud2,g,u); 
  image(cloud1,o,u);  
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img14, 474, 330);   
  image(img7, x , y);
  image(img11, 300, 1600);    
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);
  image(flagEN,60,y-342);   
  }
  if(a==4){
  clear()
  noTint();
  image(sky,0,u);
  image(sea,0,t);
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600); 
  image(img14, 474, 330);   
  image(img8, x , y);
  image(img11, 300, 1600);  
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);  
  image(flagEN,60,y-342);   
  }
  noTint(); 
  image(img17,600,y+30);          
  image(img16,10,y+130); 
      
  fill(30,250);
     if (FR==255){
  text("Oh! Un visiteur! Quelle région magnifique,", 484,y+ 226);
  text("n'est ce pas? Mais.... ", 484,y+ 252);
  text("Une grande menace pèse sur nous...", 484,y+ 278);  
  text("Pourras tu nous venir en aide?!", 484,y+ 304);  
   }   
        if (EN==255){
  text("Oh! A stranger! What a wonderful country,", 484,y+ 226);
  text("isn't it? But.... ", 484,y+ 252);
  text("A terrible threatens approach.", 484,y+ 278);  
  text("Will you be strong enough to help us?!", 484,y+ 304);  
   }  
}
    
    
           if ( y>=366 && y<=380 && x>=448 && x<=500){
if(a==1){
  clear()
  noTint();
  image(sky,0,u);
  image(sea,0,t);
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img15, 474, 330);   
  image(img5, x , y);
  image(img11, 300, 1600);   
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);  
  image(flagFR,0,y-342);
  tint(EN);    
  image(flagEN,60,y-342); 
  }  
  if(a==2){
  clear()
  noTint();  
  image(sky,0,u);
  image(sea,0,t);
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img15, 474, 330);   
  image(img6, x , y);
  image(img11, 300, 1600);  
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);
  image(flagEN,60,y-342); 
  }
  if(a==3){
  clear()
  noTint();  
  image(sky,0,u); 
  image(sea,0,t); 
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600);
  image(img15, 474, 330);   
  image(img7, x , y);
  image(img11, 300, 1600);    
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);
  image(flagEN,60,y-342);   
  }
  if(a==4){
  clear()
  noTint();
  image(sky,0,u);
  image(sea,0,t);
  image(cloud2,g,u);
  image(cloud1,o,u);
  background(bg);
  image(shadow,x+2,y+34); 
  image(img12, 300, 1600); 
  image(img15, 474, 330);   
  image(img8, x , y);
  image(img11, 300, 1600);  
  image(Img5,0,0);
  image(img10,600,856);
  tint(FR);
  image(flagFR,0,y-342);
  tint(EN);  
  image(flagEN,60,y-342);   
  }
  noTint(); 
  image(img17,600,y+30);          
  image(img16,10,y+130); 
      
  fill(30,250);
     if (FR==255){
  text("Oh! Un visiteur! Quelle région magnifique,", 484,y+ 226);
  text("n'est ce pas? Mais.... ", 484,y+ 252);
  text("Une grande menace pèse sur nous...", 484,y+ 278);  
  text("Pourras tu nous venir en aide?!", 484,y+ 304);  
   }   
        if (EN==255){
  text("Oh! A stranger! What a wonderful country,", 484,y+ 226);
  text("isn't it? But.... ", 484,y+ 252);
  text("A terrible threatens approach.", 484,y+ 278);  
  text("Will you be strong enough to help us?!", 484,y+ 304);  
   }    
}
    
    
                            //------SKY-----//
    
  o += 1;
  g +=0.8;  
  if (u <= -120){
  u+=1.5   
 }   
  if (u >= 120){
  u-=1.5   
 }  
  if ( o >= width){
  o=-450;  
  }  
  
  if ( g >= width){
  g=-600;  
  }                                  //------SEA-----//
    
    
  
  if (t <= -120){
  t+=2   
 }   
  if (t >= 120){
  t-=2   
 }  
    
    
    //-----Bird1------//
    
   e+=4;
   f+=2; 
  if ( e >= width){
   e=-800; 
   f= 400; 
  } 
    
    
  //---MAP TRANSFER--/
      
    
    
      if ( x >=255 && x<=264 && y >= 680 && y <= 770){
 y=744 
 N=-400      
song.playMode('sustain');
song.pause();        
 mapping = 2
}
    
    
     
  //--End--//

  
    
    
    
    
  }   
    
    
    
                        //------------ENDMAP1-------// 
    
    
    
    
  if(mapping==2){  
  if(a==1 ){
  clear()
  noTint()  
  background(ch);
  image(img5, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392); 
  }
  if(a==2){
  clear()
  noTint()  
  background(ch);
  image(img6, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392);   
  }
  if(a==3){
  clear() 
  noTint()  
  background(ch);
  image(img7, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392);   
  }
  if(a==4){
  clear()
  noTint()    
  background(ch);
  image(img8, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392);   
  }


  if (keyIsDown(LEFT_ARROW)){
  clear();
  noTint()  
  background(ch);
  image(img2, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392); 
    x -= 5 ;
    a = 2;

}

  
  if (keyIsDown(RIGHT_ARROW)) {
  clear();
  noTint()  
  background(ch);
  image(img3, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392); 
    x += 5;
    a = 3;

}

  if (keyIsDown(UP_ARROW)) {
  clear();
  noTint()  
  background(ch);
  image(img4, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392); 
    y -= 5;
    a = 4;
}

  if (keyIsDown(DOWN_ARROW)) {
  clear();
  noTint()  
  background(ch);
  image(img1, x , y);
  tint(FR);  
  image(flagFR,0,392);
  tint(EN);    
  image(flagEN,60,392); 
    y += 5;
    a = 1;
} 
  fill(255,255);
     if (FR==255){
  text("Bienvenue sur le site officiel de", 700,460);
  text("POKEMON OCARINA OF TIME", 700,510);
  text("le fan-game français inspiré de l'univers", 700,560); 
  text("Nitendo (Pokemon, Zelda, Fire Emblem... ).", 700,590); 
  text("Si tu veux en savoir d'avantage ", 700,620);  
  text("sur le jeu, utilise les touches fléchées", 700,650);  
  text("du clavier pour sortir de la maison", 700,680);
  text("et explorer ce nouveau monde!", 700,710);     
   }  
        if (EN==255){
  text("Welcome to the official website", 700,460);
  text("POKEMON OCARINA OF TIME", 700,510);
  text("the french fangame inspired by the", 700,560); 
  text("Nitendo universe (Pokemon, Zelda... ).", 700,590); 
  text("If you are interested to know more", 700,620);  
  text("about it, use the arrow keys to explore ", 700,650);  
  text("the vast world outside this house!", 700,680);
    
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
 

         //---MAP TRANSFER--/

 if (y>=752) {
 y=780
 x=256 
 N=-446  
 song.loop(); 
 song.playMode('restart');  
 song.play();   
mapping=1

} 
 
    //-------//
}

}
function mousePressed() {
  if (mapping==1){
  if (mouseX >=0 && mouseX <=60 && mouseY <=y-300) {
   FR=255;
   EN=150;
  }
    if (mouseX >60 && mouseX <=120 && mouseY <=y-300) {
   FR=150;
   EN=255;
  }}
   if (mapping==2){
  if (mouseX >=0 && mouseX <=60 && mouseY <=436) {
   FR=255;
   EN=150;
  }
    if (mouseX >60 && mouseX <=120 && mouseY <=436) {
   FR=150;
   EN=255;
  }} 
}
 
