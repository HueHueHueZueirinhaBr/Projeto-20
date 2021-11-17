var bgImg;
var tom, tomImg1,tomImg2,tomImg3;
var cat,catImg1,catImg2,catImg3;

function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/mouse1.png");
    tomImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    tomImg3 = loadAnimation("images/mouse4.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
   
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado",catImg1);
    cat.scale = 0.2;

    tom = createSprite(200,600);
    tom.addAnimation("ratoProvocando",tomImg1);
    tom.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x - tom.x < (cat.width - tom.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("ultimaImagemGato",catImg3);
    cat.changeAnimation("ultimaImagemGato");
    cat.x = 300;
    cat.scale = 0.2;
    tom.addAnimation("ratoFinal",tomImg3);
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("gatoCorrendo",catImg2);
cat.changeAnimation("gatoCorrendo");
tom.addAnimation("ratoProvocando",tomImg2);
tom.changeAnimation("ratoProvocando");
tom.frameDelay = 25;


}

}
