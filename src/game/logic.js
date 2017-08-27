import {X, O, _} from '../constants';
import GameState from './GameState';

export const move = (gs,i,j) => {
  const gameState = new GameState();
  gameState.set(gs);
  if(gameState.board[i][j] === _){
      gameState.board[i][j] = gameState.turn;
      gameState.turn *= -1;
      gameState.step += 1;

      const result = findWinner(gameState.board,gameState.step);
      if(result != _){
        gameState.overGame(result);
      } 
  }
  return gameState;
}

export const findWinner = (board,step) => {
  const sumAndFind = (thr) => {
    let res = 0;
    for( let i = 0; i < thr.length; i++ ){
        res += thr[i];
    }
    
    if(res === 3)        return X;
    else if (res === -3) return O;
    else return _;
  }

  for( let i = 0; i < board.length; i++ ){
      const row = board[i];
      const res = sumAndFind(row);
      if(res !== _) return res;
  }

  for(let i = 0; i < board.length; i++){
    const col = [ board[0][i] , board[1][i] , board[2][i] ];
    const res = sumAndFind(col);
    if(res !== _) return res;
  }

  {
    const res = sumAndFind([ board[0][0], board[1][1] , board[2][2] ]);
    if(res !== _) return res;
  }
  
  {
    const res = sumAndFind([ board[0][2], board[1][1] , board[2][0] ]);
    if(res !== _) return res;
  }
  if(step === 9 ) return 'tie';
  return _;
}