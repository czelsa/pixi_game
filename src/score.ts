import * as PIXI from 'pixi.js';

export default class Score {
  private readonly text: PIXI.Text;
  private score: number = 0;

  constructor(parent: PIXI.Container) {
    this.text = new PIXI.Text(`Score: ${this.score}`, {
      fontFamily: 'Arial',
      fontSize: 36,
      fill: 'white',
    });
    parent.addChild(this.text);
  }

  public increment(): void {
    this.score++;
    this.text.text = `Score: ${this.score}`;
  }

  public getScore(): number {
    return this.score;
  }
}