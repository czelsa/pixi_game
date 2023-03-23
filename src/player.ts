import * as PIXI from 'pixi.js';

import knight0 from '../assets/player/knight iso char_idle_0.png';
import knight1 from '../assets/player/knight iso char_idle_1.png';
import knight2 from '../assets/player/knight iso char_idle_2.png';
import knight3 from '../assets/player/knight iso char_idle_3.png';

import knightRunLeft0 from '../assets/player/knight iso char_run left_0.png';
import knightRunLeft1 from '../assets/player/knight iso char_run left_1.png';
import knightRunLeft2 from '../assets/player/knight iso char_run left_2.png';
import knightRunLeft3 from '../assets/player/knight iso char_run left_3.png';
import knightRunLeft4 from '../assets/player/knight iso char_run left_4.png';
import knightRunLeft5 from '../assets/player/knight iso char_run left_5.png';

import knightRunRight0 from '../assets/player/knight iso char_run right_0.png';
import knightRunRight1 from '../assets/player/knight iso char_run right_1.png';
import knightRunRight2 from '../assets/player/knight iso char_run right_2.png';
import knightRunRight3 from '../assets/player/knight iso char_run right_3.png';
import knightRunRight4 from '../assets/player/knight iso char_run right_4.png';
import knightRunRight5 from '../assets/player/knight iso char_run right_5.png';

export default class Player {
  private readonly app: PIXI.Application;
  private readonly playerTextures: PIXI.Texture[];
  private readonly textures: { [key: string]: PIXI.Texture[] } = {};
  private readonly sprite: PIXI.AnimatedSprite;
  private readonly moveSpeed = 5;

  private movingLeft = false;
  private movingRight = false;

  private readonly screenWidth = document.documentElement.clientWidth;
  private readonly screenHeight = document.documentElement.clientHeight;


  public getBounds(): PIXI.Rectangle {
    return this.sprite.getBounds();
  }
  
  constructor(app: PIXI.Application) {
    this.app = app;

    this.textures.runRight = [
      PIXI.Texture.from(knightRunRight0),
      PIXI.Texture.from(knightRunRight1),
      PIXI.Texture.from(knightRunRight2),
      PIXI.Texture.from(knightRunRight3),
      PIXI.Texture.from(knightRunRight4),
      PIXI.Texture.from(knightRunRight5),
    ];

    this.textures.runLeft = [
      PIXI.Texture.from(knightRunLeft0),
      PIXI.Texture.from(knightRunLeft1),
      PIXI.Texture.from(knightRunLeft2),
      PIXI.Texture.from(knightRunLeft3),
      PIXI.Texture.from(knightRunLeft4),
      PIXI.Texture.from(knightRunLeft5),
    ];

    this.sprite = new PIXI.AnimatedSprite([PIXI.Texture.from(knight0)]);
    this.sprite.anchor.set(0.5, 1);
    this.sprite.position.set(this.screenWidth / 2, this.screenHeight);
    this.sprite.animationSpeed = 0.1;
    this.app.stage.addChild(this.sprite);

    app.ticker.add(delta => this.update(delta));
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  private update(delta: number) {
    if (this.movingLeft) {
      if (this.sprite.x - this.sprite.width / 2 > 0) {
        this.sprite.x -= this.moveSpeed;
        if (this.sprite.textures !== this.textures.runLeft) {
          this.sprite.textures = this.textures.runLeft;
          this.sprite.play();
        }
      } else {
        this.stopMoving();
      }
    }
    if (this.movingRight) {
      if (this.sprite.x + this.sprite.width / 2 < this.screenWidth) {
        this.sprite.x += this.moveSpeed;
        if (this.sprite.textures !== this.textures.runRight) {
          this.sprite.textures = this.textures.runRight;
          this.sprite.play();
        }
      } else {
        this.stopMoving();
      }
    }
    if (!this.movingLeft && !this.movingRight) {
      this.stopMoving();
    }
  }

  stopMoving() {
    this.movingLeft = false;
    this.movingRight = false;
    this.sprite.stop();
    this.sprite.textures = [PIXI.Texture.from(knight0)];
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.movingLeft = true;
    } else if (event.key === 'ArrowRight') {
      this.movingRight = true;
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' && this.movingLeft) {
      this.movingLeft = false;
      this.stopMoving();
    } else if (event.key === 'ArrowRight' && this.movingRight) {
      this.movingRight = false;
      this.stopMoving();
    }
  }
}
