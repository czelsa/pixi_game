import * as PIXI from 'pixi.js';

export default class Health {
  private readonly text: PIXI.Text;
  private health: number = 10;

  constructor(parent: PIXI.Container) {
    this.text = new PIXI.Text(`Health: ${this.health}`, {
      fontFamily: 'Arial',
      fontSize: 36,
      fill: 'white',
    });
    this.text.x = 150;
    parent.addChild(this.text);
  }

  public decrease(): void {
    this.health--;
    this.text.text = `Health: ${this.health}`;
  }

  public getHealth(): number {
    return this.health;
  }
}