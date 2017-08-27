import {X, O, _} from '../constants';
import { next } from '../ai/ai';

export const infoSketch = (gameState, p5) => {

  p5.setup = () => {
    p5.createCanvas(150,603);
  }

  p5.draw = () => {
    p5.background(220);
    p5.textAlign(p5.LEFT);
    p5.noStroke();
    p5.fill(20);
    p5.textSize(25);
    p5.translate(20,50);
    p5.text("Turn   : " + gameState.getTurnText() ,0,0);
    p5.text("Win X : " + gameState.session[X] ,0,50);
    p5.text("Win O : " + gameState.session[O] ,0,100);
    p5.text("Tie      : " + gameState.session['tie'] ,0,150);

    p5.fill(50,150,50);
    p5.rect(0,200,100,50);
    p5.fill(255);
    p5.text("restart",15,235);
    
  }

  p5.mousePressed = () => {
    if(!gameState.gameover) return;

    if(p5.mouseX > 20 && p5.mouseX < 120 && p5.mouseY > 250 && p5.mouseY < 300){
      gameState.reset();
      if(gameState.turn === O) setTimeout( () => { gameState.set(next(gameState)); }, 100);     
    }
  }
}