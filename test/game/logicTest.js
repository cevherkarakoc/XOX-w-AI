import {expect} from 'chai';

import GameState from "../../src/game/GameState";
import { findWinner, move } from "../../src/game/logic";

describe('Finding The Winner', () => {
  it('should find horizantal winner - line 1', () => {
    const board = [ [1,1,1] , 
                    [0,0,0] ,
                    [-1,-1,0] ];
    const step = 5;

    const result = findWinner(board,step);
    expect(1).to.equal(result);
  })

  it('should find horizantal winner - line 2', () => {
    const board = [ [1,1,0] , 
                    [-1,-1,-1] ,
                    [1,1,-1] ];
    const step = 8;
    const result = findWinner(board,step);
    expect(-1).to.equal(result);
  })

  it('should find horizantal winner - line 3', () => {
    const board = [ [-1,0,-1] , 
                    [-1,1,0] ,
                    [1,1,1] ];
    const step = 7;
    const result = findWinner(board,step);
    expect(1).to.equal(result);
  })

  it('should find vertical winner - line 1', () => {
    const board = [ [-1,1,0] , 
                    [-1,0,1] ,
                    [-1,0,1] ];
    const step = 6;
    const result = findWinner(board,step);
    expect(-1).to.equal(result);
  })

  it('should find vertical winner - line 2', () => {
    const board = [ [1,1,-1] , 
                    [-1,1,-1] ,
                    [0,1,0] ];
    const step = 7;
    const result = findWinner(board,step);
    expect(1).to.equal(result);
  })

  it('should find vertical winner - line 3', () => {
    const board = [ [-1,1,-1] , 
                    [1,1,-1] ,
                    [1,0,-1] ];
    const step = 8;
    const result = findWinner(board,step);
    expect(-1).to.equal(result);
  })

  it('should find diagonal winner - left', () => {
    const board = [ [1,-1,-1] , 
                    [0,1,-0] ,
                    [0,0,1] ];
    const step = 5;
    const result = findWinner(board,step);
    expect(1).to.equal(result);
  })

  it('should find diagonal winner - right', () => {
    const board = [ [1,1,-1] , 
                    [0,-1,1] ,
                    [-1,0,0] ];
    const step = 6;
    const result = findWinner(board,step);
    expect(-1).to.equal(result);
  })

  it('should tie situation', () => {
    const board = [ [1,1,-1] , 
                    [-1,-1,1] ,
                    [1,-1,1] ];
    const step = 9;
    const result = findWinner(board,step);
    expect('tie').to.equal(result);
  })

})

describe('Moving', () => {
  let gameState;
  
  beforeEach(() => {
    gameState = new GameState();
    gameState.board = [ [1,1,-1] , 
                        [0,-1,0] ,
                        [1,0,0] ];
    gameState.turn = -1;
    gameState.step = 5;
  })

  it('should not move filled tile', () => {
    const board = [ [1,1,0] , 
                    [-1,-1,-1] ,
                    [1,1,-1] ];

    const newState = move(gameState,0,2);
    expect(gameState).to.deep.equal(newState);
  })

  it('should change the turn after move', () => {
    const expectedTurn = 1;
    const newState = move(gameState,1,2);
    expect(newState.turn).to.deep.equal(expectedTurn);
  })

  it('should change the board after move', () => {
    const expectedBoard = [ [1,1,-1] , 
                          [0,-1,-1] ,
                          [1,0,0] ];

    const newState = move(gameState,1,2);
    expect(newState.board).to.deep.equal(expectedBoard);
  })

  it('should set gameover "true" when game over', () => {
    const expectedGameOver = true;

    const newState  = move(gameState,1,2);
    const lastState = move(newState,1,0);

    expect(lastState.gameover).to.equal(expectedGameOver);
  })

  it('should change the session when game over', () => {
    const expectedSession = {
      'round': 1,
      '1'  : 0,
      '-1' : 1,
      'tie'  : 0
    }

    const newState  = move(gameState,1,0);
    const midState  = move(newState,2,2);
    const lastState = move(midState,1,2);

    expect(lastState.session).to.deep.equal(expectedSession);
  })
})
