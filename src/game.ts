import * as PIXI from 'pixi.js';
import Food from './food';
import Player from './player';
import Score from './score';
import Health from './health';
import GameOverScreen from './gameOver';

export default class Game {
  private readonly app: PIXI.Application;
  private readonly food: Food;
  private readonly player: Player;
  private readonly speed: number = 5;

  private gameOver: boolean = false;
  private score: Score;
  private health: Health;
  private gameOverScreen: GameOverScreen;

  constructor(app: PIXI.Application) {
    this.app = app;
    this.food = new Food(app);
    this.player = new Player(app);
    this.score = new Score(app.stage);
    this.health = new Health(app.stage);
    this.gameOverScreen = new GameOverScreen(app);

    this.init();
  }

  private async init(): Promise<void> {
    await this.food.load();

    const foodSprite = new PIXI.Sprite(this.food.getRandomFoodTexture());
    foodSprite.x = Math.random() * this.app.renderer.width;
    foodSprite.y = -foodSprite.height;
    foodSprite.anchor.set(0.5);
    this.app.stage.addChild(foodSprite);

    this.app.ticker.add(() => {
      this.updateGameState(foodSprite);
      if (this.gameOver) {
        this.stopGame();
        this.gameOverScreen.show();
      }
    });
  }

  private updateGameState(foodSprite: PIXI.Sprite): void {
    this.moveFood(foodSprite);
    this.checkFoodCollision(foodSprite);
    this.checkHealth();
  }

  private moveFood(foodSprite: PIXI.Sprite): void {
    foodSprite.y += this.speed;
    if (foodSprite.y > this.app.renderer.height + foodSprite.height) {
      this.resetFood(foodSprite);
      this.decreaseHealth();
    }
  }

  private checkFoodCollision(foodSprite: PIXI.Sprite): void {
    if (foodSprite.getBounds().intersects(this.player.getBounds())) {
      this.score.increment();
      this.resetFood(foodSprite);
    }
  }

  private checkHealth(): void {
    if (this.health.getHealth() <= 0) {
      this.gameOver = true;
    }
  }

  private resetFood(foodSprite: PIXI.Sprite): void {
    foodSprite.x = Math.random() * this.app.renderer.width;
    foodSprite.y = -foodSprite.height;
    foodSprite.texture = this.food.getRandomFoodTexture();
  }

  private decreaseHealth(): void {
    this.health.decrease();
  }

  private stopGame(): void {
    this.app.ticker.stop();
  }
}
