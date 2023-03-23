import * as PIXI from 'pixi.js';

export default class GameOverScreen {
  private readonly app: PIXI.Application;

  constructor(app: PIXI.Application) {
    this.app = app;
  }

  public show(): void {
    const gameOverText = new PIXI.Text("GAME OVER", {
      fontFamily: "Arial",
      fontSize: 72,
      fill: "white",
    });
    gameOverText.x = this.app.renderer.width / 2;
    gameOverText.y = this.app.renderer.height / 2;
    gameOverText.anchor.set(0.5);

    this.app.stage.addChild(gameOverText);
  }
}
