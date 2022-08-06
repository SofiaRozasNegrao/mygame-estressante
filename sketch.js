let aviao, aviaoImg
let terra
let boom, boomImg
let asteroide, asteroideImg, ast
let estadoDoJogo=1
let jogo
let grupoAst

function setup() {
  createCanvas(windowWidth,windowHeight);

  asteroideImg= loadImage("ast.png")

  aviao=createSprite(400,windowHeight/2,50,50)
  aviaoImg=loadImage("aviao.png")

  terra=loadImage("terra.png")
}

function draw() {
  background(terra);  

  aviao.addImage(aviaoImg)
  aviao.scale=0.8

  jogo=new Jogo

  asteroide=new Ast

  if(estadoDoJogo===1){
    jogo.jogando(aviao)
    asteroide.cria(ast)
  }

  drawSprites();
}