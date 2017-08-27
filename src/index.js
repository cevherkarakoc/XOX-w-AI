import P5 from "p5";
import GameState from './game/GameState';
import { boardSketch } from './sketches/board';
import { infoSketch  } from './sketches/info';
let gameState = new GameState();

const bs = new P5(boardSketch.bind(this,gameState));
const is = new P5(infoSketch.bind(this,gameState));
