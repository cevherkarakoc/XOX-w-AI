import { X, O } from '../constants';
import { next } from '../ai/ai';

export const infoSketch = gameState => p5 => {
  const containerClassName = 'info-container';
  let container, turnSpan, winXSpan, winOSpan, tieSpan;

  p5.setup = () => {
    p5.noCanvas();
    container = p5.createDiv();
    container.id(containerClassName);
    turnSpan = createInfoRow('Turn');
    winXSpan = createInfoRow('Win X');
    winOSpan = createInfoRow('Win O');
    tieSpan = createInfoRow('Tie');

    const button = p5.createButton('Restart');
    button.parent(containerClassName);
    button.mousePressed(() => {
      gameState.reset();
      if (gameState.turn === O) setTimeout(() => { gameState.set(next(gameState)); }, 100);
    })
  }

  p5.draw = () => {
    turnSpan.html(gameState.getTurnText())
    winXSpan.html(gameState.session[X])
    winOSpan.html(gameState.session[O])
    tieSpan.html(gameState.session['tie'])
  }

  const createInfoRow = (text) => {
    p5.createSpan(text).parent(containerClassName);
    p5.createSpan(':').parent(containerClassName);
    const span = p5.createSpan().parent(containerClassName)
    span.parent(containerClassName);

    return span;
  }
}