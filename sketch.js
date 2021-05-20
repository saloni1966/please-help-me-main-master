var mfb, triggerwalls, ctrlstation,
  myself, suprisedbull, cowfee, controlIMG, mfbIMG, cowfeeIMG, spawnIMG, riverIMG, roadImg, uphillIMG2, laneIMG, hmIMG, myselfIMG
var ground, prkshbhaiya, prkshbhaiyaIMG, suprisedbullIMGm, edges
var start = 0, play = 1, end = 10;
var gameState = start;
var play2 = 2, play3 = 3, play4 = 4, play5 = 5, play6 = 6, play7 = 7, play8 = 8, play9 = 9
function preload() {
  //load all the images
  controlIMG = loadImage("game img/background imgs/control point.png");
  TitleIMG = loadImage("game img/Title screen.png");
  mfbwalking = loadAnimation("game img/pcs and npcs/mfb animations/pc1.png", "game img/pcs and npcs/mfb animations/pc2.png")
  mfbwalk = loadAnimation("game img/pcs and npcs/mfb animations/pcs and npcs copy 4.png", "game img/pcs and npcs/mfb animations/pcs and npcs copy 5.png")
  spawnIMG = loadImage("game img/background imgs/spawnpoint.png");
  riverIMG = loadImage("game img/background imgs/river side.png");
  roadImg = loadImage("game img/background imgs/road.png");
  uphillIMG = loadImage("game img/background imgs/uphill.png");
  uphillIMG2 = loadImage("game img/background imgs/uphill control point.png");
  laneImg = loadImage("game img/background imgs/knsmrdni mrg.png");
  hmIMG = loadImage("game img/background imgs/hmm.png");
  mrkt = loadImage("game img/background imgs/randm mrkt i fnd n  da intrnt.png");

  cowfeeIMG = loadImage("game img/pcs and npcs/cowfee.png");
  myselfIMG = loadImage("game img/pcs and npcs/meself.png");
  prkshbhaiyaIMG = loadImage("game img/pcs and npcs/prkshbhaiya.png")
  suprisedbullIMG = loadImage("game img/pcs and npcs/sprsdbl.png")
  mfbIMG = loadAnimation("game img/pcs and npcs/mfb.png")
  mfbIMGr = loadAnimation("game img/pcs and npcs/mfb animations/pcs and npcs copy 4.png","game img/pcs and npcs/mfb animations/pcs and npcs copy 5.png");
}

function setup() {
  //canvas
  createCanvas(displayWidth, displayHeight);
  mfb = createSprite(1000, 200);
  mfb.addAnimation("mfbIMG", mfbIMG);
  mfb.addAnimation("mfbwalking", mfbwalking);
  mfb.addAnimation("mfbwalki", mfbwalk);
  mfb.addAnimation("mfbIMGr",mfbIMGr);
  mfb.scale = 3
  cowfee = createSprite(200, 200);
  cowfee.addImage("cowfeeIMG", cowfeeIMG)
  myself = createSprite(200, 200);
  myself.addImage("myselfIMG", myselfIMG)
  prkshbhaiya = createSprite(200, 200);
  prkshbhaiya.addImage("prkshbhaiyaIMG", prkshbhaiyaIMG)
  suprisedbull = createSprite(200, 200);
  suprisedbull.addImage("suprisedbullIMG", suprisedbullIMG)

}

function draw() {
 // console.log("x " + mfb.x);
  console.log("x " + mfb.x);
  edges = createEdgeSprites();


  if (gameState === start) {
    background(TitleIMG);

    mfb.destroy();
    cowfee.destroy()
    prkshbhaiya.destroy()
    suprisedbull.destroy()
    myself.destroy()

    var startButton = createButton("START ADVENTURE");
    startButton.position(width / 2, height / 2);



    startButton.mousePressed(() => {

      removeElements();
      frameCount = 0;
      setup();

      gameState = play;

    });

  }


  if (gameState === play) {
    //play the cutscene


    //all the sprites load

    background(spawnIMG);
    cowfee.destroy()
    prkshbhaiya.destroy()
    suprisedbull.destroy()
    myself.destroy()
    mfb.collide(edges[0])
    mfb.collide(edges[1])
    mfb.collide(edges[2])

    if (mfb.y > 1005 && gameState === play) {

      gameState = play2
      mfb.y = 786.00000000000003;
      mfb.x = 1182.5;
      background(riverIMG)

    }
    controlmfb()


  } if (gameState === play2) {
    background(riverIMG);
    controlmfb();
    var invisrailing
    invisrailing = createSprite(displayWidth / 2, displayHeight / 2 + 130, displayWidth, 40);
    mfb.collide(invisrailing)
    invisrailing.visible = false;

    mfb.collide(edges[3])

    if (mfb.x < -327.5 && gameState === play2) {
      gameState = play3
      mfb.y = 786.00000000000003;
      mfb.x = 752.5;
      background(riverIMG)

    } else if (mfb.y > 1682.5 && gameState === play2) {
      gameState = play4
      mfb.y = 786.00000000000003;
      mfb.x = 752.5;
      background(uphillIMG)

    }


  }
  if (gameState === play3) {
    background(laneImg);
    mfb.collide(edges[0])
    mfb.collide(edges[1])
    mfb.collide(edges[2])
    controlmfb();


  } if (gameState === play4) {
    background(uphillIMG);
    controlmfb();
    if (keyDown("up") || keyDown("w")) {
      mfb.changeAnimation("mfbwalking", mfbwalking);
      mfb.y = mfb.y - 20;
      mfb.scale = mfb.scale - 0.1;
    

    }
    if (keyWentUp("up") || keyWentUp("w")) {
      mfb.changeAnimation("mfbIMG", mfbIMG);
      mfb.y = mfb.y - 20;
      mfb.scale = mfb.scale - 0.1;
    }
    if (keyDown("down") || keyDown("s")) {
      mfb.changeAnimation("mfbwalk", mfbwalking);
      mfb.y = mfb.y + 20;
      mfb.scale = mfb.scale + 0.1;

    }
    if (keyWentUp("down") || keyWentUp("s")) {
      mfb.changeAnimation("mfbIMG", mfbIMG);
      mfb.y = mfb.y + 20;
      mfb.scale = mfb.scale + 0.1;
    }

    if (mfb.y < 0 && gameState === play4) {

      gameState = play6;
      mfb.y = 786.00000000000003;
      mfb.x = 752.5;
      background(roadImg);

      mfb.collide(edges[1])
      mfb.collide(edges[2])

    }


  }
  if (gameState === play6) {
    background(roadImg);
    controlmfb();
    mfb.scale = 3.5;
//change 
    if (mfb.x > 1565.5 && gameState === play6) {
      background(controlIMG);
      gameState = play8
      mfb.y = 606.00000000000003;
      mfb.x = 402.5;
     mfb.scale = 3.5;
     
    } 

  }

  if (gameState === play8) {
    background(controlIMG);
   
      controlmfb()
    //play cutsene 23
  }
  /*if (gameState === play5) {
    background(uphillIMG2);
    controlmfb();
  }if (gameState === play7) {
    background(mrkt);
    controlmfb();
  }if (gameState === play9) {
    background(hmIMG);
    controlmfb();
  }*/

  drawSprites();


}

function controlmfb() {
  //walking of mfb
  if (keyDown("left") || keyDown("a")) {

    mfb.changeAnimation("mfbwalking", mfbwalking);
    mfb.x = mfb.x - 20;

  }
  if (keyWentUp("left") || keyWentUp("a")) {
    mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.x = mfb.x - 20;
  }

  if (keyDown("up") || keyDown("w")) {
    mfb.changeAnimation("mfbwalking", mfbwalking);
    mfb.y = mfb.y - 20;


  }
  if (keyWentUp("up") || keyWentUp("w")) {
    mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.y = mfb.y - 20;
  }

  if (keyDown("down") || keyDown("s")) {
    mfb.changeAnimation("mfbwalking", mfbwalking);
    mfb.y = mfb.y + 20;

  }
  if (keyWentUp("down") || keyWentUp("s")) {
    mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.y = mfb.y + 20;
  }
  if (keyDown("right") || keyDown("d")) {
    
    mfb.changeAnimation("mfbwalki", mfbwalk);
   
    mfb.x = mfb.x + 20;

  }
  if (keyWentUp("right") || keyWentUp("d")) {
    mfb.rotate = 40;
    //mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.changeAnimation("mfbIMGr",   mfbIMGr);
    mfb.x = mfb.x - 5;
  }
}