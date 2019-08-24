/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size ,speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed =speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
  }

  this.moveLeft= function(){
    this.left -=this.speed;
  }
  this.moveTop=function(){
    this.top -= this.speed;
  }
  this.moveDown=function(){
    this.top +=this.speed;
  }


}

var hero = new Hero('nobita1.png', 20, 30, 200,5);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top <=20){
    hero.moveRight();
  }else if(hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight-20){
    hero.moveDown();
  }else if((hero.left >= 0 && hero.top >= window.innerHeight-20)){
    hero.moveLeft();
  }else if(hero.left <=0 && hero.top >=20){
    hero.moveTop();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  requestAnimationFrame(start);
}

start();