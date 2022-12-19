import SpaceInvaders from './SpaceInvaders.js';
import { GameLoop } from './GameLoop.js';

const game = new SpaceInvaders(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
