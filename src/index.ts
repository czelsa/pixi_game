import * as PIXI from 'pixi.js';
import Game from './game';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0xaaaaaa,
});

document.body.appendChild(app.view);

const game = new Game(app);
