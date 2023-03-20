let img; // Declare variable 'img'.
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
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let img24;
let shadow;
let flagEN;
let flagFR;
let FR = 255;
let EN = 150;
let song;
let fr = 100; //starting FPS

let Img5; //Tree
let bg;
let ch;
let sky;
let cloud1;
let cloud2;
let sea;
let bird1;
let combat1;
let combat2;
let battle;
let battle1;
let ponita;
let ponita1;
let fille;
let fille1;
let temple;
let temple2;
let light1;
let kaio1;
let kaio1a;
let kaio2;
let kaio3;
let kaio4;
let mapping = 2;
let g = -600;
let e = -100;
let f = 800;
let o = -400;
let u = 0;
let t = 0;
let x = 260;
let y = 590;
let z = 200;
let Z = 0.2;
let a = 1;
let M = 0;
let N = -400;
let font;

fontsize = 28;

function preload() {
  font = loadFont("font/pkmndp.ttf");
  song = loadSound("assets/littleroot.mp3");
  song2 = loadSound("assets/temple-of-time-Robert-Austin.mp3");
  bg = loadImage("assets/plaine.gif");
  ch = loadImage("assets/chambre.png");
  temple = loadImage("assets/temple.png");
  temple2 = loadImage("assets/temple2.gif");
  temple3 = loadImage("assets/templefeu.gif");
  light1 = loadImage("assets/templelight.png");
  sky = loadImage("assets/sky.png");
  cloud1 = loadImage("assets/cloud1.png");
  cloud2 = loadImage("assets/cloud2.png");
  sea = loadImage("assets/skyWater.png");
  bird1 = loadImage("assets/bird1.gif");
  shadow = loadImage("assets/shadow.png");
  combat1 = loadImage("assets/combat1.gif");
  combat2 = loadImage("assets/combat2.gif");
  battle = loadImage("assets/battle.gif");
  battle1 = loadImage("assets/battle1.gif");
  ladruse = loadImage("assets/la-druse.gif");
  ladruse2 = loadImage("assets/la-druse2.gif");
  lamule = loadImage("assets/la-mule.gif");
  lamule2 = loadImage("assets/la-mule2.gif");
  lamule3 = loadImage("assets/la-muleA.gif");
  lamule4 = loadImage("assets/la-muleB.gif");
  lamule5 = loadImage("assets/la-muleC.png");
  mshadow = loadImage("assets/Mshadow.png");
  dshadow = loadImage("assets/druseshadow.png");
  img1 = loadImage("assets/Player2.gif");
  img2 = loadImage("assets/Player2L.gif");
  img3 = loadImage("assets/Player2R.gif");
  img4 = loadImage("assets/Player2U.gif");
  img5 = loadImage("assets/player2.png");
  img6 = loadImage("assets/player2L.png");
  img7 = loadImage("assets/player2R.png");
  img8 = loadImage("assets/player2U.png");
  img9 = loadImage("assets/windowskin.png");
  img10 = loadImage("assets/mouton.gif");
  img11 = loadImage("assets/moine1.gif");
  img12 = loadImage("assets/moine2.gif");
  img13 = loadImage("assets/kyoka1.png");
  img14 = loadImage("assets/kyoka2.png");
  img15 = loadImage("assets/kyoka3.png");
  kaio1 = loadImage("assets/kaio1.png");
  kaio1a = loadImage("assets/kaio1a.png");
  kaio2 = loadImage("assets/kaio2.png");
  kaio3 = loadImage("assets/kaio3.png");
  kaio4 = loadImage("assets/kaio4.png");
  img16 = loadImage("assets/windowskin2.png");
  img17 = loadImage("assets/dameKiyoka1.gif");
  img18 = loadImage("assets/maitreKaio.gif");
  img19 = loadImage("assets/windowskin3.png");
  img20 = loadImage("assets/samurai.gif");
  img21 = loadImage("assets/windowskin4.png");
  img22 = loadImage("assets/Sasha.gif");
  img23 = loadImage("assets/windowskin5.png");
  img24 = loadImage("assets/elise.gif");
  img25 = loadImage("assets/windowskin6.png");
  img26 = loadImage("assets/LaDruse.png");
  img27 = loadImage("assets/windowskin7.png");
  img28 = loadImage("assets/LaMule.png");
  img29 = loadImage("assets/windowskin8.png");
  ponita = loadImage("assets/ponita.gif");
  ponita1 = loadImage("assets/ponita1.gif");
  fille = loadImage("assets/fille.gif");
  fille1 = loadImage("assets/fille1.gif");
  bar1 = loadImage('assets/BAR1.png')
  bar2 = loadImage('assets/BAR2.png')
  bar3 = loadImage('assets/BAR3.png')
  bar4 = loadImage('assets/BAR4.png')
  bar5 = loadImage('assets/BAR5.png')
  bar6 = loadImage('assets/BAR6.png')
  bar7 = loadImage('assets/BAR7.png')
  bar8 = loadImage('assets/BAR8.png')
  Img5 = loadImage("assets/Tree.png");
  flagEN = loadImage("assets/flagEN.png");
  flagFR = loadImage("assets/flagFR.png");
  frameRate(fr);
}

function setup() {
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  let cnv = createCanvas(960, 3400);
  cnv.position(0, N, "relative");

  console.log(x,y);
  
  if (mapping == 1) {
    if (a == 1) {
      clear();
      noTint();
      image(sky, 0, u);
      image(sea, 0, t);
      image(cloud2, g, u);
      image(cloud1, o, u);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(shadow, e + 4, f + 200);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(battle1, 116, 2316);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img5, x-2, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
    }
    if (a == 2) {
      clear();
      noTint();
      image(sky, 0, u);
      image(sea, 0, t);
      image(cloud2, g, u);
      image(cloud1, o, u);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(battle1, 116, 2316);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img6, x+3, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(shadow, e + 4, f + 200);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
    }
    if (a == 3) {
      clear();
      noTint();
      image(sky, 0, u);
      image(sea, 0, t);
      image(cloud2, g, u);
      image(cloud1, o, u);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(battle1, 116, 2316);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img7, x-6, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(shadow, e + 4, f + 200);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
    }
    if (a == 4) {
      clear();
      noTint();
      image(sky, 0, u);
      image(sea, 0, t);
      image(cloud2, g, u);
      image(cloud1, o, u);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(battle1, 116, 2316);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img8, x-2, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(shadow, e + 4, f + 200);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
    }

    if (keyIsDown(LEFT_ARROW)) {
      clear();
      noTint();
      image(sky, 0, u);
      image(sea, 0, t);
      image(cloud2, g, u);
      image(cloud1, o, u);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(battle1, 116, 2316);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img2, x+3, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(shadow, e + 4, f + 200);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
      x -= 5;
      a = 2;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      clear();
      noTint();
      image(sky, 0, u);
      image(sea, 0, t);
      image(cloud2, g, u);
      image(cloud1, o, u);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(battle1, 116, 2316);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img3, x-6, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(shadow, e + 4, f + 200);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
      x += 5;
      a = 3;
    }

    if (keyIsDown(UP_ARROW)) {
      clear();
      noTint();
      image(sky, 0, u);
      image(sea, 0, t);
      image(cloud2, g, u);
      image(cloud1, o, u);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(battle1, 116, 2316);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img4, x-2, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(shadow, e + 4, f + 200);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
      y -= 5;
      u -= 1.5;
      t -= 2;
      a = 4;
      N += 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      clear();
      noTint();
      image(sky, 0, u);
      image(cloud2, g, u);
      image(cloud1, o, u);
      image(sea, 0, t);
      background(bg);
      image(shadow, x + 2, y + 42);
      image(img12, 300, 1600);
      image(img13, 474, 330);
      image(battle1, 116, 2316);
      image(ponita1, 484, 2576);
      image(fille1, 484, 2576);
      image(combat2, 400, 1700);
      image(kaio1, 500, 1680);
      image(img1, x-2, y);
      image(kaio1a, 500, 1680);
      image(combat1, 400, 1700);
      image(battle, 116, 2316);
      image(ponita, 484, 2576);
      image(fille, 484, 2576);
      image(img11, 300, 1600);
      image(shadow, e + 4, f + 200);
      image(Img5, 0, 0);
      image(bird1, e, f);
      image(img10, 600, 856);
      tint(FR);
      image(flagFR, 0, y - 342);
      tint(EN);
      image(flagEN, 60, y - 342);
      y += 5;
      u += 1.5;
      t += 2;
      a = 1;
      N -= 5;
    }

    //---CADRE LIMITE---//
    if (x <= 64) {
      x += 5;
    }
    if (x >= 868) {
      x -= 5;
    }
    if (y <= 332) {
      y += 5;
      N -= 5;
    }
    if (y >= 2810) {
      y -= 5;
      N += 5;
    }

    //-------Falaise-------//

    if (y <= 362 && x >= 500) {
      y += 5;
      N -= 5;
    }
    if (y <= 366 && x >= 510) {
      y += 5;
      N -= 5;
    }
    if (y <= 392 && x >= 628) {
      y += 5;
      N -= 5;
    }
    if (y <= 396 && x >= 636) {
      y += 5;
      N -= 5;
    }
    if (y <= 422 && x >= 750) {
      y += 5;
      N -= 5;
    }
    if (y <= 426 && x >= 760) {
      y += 5;
      N -= 5;
    }
    if (y <= 452 && x >= 800) {
      y += 5;
      N -= 5;
    }
    if (y <= 456 && x >= 810) {
      y += 5;
      N -= 5;
    }
    //---//
    if (y <= 362 && x <= 360) {
      y += 5;
      N -= 5;
    }
    if (y <= 366 && x <= 350) {
      y += 5;
      N -= 5;
    }
    if (y <= 392 && x <= 230) {
      y += 5;
      N -= 5;
    }
    if (y <= 396 && x <= 220) {
      y += 5;
      N -= 5;
    }
    if (y <= 422 && x <= 140) {
      y += 5;
      N -= 5;
    }
    if (y <= 426 && x <= 130) {
      y += 5;
      N -= 5;
    }
    if (y <= 452 && x <= 80) {
      y += 5;
      N -= 5;
    }
    if (y <= 456 && x <= 70) {
      y += 5;
      N -= 5;
    }

    //----Tree Gauche----//

    if (y >= 392 && y <= 2292 && x <= 94) {
      x += 5;
    }
    if (y >= 892 && y <= 1092 && x <= 120) {
      x += 5;
    }
    if (y >= 932 && y <= 1092 && x <= 136) {
      x += 5;
    }
    if (y >= 1022 && y <= 1176 && x <= 370) {
      y -= 5;
      N += 5;
    }
    if (y >= 1024 && y <= 1176 && x <= 374) {
      x += 5;
    }
    if (y >= 1030 && y <= 1182 && x <= 370) { //test
      y += 5;
      N -= 5;
    }
    if (y >= 1092 && y <= 1232 && x <= 256) {
      x += 5;
    }

    if (y >= 1227 && y <= 1292 && x <= 306) {
      y -= 5;
      N += 5;
    }
    if (y >= 1232 && y <= 1292 && x <= 312) {
      x += 5;
    }
    if (y >= 1260 && y <= 1292 && x <= 408) {
      y -= 5;
      N += 5;
    }
    if (y >= 1262 && y <= 1338 && x <= 410) {
      x += 5;
    }
    if (y >= 1272 && y <= 1342 && x <= 408) {
      y += 5;
      N -= 5;
    }
    if (y >= 1272 && y <= 1392 && x <= 372) {
      x += 5;
    }
    if (y >= 1390 && y <= 1392 && x <= 408) {
      y -= 5;
      N += 5;
    }
    if (y >= 1400 && y <= 1478 && x <= 412 && x >= 362) {
      x += 5;
    }
    if (y >= 1400 && y <= 1482 && x <= 408 && x >= 362) {
      y += 5;
      N -= 5;
    }
    if (y >= 1400 && y <= 1480 && x <= 408 && x >= 356) {
      x -= 5;
    }
    if (y >= 1400 && y <= 1455 && x <= 408 && x >= 280) {
      y += 5;
      N -= 5;
    }
    if (y >= 1392 && y <= 1470 && x <= 288) {
      x += 5;
    }
    if (y >= 1392 && y <= 1474 && x <= 284) {
      y += 5;
      N -= 5;
    }
    if (y >= 1392 && y <= 1500 && x <= 254) {
      x += 5;
    }
    if (y >= 1392 && y <= 1504 && x <= 248) {
      y += 5;
      N -= 5;
    }
    if (y >= 1392 && y <= 1530 && x <= 224) {
      x += 5;
    }
    if (y >= 1392 && y <= 1534 && x <= 220) {
      y += 5;
      N -= 5;
    }
    if (y >= 1530 && y <= 1590 && x <= 212) {
      x += 5;
    }
    if (y >= 1530 && y <= 1594 && x <= 208) {
      y += 5;
      N -= 5;
    }
    if (y >= 1530 && y <= 1992 && x <= 160) {
      x += 5;
    }
    if (y >= 1698 && y <= 1730 && x <= 220) {
      y -= 5;
      N += 5;
    }
    if (y >= 1702 && y <= 1732 && x <= 226) {
      x += 5;
    }
    if (y >= 1702 && y <= 1740 && x <= 220) {
      y += 5;
      N -= 5;
    }
    if (y >= 1732 && y <= 1796 && x <= 196) {
      x += 5;
    }
    if (y >= 1732 && y <= 1802 && x <= 190) {
      y += 5;
      N -= 5;
    }
    if (y >= 1792 && y <= 1872 && x <= 188) {
      x += 5;
    }
    if (y >= 1864 && y <= 1892 && x <= 214) {
      y -= 5;
      N += 5;
    }
    if (y >= 1870 && y <= 1912 && x <= 220) {
      x += 5;
    }
    if (y >= 1902 && y <= 1974 && x <= 248) {
      y -= 5;
      N += 5;
    }
    if (y >= 1908 && y <= 1974 && x <= 254) {
      x += 5;
    }
    if (y >= 1966 && y <= 2092 && x <= 302) {
      y -= 5;
      N += 5;
    }
    if (y >= 1972 && y <= 2012 && x <= 308) {
      x += 5;
    }
    if (y >= 1998 && y <= 2092 && x <= 348) {
      y -= 5;
      N += 5;
    }
    if (y >= 2004 && y <= 2096 && x <= 356) {
      x += 5;
    }
    if (y >= 2112 && y <= 2164 && x <= 314) {
      x += 5;
    }
    if (y >= 2158 && y <= 2198 && x <= 380) {
      y -= 5;
      N += 5;
    }
    if (y >= 2164 && y <= 2204 && x <= 384) {
      x += 5;
    }
    if (y >= 2164 && y <= 2210 && x <= 380) {
      y += 5;
      N -= 5;
    }
    if (y >= 2142 && y <= 2236 && x <= 224) {
      x += 5;
    }
    if (y >= 2142 && y <= 2238 && x <= 218) {
      y += 5;
      N -= 5;
    }
    if (y >= 2142 && y <= 2272 && x <= 192) {
      x += 5;
    }
    if (y >= 2142 && y <= 2272 && x <= 186) {
      x += 5;
    }
    if (y >= 2142 && y <= 2298 && x <= 180) {
      y += 5;
      N -= 5;
    }
    if (y >= 2142 && y <= 2324 && x <= 102) {
      x += 5;
    }
    if (y >= 2142 && y <= 2332 && x <= 96) {
      y += 5;
      N -= 5;
    }
    if (y >= 2378 && y <= 2452 && x <= 86) {
      y -= 5;
      N += 5;
    }
    if (y >= 2384 && y <= 2452 && x <= 92) {
      x += 5;
    }
    if (y >= 2452 && y <= 2462 && x <= 96) {
      x += 5;
    }
    if (y >= 2462 && y <= 2472 && x <= 100) {
      x += 5;
    }
    if (y >= 2472 && y <= 2482 && x <= 106) {
      x += 5;
    }
    if (y >= 2492 && y <= 2502 && x <= 112) {
      x += 5;
    }
    if (y >= 2502 && y <= 2508 && x <= 118) {
      x += 5;
    }
    if (y >= 2502 && y <= 2552 && x <= 126) {
      x += 5;
    }
    if (y >= 2522 && y <= 2558 && x <= 120) {
      y += 5;
      N -= 5;
    }
    if (y >= 2552 && y <= 2792 && x <= 96) {
      x += 5;
    }

    //----Tree Droite----//

    if (y >= 0 && y <= 754 && x >= 842) {
      x -= 5;
    }
    if (y >= 0 && y <= 760 && x >= 848) {
      y += 5;
      N -= 5;
    }
    if (y >= 492 && y <= 616 && x >= 800) {
      y -= 5;
      N += 5;
    }
    if (y >= 598 && y <= 616 && x >= 792) {
      x -= 5;
    }
    if (y >= 492 && y <= 622 && x >= 800) {
      y += 5;
      N -= 5;
    }
    if (y >= 834 && y <= 3000 && x >= 848) {
      y -= 5;
      N += 5;
    }
    if (y >= 834 && y <= 3000 && x >= 842) {
      x -= 5;
    }
    if (y >= 1022 && y <= 1176 && x >= 560) {
      y -= 5;
      N += 5;
    }
    if (y >= 1028 && y <= 1176 && x >= 554) {
      x -= 5;
    }
    if (y >= 1028 && y <= 1182 && x >= 560) {
      y += 5;
      N -= 5;
    }
    if (y >= 1092 && y <= 1202 && x >= 704) {
      x -= 5;
    }
    if (y >= 1196 && y <= 1212 && x >= 666) {
      y -= 5;
      N += 5;
    }
    if (y >= 1202 && y <= 1272 && x >= 658) {
      x -= 5;
    }
    if (y >= 1227 && y <= 1292 && x >= 568) {
      y -= 5;
      N += 5;
    }
    if (y >= 1232 && y <= 1292 && x >= 562) {
      x -= 5;
    }
    if (y >= 1258 && y <= 1292 && x >= 522) {
      y -= 5;
      N += 5;
    }
    if (y >= 1262 && y <= 1336 && x >= 516) {
      x -= 5;
    }
    if (y >= 1292 && y <= 1342 && x >= 522) {
      y += 5;
      N -= 5;
    }
    if (y >= 1262 && y <= 1372 && x >= 548) {
      x -= 5;
    }
    if (y >= 1292 && y <= 1378 && x >= 554) {
      y += 5;
      N -= 5;
    }
    if (y >= 1292 && y <= 1442 && x >= 584) {
      x -= 5;
    }
    if (y >= 1390 && y <= 1402 && x >= 522) {
      y -= 5;
      N += 5;
    }
    if (y >= 1396 && y <= 1466 && x >= 516) {
      x -= 5;
    }
    if (y >= 1442 && y <= 1472 && x >= 522) {
      y += 5;
      N -= 5;
    }
    if (y >= 1442 && y <= 1484 && x >= 552) {
      x -= 5;
    }
    if (y >= 1442 && y <= 1492 && x >= 558) {
      y += 5;
      N -= 5;
    }
    if (y >= 1442 && y <= 1556 && x >= 600) {
      x -= 5;
    }
    if (y >= 1524 && y <= 1556 && x >= 586) {
      y -= 5;
      N += 5;
    }
    if (y >= 1532 && y <= 1556 && x >= 580) {
      x -= 5;
    }
    if (y >= 1542 && y <= 1562 && x >= 586) {
      y += 5;
      N -= 5;
    }
    if (y >= 1532 && y <= 1592 && x >= 644) {
      x -= 5;
    }
    if (y >= 1542 && y <= 1598 && x >= 650) {
      y += 5;
      N -= 5;
    }
    if (y >= 1532 && y <= 1626 && x >= 680) {
      x -= 5;
    }
    if (y >= 1542 && y <= 1632 && x >= 686) {
      y += 5;
      N -= 5;
    }
    if (y >= 1532 && y <= 1670 && x >= 704) {
      x -= 5;
    }
    if (y >= 1542 && y <= 1676 && x >= 710) {
      y += 5;
      N -= 5;
    }
    if (y >= 1532 && y <= 1792 && x >= 750) {
      x -= 5;
    }
    if (y >= 1734 && y <= 1892 && x >= 716) {
      y -= 5;
      N += 5;
    }
    if (y >= 1740 && y <= 1892 && x >= 710) {
      x -= 5;
    }
    if (y >= 1818 && y <= 1892 && x >= 660) {
      y -= 5;
      N += 5;
    }
    if (y >= 1824 && y <= 1892 && x >= 654) {
      x -= 5;
    }
    if (y >= 1882 && y <= 1912 && x >= 630) {
      y -= 5;
      N += 5;
    }
    if (y >= 1888 && y <= 1932 && x >= 624) {
      x -= 5;
    }
    if (y >= 1922 && y <= 1992 && x >= 554) {
      y -= 5;
      N += 5;
    }
    if (y >= 1928 && y <= 2092 && x >= 550) {
      x -= 5;
    }
    if (y >= 1966 && y <= 2092 && x >= 524) {
      y -= 5;
      N += 5;
    }
    if (y >= 1972 && y <= 2092 && x >= 518) {
      x -= 5;
    }
    if (y >= 2004 && y <= 2092 && x >= 414) {
      y -= 5;
      N += 5;
    }
    if (y >= 2008 && y <= 2096 && x >= 408) {
      x -= 5;
    }
    if (y >= 2096 && y <= 2104 && x >= 416) {
      x -= 5;
    }
    if (y >= 2092 && y <= 2110 && x >= 408) {
      y += 5;
      N -= 5;
    }
    if (y >= 2096 && y <= 2136 && x >= 460) {
      x -= 5;
    }
    if (y >= 2092 && y <= 2142 && x >= 466) {
      y += 5;
      N -= 5;
    }
    if (y >= 2096 && y <= 2182 && x >= 492) {
      x -= 5;
    }
    if (y >= 2162 && y <= 2182 && x >= 460) {
      y -= 5;
      N += 5;
    }
    if (y >= 2168 && y <= 2182 && x >= 454) {
      x -= 5;
    }
    if (y >= 2182 && y <= 2207 && x >= 460) {
      y += 5;
      N -= 5;
    }
    if (y >= 2168 && y <= 2316 && x >= 544) {
      x -= 5;
    }
    if (y >= 2182 && y <= 2322 && x >= 550) {
      y += 5;
      N -= 5;
    }
    if (y >= 2092 && y <= 2372 && x >= 592) {
      x -= 5;
    }
    if (y >= 2354 && y <= 2382 && x >= 554) {
      y -= 5;
      N += 5;
    }
    if (y >= 2360 && y <= 2394 && x >= 548) {
      x -= 5;
    }
    if (y >= 2360 && y <= 2402 && x >= 554) {
      y += 5;
      N -= 5;
    }
    if (y >= 2382 && y <= 2460 && x >= 578 && x <= 694) {
      x -= 5;
    }
    if (y >= 2442 && y <= 2466 && x >= 584 && x <= 694) {
      y += 5;
      N -= 5;
    }
    if (y >= 2412 && y <= 2582 && x >= 782) {
      x -= 5;
    }
    if (y >= 2442 && y <= 2588 && x >= 788) {
      y += 5;
      N -= 5;
    }
    if (y >= 2630 && y <= 2647 && x >= 816) {
      y -= 5;
      N += 5;
    }
    if (y >= 2636 && y <= 2674 && x >= 810) {
      x -= 5;
    }
    if (y >= 2642 && y <= 2680 && x >= 816) {
      y += 5;
      N -= 5;
    }
    if (y >= 2716 && y <= 2892 && x >= 812) {
      y -= 5;
      N += 5;
    }
    if (y >= 2722 && y <= 2892 && x >= 806) {
      x -= 5;
    }

    //----panneau 1----//                    //VICTOR T'EN ES LA ! IL FAUT FAIRE  -8 POUR TOUT LES y DE COLLISIONS DECORS !!!! A PARTIR D'ICI

    if (y >= 770 && y <= 800 && x >= 328 && x <= 372) {
      x -= 5;
    }
    if (y >= 770 && y <= 800 && x >= 334 && x <= 378) {
      x += 5;
    }
    if (y >= 770 && y <= 806 && x >= 334 && x <= 372) {
      y += 5;
      N -= 5;
    }
    if (y >= 764 && y <= 800 && x >= 334 && x <= 372) {
      y -= 5;
      N += 5;
    }

    ///panneau1 Affichage///

    if (y >= 782 && y <= 818 && x >= 318 && x <= 388) {
      noTint();
      image(img9, 0, y + 150);
      fill(255, 150);
      if (FR == 255) {
        text("Observez, étudiez et attrapez des Pokémon", 484, y + 226);
        text("sauvages durant une période révolue de ", 484, y + 252);
        text("l'Histoire du Japon, afin de compléter le ", 484, y + 278);
        text("tout premier Pokédex de la région.", 484, y + 304);
      }
      if (EN == 255) {
        text("Survey, catch, and research wild Pokémon", 484, y + 234);
        text("in a long-gone era of Japan", 484, y + 260);
        text("to complete the region’s first Pokédex. ", 484, y + 286);
      }
    }

    ///panneau2 Affichage///

    if (y >= 1460 && y <= 1490 && x >= 346 && x <= 425) {
      noTint();
      image(img9, 0, y + 150);
      fill(255, 150);
      if (FR == 255) {
        text("Nous sommes en 1570. A cette époque,", 484, y + 226);
        text("il n'est pas rare de se voir provoquer", 484, y + 252);
        text("en duel. Vos pokemons ne vous seront", 484, y + 278);
        text("d'aucun secours dans un combat au sabre.", 484, y + 304);
      }
      if (EN == 255) {
        text("In 1570, it's usual to be challenged", 484, y + 234);
        text("to a dual. But be carefull, your pokemon", 484, y + 260);
        text("will be helpless during a sword fight.", 484, y + 286);
      }
    }

    ///panneau3 Affichage///

    if (y >= 2104 && y <= 2160 && x >= 300 && x <= 356) {
      noTint();
      image(img9, 0, y + 150);
      fill(255, 150);
      if (FR == 255) {
        text("Affrontez des dresseurs redoutable dans", 484, y + 226);
        text("des combats aussi difficiles qu'épiques.", 484, y + 252);
        text("Menez vos Pokemon à la victoire contre de", 484, y + 278);
        text("grands champions pour remporter leurs royaume.", 484, y + 304);
      }
      if (EN == 255) {
        text("In 1570, it's usual to be challenged", 484, y + 234);
        text("to a dual. But be carefull, your pokemon", 484, y + 260);
        text("will be helpless during a sword fight.", 484, y + 286);
      }
    }

    //-panneau3-//

    if (y >= 2104 && y <= 2140 && x <= 348) {
      x += 5;
    }
    if (y >= 2120 && y <= 2146 && x <= 348) {
      y += 5;
      N -= 5;
    }
    //--//
    //----panneau 4 -----///

    if (y >= 2420 && y <= 2560 && x >= 738) {
      x -= 5;
    }
    if (y >= 2450 && y <= 2566 && x >= 744) {
      y += 5;
      N -= 5;
    }

    //----//

    //------MAISON-------//

    if (x >= 240 && x <= 368 && y >= 668 && y <= 774) {
      x += 5;
    }
    if (x >= 230 && x <= 360 && y >= 668 && y <= 774) {
      x -= 5;
    }
    if (x >= 200 && x <= 364 && y >= 680 && y <= 769) {
      y += 5;
      N -= 5;
    }
    if (x >= 240 && x <= 364 && y >= 670 && y <= 760) {
      y -= 5;
      N += 5;
    }
    if (x >= 270 && x <= 364 && y >= 680 && y <= 774) {
      y += 5;
      N -= 5;
    }

    //------Maison 2 ------///

    if (y >= 2420 && y <= 2530 && x >= 612 && x <= 694) {
      x -= 5;
    }
    if (y >= 2450 && y <= 2536 && x >= 620 && x <= 694) {
      y += 5;
      N -= 5;
    }
    if (y >= 2420 && y <= 2530 && x >= 620 && x <= 700) {
      x += 5;
    }
    if (y >= 2420 && y <= 2530 && x >= 712) {
      x -= 5;
    }
    if (y >= 2450 && y <= 2536 && x >= 718) {
      y += 5;
      N -= 5;
    }

    //------BASSIN-------//

    if (x >= 70 && x <= 248 && y >= 668 && y <= 864) {
      x += 5;
    }
    if (x >= 80 && x <= 240 && y >= 668 && y <= 864) {
      x -= 5;
    }
    if (x >= 80 && x <= 244 && y >= 680 && y <= 870) {
      y += 5;
      N -= 5;
    }
    if (x >= 90 && x <= 244 && y >= 669 && y <= 860) {
      y -= 5;
      N += 5;
    }

    //---arbres----//

    if (y >= 564 && y <= 624 && x <= 120) {
      y -= 5;
      N += 5;
    }
    if (y >= 570 && y <= 624 && x <= 126) {
      x += 5;
    }
    if (y >= 564 && y <= 630 && x <= 120) {
      y += 5;
      N -= 5;
    }
    //

    if (y >= 646 && y <= 720 && x >= 136 && x <= 176) {
      y -= 5;
      N += 5;
    }
    if (y >= 652 && y <= 720 && x >= 130 && x <= 176) {
      x -= 5;
    }
    if (y >= 652 && y <= 720 && x >= 136 && x <= 182) {
      x += 5;
    }

    //

    if (y >= 544 && y <= 590 && x >= 516 && x <= 572) {
      y -= 5;
      N += 5;
    }
    if (y >= 550 && y <= 590 && x >= 510 && x <= 572) {
      x -= 5;
    }
    if (y >= 550 && y <= 590 && x >= 516 && x <= 578) {
      x += 5;
    }
    if (y >= 550 && y <= 596 && x >= 516 && x <= 572) {
      y += 5;
      N -= 5;
    }

    //
    if (y >= 672 && y <= 716 && x >= 708 && x <= 762) {
      y -= 5;
      N += 5;
    }
    if (y >= 678 && y <= 716 && x >= 702 && x <= 762) {
      x -= 5;
    }
    if (y >= 678 && y <= 716 && x >= 708 && x <= 768) {
      x += 5;
    }
    if (y >= 678 && y <= 722 && x >= 708 && x <= 762) {
      y += 5;
      N -= 5;
    }

    //

    if (y >= 740 && y <= 782 && x >= 772 && x <= 828) {
      y -= 5;
      N += 5;
    }
    if (y >= 746 && y <= 782 && x >= 766 && x <= 828) {
      x -= 5;
    }
    if (y >= 746 && y <= 782 && x >= 772 && x <= 834) {
      x += 5;
    }
    if (y >= 746 && y <= 788 && x >= 772 && x <= 828) {
      y += 5;
      N -= 5;
    }

    //

    if (y >= 854 && y <= 910 && x >= 740 && x <= 798) {
      y -= 5;
      N += 5;
    }
    if (y >= 860 && y <= 910 && x >= 734 && x <= 798) {
      x -= 5;
    }
    if (y >= 860 && y <= 910 && x >= 740 && x <= 804) {
      x += 5;
    }
    if (y >= 860 && y <= 916 && x >= 740 && x <= 798) {
      y += 5;
      N -= 5;
    }

    //

    if (y >= 928 && y <= 960 && x >= 240 && x <= 272) {
      y -= 5;
      N += 5;
    }
    if (y >= 934 && y <= 960 && x >= 234 && x <= 272) {
      x -= 5;
    }
    if (y >= 934 && y <= 960 && x >= 240 && x <= 278) {
      x += 5;
    }
    if (y >= 934 && y <= 966 && x >= 240 && x <= 272) {
      y += 5;
      N -= 5;
    }
    //

    //-------enclo--------//

    if (y >= 820 && y <= 930 && x >= 556 && x <= 724) {
      y -= 5;
      N += 5;
    }
    if (y >= 826 && y <= 930 && x >= 550 && x <= 724) {
      x -= 5;
    }
    if (y >= 826 && y <= 930 && x >= 556 && x <= 730) {
      x += 5;
    }
    if (y >= 826 && y <= 936 && x >= 556 && x <= 724) {
      y += 5;
      N -= 5;
    }

    //---------moine1--------//
    if (y >= 1592 && y <= 1630 && x >= 282 && x <= 328) {
      y -= 5;
      N += 5;
    }
    if (y >= 1598 && y <= 1630 && x >= 276 && x <= 328) {
      x -= 5;
    }
    if (y >= 1598 && y <= 1630 && x >= 282 && x <= 334) {
      x += 5;
    }
    if (y >= 1598 && y <= 1636 && x >= 282 && x <= 328) {
      y += 5;
      N -= 5;
    }

    //---------Samurai--------//

    if (y >= 2342 && y <= 2382 && x >= 96 && x <= 152) {
      y -= 5;
      N += 5;
    }
    if (y >= 2348 && y <= 2382 && x >= 90 && x <= 152) {
      x -= 5;
    }
    if (y >= 2342 && y <= 2382 && x >= 96 && x <= 158) {
      x += 5;
    }
    if (y >= 2342 && y <= 2388 && x >= 96 && x <= 152) {
      y += 5;
      N -= 5;
    }

    //-------------Samurai Affichage-----------//

    if (y >= 2316 && y <= 2410 && x >= 70 && x <= 180) {

      noTint();
      image(img20, 582, y + 24);
      image(img21, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Chrysacier c'est toi le meilleur !", 484, y + 248);
        text("Attaques armure, comme lui !", 484, y + 284);
      }
      if (EN == 255) {
        text("You are the stronger Metapod !", 484, y + 248);
        text("Harden, like him !", 484, y + 284);
      }
    }

    //---------Chrysasiers--------//

    if (y >= 2342 && y <= 2382 && x >= 192 && x <= 266) {
      y -= 5;
      N += 5;
    }
    if (y >= 2348 && y <= 2382 && x >= 186 && x <= 266) {
      x -= 5;
    }
    if (y >= 2342 && y <= 2382 && x >= 192 && x <= 272) {
      x += 5;
    }
    if (y >= 2342 && y <= 2388 && x >= 192 && x <= 266) {
      y += 5;
      N -= 5;
    }

    //---------Sasha & Pikachu--------//

    if (y >= 2342 && y <= 2382 && x >= 296 && x <= 370) {
      y -= 5;
      N += 5;
    }
    if (y >= 2348 && y <= 2382 && x >= 290 && x <= 370) {
      x -= 5;
    }
    if (y >= 2342 && y <= 2382 && x >= 296 && x <= 376) {
      x += 5;
    }
    if (y >= 2342 && y <= 2388 && x >= 296 && x <= 370) {
      y += 5;
      N -= 5;
    }

    //-------------Sasha affichage-----------//

    if (y >= 2316 && y <= 2410 && x >= 280 && x <= 394) {

      noTint();
      image(img22, 534, y + 22);
      image(img23, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Tiens bon Chrysacier !", 484, y + 248);
        text("Armure au maximun !", 484, y + 284);
      }
      if (EN == 255) {
        text("Metapod hold on !", 484, y + 248);
        text("Maximum harden !", 484, y + 284);
      }
    }

    //---------Aventurière--------//

    if (y >= 2584 && y <= 2620 && x >= 460 && x <= 586) {
      y -= 5;
      N += 5;
    }
    if (y >= 2590 && y <= 2620 && x >= 454 && x <= 586) {
      x -= 5;
    }
    if (y >= 2590 && y <= 2620 && x >= 460 && x <= 592) {
      x += 5;
    }
    if (y >= 2590 && y <= 2626 && x >= 460 && x <= 586) {
      y += 5;
      N -= 5;
    }

    //-------------Aventurière affichage-----------//

    if (y >= 2566 && y <= 2650 && x >= 430 && x <= 610) {
  
      noTint();
      image(img24, 584, y + 22);
      image(img25, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Dans cette aventure, il faut du temps ", 484, y + 226);
        text("pour que ton pokemon t'obéisses.", 484, y + 252);
        text("Seuls les liens d'amitier et la persévérance", 484, y + 278);
        text("en feront un bon compagnon de combat. ", 484, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 484, y + 252);
        text("Remember that the Pokemon's strengh", 484, y + 278);
        text("depend on his trainer's choices.", 484, y + 304);
      }
    }

    //---------Kaio--------//

    if (y >= 1672 && y <= 1712 && x >= 494 && x <= 542) {
      y -= 5;
      N += 5;
    }
    if (y >= 1680 && y <= 1712 && x >= 486 && x <= 542) {
      x -= 5;
    }
    if (y >= 1680 && y <= 1712 && x >= 494 && x <= 548) {
      x += 5;
    }
    if (y >= 1680 && y <= 1720 && x >= 494 && x <= 542) {
      y += 5;
      N -= 5;
    }

    //----Kaio affichage---//

    if (y >= 1660 && y <= 1680 && x >= 482 && x <= 550) {
      if (a == 1) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img5, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 2) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img6, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 3) {
        clear();
        noTint();

        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img7, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 4) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img8, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (keyIsDown(LEFT_ARROW)) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img2, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img3, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(UP_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img4, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(DOWN_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(cloud2, g, u);
        image(cloud1, o, u);
        image(sea, 0, t);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(battle1, 116, 2316);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(combat2, 400, 1700);
        image(img1, x, y);
        image(kaio4, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      noTint();
      image(img18, 590, y + 30);
      image(img19, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, y + 278);
        text("aussi des choix de son dresseur. ", 484, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 484, y + 252);
        text("Remember that the Pokemon's strengh", 484, y + 278);
        text("depend on his trainer's choices.", 484, y + 304);
      }
    }

    if (y >= 1690 && y <= 1720 && x >= 458 && x <= 510) {
      if (a == 1) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img5, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 2) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img6, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 3) {
        clear();
        noTint();

        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img7, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 4) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img8, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (keyIsDown(LEFT_ARROW)) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img2, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img3, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(UP_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img4, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(DOWN_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(cloud2, g, u);
        image(cloud1, o, u);
        image(sea, 0, t);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(battle1, 116, 2316);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(combat2, 400, 1700);
        image(img1, x, y);
        image(kaio2, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      noTint();
      image(img18, 590, y + 30);
      image(img19, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, y + 278);
        text("aussi des choix de son dresseur. ", 484, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 484, y + 252);
        text("Remember that the Pokemon's strengh", 484, y + 278);
        text("depend on his trainer's choices.", 484, y + 304);
      }
    }

    if (y >= 1680 && y <= 1720 && x >= 510 && x <= 560) {
      if (a == 1) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);

        image(img5, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 2) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img6, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 3) {
        clear();
        noTint();

        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img7, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 4) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img8, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (keyIsDown(LEFT_ARROW)) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img2, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img3, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(UP_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(img4, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(DOWN_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(cloud2, g, u);
        image(cloud1, o, u);
        image(sea, 0, t);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(battle1, 116, 2316);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(combat2, 400, 1700);
        image(img1, x, y);
        image(kaio3, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      noTint();
      image(img18, 590, y + 30);
      image(img19, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, y + 278);
        text("aussi des choix de son dresseur. ", 484, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 484, y + 252);
        text("Remember that the Pokemon's strengh", 484, y + 278);
        text("depend on his trainer's choices.", 484, y + 304);
      }
    }

    if (y >= 1720 && y <= 1760 && x >= 482 && x <= 550) {
      if (a == 1) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img5, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 2) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img6, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 3) {
        clear();
        noTint();

        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img7, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 4) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img8, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (keyIsDown(LEFT_ARROW)) {
        clear();
        noTint();
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img2, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img3, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(UP_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(battle1, 116, 2316);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img4, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }

      if (keyIsDown(DOWN_ARROW)) {
        clear();
        noTint();
        image(sky, 0, u);
        image(cloud2, g, u);
        image(cloud1, o, u);
        image(sea, 0, t);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img13, 474, 330);
        image(battle1, 116, 2316);
        image(ponita1, 484, 2576);
        image(fille1, 484, 2576);
        image(combat2, 400, 1700);
        image(kaio1, 500, 1680);
        image(img1, x, y);
        image(kaio1a, 500, 1680);
        image(combat1, 400, 1700);
        image(battle, 116, 2316);
        image(ponita, 484, 2576);
        image(fille, 484, 2576);
        image(img11, 300, 1600);
        image(shadow, e + 4, f + 200);
        image(Img5, 0, 0);
        image(bird1, e, f);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      noTint();
      image(img18, 590, y + 30);
      image(img19, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, y + 278);
        text("aussi des choix de son dresseur. ", 484, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 484, y + 252);
        text("Remember that the Pokemon's strengh", 484, y + 278);
        text("depend on his trainer's choices.", 484, y + 304);
      }
    }
    //---------combat--------//

    if (y >= 1740 && y <= 1808 && x >= 428 && x <= 620) {
      y -= 5;
      N += 5;
    }
    if (y >= 1748 && y <= 1808 && x >= 420 && x <= 620) {
      x -= 5;
    }
    if (y >= 1748 && y <= 1808 && x >= 428 && x <= 628) {
      x += 5;
    }
    if (y >= 1748 && y <= 1816 && x >= 428 && x <= 620) {
      y += 5;
      N -= 5;
    }

    //-------Dame Kyoka------//

    if (y >= 0 && y <= 360 && x >= 444 && x <= 500) {
      x -= 5;
    }
    if (y >= 0 && y <= 360 && x >= 450 && x <= 500) {
      x += 5;
    }
    if (y >= 0 && y <= 366 && x >= 450 && x <= 500) {
      y += 5;
      N -= 5;
    }

    //----Kyoka affichage---//

    if (y >= 0 && y <= 354 && x >= 432 && x <= 500) {
      if (a == 1) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img14, 474, 330);
        image(img5, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 2) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img14, 474, 330);
        image(img6, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 3) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img14, 474, 330);
        image(img7, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 4) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img14, 474, 330);
        image(img8, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      noTint();
      image(img17, 600, y + 30);
      image(img16, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Oh! Un visiteur! Quelle région magnifique,", 484, y + 226);
        text("n'est ce pas? Mais.... ", 484, y + 252);
        text("Une grande menace pèse sur nous...", 484, y + 278);
        text("Pourras tu nous venir en aide?!", 484, y + 304);
      }
      if (EN == 255) {
        text("Oh! A stranger! What a wonderful country,", 484, y + 226);
        text("isn't it? But.... ", 484, y + 252);
        text("A terrible threatens approach.", 484, y + 278);
        text("Will you be strong enough to help us?!", 484, y + 304);
      }
    }

    if (y >= 366 && y <= 380 && x >= 448 && x <= 500) {
      if (a == 1) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img15, 474, 330);
        image(img5, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 2) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img15, 474, 330);
        image(img6, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 3) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img15, 474, 330);
        image(img7, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      if (a == 4) {
        clear();
        noTint();
        image(sky, 0, u);
        image(sea, 0, t);
        image(cloud2, g, u);
        image(cloud1, o, u);
        background(bg);
        image(shadow, x + 2, y + 34);
        image(img12, 300, 1600);
        image(img15, 474, 330);
        image(img8, x, y);
        image(img11, 300, 1600);
        image(Img5, 0, 0);
        image(img10, 600, 856);
        tint(FR);
        image(flagFR, 0, y - 342);
        tint(EN);
        image(flagEN, 60, y - 342);
      }
      noTint();
      image(img17, 600, y + 30);
      image(img16, 10, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Oh! Un visiteur! Quelle région magnifique,", 484, y + 226);
        text("n'est ce pas? Mais.... ", 484, y + 252);
        text("Une grande menace pèse sur nous...", 484, y + 278);
        text("Pourras tu nous venir en aide?!", 484, y + 304);
      }
      if (EN == 255) {
        text("Oh! A stranger! What a wonderful country,", 484, y + 226);
        text("isn't it? But.... ", 484, y + 252);
        text("A terrible threatens approach.", 484, y + 278);
        text("Will you be strong enough to help us?!", 484, y + 304);
      }
    }

    //------SKY-----//

    o += 1;
    g += 0.8;
    if (u <= -120) {
      u += 1.5;
    }
    if (u >= 120) {
      u -= 1.5;
    }
    if (o >= width) {
      o = -450;
    }

    if (g >= width) {
      g = -600;
    } //------SEA-----//

    if (t <= -120) {
      t += 2;
    }
    if (t >= 120) {
      t -= 2;
    }

    //-----Bird1------//

    e += 4;
    f += 2;
    if (e >= width) {
      e = -800;
      f = 400;
    }

    //---MAP TRANSFER--/

    if (x >= 255 && x <= 264 && y >= 680 && y <= 778) {
      y = 744;
      N = -400;
      song.playMode("sustain");
      song.pause();
      mapping = 2;
    }

    if (x >= 700 && x <= 720 && y >= 2460 && y <= 2476) {
      y = 2450;
      x = 634;

      song.playMode("sustain");
      song.pause();
      song2.loop();
      song2.playMode("restart");
      song2.play();
      mapping = 3;
    }


    
    //--End--//
  }
  
  
 //------------MAP2------------//

  if (mapping == 2) {
    if (a == 1) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img5, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
    }
    if (a == 2) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img6, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
    }
    if (a == 3) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img7, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
    }
    if (a == 4) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img8, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
    }

    if (keyIsDown(LEFT_ARROW)) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img2, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
      x -= 5;
      a = 2;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img3, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
      x += 5;
      a = 3;
    }

    if (keyIsDown(UP_ARROW)) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img4, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
      y -= 5;
      a = 4;
    }

    if (keyIsDown(DOWN_ARROW)) {
      clear();
      noTint();
      background(ch);
      image(shadow, x + 2, y + 34);
      image(img1, x, y);
      tint(FR);
      image(flagFR, 0, 392);
      tint(EN);
      image(flagEN, 60, 392);
      y += 5;
      a = 1;
    }
    fill(255, 255);
    if (FR == 255) {
      text("Bienvenue sur le site officiel de", 700, 460);
      text("POKEMON OCARINA OF TIME", 700, 510);
      text("le fan-game français inspiré de l'univers", 700, 560);
      text("Nitendo (Pokemon, Zelda, Fire Emblem... ).", 700, 590);
      text("Si tu veux en savoir d'avantage ", 700, 620);
      text("sur le jeu, utilise les touches fléchées", 700, 650);
      text("du clavier pour sortir de la maison", 700, 680);
      text("et explorer ce nouveau monde!", 700, 710);
    }
    if (EN == 255) {
      text("Welcome to the official website", 700, 460);
      text("POKEMON OCARINA OF TIME", 700, 510);
      text("the french fangame inspired by the", 700, 560);
      text("Nitendo universe (Pokemon, Zelda... ).", 700, 590);
      text("If you are interested to know more", 700, 620);
      text("about it, use the arrow keys to explore ", 700, 650);
      text("the vast world outside this house!", 700, 680);
    }

    //---MAP 1---//

    if (x <= 98) {
      x += 5;
    }
    if (x >= 424) {
      x -= 5;
    }
    if (y <= 510) {
      y += 5;
    }
    if (x >= 88 && x <= 240 && y >= 742) {
      y -= 5;
    }
    if (x >= 290 && x <= 424 && y >= 742) {
      y -= 5;
    }

    //---MAP TRANSFER--/

    if (y >= 752) {
      y = 780;
      x = 256;
      N = -446;
      song.loop();
      song.playMode("restart");
      song.play();
      mapping = 1;
    }
  }

  
  
  
  
  //------------MAP3------------//

  if (mapping == 3) {
    if (a == 1) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img5, x, y);
      image(lamule2, 570,2230);
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
    }
    if (a == 2) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img6, x, y);
      image(lamule2, 570,2230);
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
    }
    if (a == 3) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img7, x, y);
      image(lamule2, 570,2230);
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
    }
    if (a == 4) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img8, x, y);
      image(lamule2, 570,2230);
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
    }

    if (keyIsDown(LEFT_ARROW)) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img2, x, y);
      image(lamule2, 570,2230);
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
      x -= 5;
      a = 2;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img3, x, y)
      image(lamule2, 570,2230);;
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
      x += 5;
      a = 3;
    }

    if (keyIsDown(UP_ARROW)) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img4, x, y);
      image(lamule2, 570,2230);
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
      y -= 5;
      a = 4;
      N += 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
      image(lamule, 570,2230);
      image(img1, x, y);
      image(lamule2, 570,2230);
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
      y += 5;
      a = 1;
      N -= 5;
    }

    tint(255, z);
    image(light1, 410, 1972);
    z += Z;
    if (z > 250) {
      Z = -0.4;
    }
    if (z < 230) {
      Z = +0.3;
    }

    //limite MAP3//

    if (x <= 486) {
      x += 5;
    }
    if (x >= 780) {
      x -= 5;
    }
    if (y <= 2036) {
      y += 5;
      N -= 5;
    }
    if (x >= 486 && x <= 588 && y >= 2440) {
      y -= 5;
      N += 5;
    }
    if (x >= 674 && x <= 780 && y >= 2440) {
      y -= 5;
      N += 5;
    }

    //----bord Gauche---//

    if (y >= 2044 && y <= 2090 && x <= 513) {
      y -= 5;
      N += 5;
    }
    if (y >= 2050 && y <= 2096 && x <= 513) {
      y += 5;
      N -= 5;
    }
    if (y >= 2050 && y <= 2090 && x <= 519) {
      x += 5;
    }

    //

    if (y >= 2204 && y <= 2250 && x <= 513) {
      y -= 5;
      N += 5;
    }
    if (y >= 2210 && y <= 2256 && x <= 513) {
      y += 5;
      N -= 5;
    }
    if (y >= 2210 && y <= 2250 && x <= 519) {
      x += 5;
    }

    //

    if (y >= 2364 && y <= 2410 && x <= 513) {
      y -= 5;
      N += 5;
    }
    if (y >= 2370 && y <= 2416 && x <= 513) {
      y += 5;
      N -= 5;
    }
    if (y >= 2370 && y <= 2410 && x <= 519) {
      x += 5;
    }

    //
    //----bord Droit---//

    if (y >= 2044 && y <= 2090 && x >= 754) {
      y -= 5;
      N += 5;
    }
    if (y >= 2050 && y <= 2096 && x >= 754) {
      y += 5;
      N -= 5;
    }
    if (y >= 2050 && y <= 2090 && x >= 748) {
      x -= 5;
    }

    //

    if (y >= 2204 && y <= 2250 && x >= 754) {
      y -= 5;
      N += 5;
    }
    if (y >= 2210 && y <= 2256 && x >= 754) {
      y += 5;
      N -= 5;
    }
    if (y >= 2210 && y <= 2250 && x >= 748) {
      x -= 5;
    }

    //

    if (y >= 2364 && y <= 2410 && x >= 754) {
      y -= 5;
      N += 5;
    }
    if (y >= 2370 && y <= 2416 && x >= 754) {
      y += 5;
      N -= 5;
    }
    if (y >= 2370 && y <= 2410 && x >= 748) {
      x -= 5;
    }

    //-----flamme----//

    if (y >= 2057 && y <= 2102 && x >= 532 && x <= 738) {
      y -= 5;
      N += 5;
    }
    if (y >= 2062 && y <= 2102 && x >= 528 && x <= 738) {
      x -= 5;
    }
    if (y >= 2062 && y <= 2102 && x >= 532 && x <= 740) {
      x += 5;
    }
    if (y >= 2062 && y <= 2106 && x >= 532 && x <= 738) {
      y += 5;
      N -= 5;
    }

    //-----Panneau credit----//

    if (y >= 2046 && y <= 2100 && x >= 574 && x <= 690) {
      y -= 5;
      N += 5;
    }
    if (y >= 2050 && y <= 2100 && x >= 570 && x <= 690) {
      x -= 5;
    }
    if (y >= 2050 && y <= 2100 && x >= 574 && x <= 694) {
      x += 5;
    }
    if (y >= 2050 && y <= 2100 && x >= 574 && x <= 690) {
      y += 5;
      N -= 5;
    }
    
    
    
       //-----LA DRUSE----//

    if (y >= 2126 && y <= 2190 && x >= 650 && x <= 720) {
      y -= 5;
      N += 5;
    }
    if (y >= 2130 && y <= 2190 && x >= 646 && x <= 720) {
      x -= 5;
    }
    if (y >= 2130 && y <= 2190 && x >= 650 && x <= 724) {
      x += 5;
    }
    if (y >= 2130 && y <= 2196 && x >= 650 && x <= 720) {
      y += 5;
      N -= 5;
    }
    
    //-------------La DRUSE AFFICHAGE-----------//

    if (y >= 2118 && y <= 2214 && x >= 638 && x <= 736) {
      
      noTint();
      image(img26, 744, y + 18);
      image(img27, 180, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Salut ! Je suis le scénariste.", 654, y + 248);
        text("Je te prépare une intrigue du tonnerre !", 654, y + 284);
      }
      if (EN == 255) {
        text("Metapod hold on !", 654, y + 248);
        text("Maximum harden !", 654, y + 284);
      }
    }

    
    
    //-----LA MULE----//

    if (y >= 2220 && y <= 2262 && x >= 546 && x <= 606) {
      y -= 5;
      N += 5;
    }
    if (y >= 2224 && y <= 2262 && x >= 542 && x <= 606) {
      x -= 5;
    }
    if (y >= 2224 && y <= 2262 && x >= 546 && x <= 610) {
      x += 5;
    }
    if (y >= 2224 && y <= 2266 && x >= 546 && x <= 606) {
      y += 5;
      N -= 5;
    }
    
    //---------AFFICHAGE LA MULE--------//
    
    if (y >= 2262 && y <= 2282 && x >= 526 && x <= 626) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
       if (a == 1) {
      image(lamule, 570,2230);
      image(img5, x, y);
      image(lamule2, 570,2230);
    }
    if (a == 2) {
      image(lamule, 570,2230);
      image(img6, x, y);
      image(lamule2, 570,2230);
    }
    if (a == 3) {
      image(lamule, 570,2230);
      image(img7, x, y);
      image(lamule2, 570,2230);
    }
    if (a == 4) {
      image(lamule, 570,2230);
      image(img8, x, y);
      image(lamule2, 570,2230);
    }

    if (keyIsDown(LEFT_ARROW)) {
      
      image(lamule, 570,2230);
      image(img2, x, y);
      image(lamule2, 570,2230);


    }

    if (keyIsDown(RIGHT_ARROW)) {
      
      image(lamule, 570,2230);
      image(img3, x, y)
      image(lamule2, 570,2230);


    }

    if (keyIsDown(UP_ARROW)) {
      
      image(lamule, 570,2230);
      image(img4, x, y);
      image(lamule2, 570,2230);


    }

    if (keyIsDown(DOWN_ARROW)) {
      
      image(lamule, 570,2230);
      image(img1, x, y);
      image(lamule2, 570,2230);


    }
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
      
      tint(255, z);
      image(light1, 410, 1972);
      z += Z;
      if (z > 250) {
      Z = -0.4;
      }
      if (z < 230) {
      Z = +0.3;
    }
      noTint();
      image(img28, 744, y + 12);
      image(img29, 180, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Salut ! Moi c'est La Mule, le chef de projet.", 648, y + 226);
        text("Je suis en charge d'un peu tout ici. ", 648, y + 252);
        text("Nous allons sortir une démo jouable rapidement,", 648, y + 278);
        text("je suis sur qu'elle te plaira beaucoup !", 648, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 648, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 648, y + 252);
        text("Remember that the Pokemon's strengh", 648, y + 278);
        text("depend on his trainer's choices.", 648, y + 304);
      }
      
      image(bar4, 86, y -180);
      image(bar3, 86, y - 80);
      image(bar4, 86, y + 20);
      image(bar5, 86, y + 120);
      image(bar5, 86, y + 220);
      image(bar8, 86, y + 320);
                 fill(255, 255);
      if (FR == 255) {
      text("AVANCEMENT DE LA DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Ecriture de l'histoire", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
      }
      if (EN == 255) {
      text("BEGIN TO THE DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Story", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
    }
}
    
    if (y >= 2212 && y <= 2262 && x >= 546 && x <= 626) {
      
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
       if (a == 1) {
      image(img5, x, y);
      image(lamule3, 570,2230);
    }
    if (a == 2) {
      image(img6, x, y);
      image(lamule3, 570,2230);
    }
    if (a == 3) {
      image(img7, x, y);
      image(lamule3, 570,2230);
    }
    if (a == 4) {
      image(img8, x, y);
      image(lamule3, 570,2230);
    }

    if (keyIsDown(LEFT_ARROW)) {
      
      image(img2, x, y);
      image(lamule3, 570,2230);
    }

    if (keyIsDown(RIGHT_ARROW)) {

      image(img3, x, y)
      image(lamule3, 570,2230);
    }

    if (keyIsDown(UP_ARROW)) {

      image(img4, x, y);
      image(lamule3, 570,2230);
    }

    if (keyIsDown(DOWN_ARROW)) {

      image(img1, x, y);
      image(lamule3, 570,2230);
    }
      
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
         
      tint(255, z);
      image(light1, 410, 1972);
      z += Z;
      if (z > 250) {
      Z = -0.4;
      }
      if (z < 230) {
      Z = +0.3;
    }
      noTint();
      image(img28, 744, y + 12);
      image(img29, 180, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Salut ! Moi c'est La Mule, le chef de projet.", 648, y + 226);
        text("Je suis en charge d'un peu tout ici. ", 648, y + 252);
        text("Nous allons sortir une démo jouable rapidement,", 648, y + 278);
        text("je suis sur qu'elle te plaira beaucoup !", 648, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 648, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 648, y + 252);
        text("Remember that the Pokemon's strengh", 648, y + 278);
        text("depend on his trainer's choices.", 648, y + 304);
      }
      image(bar4, 86, y -180);
      image(bar3, 86, y - 80);
      image(bar4, 86, y + 20);
      image(bar5, 86, y + 120);
      image(bar5, 86, y + 220);
      image(bar8, 86, y + 320);
                 fill(255, 255);
      if (FR == 255) {
      text("AVANCEMENT DE LA DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Ecriture de l'histoire", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
      }
      if (EN == 255) {
      text("BEGIN TO THE DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Story", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
    }
}
    
    if (y >= 2212 && y <= 2262 && x >= 526 && x <= 606) {
    
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
       if (a == 1) {

      image(img5, x, y);
      image(lamule4, 570,2230);

    }
    if (a == 2) {

      image(img6, x, y);
      image(lamule4, 570,2230);

    }
    if (a == 3) {

      image(img7, x, y);
      image(lamule4, 570,2230);

    }
    if (a == 4) {

      image(img8, x, y);
      image(lamule4, 570,2230);

    }

    if (keyIsDown(LEFT_ARROW)) {

      image(img2, x, y);
      image(lamule4, 570,2230);


    }

    if (keyIsDown(RIGHT_ARROW)) {

      image(img3, x, y)
      image(lamule4, 570,2230);


    }

    if (keyIsDown(UP_ARROW)) {

      image(img4, x, y);
      image(lamule4, 570,2230);


    }

    if (keyIsDown(DOWN_ARROW)) {

      image(img1, x, y);
      image(lamule4, 570,2230);


    }
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
          
      tint(255, z);
      image(light1, 410, 1972);
      z += Z;
      if (z > 250) {
      Z = -0.4;
      }
      if (z < 230) {
      Z = +0.3;
      }
      noTint();
      image(img28, 744, y + 12);
      image(img29, 180, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Salut ! Moi c'est La Mule, le chef de projet.", 648, y + 226);
        text("Je suis en charge d'un peu tout ici. ", 648, y + 252);
        text("Nous allons sortir une démo jouable rapidement,", 648, y + 278);
        text("je suis sur qu'elle te plaira beaucoup !", 648, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 648, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 648, y + 252);
        text("Remember that the Pokemon's strengh", 648, y + 278);
        text("depend on his trainer's choices.", 648, y + 304);
      }
      image(bar4, 86, y -180);
      image(bar3, 86, y - 80);
      image(bar4, 86, y + 20);
      image(bar5, 86, y + 120);
      image(bar5, 86, y + 220);
      image(bar8, 86, y + 320);
                 fill(255, 255);
      if (FR == 255) {
      text("AVANCEMENT DE LA DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Ecriture de l'histoire", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
      }
      if (EN == 255) {
      text("BEGIN TO THE DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Story", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
    }
}
    
        if (y >= 2198 && y <= 2238 && x >= 542 && x <= 608) {
      clear();
      noTint();
      background(temple);
      image(temple3, 553, 2098);
      image(shadow, x + 2, y + 34);
      image(dshadow, 670,2140);
      image(ladruse, 670,2140);
      image(mshadow, 570,2230);
       if (a == 1) {
      
      image(img5, x, y);
      image(lamule5, 570,2230);

    }
    if (a == 2) {
      
      image(img6, x, y);
      image(lamule5, 570,2230);

    }
    if (a == 3) {
      
      image(img7, x, y);
      image(lamule5, 570,2230);

    }
    if (a == 4) {
      
      image(img8, x, y);
      image(lamule5, 570,2230);

    }

    if (keyIsDown(LEFT_ARROW)) {
      
      image(img2, x, y);
      image(lamule5, 570,2230);


    }

    if (keyIsDown(RIGHT_ARROW)) {
      
      image(img3, x, y)
      image(lamule5, 570,2230);


    }

    if (keyIsDown(UP_ARROW)) {
      
      image(img4, x, y);
      image(lamule5, 570,2230);


    }

    if (keyIsDown(DOWN_ARROW)) {
      
      image(img1, x, y);
      image(lamule5, 570,2230);


    }
      image(ladruse2, 670,2140);
      image(temple2, 357, 1922);
      tint(FR);
      image(flagFR, 0, y - 316);
      tint(EN);
      image(flagEN, 60, y - 316);
          
      tint(255, z);
      image(light1, 410, 1972);
      z += Z;
      if (z > 250) {
      Z = -0.4;
      }
      if (z < 230) {
      Z = +0.3;
      }
      noTint();
      image(img28, 744, y + 12);
      image(img29, 180, y + 130);

      fill(30, 250);
      if (FR == 255) {
        text("Salut ! Moi c'est La Mule, le chef de projet.", 648, y + 226);
        text("Je suis en charge d'un peu tout ici. ", 648, y + 252);
        text("Nous allons sortir une démo jouable rapidement,", 648, y + 278);
        text("je suis sur qu'elle te plaira beaucoup !", 648, y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 648, y + 226);
        text("promoted as a Samurai, a Ninja or a Monk.", 648, y + 252);
        text("Remember that the Pokemon's strengh", 648, y + 278);
        text("depend on his trainer's choices.", 648, y + 304);
      }
      image(bar4, 86, y -180);
      image(bar3, 86, y - 80);
      image(bar4, 86, y + 20);
      image(bar5, 86, y + 120);
      image(bar5, 86, y + 220);
      image(bar8, 86, y + 320);
                 fill(255, 255);
      if (FR == 255) {
      text("AVANCEMENT DE LA DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Ecriture de l'histoire", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
      }
      if (EN == 255) {
      text("BEGIN TO THE DEMO", 204, y-250);
      text("Mapping", 204, y-200);
      text("Sprite", 204, y-100);
      text("Interface", 204, y);
      text("Story", 204, y+100);
      text("Event making", 204, y+200);
      text("OST", 204, y+300);
    }
}
    
    //---MAP3 TRANSFER--/

    if (y >= 2460) {
      y = 2486;
      x = 704;
      song2.playMode("sustain");
      song2.pause();
      song.loop();
      song.playMode("restart");
      song.play();

      mapping = 1;
    }

    //-------//
  }

  //-------//
}
function mousePressed() {
  if (mapping == 1) {
    if (mouseX >= 0 && mouseX <= 60 && mouseY <= y - 300) {
      FR = 255;
      EN = 150;
    }
    if (mouseX > 60 && mouseX <= 120 && mouseY <= y - 300) {
      FR = 150;
      EN = 255;
    }
  }
  if (mapping == 2) {
    if (mouseX >= 0 && mouseX <= 60 && mouseY <= 436) {
      FR = 255;
      EN = 150;
    }
    if (mouseX > 60 && mouseX <= 120 && mouseY <= 436) {
      FR = 150;
      EN = 255;
    }
  }
  if (mapping == 3) {
    if (mouseX >= 0 && mouseX <= 60 && mouseY <= y - 270) {
      FR = 255;
      EN = 150;
    }
    if (mouseX > 60 && mouseX <= 120 && mouseY <= y - 270) {
      FR = 150;
      EN = 255;
    }
  }
}

