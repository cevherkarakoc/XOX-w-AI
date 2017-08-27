import {expect} from 'chai';

import GameState from "../../src/game/GameState";

describe('GameState', () => {
  let testGameState;

  beforeEach(() => {
    testGameState = new GameState();
  })

  it('should start with X', () => {
    const default_turn = 1;
    expect(testGameState.turn).to.equal(default_turn);
  })

  it('should start with step zero ', () => {
    const default_step = 0;
    expect(testGameState.step).to.equal(default_step);
  })

  it('should start with "not gameover" ', () => {
    const default_gameover = false;
    expect(testGameState.gameover).to.equal(default_gameover);
  })

  it('should start with empty board ', () => {
    const default_board = [ [0,0,0] , 
                            [0,0,0] ,
                            [0,0,0] ];
    expect(testGameState.board).to.deep.equal(default_board);
  })

  it('should give "X" when turn is 1 ', () => {
    testGameState.turn = 1;
    const turnText = testGameState.getTurnText();
    expect(turnText).to.equal("X");
  })

  it('should give "O" when turn is -1 ', () => {
    testGameState.turn = -1;
    const turnText = testGameState.getTurnText();
    expect(turnText).to.equal("O");
  })

  it('should set Initial Sessions be zero', () => {
    expect(testGameState.session[-1]).to.equal(0);
    expect(testGameState.session[1]).to.equal(0);
    expect(testGameState.session['tie']).to.equal(0);
  })
});