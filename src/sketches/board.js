import {X, O, _} from '../constants';
import { next } from '../ai/ai';
import { move } from '../game/logic';

export const boardSketch = (gameState, p5) => {
  const cellSize = 200;
  
  p5.setup = () => {
    p5.createCanvas(603,603);
    move(gameState,0,1);
  }

  p5.draw = () => {
    p5.background(220);
    drawTable(gameState.board);
  }

  p5.mousePressed = () => {
    if(gameState.gameover || gameState.turn === O || p5.mouseX > p5.width || p5.mouseY > p5.height) return;
    const i = p5.floor(p5.mouseY/cellSize);
    const j = p5.floor(p5.mouseX/cellSize);

    const cur_turn = gameState.turn;
    gameState.set(move(gameState,i,j));
    if(cur_turn === gameState.turn) return;

    setTimeout( () => { gameState.set(next(gameState)); }, 128);
  }

  p5.keyPressed = () => {
    if (p5.keyCode === p5.RIGHT_ARROW) {
      gameState = next(gameState);
    }
  }

  const drawTable = (board) => {
    p5.fill(240);
    p5.strokeWeight(5);
    p5.stroke(51);    
    p5.textSize(cellSize);
    p5.textAlign(p5.CENTER);

    for( let i = 0; i < board.length; i++ ){
      const row = board[i];
      for( let j = 0; j < row.length; j++ ){
        const cell = row[j];
        p5.push()
        p5.translate(j*cellSize, i*cellSize);
        p5.rect(0,0,cellSize,cellSize);
        p5.fill(51);
        if (cell === X){
          p5.fill(250,50,50);
          p5.text("X", 100, 175);   
        }         
        else if (cell === O){
          p5.fill(50,50,250);
          p5.text("O", 100, 175);
        }                    
        p5.pop()

      }
    }
  }
}