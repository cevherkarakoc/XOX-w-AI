import {X, O, _} from '../constants';
import { move, findWinner } from '../game/logic';

import Tree from './tree';

export const next = (gameState) => {
  if(gameState.gameover) return gameState;

  const t = createTree(gameState,gameState.turn,gameState.turn);
  const maxT = t.getMaxChild();

  const newState = move(gameState,maxT.i,maxT.j);
  return newState;
}

const createTree = (gameState, player, turn) => {
  const root = new Tree();
  const { result, board } = gameState;

  if(gameState.gameover){
    root.score = player * gameState.result;
  } else {
    escape:
    for(let i = 0; i < board.length; i++ ){
      const row = board[i];
      for(let j = 0; j < row.length; j++){
        const cell = row[j];

        if(cell === _){
          const childState = move(gameState, i, j);
          const child = createTree(childState, player, turn*-1);
          child.i = i;
          child.j = j;
          root.addChild(child);
          if(gameState.step === 0) break escape; 
        }
      }
    }
    
    if(turn === player)
      root.score = root.getMaxChild().score;
    else
      root.score = root.getMinChild().score;
  }

  return root;
}