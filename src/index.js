import P5 from "p5";
import GameState from './game/GameState';
import { boardSketch } from './sketches/board';
import { infoSketch } from './sketches/info';
const gameState = new GameState();

new P5(boardSketch(gameState));
new P5(infoSketch(gameState));
