import {X, O, _} from '../constants';

const players = {
    '1'  : "X",
    '-1' : "O",
    '0'  : " "
};

export default class GameState {
  constructor () {
    this.session = {
      'round': 0,
      '1'  : 0,
      '-1' : 0,
      'tie'  : 0
    }

    this.reset();
  }

  set (gs) {
    this.turn = gs.turn;
    for(let i=0; i<3;i++){
      for(let j=0; j<3;j++){
        this.board[i][j] = gs.board[i][j];
      }
    }
    this.gameover = gs.gameover;
    this.step = gs.step;

    this.session['1'] = gs.session['1'];
    this.session['-1'] = gs.session['-1'];
    this.session['tie'] = gs.session['tie'];
    this.session['round'] = gs.session['round'];
  }

  reset () {
    if( this.session.round % 2 === 0 ) this.turn = 1;
    else this.turn = -1;
    this.board = [ [_,_,_] , 
                   [_,_,_] ,
                   [_,_,_] ];
    
    this.gameover = false;
    this.step = 0;
    this.result = null;
  }

  overGame(result){
    this.gameover = true;
    this.session[result] = this.session[result] + 1; 
    this.session.round = this.session.round + 1;
    
    if(result === 'tie') this.result = 0;
    else this.result = result;
  }

  getTurnText () {
    return players[this.turn];
  }
}
